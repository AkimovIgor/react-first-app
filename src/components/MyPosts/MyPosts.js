import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
        <Post
          title='Sample blog post 1'
          date='January 1, 2014'
          autor='Mark'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Post
          title='Sample blog post 2'
          date='January 6, 2017'
          autor='Mark'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <Post
          title='Sample blog post 3'
          date='January 23, 2020'
          autor='Mark'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
    </div>
  )
}

export default MyPosts;