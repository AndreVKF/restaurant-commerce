const { Router } = require("express")
const PrismaEngine = require("../services/database/PrismaEngine")
const ClientsRouter = require("./clients.routes")
const SessionsRouter = require("./sessions.routes")

const routes = Router()
const dbEngine = new PrismaEngine()

const sessionsRouter = new SessionsRouter(dbEngine)
const clientsRouter = new ClientsRouter(dbEngine)

// linkage to routes
routes.use("/clients", clientsRouter.router)
routes.use("/authenticate", sessionsRouter.router)

module.exports = routes
