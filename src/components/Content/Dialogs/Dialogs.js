import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-5 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Dialogs</span>
        </h4>
          <ul className="list-group mb-3 dialogs">
            <DialogItem authorName='Egor' id='1'/>
            <DialogItem authorName='Igor' id='2'/>
            <DialogItem authorName='Mariya' id='3'/>
            <DialogItem authorName='Danil' id='4'/>
            <DialogItem authorName='Julia' id='5'/>
          </ul>
        </div>
        <div className="col-md-7 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Current dialog</span>
          </h4>
          <div className="card">
            <div className="card-body">
              <Message title='Egor' text='some text' image='https://dummyimage.com/50x50/ccc/000.png'/>
              <Message title='Me' text='some text' image='https://dummyimage.com/50x50/0f0/000.png'/>
              <Message title='Egor' text='some text' image='https://dummyimage.com/50x50/ccc/000.png'/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;