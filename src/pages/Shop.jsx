import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import { products, categories } from "../data/products";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [brand, setBrand] = useState("All");
  const brands = ["All", ...new Set(products.map(p => p.brand))];
  const filtered = useMemo(() => {
    let list = products.filter(p => (category === "All" || p.category === category) && (brand === "All" || p.brand === brand));
    if (sort === "low") list = [...list].sort((a,b) => a.price-b.price);
    if (sort === "high") list = [...list].sort((a,b) => b.price-a.price);
    if (sort === "rating") list = [...list].sort((a,b) => b.rating-a.rating);
    return list;
  }, [category, sort, brand]);

  return <main className="section"><div className="container"><SectionTitle eyebrow="BAILORD SHOP" title="Phones & gadgets" text="Demo inventory. Replace all catalogue information with verified Bailord stock."/><div className="shop-toolbar"><div className="filter-pills">{categories.map(c => <button className={category === c ? "active" : ""} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div><div className="selects"><label><SlidersHorizontal size={16}/> Brand<select value={brand} onChange={e => setBrand(e.target.value)}>{brands.map(b => <option key={b}>{b}</option>)}</select></label><label>Sort<select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></label></div></div><div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p}/>)}</div>{!filtered.length && <div className="empty-state"><h3>No products found</h3><p>Try another category or brand.</p></div>}</div></main>;
}