import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return <article className="product-card">
    <Link to={`/product/${product.id}`} className="product-image"><img src={product.image} alt={product.name} loading="lazy" /></Link>
    <div className="product-info">
      <small>{product.brand} • {product.category}</small>
      <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
      <div className="rating"><Star size={15} fill="currentColor" /> {product.rating}</div>
      <div className="price-row"><strong>{formatCurrency(product.price)}</strong>{product.oldPrice && <del>{formatCurrency(product.oldPrice)}</del>}</div>
      <button className="btn btn-primary full" onClick={() => addToCart(product)}><ShoppingCart size={17} /> Add to cart</button>
    </div>
  </article>;
}