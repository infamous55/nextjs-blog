import { join } from 'path'
import fs from 'fs'
import { sync } from 'glob'
import gray from 'gray-matter'

import type Post from '../types/post'
import type Snippet from '../types/snippet'

const postsDirectory = join(process.cwd(), '_posts')
const snippetsDirectory = join(process.cwd(), '_snippets')

export function getPostSlugs(): string[] {
  return sync('**/*.mdx', { cwd: postsDirectory }).map((path) => {
    const slug = path.replace(/\.mdx$/, '')
    return slug
  })
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = gray(fileContents)

  return {
    content,
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? new Date().toDateString(),
    excerpt: data.excerpt ?? '',
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())
  return posts
}

export function getSnippetSlugs(): string[] {
  return sync('**/*.mdx', { cwd: snippetsDirectory }).map((path) => {
    const slug = path.replace(/\.mdx$/, '')
    return slug
  })
}

export function getSnippetBySlug(slug: string): Snippet {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(snippetsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = gray(fileContents)

  return {
    content,
    slug,
    title: data.title ?? 'Untitled',
    excerpt: data.excerpt ?? '',
    image: data.image ?? 'default.png',
  }
}

export function getAllSnippets(): Snippet[] {
  const slugs = getSnippetSlugs()
  const snippets = slugs.map((slug) => getSnippetBySlug(slug))
  return snippets
}
