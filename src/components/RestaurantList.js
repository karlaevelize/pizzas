import { useSelector, useDispatch } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors"
import { selectRestaurantsWithPizzas } from "../store/selectors"

export default function RestaurantListt() {

  const restaurants = useSelector(selectRestaurants)

  const restWithPizza = useSelector(selectRestaurantsWithPizzas)

  return (
    <div>
      <h1>Restaurant List</h1>
      {/* code added after the lecture */}
        {restWithPizza.map(restaurant => (
          <div>
           <p> Restaurant: <b>{restaurant.name}</b></p>
            <p>
             {restaurant.pizzas.map(pizza => (
                <li key={pizza.id}>{pizza.name}</li>
              ))}
            </p>
          </div>
        ))}
    </div>
  );
}