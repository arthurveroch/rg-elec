import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'

export const dynamic = 'force-dynamic'

const getPage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })

    return await payload.findGlobal({ slug: 'home-page', depth: 2 })
  },
  ['home'],
  { revalidate: 604800 },
)

export default async function HomePage() {
  const data = await getPage()

  console.log(data)

  return (
    <main>
      <Hero heroData={data.Hero} />
      <Services servicesData={data.services} />
    </main>
  )
}
