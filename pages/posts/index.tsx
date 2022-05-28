import { getAllPosts } from '../../lib/api'
import Layout from '../../components/layout'
import PostCard from '../../components/postCard'

import type { NextPage } from 'next'
import type Post from '../../types/post'

type Props = {
  allPosts: Post[]
}

const Posts: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <div className="px-8 md:px-0 my-16">
        <h1 className="text-4xl mb-8 font-bold text-center md:text-left">
          Posts
        </h1>
        {allPosts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
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
