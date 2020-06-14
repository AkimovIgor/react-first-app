import React from "react";
import classes from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="col-md-9 blog-main">
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-12 px-0">
          <h1 className="display-4 font-italic">Title of a longer</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and
            efficiently about what’s most interesting in this post’s contents.</p>
          <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

      <div className="media pb-4">
        <img src="https://dummyimage.com/128x128/ccc/000.png" className="mr-3" alt="..."/>
        <div className="media-body">
          <h5 className="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
          odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
          fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>

      <form action="">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>

      <h3 className="pb-4 mb-4 font-italic border-bottom">
        From the Firehose
      </h3>

      <p className={`${classes.item} ${classes.line_through}`}>
        New article text
      </p>

      <MyPosts/>

    </div>
  )
}

export default Profile;