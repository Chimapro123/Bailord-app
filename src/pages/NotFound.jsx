import { Link } from "react-router-dom";
export default function NotFound() {
  return <main className="section empty-state"><span className="eyebrow">404</span><h1>Page not found</h1><p>The page you're looking for doesn't exist.</p><Link className="btn btn-primary" to="/">Back to Bailord</Link></main>;
}