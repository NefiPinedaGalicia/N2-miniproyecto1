import React from "react";
import LocationInput from "./locationInput";
import GuestSelector from "./guestSelector";
import SearchButton from "./searchButton";

export default function SearchForm({
  stays,
  activeField,
  setActiveField,
  location,
  setLocation,
  guests,
  setGuests,
  onSearch,
}) {
  return (
    <form className="border-2 border-gray-300 rounded-2xl bg-white w-[95%] mx-auto max-w-5xl mt-4 md:grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0">
      <LocationInput
        stays={stays}
        activeField={activeField}
        setActiveField={setActiveField}
        location={location}
        setLocation={setLocation}
      />
      <GuestSelector
        activeField={activeField}
        setActiveField={setActiveField}
        guests={guests}
        setGuests={setGuests}
      />
      <div className="flex items-center justify-center p-2">
        <SearchButton stays={stays} location={location} guests={guests} onClick={onSearch} />
      </div>
    </form>
  );
}