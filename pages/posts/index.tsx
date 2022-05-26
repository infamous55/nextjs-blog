import Link from 'next/link'
import { getAllPosts } from '../../lib/api'
import Layout from '../../components/layout'

import type { NextPage } from 'next'
import type Post from '../../types/post'

type Props = {
  allPosts: Post[]
}

const Posts: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <h1 className="text-xl">Posts</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
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

export default Posts
