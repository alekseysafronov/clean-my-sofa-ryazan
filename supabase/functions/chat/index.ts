import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Ты — онлайн-консультант компании Qweeq. Химчистка мягкой мебели и ковров в Рязани с выездом на дом.

ТВОЯ ЗАДАЧА:
- Отвечай на вопросы о ценах, услугах и процессе работы
- Помогай выбрать нужную услугу
- Если клиент хочет записаться — собери имя и телефон и вызови функцию submit_booking
- Будь вежливым, кратким и профессиональным. Отвечай на русском языке.
- Если не знаешь ответа — предложи позвонить по номеру +7 (916) 043-51-53

ПРАЙС-ЛИСТ:
Диваны:
- 2-местный диван: от 2 000 ₽
- 3-местный диван: от 2 500 ₽  
- Угловой диван: от 3 500 ₽
- Выведение пятна: от 300 ₽

Кресла и стулья:
- Кресло: от 1 000 ₽
- Офисное кресло: от 800 ₽
- Стул мягкий: от 400 ₽
- Пуф / банкетка: от 500 ₽

Ковры:
- до 5 м²: от 1 500 ₽
- 5–10 м²: от 2 500 ₽
- свыше 10 м²: от 250 ₽/м²
- Ковролин: от 200 ₽/м²

Автомобили:
- Салон (ткань): от 3 000 ₽
- Салон (кожа): от 4 000 ₽
- Потолок: от 1 500 ₽
- Багажник: от 1 000 ₽

Матрасы:
- Детский: от 1 000 ₽
- Односпальный: от 1 500 ₽
- Двуспальный: от 2 500 ₽

Шторы: от 200 ₽/м²
Детская коляска: от 1 500 ₽

СКИДКИ:
- 20% на первый заказ (промокод «ПЕРВЫЙ»)
- 15% на повторный заказ
- 20% от 10 единиц мебели (для организаций)
- 10% от 20 единиц (для организаций)

ИНФОРМАЦИЯ О КОМПАНИИ:
- Название: Qweeq
- Город: Рязань
- Телефон: +7 (916) 043-51-53
- Работаем ежедневно с 8:00 до 21:00
- Выезд на дом бесплатный
- Оплата после проверки результата
- Гарантия 30 дней
- Средства: гипоаллергенные, безопасные для детей и животных
- Оборудование: профессиональные экстракторы Karcher
- Для юрлиц: работаем по безналичному расчёту, закрывающие документы

ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:
- Время чистки дивана: 1–2 часа, сушка 3–6 часов
- Подготовка: убрать личные вещи с мебели
- Работаем с кожей, экокожей, замшей, велюром, флоком, жаккардом
- Средства безопасны для детей и животных, без резкого запаха
- Выводим старые пятна: кофе, вино, моча, кровь, жир
- Оплата: наличные, перевод, QR-код
- Предоплата не нужна
- Гарантия: бесплатная перечистка или возврат денег`;

const TOOLS = [
  {
    type: "function",
    function: {
      name: "submit_booking",
      description:
        "Отправить заявку на запись клиента. Вызывай когда клиент предоставил имя и телефон для записи на химчистку.",
      parameters: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Имя клиента",
          },
          phone: {
            type: "string",
            description: "Номер телефона клиента",
          },
          service: {
            type: "string",
            description: "Какую услугу хочет клиент (если указал)",
          },
        },
        required: ["name", "phone"],
        additionalProperties: false,
      },
    },
  },
];

async function sendTelegram(name: string, phone: string, service?: string) {
  const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID)
    throw new Error("Telegram not configured");

  const text = `🤖 Заявка из чат-бота!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}${service ? `\n🧹 Услуга: ${service}` : ""}`;

  const resp = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    }
  );
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Telegram error: ${err}`);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // First call — may return tool_calls
    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          tools: TOOLS,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(
          JSON.stringify({ error: "Слишком много запросов, попробуйте позже." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (status === 402) {
        return new Response(
          JSON.stringify({ error: "Сервис временно недоступен." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const choice = data.choices?.[0];

    // Handle tool calls
    if (choice?.message?.tool_calls?.length) {
      const toolCall = choice.message.tool_calls[0];
      if (toolCall.function.name === "submit_booking") {
        const args = JSON.parse(toolCall.function.arguments);
        try {
          await sendTelegram(args.name, args.phone, args.service);
        } catch (e) {
          console.error("Telegram send failed:", e);
        }

        // Get final response with tool result
        const followUp = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
                choice.message,
                {
                  role: "tool",
                  tool_call_id: toolCall.id,
                  content: JSON.stringify({ success: true, message: "Заявка отправлена менеджеру" }),
                },
              ],
              stream: true,
            }),
          }
        );

        if (!followUp.ok) {
          const t = await followUp.text();
          console.error("Follow-up error:", t);
          throw new Error("Follow-up AI error");
        }

        return new Response(followUp.body, {
          headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
        });
      }
    }

    // No tool calls — stream response
    const streamResponse = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: true,
        }),
      }
    );

    if (!streamResponse.ok) {
      const t = await streamResponse.text();
      console.error("Stream error:", t);
      throw new Error("Stream AI error");
    }

    return new Response(streamResponse.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
