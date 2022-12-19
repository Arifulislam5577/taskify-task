import React from "react";
import { Link } from "react-router-dom";

const AddTask = () => {
  return (
    <div className="flex items-center py-5 justify-center h-full">
      <div className="container">
        <form className="form  mx-auto w-full lg:w-2/3">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm">
              Your Name
            </label>

            <input
              type="text"
              className="block border focus:outline-none rounded w-full py-2 px-3 bg-gray-50 placeholder:text-sm placeholder:text-gray-300"
              placeholder="John Smith"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm">
              Your Position
            </label>

            <select
              className="text-sm border focus:outline-none rounded w-full py-2.5 px-3 bg-gray-50 placeholder:text-sm placeholder:text-gray-300"
              aria-label="Default select example"
            >
              <option selected>Select Position</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-500 "
              >
                I agree with the{" "}
                <Link
                  to="/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </Link>
                .
              </label>
            </div>
          </div>

          <div className="mb-4">
            <button className="w-full py-2.5 bg-gray-900 text-white rounded uppercase text-sm hover:bg-gray-800">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
