export const groupDishByCategory = (dishesList) => {
  if (!dishesList || dishesList.lenght === 0) return {}

  const groupedDishes = {}

  dishesList.forEach((dish) => {
    const category = dish.dish_category
    if (!(category in groupedDishes)) {
      groupedDishes[category] = []
    }
    groupedDishes[category].push(dish)
  })

  return groupedDishes
}
