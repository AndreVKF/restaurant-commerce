const { Router } = require("express")
const authentication = require("../middleware/authentication")
const PrismaEngine = require("../services/database/PrismaEngine")
const ClientsRouter = require("./clients.routes")
const DishDetailsRouter = require("./dish_details.routes")
const SessionsRouter = require("./sessions.routes")

const routes = Router()
const dbEngine = new PrismaEngine()

const sessionsRouter = new SessionsRouter(dbEngine)
const clientsRouter = new ClientsRouter(dbEngine)
const dishDetailsRouter = new DishDetailsRouter(dbEngine)

// linkage to routes
routes.use("/authenticate", sessionsRouter.router)
routes.use("/clients", clientsRouter.router)
routes.use("/dish_details", authentication, dishDetailsRouter.router)

module.exports = routes
