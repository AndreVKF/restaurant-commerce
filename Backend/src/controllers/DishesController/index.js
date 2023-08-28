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
    console.log(req.file)
    const { id_dish_category, name, description, price, ingredients } = req.body
    const data = {
      id_dish_category,
      name: name.toUpperCase(),
      description,
      price,
    }
    const dishImage = req?.file?.filename

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
      const imageFilename = diskStorage.saveFile(dishImage)
      data.image_url = imageFilename
    }

    const dish = await this.dbEngine.createSingle(this.tbName, data)

    const id_dish = dish.id_dish
    const insertIngredients = ingredients.map((ingredient) => {
      return this.dbEngine.createSingle("Dish_Receipe", {
        id_dish,
        id_ingredient: ingredient.value,
      })
    })

    Promise.all(insertIngredients)
      .then(res.json(dish))
      .catch((err) => {
        throw new ErrorHandler("Não foi possível atualizar ingredientes!!")
      })
  }
}

module.exports = DishesController
