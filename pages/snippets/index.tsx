import Link from 'next/link'
import { getAllSnippets } from '../../lib//api'

import type { NextPage } from 'next'
import Snippet from '../../types/snippet'

type Props = {
  allSnippets: Snippet[]
}

const Posts: NextPage<Props> = ({ allSnippets }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {allSnippets.map((snippet) => (
          <li key={snippet.slug}>
            <h3>{snippet.title}</h3>
            <Link href="/snippets/[slug]" as={`/snippets/${snippet.slug}`}>
              <a>Click here</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
