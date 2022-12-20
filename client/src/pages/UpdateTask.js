import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const AddTask = () => {
  const { state } = useLocation();

  const [name, setName] = useState(state?.name);
  const [position, setPosition] = useState(state?.position);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        `https://taskify-kappa-pink.vercel.app/api/v1/task/${state?._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            position,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (result) {
        setLoading(false);
        setMessage("");
        setName("");
        setPosition("");
        toast.success("Task Update Successfully");
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
              <option defaultValue>{state?.position}</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>
          </div>

          <div className="mb-4">
            <button
              className={`w-full py-2.5 bg-gray-900 hover:bg-gray-800
              
               text-white rounded uppercase text-sm `}
            >
              {loading ? "Loading..." : "Update Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
