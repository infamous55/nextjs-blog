import { FunctionComponent } from 'react'
import Link from 'next/link'

const Footer: FunctionComponent = () => {
  return (
    <footer className="border-gray-300 border-t-2 py-12 px-8 columns-2 md:px-0 text-gray-300">
      <ul className="list-none">
        <li>
          <Link href="/">
            <a className="hover:text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a className="hover:text-white">Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/snippets">
            <a className="hover:text-white">Snippets</a>
          </Link>
        </li>
        <li>
          <a
            className="hover:text-white"
            href="https://www.twitter.com/infamous551"
            target={'_blank'}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="hover:text-white"
            href="https://www.github.com/infamous55"
            target={'_blank'}
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
