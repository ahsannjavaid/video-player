import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <Link
        to={"/player"}
        className="mb-4 text-white hover:text-gray-200 transition text-xl"
      >
        Play Video
      </Link>
    </main>
  );
}
