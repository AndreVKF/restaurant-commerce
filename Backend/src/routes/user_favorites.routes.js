const { Router } = require("express")
const UserFavoritesController = require("../controllers/UserFavoritesController")

class UserFavoritesRouter {
  router

  constructor(dbEngine) {
    this.userFavoritesController = new UserFavoritesController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.get("/:id_user", this.userFavoritesController.show)
    this.router.post("/", this.userFavoritesController.create)
    this.router.delete("/", this.userFavoritesController.delete)
  }
}

module.exports = UserFavoritesRouter
