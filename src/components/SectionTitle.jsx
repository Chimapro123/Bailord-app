export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return <div className={`section-title ${center ? "center" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}