import { $api } from "./api";
import { useQuery } from "@tanstack/react-query";
const getPost = async (id) => {
  const res = await $api.get(`/posts/${id}`);
  return res.data;
};

export const usePostDetail = (id) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};
