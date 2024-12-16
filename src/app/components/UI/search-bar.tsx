import React from "react";
import { Input } from "@nextui-org/react";
// Search Bar Component
const SearchBar: React.FC<{
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}> = ({ searchTerm, onSearch, onClear }) => (
  <div className="flex items-center mb-6">
    <Input
      label="Search Orders"
      value={searchTerm}
      onChange={onSearch}
      placeholder="Search by name or confirmation number"
      className="w-full md:w-1/3"
    />
    <button
      onClick={onClear}
      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Clear
    </button>
  </div>
);

export default SearchBar;
