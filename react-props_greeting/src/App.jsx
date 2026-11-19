export default function App() {
  return (
    <>
      <Greeting name="Martin" />
      <Greeting name="Keitha" />
    </>
  );
}

function Greeting({ name }) {
  return <p>Hello, {name === "Martin" ? "Coach" : name}!</p>;
}
