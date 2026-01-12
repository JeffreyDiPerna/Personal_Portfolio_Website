
// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Jeffrey Di Perna — Portfolio",
  description: "Personal portfolio — About, Projects, Experiences, Contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      {/* Force a plain white background, no gradient */}
      <body style={{ backgroundColor: "#ffffff", color: "#2563eb", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
