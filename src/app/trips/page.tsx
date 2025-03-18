import Link from "next/link";

const trips = [
  { id: "1", name: "Goa Trip", total: 5000 },
  { id: "2", name: "Manali Trip", total: 8000 },
];

export default function TripsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">Your Trips</h1>
      
      <div className="mt-4 space-y-4">
        {trips.map((trip) => (
          <Link key={trip.id} href={`/trips/${trip.id}`}>
            <div className="p-4 bg-white shadow-md rounded-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{trip.name}</h2>
              <p className="text-gray-600">Total: ₹{trip.total}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg">
        + Create New Trip
      </button>
    </div>
  );
}
