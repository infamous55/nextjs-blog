import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <br />
      <Link href="/snippets">
        <a>Snippets</a>
      </Link>
    </div>
  )
}

export default Home
