import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  if (!cart.length) return <main className="section empty-state"><h1>Your cart is empty</h1><p>Add something from the Bailord shop to get started.</p><Link className="btn btn-primary" to="/shop">Shop now</Link></main>;
  return <main className="section"><div className="container"><h1>Your cart</h1><div className="cart-layout"><div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div><Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link><p>{formatCurrency(item.price)}</p><div className="qty"><button onClick={() => updateQuantity(item.id,item.quantity-1)}><Minus/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id,item.quantity+1)}><Plus/></button></div></div><button className="icon-button danger" onClick={() => removeFromCart(item.id)}><Trash2/></button></div>)}</div><aside className="summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{formatCurrency(subtotal)}</strong></div><div><span>Delivery</span><span>Calculated at checkout</span></div><hr/><div><strong>Total</strong><strong>{formatCurrency(subtotal)}</strong></div><Link className="btn btn-primary full" to="/checkout">Proceed to checkout</Link></aside></div></div></main>;
}