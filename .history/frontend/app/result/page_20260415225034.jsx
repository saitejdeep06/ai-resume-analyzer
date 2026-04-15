"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";

export default function ResultPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("result"));
    setData(result);
  }, []);

  if (!data) return <p className="text-center mt-10">No data</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Analysis Result</h1>

        <p className="text-xl">Score: {data.score}</p>

        <div className="mt-4">
          <h2 className="font-semibold">Skills:</h2>
          <ul>
            {data.skills.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Suggestions:</h2>
          <p>{data.suggestions}</p>
        </div>
      </div>
    </div>
  );
}