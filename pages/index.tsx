import type { NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import type Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <h3>{post.title}</h3>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>Click here</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}

export default Home
