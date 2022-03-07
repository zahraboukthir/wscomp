import "./App.css";
import Navigation from "./Component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Foote from "./Component/Footer/Foote";
import ProductList from "./Component/ProductList";
import Produits from "./Component/Produits";

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductList />
      <Produits />
      <Foote />
    </div>
  );
}

export default App;
