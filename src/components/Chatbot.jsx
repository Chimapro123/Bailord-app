import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { useChat } from "../context/ChatContext";

const PHONE_NUMBER = "REPLACE_WITH_WHATSAPP_NUMBER";

export default function Chatbot() {
  const { messages, sendMessage, open, setOpen } = useChat();
  const [input, setInput] = useState("");
  const submit = e => { e.preventDefault(); sendMessage(input); setInput(""); };

  if (!open) return <button className="chat-launcher" onClick={() => setOpen(true)}><MessageCircle /> Ask BailBot🤖</button>;

  return <div className="chatbot">
    <div className="chat-header"><div><strong>Ask BailBot🤖</strong><small>Verified knowledge base</small></div><button onClick={() => setOpen(false)}><X /></button></div>
    <div className="chat-messages">
      {messages.map((m, i) => <div key={i} className={`chat-message ${m.role}`}>{m.text}{m.text.includes("WhatsApp") && <a href={`https://wa.me/${ +2348037885880}`} target="_blank" rel="noreferrer"> Contact Bailord on WhatsApp →</a>}</div>)}
    </div>
    <div className="quick-replies"><button onClick={() => sendMessage("What is Bailord Energy?")}>Solar</button><button onClick={() => sendMessage("What is your delivery policy?")}>Delivery</button><button onClick={() => sendMessage("Tell me about Homes")}>Homes</button></div>
    <form className="chat-input" onSubmit={submit}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a question..." /><button><Send size={18} /></button></form>
  </div>;
}