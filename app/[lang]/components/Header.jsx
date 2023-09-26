import Link from 'next/link'

import { getDictionary } from '@/lib/dictionary'
import ToggleLang from './ToggleLang'

const Header = async ({ lang }) => {
  const { nav } = await getDictionary(lang)
  return (
    <header className='flex items-center max-w-4xl mx-auto p-4 justify-between'>
      <h1 className=''>LOGO</h1>
      <nav className='flex items-center gap-8'>
        <Link href={`/${lang}`}>{nav.home}</Link>
        <Link href={`/${lang}/about`}>{nav.about}</Link>
      </nav>
      <ToggleLang />
    </header>
  )
}

export default Header
