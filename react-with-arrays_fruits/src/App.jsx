import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍉 Watermelon",
      color: "green",
    },
    {
      id: 1340,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1341,
      name: "🍇 Grapes",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      <ul className="fruits">
        {fruits.map((fruit) => {
          return (
            <Card
              key={fruit.id}
              id={fruit.id}
              color={fruit.color}
              name={fruit.name}
            />
          );
        })}
      </ul>
    </div>
  );
}
