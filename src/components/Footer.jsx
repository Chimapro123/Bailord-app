import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="logo footer-logo"><span>B</span>Bailord</Link><p>Phones, gadgets, energy solutions and a growing property partnership — under one trusted name.</p><div className="socials"><a href="#" aria-label="Facebook"><Facebook /></a><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="LinkedIn"><Linkedin /></a><a href="#" aria-label="Twitter"><Twitter /></a></div></div>
        <div><h4>Shop</h4><Link to="/shop">Phones & Gadgets</Link><Link to="/shop">Accessories</Link><Link to="/cart">Cart</Link><Link to="/checkout">Checkout</Link></div>
        <div><h4>Business Arms</h4><Link to="/energy">Bailord Energy</Link><Link to="/energy/quote">Request Solar Quote</Link><Link to="/homes">Bailord Homes And More</Link></div>
        <div><h4>Contact</h4><p><MapPin size={15} /> 2 Ijegun Rd, Alimosho, Lagos 102213, Lagos, Nigeria</p><p><Phone size={15} /> 08037885880</p><p><Mail size={15} /> REPLACE WITH EMAIL</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bailord. All rights reserved.</span> <a href="https://chimapro123.github.io/portfolio-React/"><span>Built by Dtech companies </span></a> <span>Secure checkout • Genuine products • Support</span></div>
    </footer>
  );
}