import { createContext, useContext, useState } from "react";
import { knowledgeBase } from "../data/knowledgeBase";

const ChatContext = createContext();

function getAnswer(message) {
  const text = message.toLowerCase();
  for (const faq of knowledgeBase.faqs) {
    if (faq.keywords.some(keyword => text.includes(keyword))) return faq.answer;
  }
  if (text.includes("who are you") || text.includes("bailord")) return knowledgeBase.company.description;
  return `I don't have that information. Please contact our team on WhatsApp for accurate help.`;
}

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm BailBot🤖. I can answer questions using Bailord's verified knowledge base." }
  ]);
  const [open, setOpen] = useState(false);

  const sendMessage = (message) => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: message }]);
    setTimeout(() => setMessages(prev => [...prev, { role: "bot", text: getAnswer(message) }]), 550);
  };

  return <ChatContext.Provider value={{ messages, sendMessage, open, setOpen }}>{children}</ChatContext.Provider>;
}

export const useChat = () => useContext(ChatContext);