import "./Card.css";

export default function Card(fruitName) {
  const { id, name, color } = fruitName;
  return (
    <li key={id} className={name} id={id} style={{ backgroundColor: color }}>
      {name}
    </li>
  );
}
