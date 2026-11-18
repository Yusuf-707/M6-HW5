import React from "react";
import { useUserDetail } from "../../api/UserDetailPage.api";
import { useParams } from "react-router-dom";
import { UserCard } from "../../Components/UserCard/UserCard";
import { useUserPosts } from "../../api/UserPosts.api";

export const UserDetailPage = () => {
  const { id } = useParams();
  const { data: user, isLoading, isError, error } = useUserDetail(id);
  const { data: userPosts } = useUserPosts(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error - {error.message}</h1>;
  return <UserCard {...user} userPosts={userPosts} />;
};
