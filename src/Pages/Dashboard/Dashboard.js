import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold text-secondary">
          Welcome to Your Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashbord-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-1">
            <Link to="/dashboard">My Appoinments</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
          <li className="mb-1">
            <Link to="/dashboard/history">My History</Link>
          </li>
          <li>{admin && <Link to="/dashboard/users">All Users</Link>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
