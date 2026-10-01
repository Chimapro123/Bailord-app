import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";

export default function SearchBar() {
  const { query, setQuery, results } = useSearch();
  const navigate = useNavigate();

  const [showSuggestions, setShowSuggestions] = useState(true);

  const total =
    results.products.length +
    results.energy.length +
    results.homes.length;

  const submit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const closeSearch = () => {
    setQuery("");
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  return (
    <form className="search-box" onSubmit={submit}>
      <Search size={18} />

      <input
        value={query}
        onChange={handleChange}
        placeholder="Search phones, gadgets, solar, homes..."
        aria-label="Search Bailord"
      />

      {query && (
        <button
          type="button"
          className="search-close"
          onClick={closeSearch}
          aria-label="Close search"
        >
          <X size={18} />
        </button>
      )}

      {showSuggestions && query && total > 0 && (
        <div className="search-suggestions">
          {results.products.slice(0, 3).map((p) => (
            <button
              type="button"
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
            >
              {p.name}
              <span>{p.category}</span>
            </button>
          ))}

          {results.energy.slice(0, 2).map((p) => (
            <button
              type="button"
              key={p.id}
              onClick={() => navigate("/energy")}
            >
              {p.title}
              <span>Bailord Energy</span>
            </button>
          ))}

          {results.homes.slice(0, 2).map((p) => (
            <button
              type="button"
              key={p.title}
              onClick={() => navigate("/homes")}
            >
              {p.title}
              <span>Homes</span>
            </button>
          ))}

          <button className="view-all" type="submit">
            View all results →
          </button>
        </div>
      )}
    </form>
  );
}