import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Welcome to my React App</h1>
      <p>
        This is my react app. Click on the link below to view my Github profile
      </p>
      <a href="https://github.com/knoellouis">My github profile</a>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
