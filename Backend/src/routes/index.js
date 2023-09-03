const { Router } = require("express")
const authentication = require("../middleware/authentication")
const PrismaEngine = require("../services/database/PrismaEngine")
const SessionsRouter = require("./sessions.routes")
const ClientsRouter = require("./clients.routes")
const DishDetailsRouter = require("./dish_details.routes")
const CategoriesRouter = require("./categories.routes")
const IngredientsRouter = require("./ingredients.routes")
const DishesRouter = require("./dishes.routes")
const UserFavoritesRouter = require("./user_favorites.routes")

const routes = Router()
const dbEngine = new PrismaEngine()

const sessionsRouter = new SessionsRouter(dbEngine)
const clientsRouter = new ClientsRouter(dbEngine)
const dishDetailsRouter = new DishDetailsRouter(dbEngine)
const categoriesRouter = new CategoriesRouter(dbEngine)
const ingredientsRouter = new IngredientsRouter(dbEngine)
const dishesRouter = new DishesRouter(dbEngine)
const userFavoritesRouter = new UserFavoritesRouter(dbEngine)

// linkage to routes
routes.use("/authenticate", sessionsRouter.router)
routes.use("/clients", clientsRouter.router)
routes.use("/dish_details", authentication, dishDetailsRouter.router)
routes.use("/dish_categories", authentication, categoriesRouter.router)
routes.use("/dish_ingredients", authentication, ingredientsRouter.router)
routes.use("/dish", authentication, dishesRouter.router)
routes.use("/user_favorites", authentication, userFavoritesRouter.router)

module.exports = routes
