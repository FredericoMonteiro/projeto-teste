"use client"; // Adicionar esta linha no início do arquivo

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/contacts" className="text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white p-2">Home</Link>
          <Link href="/about" className="block text-white p-2">About</Link>
          <Link href="/services" className="block text-white p-2">Services</Link>
          <Link href="/contacts" className="block text-white p-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}