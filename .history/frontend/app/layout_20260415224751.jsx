import "../styles/globals.css";

export const metadata = {
  title: "AI Resume Analyzer",
  description: "Analyze your resume with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}