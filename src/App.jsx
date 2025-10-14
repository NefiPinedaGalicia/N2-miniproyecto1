import React from "react";

export default function App() {
  return (
    <>
      <div
        id="title-container"
        class="px-4 md:px-16 pt-6 flex justify-between items-center "
      >
        <h3
          class="text-2xl font-bold dark:text-white"
          style="font-family: 'Montserrat', sans-serif;"
        >
          Stays in Finland
        </h3>
        <p
          id="stays-count"
          class="text-gray-500 dark:text-gray-400 text-sm"
          style="font-family: 'Mulish', sans-serif;"
        >
          12+ stays
        </p>
      </div>
      <div class="px-4 md:px-16 pt-4 flex justify-end">
        <button
          id="sort-rating-btn"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
          <span class="text-sm" style="font-family: 'Mulish', sans-serif;">
            Sort by rating
          </span>
        </button>
      </div>
    </>
  );
}
