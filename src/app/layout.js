import "./globals.css";

export const metadata = {
  title: "Alama Admin Portal",
  description: "AI-Powered Grading for Educators - Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="AI-Powered Grading for Educators - Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased" style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}
