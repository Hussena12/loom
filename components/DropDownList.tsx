"use client";
import Image from "next/image";
import { useState } from "react";

const DropDownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="menu"
              width={14}
              height={14}
            />
            Most recent
          </figure>

          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow-down"
            height={20}
            width={20}
          />
        </div>
      </div>

      {isOpen && (
        <ul className="dropdown">
          {["most like", "good"].map((option) => (
            <li key={option} className="list-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownList;
