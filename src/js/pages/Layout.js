import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Layout</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles" class="btn btn-warning">
          archives (some other articles)
        </Link>
        <Link to="archives" className="btn">
          archives
        </Link>
        <Link to="settings" className="btn">
          settings
        </Link>
      </div>
    );
  }
}
