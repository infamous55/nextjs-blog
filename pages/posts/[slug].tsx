import { getPostSlugs, getPostBySlug } from '../../lib/api'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/tokyo-night-dark.css'

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

type MDXPost = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: {
    slug: string
    title: string
    date: string
    excerpt: string
  }
}

const PostPage: NextPage<{ post: MDXPost }> = ({ post }) => {
  return (
    <>
      <h1>{post.meta.title}</h1>
      <MDXRemote {...post.source} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const post = getPostBySlug(slug)
  const source = await serialize(post.content as string, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })
  return {
    props: {
      post: {
        source,
        meta: {
          slug: post.slug,
          title: post.title,
          date: post.date,
          excerpt: post.excerpt,
        },
      },
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
