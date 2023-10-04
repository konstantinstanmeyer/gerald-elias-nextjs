import Head from 'next/head'
import Navbar from './components/Navbar'
import './globals.css'
import { Rock_Salt, Outfit, Roboto_Slab } from 'next/font/google'

export const metadata = {
  title: 'Gerald Elias',
  description: 'Hello :)',
}

const rock_salt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rock-salt'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
})

const roboto_slab = Roboto_Slab({
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--font-roboto-slab'
})


export default function RootLayout({ children }) {
  return (
    <html className={`${rock_salt.variable} ${outfit.variable} ${roboto_slab.variable}`} lang="en">
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
