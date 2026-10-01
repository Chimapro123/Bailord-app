import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { itemCount } = useCart();
  const close = () => setMenu(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={close}><span>B</span>Bailord</Link>
        <div className="desktop-search"><SearchBar /></div>
        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/shop" onClick={close}>Shop</NavLink>
          <NavLink to="/energy" onClick={close}>Energy <b>New</b></NavLink>
          <NavLink to="/homes" onClick={close}>Homes <b>Soon</b></NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
        <Link to="/cart" className="cart-button" aria-label="Shopping cart"><ShoppingCart size={21} /><span>{itemCount}</span></Link>
      </div>
      <div className="mobile-search container"><SearchBar /></div>
    </header>
  );
}