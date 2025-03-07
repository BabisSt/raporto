import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-gray-400 w-full z-20 py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* First Column */}
        <div>
          <Link
            className="text-white text-2xl font-bold"
			href={"/"}
          >
            Ραπόρτο
          </Link>
          <p className="text-sm mt-1">
            Η έγγραφη καταγραφή των πληροφοριών εικόνας και ήχου
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center text-center">
          <Link
            className="text-white text-2xl font-bold mb-2 hover:text-black"
            style={{ textShadow: "#000 1px 0 10px" }}
            href={"/become_author"}
          >
            Γίνε Συντάκτης
          </Link>

          <Link
            className="text-white text-2xl font-bold hover:text-black"
            href={"/about"}
            style={{ textShadow: "#000 1px 0 10px" }}
          >
            About Us
          </Link>
        </div>

        {/* Third Column */}
        <div className="text-sm">
          <p>© 2021 - 2024 Ραπόρτο team. All Rights Reserved.</p>
          <p>raportoproject@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
