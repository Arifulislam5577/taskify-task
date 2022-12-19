import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:min-h-screen">
      <div className="lg:col-span-1 w-full bg-gray-200 flex items-center lg:flex-col h-full lg:justify-center justify-between container lg:py-0 py-5">
        <div className="logo lg:hidden">
          <Link to="/" className="font-bold uppercase text-gray-900">
            Taskify
          </Link>
        </div>
        <ul className="flex lg:flex-col items-start justify-between gap-3 text-sm uppercase ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">My Task</Link>
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
