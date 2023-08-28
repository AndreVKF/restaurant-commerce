/* 
  index - GET para exibir registros
  show - GET para exibir um único registro
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

class CategoriesController {
  dbEngine
  tbName

  constructor(dbEngine) {
    this.dbEngine = dbEngine
    this.tbName = "Dish_Categories"
  }

  index = async (req, res) => {
    const categories = await this.dbEngine.getMany(this.tbName)
    return res.json(categories)
  }

  show = async (req, res) => {
    const { id_category } = req.params
    const category = await this.dbEngine.getUnique(this.tbName, { id_category })

    return res.json(category)
  }
}

module.exports = CategoriesController
