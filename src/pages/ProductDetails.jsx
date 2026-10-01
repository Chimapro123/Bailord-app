import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selected, setSelected] = useState(0);
  if (!product) return <div className="section empty-state"><h2>Product not found</h2><Link className="btn btn-primary" to="/shop">Back to shop</Link></div>;

  return <main className="section"><div className="container product-detail"><div className="gallery"><div className="thumbs">{product.gallery.map((img,i) => <button className={selected === i ? "selected" : ""} onClick={() => setSelected(i)} key={img}><img src={img} alt={`${product.name} view ${i+1}`} /></button>)}</div><div className="main-product-image"><img src={product.gallery[selected]} alt={product.name}/></div></div><div className="product-copy"><small>{product.brand} • {product.category}</small><h1>{product.name}</h1><div className="rating"><Star size={17} fill="currentColor"/> {product.rating} rating</div><h2>{formatCurrency(product.price)}</h2>{product.oldPrice && <del>{formatCurrency(product.oldPrice)}</del>}<p>{product.description}</p><ul className="spec-list">{Object.entries(product.specs).map(([k,v]) => <li key={k}><Check size={17}/><strong>{k}:</strong> {v}</li>)}</ul><button className="btn btn-primary" onClick={() => addToCart(product)}><ShoppingCart/> Add to cart</button><p className="placeholder-note">Verify current price, availability, specifications and warranty before publishing.</p></div></div></main>;
}