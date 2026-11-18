import { useQuery } from "@tanstack/react-query"
import { $api } from "./api"


const getUserPosts = async (id) => {
    const res = await $api.get(`/posts?userId=${id}`)
    return res.data
}

export const useUserPosts = (id) => {
    return useQuery({
        queryKey: ['userPosts', id],
        queryFn: () => getUserPosts(id)
    })
}