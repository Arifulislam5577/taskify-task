import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const ViewTask = () => {
  return (
    <div class="flex flex-col container">
      <div class="overflow-x-auto ">
        <div class="py-2.5 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-b bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-2 items-center justify-center">
                    <button>
                      <FaEdit size="16" color="#111827" />
                    </button>
                    <button>
                      <FaTrashAlt size="16" color="#dc2626" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
