import Head from 'next/head'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Gerald Elias',
  description: 'Hello :)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&family=Roboto+Slab:wght@300;500&family=Rock+Salt&display=swap" rel="stylesheet"/>
      </Head>
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
