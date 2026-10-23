import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-KW0PZGJKR9"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KW0PZGJKR9');
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </>
  )
}
