import { createContext, useContext, useMemo, useState } from "react";
import { products } from "../data/products";
import { previewListings } from "../data/homes";
import { energyPackages } from "../data/energy";

const SearchContext = createContext();

const normalize = value => value.toLowerCase().trim();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return { products: [], energy: [], homes: [] };

    const productsFound = products.filter(p =>
      [p.name, p.brand, p.category, p.genre].some(value => normalize(value).includes(q))
    );
    const energyFound = energyPackages.filter(p =>
      [p.title, p.audience, p.description, "solar", "inverter", "battery"].some(value => normalize(value).includes(q))
    );
    const homesFound = previewListings.filter(p =>
      [p.type, p.title, p.location, "house", "land", "apartment", "real estate"].some(value => normalize(value).includes(q))
    );
    return { products: productsFound, energy: energyFound, homes: homesFound };
  }, [query]);

  return <SearchContext.Provider value={{ query, setQuery, results }}>{children}</SearchContext.Provider>;
}

export const useSearch = () => useContext(SearchContext);