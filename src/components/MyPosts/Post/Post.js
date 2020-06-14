import React from "react";

const Post = (props) => {
    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{props.title}</h2>
            <p className="blog-post-meta">{props.date} by <a href="#">{props.author}</a></p>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;