import React, { Component } from "react";
import { Link } from "react-router-dom";

function Links(props:any) {
  // const { children } =  props;
  return (
    <div>
      <aside>
        <h4>Categories</h4>
        <ul>
          <li>
            <Link to="/start">Start</Link>
          </li>
          <li>
            <Link to="/how">How</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Links;
