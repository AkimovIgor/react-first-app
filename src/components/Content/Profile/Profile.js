import React from "react";
import classes from './Profile.module.css';
import MyPosts from "../../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="col-md-9 blog-main">

      <ProfileInfo/>
      <MyPosts/>

    </div>
  )
}

export default Profile;