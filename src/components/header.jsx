import React from "react";

export default function Header({
  toggleSearch,
  summary,
  filteredStays,
  clearSearch,
}) {
  return (
    <header
      id="header"
      className="px-4 md:px-16 pt-4 md:flex md:items-center md:justify-between"
    >
      <div className="mb-4 md:mb-0">
        <img src="/logo.svg" alt="Logo" className="h-8" />
      </div>

      <div className="grid grid-cols-5 items-stretch bg-white rounded-2xl border border-gray-200 mx-auto w-full max-w-sm md:mx-0 md:max-w-md lg:max-w-lg divide-x divide-gray-300 h-12">
        <button
          onClick={toggleSearch}
          className="text-gray-500 text-sm text-center py-2 col-span-2 flex items-center justify-center h-full"
          style={{ fontFamily: "'Mulish', sans-serif" }}
        >
          {summary.location ? `${summary.location}, Finland` : "Add location"}
        </button>
        <button
          onClick={toggleSearch}
          className="text-gray-500 text-sm text-center py-2 col-span-2 flex items-center justify-center h-full"
          style={{ fontFamily: "'Mulish', sans-serif" }}
        >
          {summary.guests > 0 ? `${summary.guests} guests` : "Add guest"}
        </button>
        <div className="flex items-center justify-center py-3 px-3 h-full">
          {filteredStays ? (
            <button onClick={clearSearch}>
              <svg
                className="w-5 h-5 text-red-500"
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
          ) : (
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </header>
  );
}