import React from "react";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-5 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Dialogs</span>
          </h4>
          <ul className="list-group mb-3 dialogs">
            <li className="list-group-item d-flex justify-content-between lh-condensed dialogs_item">
              <div>
                <NavLink to="/dialogs/1" className="my-0">Igor</NavLink>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed dialogs_item">
              <div>
                <NavLink to="/dialogs/2" className="my-0">Egor</NavLink>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed dialogs_item">
              <div>
                <NavLink to="/dialogs/3" className="my-0">Sveta</NavLink>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light dialogs_item">
              <div className="text-success">
                <NavLink to="/dialogs/4" className="my-0">Masha</NavLink>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between dialogs_item">
              <div className="text-success">
                <NavLink  to="/dialogs/5" className="my-0">Julia</NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-7 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Current dialog</span>
          </h4>
          <div className="card">
            <div className="card-body">
              <div className="media mb-3">
                <img src="https://dummyimage.com/50x50/ccc/000.png" className="mr-3" alt="..."/>
                  <div className="media-body">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero
                  </div>
              </div>
              <div className="media mb-3">
                <img src="https://dummyimage.com/50x50/ccc/000.png" className="mr-3" alt="..."/>
                  <div className="media-body">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;