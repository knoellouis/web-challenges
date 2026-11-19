export default function App() {
  return (
    <>
      <Button color="red" text="danger!!" />
      <Button color="blue" disabled={false} text="safe" />
      <Button color="green" disabled={false} text="go!" />
      <Button color="orange" disabled text="wait" />
      <Button color="yellow" disabled text="pending" />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ color }} disabled={disabled}>
      {text}
    </button>
  );
}
