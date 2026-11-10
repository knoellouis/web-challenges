import Header from "../../components/Header.js";
import Form from "../../components/Form.js";
import Cardlist from "../../components/Cardlist.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), Cardlist());

  return app;
}
