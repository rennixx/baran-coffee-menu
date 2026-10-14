import "./globals.css";

export const metadata = {
  title: "Baran Coffee | Menu",
  description: "A simple digital menu for Baran Coffee.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/baran-coffee-logo.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
