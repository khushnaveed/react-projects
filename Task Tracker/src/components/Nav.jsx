import React, { useState } from "react";
import "../components/Sidebar.css"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="btn btn-primary d-lg-none position-fixed"
        style={{ top: "1rem", left: "1rem", zIndex: 1050 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar bg-light border-end ${isOpen ? 'show' : ''}`}>
        {/* Header */}
        <div className="p-3 border-bottom">
          <div className="d-flex align-items-center gap-2">
            <h1 className="h5 mb-0">Weekly Todo's</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav flex-column p-3">
          {days.map((day) => (
            <a
              key={day}
              href={`#${day.toLowerCase()}`}
              className="nav-link px-3 py-2 text-secondary"
            >
              {day}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-top p-3 mt-auto">
          <button
            type="button"
            className="btn btn-primary w-100"
          >
            Reset All
          </button>
        </div>
      </div>
    </>
  );
}