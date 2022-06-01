import { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type Snippet from '../types/snippet'

type Props = {
  snippet: Snippet
}

const SnippetCard: FunctionComponent<Props> = ({ snippet }) => {
  return (
    <Link href="/snippets/[slug]" as={`/snippets/${snippet.slug}`}>
      <div
        className="p-8 rounded-lg mb-8 last:mb-0 cursor-pointer min-h-[11rem] flex flex-col justify-center h-full"
        style={{ backgroundColor: '#22272E' }}
      >
        <Image
          src={`/${snippet.image}`}
          width={'32px'}
          height={'32px'}
          layout="raw"
          className="w-8 h-8 mb-2 self-center md:self-start"
        />
        <h3 className="text-blue-200 font-bold text-2xl mb-2 text-center md:text-left">
          {snippet.title}
        </h3>
        <p className="text-center md:text-left">{snippet.excerpt}</p>
      </div>
    </Link>
  )
}

export default SnippetCard
