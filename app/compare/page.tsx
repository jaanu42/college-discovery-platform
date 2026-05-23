"use client";

import { useState } from "react";
import { colleges } from "@/data/colleges";
import Navbar from "@/components/Navbar";

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleCollege = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const selectedColleges = colleges.filter((c) =>
    selectedIds.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-[#f6f7fb]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Compare Colleges
        </h1>

        {/* Selection Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <div
              key={college.id}
              onClick={() => toggleCollege(college.id)}
              className={`p-4 bg-white rounded-lg shadow cursor-pointer border-2 ${
                selectedIds.includes(college.id)
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <h2 className="font-bold">{college.name}</h2>
              <p className="text-sm text-gray-500">
                {college.location}
              </p>
            </div>
          ))}
        </div>
{selectedColleges.length === 0 && (
  <div className="text-center text-gray-500 mt-10">
    Select colleges to compare
  </div>
)}
        {/* Comparison Table */}
        {selectedColleges.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            
            <table className="w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3">Field</th>
                  {selectedColleges.map((c) => (
                    <th key={c.id} className="p-3">
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 font-semibold">Location</td>
                  {selectedColleges.map((c) => (
                    <td key={c.id} className="p-3">
                      {c.location}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold">Fees</td>
                  {selectedColleges.map((c) => (
                    <td key={c.id} className="p-3">
                      {c.fees}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold">Rating</td>
                  {selectedColleges.map((c) => (
                    <td key={c.id} className="p-3">
                      ⭐ {c.rating}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-semibold">Placements</td>
                  {selectedColleges.map((c) => (
                    <td key={c.id} className="p-3">
                      {c.placements}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}