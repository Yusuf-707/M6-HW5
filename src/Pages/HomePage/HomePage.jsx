import React from 'react'
import { useHomePageList } from '../../api/HomePage.api'
import { PostsCard } from '../../Components/PostsCard/PostsCard'
import { useUsersList } from '../../api/useUsersLists'

export const HomePage = () => {
    const { data: posts, isLoading, isError, error}= useHomePageList()
    const { data: users} = useUsersList()
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Error - {error.message}</h1>
  return (
    <div>
        {posts.map(post => <PostsCard key={post.id} {...post} users={users}  />)}
    </div>
  )
}
