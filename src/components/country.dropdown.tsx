import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { CiSearch, CiCircleCheck } from "react-icons/ci";
import type { Country } from "@/components/types/country.type.ts";
import { countryData } from "@/components/country.data.ts";

interface CountryDropdownProps {
  selected: Country;
  onSelect: (country: Country) => void;
  onClose: () => void;
}

export const CountryDropdown = forwardRef<HTMLDivElement, CountryDropdownProps>(
  ({ selected, onSelect, onClose }, ref) => {
    const [search, setSearch] = useState("");
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      searchRef.current?.focus();
    }, []);

    const filtered = useMemo(() => {
      const q = search.toLowerCase().trim();
      if (!q) return countryData;
      return countryData.filter(
        (c) =>
          c.country.toLowerCase().includes(q) ||
          c.code.includes(q) ||
          c.iso.toLowerCase().includes(q)
      );
    }, [search]);

    return (
      <div
        ref={ref}
        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg shadow-accent-500/15 border border-accent-200 z-50 overflow-hidden"
        style={{ animation: "dropdownIn 0.15s ease-out" }}
      >
        <div className="p-2 border-b border-accent-200">
          <div className="relative">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or code..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 rounded-lg border border-transparent focus:border-accent-300 focus:bg-white focus:ring-1 focus:ring-accent-200 focus:outline-none transition-all duration-150 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="max-h-56 overflow-y-auto overscroll-contain">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-400">No countries found</div>
          ) : (
            filtered.map((country, index) => {
              const isSelected = selected.iso === country.iso;
              return (
                <button
                  key={`${country.iso}-${index}`}
                  type="button"
                  onClick={() => {
                    onSelect(country);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100 group
                    ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
                >
                  <span className="text-xl leading-none shrink-0">{country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-medium text-gray-800 truncate">{country.country}</span>
                    <span className="block text-xs text-gray-400">{country.code}</span>
                  </div>
                  {isSelected && <CiCircleCheck className="w-4 h-4 text-blue-500 shrink-0" />}
                </button>
              );
            })
          )}
        </div>
      </div>
    );
  }
);