/* 
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

class DishDetailsController {
  dbEngine

  constructor(dbEngine) {
    this.dbEngine = dbEngine
  }

  index = async (req, res) => {
    const dishes = await this.dbEngine.getDishesDetails()

    return res.json(dishes)
  }

  show = async (req, res) => {
    const id_dish = req.params.id_dish
    let [dish] = await this.dbEngine.getDishDetails(id_dish)

    if (!dish) {
      dish = {}
    }
    return res.json(dish)
  }
}

module.exports = DishDetailsController
