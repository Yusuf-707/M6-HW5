import React from "react";

export const UserCard = (props) => {
    const { name, email, address, userPosts } = props
    console.log(userPosts);
    
  return <div>
    <h1>{name}</h1>
    <h3>{email}</h3>
    <h3>{address?.city}</h3>
    <div>
      <h1>Постов</h1>
      {userPosts?.map(post => <h2 key={post.id}>{post.title} <hr /></h2>)}
      </div>
  </div>;
};
