import Navbar from "../components/layout/Navbar";
import ResumeUpload from "../components/resume/ResumeUpload";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-4">
          AI Resume Analyzer 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Upload your resume and get instant feedback
        </p>
        <ResumeUpload />
      </div>
    </div>
  );
}