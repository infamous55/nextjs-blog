import { getSnippetSlugs, getSnippetBySlug } from '../../lib/api'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import Layout from '../../components/layout'
import Pre from '../../components/pre'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/github-dark-dimmed.css'

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

type MDXSnippet = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: {
    slug: string
    title: string
    excerpt: string
  }
}

const SnippetPage: NextPage<{ snippet: MDXSnippet }> = ({ snippet }) => {
  return (
    <>
      <Layout>
        <div className="my-16 px-8 md:px-0">
          <h1 className="text-4xl mb-8 font-bold text-center text-blue-200 md:text-left">
            {snippet.meta.title}
          </h1>
          <div className="prose prose-lg prose-invert max-w-none text-white prose-pre:p-0 prose-pre:mb-6 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-img:w-full">
            {/*
// @ts-ignore */}
            <MDXRemote {...snippet.source} components={{ pre: Pre }} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const snippet = getSnippetBySlug(slug)
  const source = await serialize(snippet.content as string, {
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
      snippet: {
        source,
        meta: {
          slug: snippet.slug,
          title: snippet.title,
          excerpt: snippet.excerpt,
        },
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSnippetSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default SnippetPage
