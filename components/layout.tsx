import { ReactNode, FunctionComponent } from 'react'

import Navbar from './navbar'
import Footer from './footer'

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white text-lg min-h-screen">
      <div className="mx-auto md:w-7/12 lg:w-6/12">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
