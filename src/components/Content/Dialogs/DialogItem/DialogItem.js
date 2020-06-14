import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed dialogs_item">
      <div>
        <NavLink to={"/dialogs/" + props.id} className="my-0">{props.authorName}</NavLink>
      </div>
    </li>
  )
}

export default DialogItem;