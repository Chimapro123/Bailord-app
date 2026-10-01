import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "REPLACE_WITH_WHATSAPP_NUMBER";

export default function WhatsAppButton() {
  const href = `https://wa.me/${+2348032037218}?text=${encodeURIComponent("Hello Bailord, I would like to make an enquiry.")}`;
  return <a className="whatsapp" href={href} target="_blank" rel="noreferrer" aria-label="Chat with Bailord on WhatsApp"><MessageCircle size={25} /></a>;
}