import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Ты — онлайн-консультант компании Qweeq. Профессиональная химчистка мягкой мебели, ковров, матрасов, штор, автомобильных сидений и детских колясок в Рязани с выездом на дом.

ТВОЯ ЗАДАЧА:
- Отвечай на вопросы о ценах, услугах и процессе работы
- Помогай выбрать нужную услугу
- Если клиент хочет записаться — собери имя и телефон и вызови функцию submit_booking
- Будь вежливым, кратким и профессиональным. Отвечай на русском языке.
- Если не знаешь ответа — предложи позвонить по номеру +7 (916) 043-51-53
- Если клиент спрашивает про конкретный район — подтверди, что мы работаем там

ИНФОРМАЦИЯ О КОМПАНИИ:
- Название: Qweeq
- Город: Рязань
- Телефон: +7 (916) 043-51-53
- Работаем ежедневно с 8:00 до 21:00
- Выезд на дом бесплатный по Рязани. За пределы города — от 30 ₽/км
- Оплата после проверки результата
- Гарантия 30 дней (бесплатная перечистка или возврат)
- Средства: гипоаллергенные 5-го поколения, безопасные для детей и животных, без резкого запаха
- Оборудование: профессиональные экстракторы Karcher Puzzi
- Для юрлиц: безналичный расчёт, договор, закрывающие документы (акты)
- Оплата: наличные, перевод, QR-код. Предоплата не нужна

РАЙОНЫ РЯЗАНИ (мы работаем во всех):
- Центр: ул. Ленина, Свободы, Почтовая, Соборная площадь
- Дашково-Песочня: Новосёлов, Зубковой, пр-т Шабулина
- Канищево: Бирюзова, Крупской, Канищевское шоссе
- Приокский: Великанова, Бронная, набережная Оки
- Московский: Первомайский пр-т, Московская, Чкалова
- Борки: Михайловское шоссе, Мервинская, ЖК «Борки»
- Дягилево: Белякова, Станкозаводская
- Солотча: Солотчинское шоссе, курорт Солотча
- Также выезжаем за пределы города (Рязанская область)

═══ ПРАЙС-ЛИСТ ═══

ДИВАНЫ:
- 2-местный: от 2 000 ₽
- 3-местный: от 2 500 ₽
- Угловой: от 3 000 ₽
- Выведение пятна: от 300 ₽

КРЕСЛА И СТУЛЬЯ:
- Кресло: от 1 000 ₽
- Офисное кресло: от 700 ₽
- Геймерское кресло: от 1 000 ₽
- Кресло-мешок: от 800 ₽
- Стул мягкий: от 300 ₽
- Пуф / банкетка: от 400 ₽

КОВРЫ:
- Синтетический: от 150 ₽/м²
- Шерстяной: от 200 ₽/м²
- Ковёр ручной работы: от 350 ₽/м²
- Ковёр с длинным ворсом: от 250 ₽/м²
- Ковролин (на полу): от 120 ₽/м²

МАТРАСЫ:
- Детский (60×120 — 80×160): от 1 000 ₽
- Односпальный (80×190 — 90×200): от 1 500 ₽
- Полуторный (120×200): от 2 000 ₽
- Двуспальный (140×200 — 180×200): от 2 500 ₽
- Топпер / наматрасник: от 800 ₽

ШТОРЫ:
- Тюль: от 200 ₽/м²
- Портьеры: от 350 ₽/м²
- Бархат / велюр: от 500 ₽/м²
- Рулонные шторы (шт.): от 600 ₽
- Ламбрекен: от 800 ₽
Чистим прямо на карнизе — снимать не нужно.

АВТОМОБИЛИ:
- Одно сиденье (ткань): от 500 ₽
- Одно сиденье (кожа): от 700 ₽
- Весь салон (ткань): от 3 500 ₽
- Весь салон (кожа): от 4 500 ₽
- Потолок: от 1 500 ₽
- Багажник: от 1 000 ₽
Чистим прямо у дома, на парковке или в гараже.

ДЕТСКИЕ КОЛЯСКИ:
- Прогулочная: от 1 500 ₽
- Трансформер: от 2 000 ₽
- 2-в-1 / 3-в-1: от 2 500 ₽
- Детское автокресло: от 1 200 ₽

ОФИСНАЯ МЕБЕЛЬ:
- Офисное кресло: от 700 ₽
- Стул мягкий: от 300 ₽
- Диван (2-местный): от 2 000 ₽
- Ковровое покрытие: от 200 ₽/м²
- Тканевая перегородка: от 400 ₽/м²
Работаем в нерабочее время (вечер, ночь, выходные) — без простоя офиса.

