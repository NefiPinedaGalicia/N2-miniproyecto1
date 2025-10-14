import React from "react";

export default function search() {
  return (
    <div
      id="search-overlay"
      class="hidden inset-0 bg-black/30 md:bg-black/50 z-40 transition-all duration-300 opacity-0"
    >
      <div
        id="search-container-mobile"
        class="fixed inset-0 bg-white z-50 h-[85vh] md:h-[50vh] flex flex-col transform transition-all duration-300 ease-out -translate-y-full"
      >
        <div class="flex justify-between items-center p-4 md:hidden">
          <h2
            class="text-lg font-semibold"
            style="font-family: 'Montserrat', sans-serif;"
          >
            Edit your search
          </h2>
          <button id="close-search" class="p-2">
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex flex-col justify-between flex-1 md:justify-start md:items-center md:pt-16">
          <div class="w-[95%] mx-auto">
            <div id="container-form" class="w-full">
              <form class="border-2 border-gray-300 rounded-2xl bg-white w-full max-w-none md:grid md:grid-cols-3 md:divide-y-0 divide-y divide-gray-200">
                <div class="p-3 rounded-2xl relative z-0 transition-all duration-200 border-2 border-transparent">
                  <label
                    class="block text-xs font-semibold text-gray-800 mb-1 text-left"
                    style="font-family: 'Montserrat', sans-serif;"
                  >
                    LOCATION
                  </label>
                  <input
                    type="text"
                    class="w-full text-left text-gray-600 text-sm outline-none"
                    placeholder="Add location"
                    style="font-family: 'Mulish', sans-serif;"
                  />
                </div>

                <div class="p-3 rounded-2xl relative z-0 transition-all duration-200 border-2 border-transparent">
                  <label
                    class="block text-xs font-semibold text-gray-800 mb-1 text-left"
                    style="font-family: 'Montserrat', sans-serif;"
                  >
                    GUESTS
                  </label>
                  <div
                    class="text-left text-gray-600 text-sm"
                    style="font-family: 'Mulish', sans-serif;"
                  >
                    <span id="guest-count">0</span> <span>guests</span>
                  </div>
                </div>

                <div class="hidden md:flex md:items-center md:justify-center rounded-2xl relative z-0">
                  <button
                    id="search-desktop"
                    class="bg-red-500 text-white px-6 py-3 rounded-2xl flex items-center space-x-2"
                    style="font-family: 'Montserrat', sans-serif;"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <span>Search</span>
                  </button>
                </div>
              </form>
            </div>

            <div class="w-full md:grid md:grid-cols-3 md:gap-1 md:mt-4">
              <div id="container-location"></div>

              <div
                id="container-guests"
                class="flex flex-col items-start md:items-center"
              >
                <div class="max-w-sm mt-6 px-2 md:max-w-none md:mt-0 md:px-0 md:mx-auto">
                  <div class="mb-3">
                    <h3
                      class="text-sm font-medium text-left"
                      style="font-family: 'Montserrat', sans-serif;"
                    >
                      Adults
                    </h3>
                    <p
                      class="text-xs text-gray-500 text-left"
                      style="font-family: 'Mulish', sans-serif;"
                    >
                      Ages 13 or above
                    </p>
                  </div>
                  <div
                    class="flex items-center justify-start"
                    style="width: fit-content;"
                  >
                    <button
                      id="adults-minus"
                      class="w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <span
                      id="adults-count"
                      class="mx-4 text-sm"
                      style="font-family: 'Mulish', sans-serif;"
                    >
                      0
                    </span>
                    <button
                      id="adults-plus"
                      class="w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="max-w-sm mt-6 px-2 md:max-w-none md:mt-4 md:px-0 md:mx-auto">
                  <div class="mb-3">
                    <h3
                      class="text-sm font-medium text-left"
                      style="font-family: 'Montserrat', sans-serif;"
                    >
                      Children
                    </h3>
                    <p
                      class="text-xs text-gray-500 text-left"
                      style="font-family: 'Mulish', sans-serif;"
                    >
                      Age 12 or below
                    </p>
                  </div>
                  <div
                    class="flex items-center justify-start"
                    style="width: fit-content;"
                  >
                    <button
                      id="children-minus"
                      class="w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    </button>
                    <span
                      id="children-count"
                      class="mx-4 text-sm"
                      style="font-family: 'Mulish', sans-serif;"
                    >
                      0
                    </span>
                    <button
                      id="children-plus"
                      class="w-8 h-8 border border-gray-400 bg-gray-100 rounded flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="md:hidden">
                <div id="container-location-mobile"></div>
              </div>
            </div>
          </div>

          <div class="flex justify-center pb-2 md:hidden">
            <button
              id="search-final"
              class="bg-red-500 text-white px-6 py-3 rounded-2xl flex items-center space-x-2"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
