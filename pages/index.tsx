import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'

import profile from '../public/profile.svg'
// import arrow from '../public/arrow.svg'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="py-12 px-8 md:px-0 flex justify-center md:items-center md:justify-between">
        <div className="md:w-7/12 text-center md:text-left">
          <h3 className="text-4xl mb-4 font-bold">
            Hi, I'm <span className="text-blue-200">infamous55!</span>
          </h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            lorem eget egestas odio adipiscing ante mauris eget. Eu tincidunt
            cursus fringilla ac.
          </p>
        </div>
        <div className="hidden	md:block">
          <Image src={profile} width={160} height={160}></Image>
        </div>
      </section>
      <section className="py-12 px-8 md:px-0 text-center md:text-left">
        <h3 className="text-4xl mb-4 font-bold">Snippets</h3>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat morbi
          tincidunt neque, nibh sed enim magna. Eu porttitor nec at massa. Ac et
          amet consectetur imperdiet. Quam nulla elit arcu neque. Sit etiam eros
          diam vel. Est et egestas ornare venenatis neque, diam.
        </p>
        <Link href="/snippets">
          <a className="text-gray-300 hover:text-white">
            See all snippets <span className="font-bold text-xl">&#8594;</span>
            {/* <Image src={arrow} width={24} height={10}></Image> */}
            {/* <Arrow /> */}
          </a>
        </Link>
      </section>
    </Layout>
  )
}

export default Home
