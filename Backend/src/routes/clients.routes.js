const { Router } = require("express")
const ClientsController = require("../controllers/ClientsController")

const authentication = require("../middleware/authentication")

class ClientsRouter {
  router

  constructor(dbEngine) {
    this.clientsController = new ClientsController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.get("/:id_user", authentication, this.clientsController.show)
    this.router.post("/", this.clientsController.create)
  }
}

module.exports = ClientsRouter
