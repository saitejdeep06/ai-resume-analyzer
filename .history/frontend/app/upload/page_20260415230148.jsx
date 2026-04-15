"use client";

import Navbar from "../../components/layout/Navbar";
import ResumeUpload from "../../components/resume/ResumeUpload";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-4">
          Upload Resume
        </h1>
        <ResumeUpload />
      </div>
    </div>
  );
}