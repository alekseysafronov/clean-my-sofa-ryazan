import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMessengers from "@/components/FloatingMessengers";

const PolitikaKonfidencialnosti = () => {
  useEffect(() => {
    document.title = "Политика конфиденциальности — Qweeq";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Политика конфиденциальности компании Qweeq. Обработка и защита персональных данных.");
  }, []);

  return (
    <>
      <Header />
      <FloatingMessengers />
      <main className="pt-24 pb-16">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты
                персональных данных пользователей сайта qweeq (далее — «Сайт»), принадлежащего ИП Сафронов Алексей
                Юрьевич (ИНН 623401087194, ОГРН 326620000005879).
              </p>
              <p>
                Используя Сайт и предоставляя свои персональные данные, Пользователь выражает согласие с условиями
                настоящей Политики.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Собираемые данные</h2>
              <p>Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Имя</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Адрес для выезда специалиста</li>
                <li>Иные данные, добровольно предоставленные Пользователем через формы на Сайте</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Цели обработки данных</h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Обработка заявок и заказов</li>
                <li>Связь с Пользователем по вопросам оказания услуг</li>
                <li>Улучшение качества обслуживания</li>
                <li>Исполнение требований законодательства Российской Федерации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Защита данных</h2>
              <p>
                Оператор принимает необходимые организационные и технические меры для защиты персональных данных
                Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования,
                копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Передача данных третьим лицам</h2>
              <p>
                Персональные данные Пользователя не передаются третьим лицам, за исключением случаев, прямо
                предусмотренных законодательством Российской Федерации, а также случаев, когда передача необходима
                для оказания услуги (например, передача данных курьерской службе для выезда на адрес).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Использование файлов cookie</h2>
              <p>
                Сайт может использовать файлы cookie для обеспечения корректной работы, анализа трафика и
                улучшения пользовательского опыта. Пользователь вправе отключить cookie в настройках браузера.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Права Пользователя</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Запросить информацию о хранящихся персональных данных</li>
                <li>Потребовать исправления неточных данных</li>
                <li>Потребовать удаления своих персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
              </ul>
              <p>
                Для реализации указанных прав необходимо направить запрос на электронную почту:{" "}
                <a href="mailto:polka.pisem@gmail.com" className="text-primary hover:underline">
                  polka.pisem@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Изменение Политики</h2>
              <p>
                Оператор оставляет за собой право вносить изменения в настоящую Политику. Актуальная версия
                всегда доступна на данной странице Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Контактная информация</h2>
              <p>
                ИП Сафронов Алексей Юрьевич<br />
                ИНН 623401087194 • ОГРН 326620000005879<br />
                Телефон:{" "}
                <a href="tel:+79160435153" className="text-primary hover:underline">
                  +7 (916) 043-51-53
                </a><br />
                Email:{" "}
                <a href="mailto:polka.pisem@gmail.com" className="text-primary hover:underline">
                  polka.pisem@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitikaKonfidencialnosti;
