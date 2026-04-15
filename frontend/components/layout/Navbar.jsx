"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-md">
      
      <h1 className="text-xl font-bold text-blue-400">
        AI Analyzer
      </h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="/upload" className="hover:text-blue-400 transition">
          Upload
        </Link>
      </div>

    </nav>
  );
}