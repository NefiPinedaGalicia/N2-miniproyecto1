import React, { useRef, useEffect, useState } from "react";
import SearchForm from "./searchForm";

export default function Search({
  isSearchOpen,
  toggleSearch,
  onSearch,
  filteredStays,
}) {
  const searchRef = useRef(null);
  const [activeField, setActiveField] = useState(null); // "location" | "guests"
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch("/stays.json")
      .then((response) => response.json())
      .then((data) => setStays(data));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        if (window.innerWidth >= 768) toggleSearch();
      }
    }

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, toggleSearch]);

  useEffect(() => {
    if (filteredStays === null) {
      setLocation("");
      setGuests(0);
    }
  }, [filteredStays]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 md:bg-black/50 z-40 transition-all duration-300">
      <div
        ref={searchRef}
        className="fixed inset-0 bg-white z-50 h-[85vh] md:h-[50vh] flex flex-col transition-all duration-300 ease-out"
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-lg font-semibold font-montserrat">
            Edit your search
          </h2>
          <button onClick={toggleSearch} className="p-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <SearchForm
          stays={stays}
          activeField={activeField}
          setActiveField={setActiveField}
          location={location}
          setLocation={setLocation}
          guests={guests}
          setGuests={setGuests}
          onSearch={(results) => {
            onSearch(results);
            toggleSearch();
          }}
        />
      </div>
    </div>
  );
}
