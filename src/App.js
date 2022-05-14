import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireAuthLogin from "./Pages/Login/RequireAuthLogin";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appoinment"
          element={
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/login"
          element={
            <RequireAuthLogin>
              <Login></Login>
            </RequireAuthLogin>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <RequireAuthLogin>
              <Signup></Signup>
            </RequireAuthLogin>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
