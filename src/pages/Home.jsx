import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, BatteryCharging, Headphones, House, ShieldCheck, Smartphone, Truck, Zap } from "lucide-react";
import { products } from "../data/products";
import { energyPackages } from "../data/energy";
import { previewListings } from "../data/homes";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import FAQ from "../components/FAQ";

const stats = [["10K+", "Customers served*"], ["25K+", "Products sold*"], ["5+", "Years in business*"]];
const categories = [["Phones", Smartphone], ["Energy", Zap], ["Audio", Headphones], ["Accessories", BatteryCharging], ["Homes", House]];

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div><span className="eyebrow">ONE TRUSTED NAME • THREE OPPORTUNITIES</span><h1>Technology today.<br /><em>Energy for tomorrow.</em></h1><p>Bailord brings phones and gadgets together with a newly launched solar-energy business and a real-estate partnership coming soon.</p><div className="hero-actions"><Link className="btn btn-white" to="/shop">Shop Phones</Link><Link className="btn btn-outline-white" to="/energy">Go Solar</Link><Link className="btn btn-outline-white" to="/homes">Explore Homes</Link></div></div><div className="hero-card"><Smartphone size={70}/><strong>Smart tech. Smart energy.</strong><span>Built around the Bailord name.</span></div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="THE BAILORD ECOSYSTEM" title="One brand. Three business arms." text="Each arm has a clear purpose while sharing the Bailord name and customer-first approach." /><div className="business-grid">
      <Link className="business-card" to="/shop"><span>Established</span><Smartphone/><h3>Bailord</h3><p>Phones, tablets, laptops, audio, power and everyday gadgets.</p><b>Shop now <ArrowRight size={16}/></b></Link>
      <Link className="business-card featured" to="/energy"><span>New</span><Zap/><h3>Bailord Energy</h3><p>Solar solutions for homes, small businesses, large businesses and industrial clients.</p><b>Explore Energy <ArrowRight size={16}/></b></Link>
      <Link className="business-card" to="/homes"><span>Coming Soon</span><House/><h3>Bailord Homes And More</h3><p>A new real-estate partnership covering homes, land, apartments and commercial spaces.</p><b>Join the waitlist <ArrowRight size={16}/></b></Link>
    </div></div></section>

    <section className="section soft"><div className="container"><SectionTitle eyebrow="TRENDING NOW" title="Featured products" text="Demo catalogue prices and images — verify before launch." /><div className="product-grid">{products.slice(0, 4).map(p => <ProductCard key={p.id} product={p}/>)}</div><Link className="text-link" to="/shop">View all products <ArrowRight size={17}/></Link></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="SHOP BY CATEGORY" title="Find what you need faster" /><div className="category-grid">{categories.map(([name, Icon]) => <Link to={name === "Energy" ? "/energy" : name === "Homes" ? "/homes" : "/shop"} className="category-card" key={name}><Icon/><span>{name}</span><ArrowRight size={17}/></Link>)}</div></div></section>

    <section className="section energy-spotlight"><div className="container two-col"><div><span className="eyebrow">NEW • BAILORD ENERGY</span><h2>Reliable energy, designed around your needs.</h2><p>From residential systems to commercial and industrial projects, Bailord Energy starts with understanding the energy requirement and site.</p><div className="check-list"><p><BadgeCheck/> Residential & small business solutions</p><p><BadgeCheck/> Commercial & industrial solutions</p><p><BadgeCheck/> Assessment-led system sizing</p></div><Link className="btn btn-primary" to="/energy">Explore Bailord Energy</Link></div><div className="energy-image"><img src={energyPackages[0].image} alt="Solar panels" loading="lazy"/></div></div></section>

    <section className="section"><div className="container stats">{stats.map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div><p className="placeholder-note">* Placeholder figures for demonstration. Replace with verified Bailord numbers.</p></section>

    <section className="section soft"><div className="container"><SectionTitle eyebrow="COMING SOON" title="Bailord Homes And More" text="A new real-estate partnership is in progress. Register interest before the official launch."/><div className="listing-grid">{previewListings.map(item => <div className="listing-card" key={item.title}><img src={item.image} alt={item.title} loading="lazy"/><div><span>{item.status}</span><h3>{item.title}</h3><p>{item.location}</p></div></div>)}</div><Link className="btn btn-primary" to="/homes">Register interest</Link></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="WHY BAILORD" title="Built around trust" /><div className="trust-grid">{[["Genuine products", BadgeCheck],["Warranty support", ShieldCheck],["Fast delivery", Truck],["After-sales support", Headphones]].map(([t,I]) => <div key={t} className="trust-card"><I/><h3>{t}</h3><p>Replace this description with verified Bailord policy and service details.</p></div>)}</div></div></section>

    <section className="section soft"><div className="container narrow"><SectionTitle eyebrow="FAQ" title="Questions, answered" center/><FAQ/></div></section>

    <section className="newsletter"><div className="container newsletter-inner"><div><span className="eyebrow">STAY IN THE LOOP</span><h2>Get Bailord updates.</h2><p>Product launches, Energy updates and Homes announcements.</p></div><form onSubmit={e => e.preventDefault()}><input type="email" required placeholder="Your email address"/><button className="btn btn-white">Subscribe</button></form></div></section>
  </main>;
}