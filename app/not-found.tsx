import React from 'react'
import Link from 'next/link';
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0B1416] text-[#D7DADC]">
      <Home
        size={60}
        className="mb-4 text-white"
      />
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-4">Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/">
        <button className="bg-[#0079D3] hover:bg-[#0063B0] cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;