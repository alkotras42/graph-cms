import { request, gql } from 'graphql-request'
import { Category } from '../interfaces'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ''

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostsDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  
  
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (categories: [Category], slug: string) => {
  const query = gql`
    query GetPostsDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slugm
          AND: { catagories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name,
        slug
      }
    }
  
  
  `
  const result = await request(graphqlAPI, query)

  return result.categories
}
