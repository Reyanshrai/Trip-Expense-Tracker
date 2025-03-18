import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Trip Expense Tracker</h1>
      <p className="text-gray-600 mt-2">Easily split and track trip expenses</p>
      
      <Link href="/trips">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md">
          View Trips
        </button>
      </Link>
    </div>
  );
}
