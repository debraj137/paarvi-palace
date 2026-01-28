"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f7]/90 backdrop-blur border-b border-[#e6dccf]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Paarvi Palace"
            width={260}
            height={52}
            priority
            className="object-contain max-h-[52px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-[#2b2118]">
          <Link href="/" className="hover:text-[#c9a24d] transition">Home</Link>
          <Link href="/rooms" className="hover:text-[#c9a24d] transition">Rooms</Link>
          <Link href="/about" className="hover:text-[#c9a24d] transition">About</Link>
          <Link href="/contact" className="hover:text-[#c9a24d] transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-[#2b2118]"></span>
          <span className="w-6 h-[2px] bg-[#2b2118]"></span>
          <span className="w-6 h-[2px] bg-[#2b2118]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[#e6dccf] bg-[#faf9f7]">
          <div className="px-6 py-6 flex flex-col gap-6 text-sm tracking-widest uppercase text-[#2b2118]">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
