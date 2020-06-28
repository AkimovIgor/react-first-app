import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogElements = props.messagesPage.dialogs.map(
    dialog => <DialogItem
      authorName={dialog.name}
      id={dialog.id}
      key={dialog.id}/>
  );

  let messageElements = props.messagesPage.messages.map(
    message => <Message
      title={message.title}
      text={message.text}
      image={message.image}
      key={message.id}/>
  );

  let messageInput = React.createRef();

  let sendMessage = () => {
    let inputVal = messageInput.current.value;
    alert(inputVal)
  }

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
              <div className="form-group">
                <input type="text" className="form-control messageInput" style={{width: '100%'}} ref={ messageInput }/>
              </div>
              <button className="btn btn-primary" onClick={ sendMessage }>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;