import "./styles.css";

function CreateArticle() {
  return (
    <article>
      <h2 className="article__title">My React Journey</h2>
      <label htmlFor="input-text">Add some text to the box</label>
      <input type="text" id="input-text" />
      <a href="https://github.com/knoellouis" className="article__link">
        See more on Github
      </a>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <CreateArticle />
    </div>
  );
}
