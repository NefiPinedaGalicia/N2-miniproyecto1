import React, { useState, useEffect } from "react";

export default function GuestSelector({
  activeField,
  setActiveField,
  guests,
  setGuests,
}) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    if (guests === 0) {
      setAdults(0);
      setChildren(0);
    }
  }, [guests]);

  const updateGuests = (a, c) => {
    const total = a + c;
    setAdults(a);
    setChildren(c);
    setGuests(total);
  };

  return (
    <div
      className={`p-3 relative z-0 transition-all duration-200 rounded-2xl border-2 ${
        activeField === "guests" ? "border-gray-800" : "border-transparent"
      }`}
      onClick={() => setActiveField("guests")}
    >
      <label className="block text-xs font-semibold text-gray-800 mb-1 font-montserrat">
        GUESTS
      </label>
      <div className="text-gray-600 text-sm font-mulish">
        {guests === 0
          ? "Add guests"
          : `${guests} guest${guests > 1 ? "s" : ""}`}
      </div>

      {activeField === "guests" && (
        <div className="mt-4 space-y-4">
          {[
            {
              label: "Adults",
              sub: "Ages 13 or above",
              count: adults,
            },
            {
              label: "Children",
              sub: "Ages 12 or below",
              count: children,
            },
          ].map(({ label, sub, count }, i) => (
            <div key={i}>
              <div>
                <h3 className="text-sm font-semibold font-montserrat">{label}</h3>
                <p className="text-xs text-gray-500 font-mulish">{sub}</p>
              </div>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  disabled={count === 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateGuests(
                      label === "Adults" ? count - 1 : adults,
                      label === "Children" ? count - 1 : children
                    )
                  }}
                  className={`w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center ${
                    count === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="mx-4 text-sm font-mulish">{count}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateGuests(
                      label === "Adults" ? count + 1 : adults,
                      label === "Children" ? count + 1 : children
                    )
                  }}
                  className="w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}