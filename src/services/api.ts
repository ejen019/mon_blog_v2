// //fonction a ecrire :
// getPosts()
// getPost(id)
// getPostComments(postsId)
// getUser(id)
// getUserPosts(userId)

import type {Post} from '../types'
import type { Comment } from '../types'
import type { User } from '../types'

const URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(`${URL}/posts`)
    const data = await response.json()
    return data
}

export async function getPost(id: number): Promise<Post> {
    const response = await fetch(`${URL}/posts/${id}`)
    const data = await response.json()
    return data
} 

export async function getPostComments(id: number): Promise<Comment[]> {
    const response = await fetch(`${URL}/posts/${id}/comments`)
    const data = await response.json()
    return data
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${URL}/users`)
  const data = await response.json()
  return data
}


export async function getUser(id: number): Promise<User> {
  const response = await fetch(`${URL}/users/${id}`)
  const data = await response.json()
  return data
}

export async function getUserPosts(userId: number): Promise<Post[]> {
  const response = await fetch(`${URL}/users/${userId}/posts`)
  const data = await response.json()
  return data
}