import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseFetch from "../hooks/useFetch";

const AddTask = () => {
  const { data } = UseFetch("http://localhost:8000/api/v1/category");

  console.log(data);

  let optionArr = [];
  function newArrayElement(arr) {
    arr.forEach((item) => {
      optionArr.push(item.positionName);
      if (Array.isArray(item.subPositionName)) {
        newArrayElement(item.subPositionName);
      }
    });
  }

  newArrayElement(data);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // NESTED OPTIONS

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked) {
      return;
    }
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("http://localhost:8000/api/v1/task", {
        method: "POST",
        body: JSON.stringify({
          name,
          position,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();

      if (result) {
        setLoading(false);
        setMessage("");
        setName("");
        setPosition("");
        toast.success("Task Added Successfully");
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.message);
    }
  };
  return (
    <div className="flex items-center py-5 justify-center h-full">
      <div className="container">
        <form className="form  mx-auto w-full lg:w-2/3" onSubmit={handleSubmit}>
          {message && (
            <div className="mb-4">
              <p className="text-center text-red-600 text-sm capitalize">
                {message}
              </p>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm">
              Your Name
            </label>

            <input
              type="text"
              className="block border focus:outline-none rounded w-full py-2 px-3 bg-gray-200 placeholder:text-xs placeholder:text-gray-400"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm">
              Your Position
            </label>

            <select
              className="text-sm border focus:outline-none rounded w-full py-2.5 px-3 bg-gray-200 placeholder:text-xs placeholder:text-gray-400"
              aria-label="Default select example"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option defaultValue>Select Position</option>
              {optionArr.map((option, index) => (
                <option key={index} className="text-gray-900" value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                onChange={(e) => setChecked(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
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
            <button
              disabled={!checked}
              className={`w-full py-2.5  ${
                checked
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white rounded uppercase text-sm `}
            >
              {loading ? "Loading..." : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
