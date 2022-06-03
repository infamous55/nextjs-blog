import Link from 'next/link'
import Layout from '../components/layout'
import PostCard from '../components/postCard'
import { getAllPosts } from '../lib/api'

import type { NextPage } from 'next'
import type Post from '../types/post'

import Profile from '../public/profile.svg'

type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <section className="py-12 px-8 md:px-0 flex justify-center md:items-center md:justify-between">
        <div className="md:w-7/12 text-center md:text-left">
          <h3 className="text-4xl mb-4 font-bold">
            Hi, I&apos;m <span className="text-blue-200">infamous55!</span>
          </h3>
          <p className="text-gray-300">
            I&apos;m a Full-Stack Developer and Cyber Security enthusiast, and
            this is a blog I created for learning purposes. It contains some of
            my past writeups, plus some code snippets I&apos;ve written.
          </p>
        </div>
        <div className="hidden	md:block">
          <Profile />
        </div>
      </section>
      <section className="px-8 md:px-0">
        <h3 className="text-4xl mb-8 font-bold text-center md:text-left">
          Latest Posts
        </h3>
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </section>
      <section className="py-12 px-8 md:px-0 text-center md:text-left">
        <h3 className="text-4xl mb-4 font-bold">Snippets</h3>
        <p className="text-gray-300 mb-4">
          This section is dedicated to short code pieces that I consider to be
          useful.
        </p>
        <Link href="/snippets">
          <a className="text-gray-300 hover:text-white">
            See all snippets <span className="font-bold text-xl">&#8594;</span>
          </a>
        </Link>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts().slice(0, 3)
  return {
    props: {
      posts,
    },
  }
}

export default Home
