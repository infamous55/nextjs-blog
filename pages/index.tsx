import type { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-xl">Home</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <br />
      <Link href="/snippets">
        <a>Snippets</a>
      </Link>
    </Layout>
  )
}

export default Home
