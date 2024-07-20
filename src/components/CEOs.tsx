"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const teamMembers = [
    {
        id: 1,
        name: "Khusi Patel",
        designation: "",
        image: "/images/team/unknown.jpg"
    },
    {
        id: 2,
        name: "Ritu Kapadiya",
        designation: "",
        image: "/images/team/ritu.jpg"
    },
    {
        id: 3,
        name: "Devanshi Trivedi",
        designation: "",
        image: "/images/team/Devanshi.png"
    },
    {
        id: 4,
        name: "Hardik Songara",
        designation: "",
        image: "/images/team/Hardik (1).jpg"
    },
    {
        id: 5,
        name: "Akshat Thakkar",
        designation: "",
        image: "/images/team/akshat.jpg"
    },
    {
        id: 6,
        name: "Jay Nasriwala",
        designation: "",
        image: "/images/team/JayNasriwala.png"
    }
];

export function CEOs() {
  return (
    <div className="flex flex-row items-center border-black justify-center mb-10 w-full">
      <AnimatedTooltip  items={teamMembers} />
    </div>
  );
}
