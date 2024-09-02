import Button from "@components/Button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Error</h1>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong. Please try again later.
        </p>
        <Link href="/">
          <Button className="mt-4   hover:scale-105">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
