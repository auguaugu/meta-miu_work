import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Meta Miu",
  description: "One & Only Idol project",
  openGraph: {
    title: "Meta Miu",
    description: "One & Only Idol project",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={'Meta Miu'} />
        <meta property="og:description" content={'One & Only Idol project'} />
        <title>Meta Miu</title>
      </Head> */}
      <body
        style={{
          fontFamily: "Hellix, Inter, sans-serif",
        }}
      >
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N8YZ3YEB77"
        strategy="afterInteractive"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-N8YZ3YEB77');`,
        }}
      ></Script>
    </html>
  );
}
// GA tag

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8YZ3YEB77"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-N8YZ3YEB77');
// </script>
