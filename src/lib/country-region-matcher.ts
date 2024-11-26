//@ts-ignore
import countryRegionData from "country-region-data/dist/data-umd";

export interface Region {
  name: string;
  shortCode: string;
}

export interface CountryRegion {
  countryName: string;
  countryShortCode: string;
  regions: Region[];
}

export const getCountryAndRegionName = (countryCode: string, regionCode: string) => {
  const fullCountry = countryRegionData.find(
    (countryRegion: CountryRegion) => countryRegion.countryShortCode === countryCode
  );

  if (fullCountry) {
    return {
      country: fullCountry.countryName,
      region:
        fullCountry.regions.find((region: Region) => region.shortCode === regionCode).name ||
        regionCode
    };
  }

  return {
    country: countryCode,
    region: regionCode
  };
};
