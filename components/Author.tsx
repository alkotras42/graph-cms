import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { Post } from '../interfaces'

const Author = ({}: AuthorInterface): JSX.Element => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <h1>Author</h1>
    </div>
  )
}

interface AuthorInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default Author
