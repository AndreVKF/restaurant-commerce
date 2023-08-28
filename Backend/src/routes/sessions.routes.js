const { Router } = require("express")
const SessionsController = require("../controllers/SessionsController")

const authenticate = require("../middleware/authentication")

class SessionsRouter {
  router

  constructor(dbEngine) {
    this.sessionsController = new SessionsController(dbEngine)
    this.router = Router()

    this.setRouters()
  }

  setRouters = () => {
    this.router.post("/", this.sessionsController.create)
    this.router.get("/validate", this.sessionsController.validate)
  }
}

module.exports = SessionsRouter
