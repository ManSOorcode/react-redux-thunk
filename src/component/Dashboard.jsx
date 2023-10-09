import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <ul>
          <li>
            <Link to="/singup">Singup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
