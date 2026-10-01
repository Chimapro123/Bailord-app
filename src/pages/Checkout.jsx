import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const submit = e => { e.preventDefault(); setSubmitted(true); clearCart(); };
  if (submitted) return <main className="section empty-state"><h1>Order request received</h1><p>This is a front-end demo. Connect this form to Bailord's verified payment/order backend before launch.</p><Link className="btn btn-primary" to="/">Return home</Link></main>;
  if (!cart.length) return <main className="section empty-state"><h1>No items to checkout</h1><Link className="btn btn-primary" to="/shop">Shop now</Link></main>;
  return <main className="section"><div className="container checkout-grid"><form className="form-card" onSubmit={submit}><h1>Checkout</h1><p className="muted">Front-end only for now. No payment is processed.</p><div className="form-grid"><label>Full name<input required /></label><label>Email<input type="email" required /></label><label>Phone<input required /></label><label>City<input required /></label><label className="full-field">Delivery address<textarea required rows="4"/></label></div><button className="btn btn-primary">Place order request</button></form><aside className="summary"><h2>Summary</h2>{cart.map(i => <div key={i.id}><span>{i.name} × {i.quantity}</span><strong>{formatCurrency(i.price*i.quantity)}</strong></div>)}<hr/><div><strong>Total</strong><strong>{formatCurrency(subtotal)}</strong></div></aside></div></main>;
}