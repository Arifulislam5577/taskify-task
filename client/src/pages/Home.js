import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
const Home = () => {
  const activeClass = {
    backgroundColor: "#7f1d1d",
  };

  const inActiveClass = {
    backgroundColor: "#111827",
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:min-h-screen">
      <div className="lg:col-span-1 w-full bg-gray-200 flex items-center lg:flex-col h-full lg:justify-center justify-between container lg:py-0 py-5">
        <div className="logo lg:hidden">
          <Link to="/" className="font-bold uppercase text-gray-900">
            Taskify
          </Link>
        </div>
        <ul className="flex lg:flex-col items-start justify-between gap-5 lg:gap-1 text-sm uppercase ">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeClass : inActiveClass)}
              to="/"
              className="flex items-center gap-2 border rounded-full bg-gray-900 text-white py-2.5 px-5 text-xs"
            >
              <MdAddTask />
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/view"
              style={({ isActive }) => (isActive ? activeClass : inActiveClass)}
              className="flex items-center gap-2 border rounded-full bg-gray-900 text-white py-2.5 px-5 text-xs"
            >
              <FaTasks />
              My Task
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-3 w-full bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
