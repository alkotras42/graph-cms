export interface Post {
  author: Author
  createdAt: Date
  slug: string
  title: string
  excerpt: string
  featuredImage: FeaturedImage
  categories: Category[]
  content: Content
}

export interface Content {
  raw: Raw
}

export interface Raw {
  children: RawChild[]
}

export interface RawChild {
  type: string
  children: ChildChild[]
}

export interface ChildChild {
  text: string
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
