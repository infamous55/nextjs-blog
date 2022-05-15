import { FunctionComponent } from 'react'
import Link from 'next/link'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   IconLookup,
//   IconDefinition,
//   findIconDefinition,
// } from '@fortawesome/fontawesome-svg-core'

// const twitterLookup: IconLookup = { prefix: 'far', iconName: 'twitter' }
// const twitterIconDefinition: IconDefinition = findIconDefinition(twitterLookup)

const Navbar: FunctionComponent = () => {
  return (
    <nav className="flex justify-center items-center md:justify-between text-gray-300 h-16">
      <ul className="list-none flex space-x-5 text-lg">
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
      {/* <div>
        <FontAwesomeIcon icon={twitterIconDefinition} />
      </div> */}
    </nav>
  )
}

export default Navbar
