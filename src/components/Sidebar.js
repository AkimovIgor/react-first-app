import React from "react";
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
      <aside className="col-md-3 blog-sidebar">
            <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="/">March 2014</a></li>
                <li><a href="/">February 2014</a></li>
                <li><a href="/">January 2014</a></li>
                <li><a href="/">December 2013</a></li>
                <li><a href="/">November 2013</a></li>
                <li><a href="/">October 2013</a></li>
                <li><a href="/">September 2013</a></li>
                <li><a href="/">August 2013</a></li>
                <li><a href="/">July 2013</a></li>
                <li><a href="/">June 2013</a></li>
                <li><a href="/">May 2013</a></li>
                <li><a href="/">April 2013</a></li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a className={classes.item} href="#">GitHub</a></li>
                <li><a className={classes.item} href="#">Twitter</a></li>
                <li><a className={classes.item} href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>
  )
}

export default Sidebar;