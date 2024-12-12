import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head"; // Import Head for adding meta tags

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fudder",
  description: "SEND IT TO FUCKING ZERO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Twitter Widget and Meta Tags */}
        <meta name="twitter:widgets:autoload" content="off" />
        <link rel="canonical" href="/" />
        <link rel="me" href="https://twitter.com/Fudder_AI" />
        <meta name="twitter:widgets:theme" content="dark" />
        <meta name="twitter:widgets:csp" content="on" />
        <meta name="twitter:dnt" content="on" />
        <script src="//www.google-analytics.com/analytics.js"></script>
        <script src="//ton.twimg.com/syndication/publish/733d64687bc10/js/vendor.js"></script>
        <script src="https://platform.twitter.com/widgets.js"></script>
        <script src="//ton.twimg.com/syndication/publish/733d64687bc10/js/publish.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                  t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function(f) {
                  t._e.push(f);
                };

                return t;
              }(document, "script", "twitter-wjs"));
            `,
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
