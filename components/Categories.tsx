import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import { Category } from '../interfaces'

const Categories = () => {
  const [categories, setcategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then((res) => setcategories(res))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3'>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
