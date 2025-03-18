import "./styles/globals.css";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Trip Expense Tracker",
  description: "Track & split your trip expenses easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
