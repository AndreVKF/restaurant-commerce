const { Router } = require("express")
const DishesController = require("../controllers/DishesController")

class DishesRouter {
  router

  constructor(dbEngine) {
    this.dishesController = new DishesController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.post("/create", this.dishesController.create)
  }
}

module.exports = DishesRouter
