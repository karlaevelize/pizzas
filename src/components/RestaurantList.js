import { useSelector, useDispatch } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors"

export default function RestaurantListt() {

  const restaurants = useSelector(selectRestaurants)

  return (
    <div>
    <h1>Restaurant List</h1>
    {restaurants.map(rest => rest.name)}
    </div>
  );
}