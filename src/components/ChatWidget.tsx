import { useState, useRef, useEffect, useCallback } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const WELCOME = "Здравствуйте! 👋 Я — онлайн-консультант Qweeq. Помогу с выбором услуги, расскажу о ценах и запишу на химчистку. Чем могу помочь?";

const QUICK_QUESTIONS = [
  "Сколько стоит чистка дивана?",
  "Какие скидки есть?",
  "Записаться на химчистку",
];

async function streamChat({
  messages,
  onDelta,
  onDone,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error || "Ошибка сервера");
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: readerDone, value } = await reader.read();
    if (readerDone) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }

  // flush
  if (buf.trim()) {
    for (let raw of buf.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const json = raw.slice(6).trim();
      if (json === "[DONE]") continue;
      try {
        const p = JSON.parse(json);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {}
    }
  }

  onDone();
}

const ChatWidget = ({ onOpenChange }: { onOpenChange?: (open: boolean) => void }) => {
  const [open, setOpenState] = useState(false);
  const setOpen = (v: boolean) => {
    setOpenState(v);
    onOpenChange?.(v);
  };
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);
  const [viewportTop, setViewportTop] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track visual viewport to handle mobile keyboard
  useEffect(() => {
    const vv = window.visualViewport;
    const onResize = () => {
      setViewportHeight(vv?.height ?? window.innerHeight);
      setViewportTop(vv?.offsetTop ?? 0);
    };

    onResize();

    vv?.addEventListener("resize", onResize);
    vv?.addEventListener("scroll", onResize);
    window.addEventListener("resize", onResize);

    return () => {
      vv?.removeEventListener("resize", onResize);
      vv?.removeEventListener("scroll", onResize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Prevent page scroll under fullscreen mobile chat
  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 639px)").matches) return;

    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;
    const scrollY = window.scrollY;

    const prevBodyOverflow = bodyStyle.overflow;
    const prevBodyPosition = bodyStyle.position;
    const prevBodyTop = bodyStyle.top;
    const prevBodyLeft = bodyStyle.left;
    const prevBodyRight = bodyStyle.right;
    const prevBodyWidth = bodyStyle.width;
    const prevHtmlOverflow = htmlStyle.overflow;

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = prevBodyOverflow;
      bodyStyle.position = prevBodyPosition;
      bodyStyle.top = prevBodyTop;
      bodyStyle.left = prevBodyLeft;
      bodyStyle.right = prevBodyRight;
      bodyStyle.width = prevBodyWidth;
      htmlStyle.overflow = prevHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    let soFar = "";
    const upsert = (chunk: string) => {
      soFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: soFar } : m
          );
        }
        return [...prev, { role: "assistant", content: soFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: upsert,
        onDone: () => setLoading(false),
      });
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Извините, произошла ошибка. Попробуйте ещё раз или позвоните нам: +7 (916) 043-51-53",
        },
      ]);
      setLoading(false);
    }
  }, [messages, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const showQuickQuestions = messages.length <= 1 && !loading;

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-50 bg-card flex flex-col overflow-hidden animate-fade-in sm:inset-auto sm:bottom-[104px] sm:right-6 sm:w-96 sm:max-h-[60vh] sm:border sm:border-border sm:rounded-2xl sm:shadow-2xl"
          style={{
            height: window.innerWidth < 640 ? `${viewportHeight}px` : undefined,
          }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold text-sm">Консультант Qweeq</p>
              <p className="text-xs text-primary-foreground/70">Онлайн • Отвечаю мгновенно</p>
            </div>
            <button onClick={() => setOpen(false)} className="hover:bg-primary-foreground/10 rounded-full p-1 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0 sm:max-h-[calc(60vh-130px)]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none [&_p]:m-0 [&_ul]:my-1 [&_li]:my-0 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:font-medium">
                      <ReactMarkdown
                        components={{
                          a: ({ href, children, ...props }) => (
                            <a
                              href={href}
                              target={href?.startsWith("http") ? "_blank" : "_self"}
                              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                              {...props}
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Quick questions */}
          {showQuickQuestions && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors font-medium"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-3 py-2 border-t border-border flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишите сообщение..."
              className="flex-1 bg-secondary rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating button — positioned above messenger buttons, hidden when chat is open */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-[104px] right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-all bg-accent text-accent-foreground"
          aria-label="Чат с консультантом"
        >
          <Bot className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ChatWidget;
