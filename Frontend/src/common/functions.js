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

export const insertStringIntoString = (str, sub, pos) => {
  let output = [str.slice(0, pos), sub, str.slice(pos)].join("")

  return output
}

export const titleizeText = (text) => {
  let wordsArray = text.split(" ")

  let titleizeWordsArray = wordsArray.map((word) => {
    return word.length > 1
      ? `${word.charAt(0).toUpperCase()}${word
          .slice(1, word.length)
          .toLowerCase()}`
      : word.charAt(0).toUpperCase()
  })

  return titleizeWordsArray.join(" ")
}

export const adjustDishPrice = (price) => {
  let strPrice = (price / 100).toFixed(2).replace(".", ",")

  return strPrice
}
