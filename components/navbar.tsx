import { FunctionComponent } from 'react'
import Link from 'next/link'

import Twitter from '../public/twitter.svg'
import Github from '../public/github.svg'

const Navbar: FunctionComponent = () => {
  return (
    <nav className="flex justify-center items-center md:justify-between h-16 text-gray-300">
      <ul className="list-none flex space-x-5">
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
      </ul>
      <ul className="md:flex list-none space-x-5 hidden">
        <li>
          <a
            href="https://www.twitter.com/infamous551"
            target={'_blank'}
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/infamous55"
            target={'_blank'}
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
