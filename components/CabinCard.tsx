"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBed,
  FaUser,
  FaRulerCombined,
  FaTag,
  FaCheck,
} from "react-icons/fa6";

export default function CabinCard({ cabin, idx }: any) {
  const [isPackageActive, setIsPackageActive] = useState(false);

  const isDark = cabin.name.includes("Czarny");
  const isAvailable = cabin.status === "available";
  const basePrice = parseInt(cabin.price);
  const packageDays = 3;
  const packagePrice = 1800;
  const savings = basePrice * packageDays - packagePrice;

  const cardBg = isDark ? "bg-[#050505]" : "bg-stone-200";
  const textColor = isDark ? "text-white" : "text-[#171717]";

  return (
    <Link href={cabin.slug} className="block">
      <div className={`p-6 rounded-2xl ${cardBg}`}>
        <h3 className={`text-2xl ${textColor}`}>{cabin.name}</h3>
        <p>{cabin.subtitle}</p>
        <p>{cabin.price} zł</p>
      </div>
    </Link>
  );
}