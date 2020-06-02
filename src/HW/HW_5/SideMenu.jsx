import React from "react";
import { Link } from "react-router-dom";

export function SideMenu() {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <Link to="/users">users</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/main">main</Link>
          </button>
        </li>
        <li>
          <button>exit</button>
        </li>
      </ul>
    </nav>
  );
}
