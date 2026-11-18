import React from "react";
import { usePostDetail } from "../../api/PostDetailPage.api";
import { useUsersList } from "../../api/useUsersLists";
import { useParams } from "react-router-dom";

export const PostDetailPage = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = usePostDetail(id);

  const { data: users } = useUsersList();
  const user = users?.find((user) => user.id == post?.userId);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error - {error.message}</h1>;
  return (
    <div>
      <h2>{post?.body}.</h2>
      <hr />
      <hr />
      <h1>Author: '''{user?.name}'''</h1>
    </div>
  );
};
