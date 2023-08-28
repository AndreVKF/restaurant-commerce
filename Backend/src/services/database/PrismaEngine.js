const { PrismaClient } = require("@prisma/client")

class PrismaEngine {
  client

  constructor() {
    this.client = new PrismaClient()
  }

  createSingle = async (tbName, data) => {
    const registry = await this.client[tbName].create({ data })

    return registry
  }

  getUnique = async (tbName, where = {}, fields = []) => {
    const select = {}
    fields.forEach((field) => (select[field] = true))

    let registry
    if (Object.keys(select).length > 0) {
      registry = await this.client[tbName].findUnique({ where, select })
    } else {
      registry = await this.client[tbName].findUnique({ where })
    }

    return registry
  }

  getUser = async (email) => {
    let user = await this.client.users.findUnique({
      where: { email },
      include: {
        user_type: true,
      },
    })

    return user
  }

  getDishesDetails = async () => {
    let dishes = await this.client.$queryRaw`
      SELECT
        *
      FROM
        v_Dish_Details
    `

    return dishes
  }

  getDishDetails = async (id_dish) => {
    let dish = await this.client.$queryRaw`
      SELECT
        *
      FROM
        v_Dish_Details
      WHERE
        id_dish = ${id_dish}
    `

    return dish
  }
}

module.exports = PrismaEngine
