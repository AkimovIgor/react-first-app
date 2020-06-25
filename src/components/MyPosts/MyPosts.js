import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {



  let postElements = posts.map(
    post => <Post
      title={post.title}
      date={post.date}
      author={post.author}
      text={post.text}
      key={post.id}
    />
  );

  return (
    <div>

      { postElements }

    </div>
  )
}

export default MyPosts;