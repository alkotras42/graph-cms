export interface Post {
  node: string
  author: Author
  createdAt: Date
  slug: string
  title: string
  excerpt: string
  featuredImage: FeaturedImage
  categories: Category[]
}

export interface Author {
  bio: null
  name: string
  id: string
  photo: FeaturedImage
}

export interface FeaturedImage {
  url: string
}

export interface Category {
  name: string
  slug: string
}
