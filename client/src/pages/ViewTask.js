import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UseFetch from "../hooks/useFetch";
const ViewTask = () => {
  const navigate = useNavigate();

  const handleClick = (task) => {
    navigate(`/task/${task._id}`, { state: task });
  };
  const { data, message, loading } = UseFetch(
    "http://localhost:8000/api/v1/task"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }

  if (message) {
    return (
      <div className="container  my-10 text-center text-sm text-red-500">
        <h1>{message}</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col container">
      <div className="overflow-x-auto ">
        <div className="py-2.5 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-200 font-bold">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((task) => (
                  <tr className="bg-white border-b" key={task._id}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {task.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {task.position}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-2 items-center justify-center">
                      <button onClick={() => handleClick(task)}>
                        <FaEdit size="16" color="#111827" />
                      </button>
                      <button>
                        <FaTrashAlt size="16" color="#dc2626" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
