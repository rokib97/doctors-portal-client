import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-3xl font-bold text-secondary">
          Welcome to Your Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashbord-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
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
          <li>
            {admin && (
              <>
                <Link className="mb-1" to="/dashboard/users">
                  All Users
                </Link>
                <Link className="mb-1" to="/dashboard/addDoctor">
                  Add A Doctor
                </Link>
                <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
