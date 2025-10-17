import React, { useState } from "react";
import Header from "./components/header";
import Cards from "./components/cards";
import Search from "./components/Search/search";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filteredStays, setFilteredStays] = useState(null);
  const [summary, setSummary] = useState({ location: "", guests: 0 });

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (results) => {
    setFilteredStays(results.filtered);
    setSummary({
      location: results.location,
      guests: results.guests,
    });
  };

  const clearSearch = () => {
    setFilteredStays(null);
    setSummary({ location: "", guests: 0 });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        toggleSearch={toggleSearch}
        summary={summary}
        filteredStays={filteredStays}
        clearSearch={clearSearch}
      />

      <main>
        <div className="px-4 md:px-16 pt-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {summary.location
              ? `Stays in ${summary.location}, Finland`
              : "Stays in Finland"}
          </h1>

          <p
            className="text-gray-600"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {filteredStays ? `${filteredStays.length} stays` : "12+ stays"}
          </p>
        </div>

        <Cards filteredStays={filteredStays} />

        <Search
          isSearchOpen={isSearchOpen}
          toggleSearch={toggleSearch}
          onSearch={handleSearch}
          filteredStays={filteredStays}
        />
      </main>
    </div>
  );
}
