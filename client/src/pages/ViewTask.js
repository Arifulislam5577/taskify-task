import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/useFetch";
const ViewTask = () => {
  const [tasks, setTasks] = useState([]);

  // NAVIGATE PAGES
  const navigate = useNavigate();
  const handleClick = (task) => {
    navigate(`/task/${task._id}`, { state: task });
  };

  // LOAD TASK FROM SERVER
  const { data, message, loading } = UseFetch(
    "https://taskify-kappa-pink.vercel.app/api/v1/task"
  );

  // DELETE A TASK
  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(
        `https://taskify-kappa-pink.vercel.app/api/v1/task/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await response.json();

      if (result) {
        toast.success("Task Delete Successfully");
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (data.length) {
      setTasks(data);
    }
  }, [data]);

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

  if (tasks?.length === 0) {
    return (
      <div className="container  my-10 text-center text-sm text-gray-900 font-bold">
        <h1 className="lg:w-1/2 p-3 bg-gray-900 text-white mx-auto">
          No Task Added
        </h1>
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
                {tasks?.map((task, index) => (
                  <tr className={`bg-gray-50   border-b`} key={task._id}>
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
                      <button onClick={() => handleDeleteTask(task._id)}>
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
