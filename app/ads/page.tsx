export const metadata = {
  title: "Анонимная поддержка мужчин — Hold-point",
  description:
    "Если вы переживаете развод или измену — получите анонимную поддержку прямо сейчас.",
};

export default function AdsLandingPage() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "60px auto",
        padding: "32px",
        textAlign: "center",
      }}
    >
      {/* H1 */}
      <h1>Тяжело после развода или измены?</h1>

      {/* SUB */}
      <p style={{ fontSize: 18 }}>
        Вы не обязаны справляться с этим в одиночку.
      </p>

      {/* VALUE */}
      <p>
        Hold-point — анонимный онлайн-сервис поддержки для мужчин в сложный
        период. Без регистрации. Без осуждения.
      </p>

      {/* CTA */}
      <a href="https://holdpoint-pwa.vercel.app">
        <button style={{ margin: "24px 0", fontSize: 18 }}>
          Получить поддержку анонимно
        </button>
      </a>

      {/* TRUST */}
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        Бесплатно · Анонимно · Без регистрации
      </p>

      <hr />

      {/* DISCLAIMER */}
      <p style={{ fontSize: 13, opacity: 0.7 }}>
        Сервис не является медицинской, психологической или юридической помощью.
        В экстренных ситуациях обратитесь в службы помощи.
      </p>
    </main>
  );
}