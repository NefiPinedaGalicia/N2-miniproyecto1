import React from "react";

export default function SearchButton({ stays, location, guests, onClick }) {
  function handleSearch() {
    const filtered = stays.filter((stay) => {
      const matchLocation =
        location.trim() === "" ||
        stay.city.toLowerCase().includes(location.toLowerCase());
      const matchGuests = guests <= stay.maxGuests;
      return matchLocation && matchGuests;
    });

    onClick({
      filtered,
      location,
      guests,
    });
  }

  return (
    <button
      type="button"
      onClick={handleSearch}
      className="bg-red-500 text-white px-6 py-3 rounded-2xl flex items-center space-x-2 font-montserrat"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <span>Search</span>
    </button>
  );
}