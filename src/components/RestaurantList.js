import { useSelector, useDispatch } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors"
import { selectRestaurantsWithPizzas } from "../store/selectors"

export default function RestaurantListt() {

  const restaurants = useSelector(selectRestaurants)

  const restWithPizza = useSelector(selectRestaurantsWithPizzas)
  console.log("respizza", restWithPizza)

  return (
    <div>
      <h1>Restaurant List</h1>
      {restaurants.map(rest => <p>{rest.name}</p>)}
    </div>
  );
}