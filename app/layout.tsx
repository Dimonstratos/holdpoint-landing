import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://landing.hold-point.ru"),
  title: {
    default: "Hold-point — анонимная поддержка мужчин",
    template: "%s — Hold-point",
  },
  description:
    "Анонимная поддержка мужчин в период развода, измены и эмоционального кризиса.",
  alternates: {
    canonical: "https://landing.hold-point.ru",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hold-point",
    url: "https://landing.hold-point.ru",
    description:
      "Анонимная поддержка мужчин в сложный эмоциональный период",
    inLanguage: "ru",
  };

  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hold-point",
    url: "https://landing.hold-point.ru",
    logo: "https://landing.hold-point.ru/favicon.ico",
  };

  return (
    <html lang="ru">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YY4Z85GFVY"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY4Z85GFVY');
          `}
        </Script>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaWebsite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrganization),
          }}
        />

        {children}
      </body>
    </html>
  );
}