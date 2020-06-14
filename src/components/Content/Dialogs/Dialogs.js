import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: 'Egor'},
    { id: 2, name: 'Igor'},
    { id: 3, name: 'Mariya'},
    { id: 4, name: 'Julia'},
    { id: 5, name: 'Danila'},
  ];

  let messages = [
    { id: 1,  title: 'Egor', text: 'some text', image: 'https://dummyimage.com/50x50/ccc/000.png'},
    { id: 2,  title: 'Me', text: 'some text', image: 'https://dummyimage.com/50x50/0f0/000.png'},
    { id: 3,  title: 'Egor', text: 'some text', image: 'https://dummyimage.com/50x50/ccc/000.png'},
  ];

  let dialogElements = dialogs.map(
    dialog => <DialogItem
      authorName={dialog.name}
      id={dialog.id}
      key={dialog.id}/>
  );

  let messageElements = messages.map(
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