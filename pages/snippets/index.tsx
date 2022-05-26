import Link from 'next/link'
import { getAllSnippets } from '../../lib/api'
import Layout from '../../components/layout'

import type { NextPage } from 'next'
import Snippet from '../../types/snippet'

type Props = {
  allSnippets: Snippet[]
}

const Posts: NextPage<Props> = ({ allSnippets }) => {
  return (
    <Layout>
      <h1 className="text-xl">Posts</h1>
      <ul>
        {allSnippets.map((snippet) => (
          <li key={snippet.slug}>
            <Link href="/snippets/[slug]" as={`/snippets/${snippet.slug}`}>
              <a>{snippet.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allSnippets = getAllSnippets()
  return {
    props: {
      allSnippets,
    },
  }
}

export default Posts
