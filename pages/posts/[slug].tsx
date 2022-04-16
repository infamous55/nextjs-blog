import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import type Post from '../../types/post'
import { getPostSlugs, getPostBySlug } from '../../lib/api'

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const post = getPostBySlug(slug)

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
