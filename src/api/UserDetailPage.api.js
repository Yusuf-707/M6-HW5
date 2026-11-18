import { useQuery } from "@tanstack/react-query";
import { $api } from "./api";

const getUser = async (id) => {
  const res = await $api.get(`/users/${id}`);
  return res.data;
};

export const useUserDetail = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
};
