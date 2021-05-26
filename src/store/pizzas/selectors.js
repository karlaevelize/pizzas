export const selectPizzas = reduxState => reduxState.pizzas.allPizzas

export const selectSortedPizzas = reduxState => {
  const myPizzas = [...reduxState.pizzas.allPizzas]

  return myPizzas.sort((a, b) => b.bought - a.bought)
}