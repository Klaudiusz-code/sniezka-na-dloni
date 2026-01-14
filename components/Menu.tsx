'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const LINKS = [
  { name: "Start", href: "/" },
  { name: "O Nas", href: "/o-nas" },
  { name: "Oferta", href: "/oferta" },
  { name: "Okolica", href: "/okolica" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/sniezka.svg"
              alt="Śnieżka na Dłoni"
              width={100}
              height={60}
              priority
            />
          
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-neutral-600 hover:text-[#D4A373] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#D4A373] transition-colors"
            >
              <FaPhone size={14} />
              Zadzwoń
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100"
              aria-label="Otwórz menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col">

          <div className="flex items-center justify-between px-6 py-6">
            <div className="flex-1 flex justify-center">
              <Image
                src="/sniezka.svg"
                alt="Śnieżka na Dłoni"
                width={56}
                height={56}
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
              aria-label="Zamknij menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            {LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif font-bold hover:text-[#D4A373] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-6">
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-10 py-5 bg-white text-black text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#D4A373] hover:text-white transition"
            >
              Zarezerwuj pobyt
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
