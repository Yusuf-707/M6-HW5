import { $api } from "./api";
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  const res = await $api.get("/posts");
  return res.data;
};

export const useHomePageList = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
