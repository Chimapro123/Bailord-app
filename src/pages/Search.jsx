import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { useSearch } from "../context/SearchContext";

export default function Search() {
  const [params] = useSearchParams();
  const { query, setQuery, results } = useSearch();
  useEffect(() => { setQuery(params.get("q") || ""); }, [params, setQuery]);
  const total = results.products.length + results.energy.length + results.homes.length;
  return <main className="section"><div className="container"><SectionTitle eyebrow="SEARCH" title={`Results for "${query}"`} text={`${total} result${total === 1 ? "" : "s"} found.`}/>{results.products.length > 0 && <><h2>Phones & gadgets</h2><div className="product-grid">{results.products.map(p=><ProductCard key={p.id} product={p}/>)}</div></>}{results.energy.length > 0 && <section className="search-group"><h2>Bailord Energy</h2>{results.energy.map(e=><Link className="result-banner" to="/energy" key={e.id}><strong>{e.title}</strong><span>{e.audience}</span></Link>)}</section>}{results.homes.length > 0 && <section className="search-group"><h2>Bailord Homes And More</h2>{results.homes.map(h=><Link className="result-banner" to="/homes" key={h.title}><strong>{h.title}</strong><span>{h.status}</span></Link>)}</section>}{query && !total && <div className="empty-state"><h2>No results</h2><p>Try “iPhone”, “Samsung”, “inverter”, “solar”, “house”, “land” or “apartment”.</p><Link className="btn btn-primary" to="/shop">Browse the shop</Link></div>}</div></main>;
}