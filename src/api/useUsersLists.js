import { useQuery } from "@tanstack/react-query";
import { $api } from "./api";

const getUsers = async () => {
  const res = await $api.get("/users");
  return res.data;
};
export const useUsersList = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
