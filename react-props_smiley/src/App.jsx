export default function App() {
  return (
    <>
      <Smiley isHappy />
      <Smiley isHappy={false} />
      <Smiley isHappy />
      <Smiley isHappy={false} />
      <Smiley isHappy />
      <Smiley isHappy={false} />
      <Smiley isHappy />
      <Smiley isHappy={false} />
    </>
  );
}

function Smiley({ isHappy }) {
  return <p>{isHappy ? "😃" : "☹️"}</p>;
}
