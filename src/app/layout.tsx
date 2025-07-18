import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Short site description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth !scroll-smooth">
      <Head>
        {/* Meta Pixel Script */} 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1437087947631378');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Meta Pixel Fallback Image for NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1437087947631378&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </Head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
