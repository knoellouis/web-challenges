export default function App() {
  const handleClick = () => console.log("button Clicked");

  return (
    <>
      <Button
        backgroundColor="black"
        color="red"
        text="danger!!"
        onClick={handleClick}
      />
      <Button
        backgroundColor="black"
        color="blue"
        disabled={false}
        text="safe"
        onClick={handleClick}
      />
      <Button
        backgroundColor="black"
        color="green"
        disabled={false}
        text="go!"
        onClick={handleClick}
      />
      <Button
        backgroundColor="black"
        color="orange"
        disabled
        text="wait"
        onClick={handleClick}
      />
      <Button
        backgroundColor="black"
        color="yellow"
        disabled
        text="pending"
        onClick={handleClick}
      />
    </>
  );
}

function Button({ backgroundColor, color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
