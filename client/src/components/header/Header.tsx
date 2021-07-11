import React from "react";
import { Link } from "react-router-dom";

import User from "./User";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
      <Link className="navbar-brand ml-3" to="/">
        Trai
        <div
          style={{
            transform: "rotate(345deg)",
            display: "inline-block",
          }}
        >
          n
        </div>
        e
        <div
          style={{
            transform: "rotate(25deg)",
            display: "inline-block",
          }}
        >
          e
        </div>
      </Link>
      <div className="collapse navbar-collapse justify-content-between">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <User />
        </ul>
      </div>
    </nav>
  );
}
