import { i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'

import Header from './components/Header'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const generateStaticParams = async () => {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className='bg-white' dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  )
}
