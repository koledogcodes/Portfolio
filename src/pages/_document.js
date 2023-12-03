import { Head, Html, Main, NextScript } from 'next/document'
// 🖥️
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon-96.png" />
        <title>Kolade Olorunnife | Software Engineer</title>
      </Head>
      <body className='bg-slate-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
