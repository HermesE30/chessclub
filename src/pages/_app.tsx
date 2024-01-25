import '@assets/styles/globals.css';

import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

const googleFont = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={googleFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
