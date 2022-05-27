import { getAllPosts } from '../../lib/api'
import Layout from '../../components/layout'
import Card from '../../components/card'

import type { NextPage } from 'next'
import type Post from '../../types/post'

type Props = {
  allPosts: Post[]
}

const Posts: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      {/* margin not working in tailwind */}
      <div className="px-8 md:px-0" style={{ margin: '4rem 0' }}>
        <h1 className="text-4xl mb-8 font-bold text-center md:text-left">
          Posts
        </h1>
        {allPosts.map((post) => (
          <Card post={post} key={post.slug} />
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
