import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { Author, Post } from '../interfaces'

const Author = ({ author }: AuthorInterface): JSX.Element => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center ">
      <div className="absolute left-0 -top-14 right-0">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-lg font-bold text-white">{author.name}</h3>
      <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

interface AuthorInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  author: Author
}

export default Author
