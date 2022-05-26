import { FunctionComponent } from 'react'
import Link from 'next/link'

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
      {/* icons */}
    </nav>
  )
}

export default Navbar
