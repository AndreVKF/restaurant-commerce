/* 
  index - GET para listar registros
  show - GET para listar registro especifico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELTE para remover um registro
*/

class UserFavoritesController {
  dbEngine
  tbName

  constructor(dbEngine) {
    this.dbEngine = dbEngine
    this.tbName = "Favorites"
  }

  create = async (req, res) => {
    const { id_dish, id_user } = req.body

    const favorite = await this.dbEngine.createSingle(this.tbName, {
      id_dish,
      id_user,
    })

    return res.json(favorite)
  }

  show = async (req, res) => {
    let { id_user } = req.params
    id_user = Number(id_user)

    const favorites = await this.dbEngine.getMany(this.tbName, { id_user })

    return res.json(favorites)
  }

  delete = async (req, res) => {
    const { id_dish, id_user } = req.body

    await this.dbEngine.delete(this.tbName, {
      id_dish_id_user: {
        id_dish,
        id_user,
      },
    })

    return res.json({ message: "Favorito removido com sucesso!!" })
  }
}

module.exports = UserFavoritesController
