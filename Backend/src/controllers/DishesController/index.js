/* 
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

const ErrorHandler = require("../../common/ErrorHandler")
const DiskStorage = require("../../services/DiskStorage")

class DishesController {
  dbEngine
  tbName

  constructor(dbEngine) {
    this.dbEngine = dbEngine
    this.tbName = "Dishes"
  }

  create = async (req, res) => {
    const { id_dish_category, name, description, price, ingredients } = req.body
    const data = {
      id_dish_category: Number(id_dish_category),
      name: name.toUpperCase(),
      description,
      price: Number(price) * 100,
    }
    const dishImage = req?.file?.filename
    const ingredientsParsed = JSON.parse(ingredients)

    // check if dish is already registered
    const isDishOnDb = await this.dbEngine.getUnique(this.tbName, {
      name: data.name,
    })

    if (isDishOnDb) {
      throw new ErrorHandler("Prato já está cadastrado na base de dados!!")
    }

    // add image
    if (dishImage) {
      const diskStorage = new DiskStorage()
      const imageFilename = await diskStorage.saveFile(dishImage)

      data.image_url = imageFilename
    }

    const dish = await this.dbEngine.createSingle(this.tbName, data)

    const id_dish = dish.id_dish

    const insertIngredients = ingredientsParsed.map((ingredient) => {
      return this.dbEngine.createSingle("Dish_Receipe", {
        id_dish,
        id_ingredient: Number(ingredient.value),
      })
    })

    Promise.all(insertIngredients)
      .then(res.json(dish))
      .catch((err) => {
        throw new ErrorHandler("Não foi possível atualizar ingredientes!!")
      })
  }

  update = async (req, res) => {
    let id_dish = Number(req.params.id_dish)
    const { id_dish_category, name, description, price, ingredients } = req.body
    const data = {
      id_dish_category: Number(id_dish_category),
      name: name.toUpperCase(),
      description,
      price: Number(price) * 100,
    }

    const dishImage = req?.file?.filename
    const ingredientsParsed = JSON.parse(ingredients)

    // check if dish is not registered
    const isDishOnDb = await this.dbEngine.getUnique(this.tbName, { id_dish })

    if (!isDishOnDb) {
      throw new ErrorHandler("Prato não está cadastrado na base de dados!!")
    }

    // add image
    if (dishImage) {
      const diskStorage = new DiskStorage()
      const imageFilename = await diskStorage.saveFile(dishImage)

      data.image_url = imageFilename
    }

    const updatedRecord = await this.dbEngine.update(
      this.tbName,
      { id_dish },
      data
    )

    if (!updatedRecord) {
      throw new ErrorHandler("Não foi possível atualizar prato!!")
    }

    // update ingredients
    await this.dbEngine.deleteMany("Dish_Receipe", { id_dish })

    const insertIngredients = ingredientsParsed.map((ingredient) => {
      return this.dbEngine.createSingle("Dish_Receipe", {
        id_dish,
        id_ingredient: Number(ingredient.value),
      })
    })

    Promise.all(insertIngredients)
      .then(res.json(updatedRecord))
      .catch((err) => {
        throw new ErrorHandler("Não foi possível atualizar ingredientes!!")
      })
  }

  delete = async (req, res) => {
    const { id_dish } = req.params

    try {
      await this.dbEngine.delete(this.tbName, {
        id_dish: Number(id_dish),
      })
      return res.json({ message: `Prado ${id_dish} deletado com sucesso!!` })
    } catch {
      throw new ErrorHandler("Não foi possível deletar prato!!")
    }
  }
}

module.exports = DishesController
