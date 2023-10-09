/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Welcome {props.name}</h1>

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
