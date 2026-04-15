"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">AI Analyzer</h1>

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/upload">Upload</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}