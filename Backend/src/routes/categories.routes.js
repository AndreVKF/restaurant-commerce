const { Router } = require("express")
const CategoriesController = require("../controllers/CategoriesController")

class CategoriesRouter {
  router

  constructor(dbEngine) {
    this.categoriesController = new CategoriesController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.get("/", this.categoriesController.index)
    this.router.get("/:id_category", this.categoriesController.show)
  }
}

module.exports = CategoriesRouter
