class IngredientsController {
  dbEngine
  tbName

  constructor(dbEngine) {
    this.dbEngine = dbEngine
    this.tbName = "Ingredients"
  }

  index = async (req, res) => {
    const ingredients = await this.dbEngine.getMany(this.tbName)

    return res.json(ingredients)
  }

  show = async (req, res) => {
    const { id_ingredient } = req.params
    const ingredient = await this.dbEngine.getUnique(this.tbName, {
      id_ingredient,
    })

    return res.json(ingredient)
  }
}

module.exports = IngredientsController
