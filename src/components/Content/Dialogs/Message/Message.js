import React from "react";

const Message = (props) => {
  return (
    <div className="media mb-3">
      <img src={props.image} className="mr-3" alt="..."/>
      <div className="media-body">
        <h5 className="mt-0">{props.title}</h5>
        {props.text}
      </div>
    </div>
  )
}

export default Message;