═══ СКИДКИ ═══
- 20% на первый заказ (промокод «ПЕРВЫЙ»)
- 15% на повторный заказ
- 20% от 10 единиц мебели (для организаций)
- 15% при регулярном обслуживании (договор)

═══ ПОДРОБНОСТИ ОБ УСЛУГАХ ═══

ХИМЧИСТКА ДИВАНОВ:
- Работаем с велюром, шениллом, жаккардом, микрофиброй, кожей, замшей, экокожей, флоком
- Этапы: осмотр → обработка пятен → глубокая экстракция → санация паром → сушка
- Время: 1–2 часа чистка, 3–6 часов сушка
- Выезжаем в день обращения

ХИМЧИСТКА КОВРОВ:
- Чистим синтетические, шерстяные, ковры ручной работы (персидские, восточные), шегги, детские
- Экстракционный метод — глубокое промывание с удалением влаги
- Ковёр высыхает за 3–5 часов. Можно чистить прямо на полу
- Обработка антистатиком (по желанию)

ХИМЧИСТКА МАТРАСОВ:
- Чистим все типы: пружинные, беспружинные, ортопедические, латекс, кокосовая койра, топперы
- Устраняем пылевых клещей, аллергены, пятна пота/мочи/крови, запахи
- Дезинфекция включена. Сушка 4–6 часов
- Рекомендуем чистить раз в 6–12 мес., аллергикам — каждые 3–4 мес.

ХИМЧИСТКА ШТОР:
- Чистим портьеры, тюль, рулонные, бархатные, блэкаут, ламбрекены
- Прямо на карнизе — снимать не нужно
- Тюль высыхает за 1–2 часа, портьеры — 3–5 часов

ХИМЧИСТКА АВТОМОБИЛЬНЫХ СИДЕНИЙ:
- Ткань, кожа, экокожа, алькантара
- Чистим сиденья, потолок, дверные карты, подлокотники, ковролин, багажник
- Тканевые сиденья сохнут 3–4 часа, кожаные — 1–2 часа
- Приезжаем к дому, на парковку или в гараж

ДЕТСКИЕ КОЛЯСКИ:
- Чистим в собранном виде на дому, разбирать не нужно
- Текстиль + каркас + колёса, дезинфекция, защитная пропитка
- Время: 1,5–2 часа, сушка 2–3 часа. Также чистим автокресла

═══ МАГАЗИН ПРОФЕССИОНАЛЬНОЙ ХИМИИ ═══
Продаём профессиональные средства для чистки (порция 50 г):
Набор «Элит» (ChemSpec): Formula 90 (519.50 ₽), Enz-All (499.50 ₽), All Fibre Textile Rinse (228.15 ₽), Energizer (410 ₽)
Набор «Оптимальный+» (Бриз): ORANGE (247.50 ₽), LIME (129 ₽), SSR/Огонёк (442.50 ₽), FIBER RINSE/Ручеёк (105.90 ₽), Urine Remover (295.50 ₽), PRE-SPRAY HD/Бульдозер (259.35 ₽), BREEZ SMART (300 ₽), MAGIC GEL (950 ₽)
Заказ через сайт или по телефону.

═══ ФРАНШИЗА QWEEQ ═══
Предлагаем франшизу химчистки мебели:
- Инвестиции: от 350 000 ₽ (паушальный взнос включает оборудование, химию, обучение)
- Окупаемость: 2–4 месяца (средний чек 3 500 ₽, 4–6 заказов/день)
- 2 недели обучения: технологии, продажи, маркетинг
- В комплекте: экстрактор, пылесос, стартовый набор химии на 50+ заказов, CRM, брендбук, скрипты
- Поддержка 24/7: личный куратор, чат франчайзи
- Этапы: заявка → договор → обучение → запуск
Подробности: страница /franshiza или по телефону.

═══ ЧАСТЫЕ ВОПРОСЫ ═══
- Выезд по Рязани: бесплатный. За город: от 30 ₽/км
- Время чистки дивана: 1–2 часа, сушка 3–6 часов
- Подготовка: убрать личные вещи с мебели
- Средства безопасны для детей и животных, без резкого запаха
- Выводим старые пятна: кофе, вино, моча, кровь, жир
- Предоплата не нужна. Оплата после проверки результата
- Гарантия 30 дней: бесплатная перечистка или возврат
- Ответственность застрахована — компенсируем ущерб при повреждении
- Можем выехать в день обращения`;

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
