import './App.css';
import PizzaList from "./components/PizzaList"
import RestaurantList from "./components/RestaurantList"

function App() {
  return (
    <div className="App">
      <RestaurantList/>
      <PizzaList/>
    </div>
  );
}

export default App;
