const { Router } = require("express")
const DishDetailsController = require("../controllers/DishDetailsController")

class DishDetailsRouter {
  router

  constructor(dbEngine) {
    this.dishDetailsController = new DishDetailsController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.get("/", this.dishDetailsController.index)
    this.router.get("/:id_dish", this.dishDetailsController.show)
  }
}

module.exports = DishDetailsRouter
