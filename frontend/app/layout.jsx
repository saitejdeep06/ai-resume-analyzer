import "../styles/globals.css";

export const metadata = {
  title: "AI Resume Analyzer",
  description: "Analyze resumes using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}