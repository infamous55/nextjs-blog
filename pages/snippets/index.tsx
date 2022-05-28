import { getAllSnippets } from '../../lib/api'
import Layout from '../../components/layout'
import SnippetCard from '../../components/snippetCard'

import type { NextPage } from 'next'
import type Snippet from '../../types/snippet'

type Props = {
  allSnippets: Snippet[]
}

const Snippets: NextPage<Props> = ({ allSnippets }) => {
  return (
    <Layout>
      <div className="px-8 md:px-0" style={{ margin: '4rem 0' }}>
        <h1 className="text-4xl mb-8 font-bold text-center md:text-left">
          Snippets
        </h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:grid-flow-row lg:auto-rows-fr">
          {allSnippets.map((snippet) => (
            <SnippetCard snippet={snippet} key={snippet.slug} />
          ))}
        </div>
      </div>
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

export default Snippets
