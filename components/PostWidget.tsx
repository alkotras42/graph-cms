import React, {
  useState,
  useEffect,
  HTMLAttributes,
  DetailedHTMLProps,
} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import { Category, Post } from '../interfaces'

const PostWidget = ({ categories, slug }: PostWidgetInterface): JSX.Element => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res))
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res))
    }
  }, [slug])


  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related post' : 'Recent posts'}
      </h3>
      {relatedPosts.map((post: Post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="aling-middle rounded-full"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              <p className="text-md">{post.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

interface PostWidgetInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slug: string
  categories: string[]
}

export default PostWidget
