import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <button>
            <Link to="/general">general</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/countries">countries</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
