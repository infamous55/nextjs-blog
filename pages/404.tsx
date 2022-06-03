import Layout from '../components/layout'

import type { NextPage } from 'next'

const PostPage: NextPage = () => {
  return (
    <Layout>
      <div className="my-16">
        <h1 className="text-4xl font-bold text-center mb-2">404</h1>
        <p className="text-center text-gray-300">This page does not exist.</p>
      </div>
    </Layout>
  )
}

export default PostPage
