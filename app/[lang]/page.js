import { getDictionary } from '@/lib/dictionary'

const Home = async ({ params: { lang } }) => {
  const { page } = await getDictionary(lang)

  return (
    <main className='flex flex-col gap-3 py-20 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold'>{page.home.title}</h1>
      <p className='text-gray-600'>{page.home.desc}</p>
    </main>
  )
}

export default Home
