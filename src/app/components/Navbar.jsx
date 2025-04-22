"use client";

export default function Navbar() {
  return (
    <nav className="bg-red-800 shadow-md">
      <div className="w-11/12 mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo or Brand Name */}
        <div className="text-xl md:text-2xl font-bold text-white">
          CloudCore IT
        </div>

        {/* Right side (optional buttons/info) */}
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Welcome!</span>
          <button className="bg-white text-red-800 px-4 py-2 rounded ">
            Contact Us
          </button>
        </div>

      </div>
    </nav>
  );
}