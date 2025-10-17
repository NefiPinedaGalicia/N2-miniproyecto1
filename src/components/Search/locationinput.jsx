import React, { useState, useEffect } from "react";

export default function LocationInput({
  stays,
  activeField,
  setActiveField,
  location,
  setLocation,
}) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (location.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = stays.filter((stay) =>
      stay.city.toLowerCase().includes(location.toLowerCase())
    );

    if (filtered.length > 0) {
      const uniqueCities = [
        ...new Set(filtered.map((s) => `${s.city}, ${s.country}`)),
      ];
      setSuggestions(uniqueCities);
    } else {
      setSuggestions(["No matches found"]);
    }
  }, [location, stays]);

  return (
    <div
      className={`p-3 relative z-10 transition-all duration-200 rounded-2xl border-2 ${
        activeField === "location" ? "border-gray-800" : "border-transparent"
      }`}
      onClick={() => setActiveField("location")}
    >
      <label className="block text-xs font-semibold text-gray-800 mb-1 font-montserrat">
        LOCATION
      </label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Add location"
        className="w-full text-sm text-gray-600 outline-none font-mulish"
      />
      {suggestions.length > 0 && activeField === 'location' && (
        <ul className="absolute bg-white shadow-md rounded-lg mt-2 w-full max-h-40 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className={`px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                s === "No matches found"
                  ? "text-gray-400 italic pointer-events-none"
                  : ""
              }`}
              onClick={() => {
                if (s !== "No matches found") {
                  setLocation(s.split(",")[0]);
                  setSuggestions([]);
                }
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}