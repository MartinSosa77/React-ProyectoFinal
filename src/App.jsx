import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  let saludo = "Bienvenidos!";
  return (
    <div className="container-navbar">
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;
