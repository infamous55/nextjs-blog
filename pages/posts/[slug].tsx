import { getPostSlugs, getPostBySlug } from '../../lib/api'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import Head from 'next/head'
import Layout from '../../components/layout'
import YouTube from '../../components/youTube'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/github-dark-dimmed.css'

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"
        />
      </Head>
      <Layout>
        <div className="my-16 px-8 md:px-0">
          <h1 className="text-4xl mb-8 font-bold text-center text-blue-200 md:text-left">
            {post.meta.title}
          </h1>
          <div className="prose prose-lg prose-invert max-w-none text-white prose-pre:p-0 prose-pre:mb-6 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-img:w-full">
            <MDXRemote {...post.source} components={{ YouTube }} />
          </div>
          <p className="italic font-light text-right text-gray-300 mt-8">
            {post.meta.date}
          </p>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const post = getPostBySlug(slug)
  const source = await serialize(post.content as string, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
        rehypeKatex,
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
