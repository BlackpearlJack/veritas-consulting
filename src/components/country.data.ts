import { countries, getEmojiFlag, type TCountryCode } from "countries-list";
import type { Country } from "./types/country.type";

/**
 * Transforms countries-list v3.3.0 data into the application's Country interface.
 * * Version 3.3.0 Changes:
 * 1. `phone` is now an array of numbers (e.g., [1] or [254]).
 * 2. `emoji` property is removed from the object; use `getEmojiFlag(iso)` instead.
 */
export const getCountryData = (): Country[] => {
  return Object.entries(countries).map(([isoKey, countryData]) => {
    // In v3, phone is an array. We take the first element.
    const primaryDialCode = countryData.phone.length > 0 ? countryData.phone[0] : "";

    return {
      iso: isoKey,
      country: countryData.name,
      // Prepend + only if a dial code exists
      code: primaryDialCode ? `+${primaryDialCode}` : "",
      // Use the utility to generate the emoji flag from the ISO code
      flag: getEmojiFlag(isoKey as TCountryCode),
    };
  });
};

/**
 * Pre-computed country list for runtime usage.
 * This avoids re-mapping the object every time the data is needed.
 */
export const countryData: Country[] = getCountryData();