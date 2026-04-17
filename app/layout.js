import "./globals.css";

export const metadata = {
  title: "Calgary Signature",
  description: "Premium Western Denim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}