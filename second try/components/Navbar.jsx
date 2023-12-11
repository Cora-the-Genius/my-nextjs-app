"use client"
import Link from "next/link"
import React, { useState } from "react"
import { RiSparklingLine } from "react-icons/ri";
import { RiCalendarCheckLine } from "react-icons/ri";
import { RiListCheck } from "react-icons/ri";
import { RiCameraLensLine } from "react-icons/ri";

const navItems = [
  { href: '/generator', icon: <RiSparklingLine />, text: 'Generator' },
  { href: '/journal', icon: <RiCalendarCheckLine />, text: 'Journal' },
  { href: '/', icon: <RiListCheck />, text: 'Memory' },
  { href: '/', icon: <RiCameraLensLine />, text: 'Community' },
];

function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="flex items-center text-2xl my-2">
                {item.icon}
                {hovered && (
                <span>{item.text}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
  }
export default Navbar