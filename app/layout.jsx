import "./globals.css";

export const metadata = {
  title: "Baran Coffee | Menu",
  description: "A simple digital menu for Baran Coffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
