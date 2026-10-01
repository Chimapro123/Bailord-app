import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["Are Bailord products genuine?", "Replace this placeholder with Bailord's verified authenticity policy before launch."],
  ["Do you offer warranty?", "Warranty information should be replaced with Bailord's verified warranty terms for each product."],
  ["Can Bailord Energy handle commercial projects?", "Yes, Bailord Energy is positioned for larger business and industrial clients, with final scope determined after project assessment."],
  ["When will Bailord Homes And More launch?", "It is currently marked Coming Soon / Partnership in Progress. Register interest to receive updates."]
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  return <div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setActive(active === i ? -1 : i)}>{q}<ChevronDown className={active === i ? "rotate" : ""} /></button>{active === i && <p>{a}</p>}</div>)}</div>;
}