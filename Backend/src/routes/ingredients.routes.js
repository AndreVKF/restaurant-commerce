const { Router } = require("express")
const IngredientsController = require("../controllers/IngredientsController")

class IngredientsRouter {
  router

  constructor(dbEngine) {
    this.ingredientsController = new IngredientsController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.get("/", this.ingredientsController.index)
    this.router.get("/:id_ingredient", this.ingredientsController.show)
  }
}

module.exports = IngredientsRouter
