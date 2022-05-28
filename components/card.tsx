import { FunctionComponent } from 'react'
import Link from 'next/link'
import type Post from '../types/post'

type Props = {
  post: Post
}

const Card: FunctionComponent<Props> = ({ post }) => {
  return (
    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
      <div className="p-8 bg-gray-800 rounded-lg mb-8 last:mb-0 cursor-pointer min-h-[11rem] flex flex-col justify-center">
        <h3 className="text-blue-200 font-bold text-2xl mb-2 text-center md:text-left">
          {post.title}
        </h3>
        <p className="mb-2 text-center md:text-left">{post.excerpt}</p>
        <p className="italic font-light text-center md:text-right">
          {post.date}
        </p>
      </div>
    </Link>
  )
}

export default Card
