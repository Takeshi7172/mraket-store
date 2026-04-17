"use client";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="ru">
      <head>
        <title>Ошибка — SENZA</title>
      </head>
      <body
        style={{
          margin: 0,
          background: "#0A0A0A",
          color: "#F5F5F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <div>
          <p
            style={{
              color: "#C9A96E",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Ошибка
          </p>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: 300 }}>
            Что-то пошло не так
          </h1>
          <button
            onClick={reset}
            style={{
              background: "#C9A96E",
              color: "#0A0A0A",
              border: "none",
              padding: "0.75rem 2rem",
              cursor: "pointer",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginTop: "1rem",
            }}
          >
            Повторить
          </button>
        </div>
      </body>
    </html>
  );
}
