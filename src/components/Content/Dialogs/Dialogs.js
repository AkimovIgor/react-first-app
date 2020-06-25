import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogElements = props.dialogs.map(
    dialog => <DialogItem
      authorName={dialog.name}
      id={dialog.id}
      key={dialog.id}/>
  );

  let messageElements = props.messages.map(
    message => <Message
      title={message.title}
      text={message.text}
      image={message.image}
      key={message.id}/>
  );

  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-5 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Dialogs</span>
        </h4>
          <ul className="list-group mb-3 dialogs">

            { dialogElements }

          </ul>
        </div>
        <div className="col-md-7 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Current dialog</span>
          </h4>
          <div className="card">
            <div className="card-body">

              { messageElements }

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;