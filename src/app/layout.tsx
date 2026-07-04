import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

// ============================================================
// ВСТАВЬТЕ ВАШИ ID СЧЁТЧИКОВ СЮДА:
// ============================================================
const YANDEX_COUNTER_ID = "110392001";
const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX"; // <-- замените на ID из Google Analytics
// ============================================================

export const metadata: Metadata = {
  title: "3D Лазер Лаборатория — Лазерная резка, гравировка, 3D-печать в Москве",
  description: "Лаборатория лазерных технологий и 3D-печати в Зеленограде. Лазерная резка фанеры, акрила, металла. Гравировка и маркировка. 3D-печать FDM из PLA, PETG, ABS. Моделирование по чертежам и эскизам. Работаем вручную, с гарантией. Телефон: +7 (966) 189-45-59",
  keywords: "лазерная резка, лазерная гравировка, маркировка металла, 3D печать, 3D моделирование, лазер, лаборатория, Москва, Зеленоград, фанера, акрил, металл, PLA, PETG, ABS",
  authors: [{ name: "3D Лазер Лаборатория" }],
  creator: "3D Лазер Лаборатория",
  publisher: "3D Лазер Лаборатория",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://3d-lazer.moscow"),
  alternates: {
    canonical: "https://3d-lazer.moscow",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "3D Лазер Лаборатория — Лазерная резка, гравировка, 3D-печать",
    description: "Лаборатория лазерных технологий и 3D-печати в Зеленограде. Лазерная резка, гравировка, маркировка. 3D-печать FDM. Работаем вручную, с гарантией.",
    url: "https://3d-lazer.moscow",
    siteName: "3D Лазер Лаборатория",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 32,
        height: 32,
        alt: "3D Лазер Лаборатория",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "3D Лазер Лаборатория",
    description: "Лазерная резка, гравировка, 3D-печать в Зеленограде",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "3D Лазер Лаборатория",
  description: "Лаборатория лазерных технологий и 3D-печати. Лазерная резка, гравировка, маркировка. 3D-печать FDM, моделирование.",
  url: "https://3d-lazer.moscow",
  telephone: "+7-966-189-45-59",
  email: "i@mibero.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ПГТ Андреевка, д. 29, стр. 1",
    addressLocality: "Зеленоград",
    addressRegion: "Москва",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.976293,
    longitude: 37.148081,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "70",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги лаборатории",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Лазерная резка",
          description: "Высокоточная резка фанеры, акрила, металла, кожи и других материалов",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Лазерная гравировка",
          description: "Точная гравировка на металле, дереве, коже, стекле и пластике",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Маркировка металла",
          description: "Промышленная маркировка: серийные номера, QR-коды, штрих-коды",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D-печать FDM",
          description: "Печать из PLA, PETG, ABS, нейлона. Корпуса, шестерёнки, фигурки, прототипы",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D-моделирование",
          description: "Смоделируем по чертежу, эскизу или фотографии",
        },
      },
    ],
  },
  sameAs: [
    "https://t.me/LazerLabZel",
    "https://www.avito.ru/brands/a2ad7a610d266ddeb5ccd49e3c76752c",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#111320" />
        <meta name="geo.region" content="RU-MOW" />
        <meta name="geo.placename" content="Зеленоград" />
        <meta name="geo.position" content="55.976293;37.148081" />
        <meta name="ICBM" content="55.976293, 37.148081" />
      </head>
      <body className="min-h-full flex flex-col text-white font-[family-name:var(--font-inter)]">
        {/* === Яндекс.Метрика === */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${YANDEX_COUNTER_ID}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_COUNTER_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* === End Яндекс.Метрика === */}

        {/* === Google Analytics === */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        {/* === End Google Analytics === */}

        {children}
      </body>
    </html>
  );
}
