import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {
      id: 1,
      title: 'Sample blog post 1',
      date: (new Date()).toLocaleString(),
      author: 'Mark',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      id: 2,
      title: 'Sample blog post 2',
      date: (new Date()).toLocaleString(),
      author: 'Igor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      id: 3,
      title: 'Sample blog post 3',
      date: (new Date()).toLocaleString(),
      author: 'Egor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
  ];

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