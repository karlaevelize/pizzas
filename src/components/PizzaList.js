import { useSelector, useDispatch } from "react-redux";
import AddPizzaForm from "./AddPizzaForm"
import { selectUser } from "../store/user/selectors"
import { selectPizzas, selectSortedPizzas } from "../store/pizzas/selectors"
import { toggleFavorite } from "../store/user/actions"

export default function PizzaList() {

  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  const pizzas = useSelector(selectPizzas)
  const sortedPizzas = useSelector(selectSortedPizzas)

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>Welcome back, <b>{user.name}</b>, here are our pizzas:</p>
      <p>We have {pizzas.length} pizzas</p>
      <AddPizzaForm/>
      <div>
        {sortedPizzas.map(pizza => {
          return (
            <div key ={pizza.id}>
              <h4>{pizza.name}</h4>
              <button onClick={() => dispatch(toggleFavorite(pizza.id))}>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>
              <p>Bought {pizza.bought} times</p>
              <img src={pizza.image}/>
              <p>{pizza.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}