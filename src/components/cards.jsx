import React, { useEffect, useState } from "react";

export default function Cards({ filteredStays }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (filteredStays === null) {
      fetch("/stays.json")
        .then((response) => response.json())
        .then((data) => setCards(data));
    } else {
      setCards(filteredStays);
    }
  }, [filteredStays]);

  if (cards.length === 0) {
    return (
      <div className="text-center text-gray-500 font-mulish mt-20 text-lg">
        No stays found
      </div>
    );
  }

  return (
    <div id="cards-container" className="px-4 md:px-16 pt-4">
      <div
        id="card-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {cards.map((stay, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div style={{ paddingTop: "75%" }} className="relative">
              <img
                src={stay.photo}
                alt={stay.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  {stay.superHost && (
                    <div className="border border-gray-800 rounded px-2 py-1 mb-2 font-bold text-xs inline-block">
                      SUPER HOST
                    </div>
                  )}
                  <div className="font-bold text-lg mb-1">{stay.title}</div>
                </div>
                <span className="text-red-600 font-bold">{stay.rating}</span>
              </div>
              <div className="text-gray-700 text-sm">
                {stay.type}
                {stay.beds !== null ? `, ${stay.beds} beds` : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
