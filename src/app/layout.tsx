import type {Metadata} from 'next';
import './globals.css';
import Head from 'next/head';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Osho Wisdom Vault',
  description: "Osho's All Life Learnings at One Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth !scroll-smooth">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16526190681"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16526190681');
          `}
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased tracking-wide leading-relaxed">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
