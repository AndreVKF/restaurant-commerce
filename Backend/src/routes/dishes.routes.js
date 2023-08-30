const { Router } = require("express")
const DishesController = require("../controllers/DishesController")
const multer = require("multer")
const uploadConfig = require("../configs/uploads")

const upload = multer(uploadConfig.MULTER)

class DishesRouter {
  router

  constructor(dbEngine) {
    this.dishesController = new DishesController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.post(
      "/create",
      upload.single("dish_image"),
      this.dishesController.create
    )
    this.router.post(
      "/update/:id_dish",
      upload.single("dish_image"),
      this.dishesController.update
    )
    this.router.delete("/:id_dish", this.dishesController.delete)
  }
}

module.exports = DishesRouter
