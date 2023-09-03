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

  createMany = async (tbName, data) => {
    const records = await this.client[tbName].createMany({ data })

    return records
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

  getMany = async (tbName, where = {}) => {
    const records = await this.client[tbName].findMany({ where })

    return records
  }

  update = async (tbName, where = {}, data) => {
    if (Object.keys(where).length === 0) {
      console.log("Update must have where condition!")
      return
    }
    const updatedRecord = await this.client[tbName].update({ where, data })

    return updatedRecord
  }

  delete = async (tbName, where = {}) => {
    if (Object.keys(where).length === 0) {
      console.log("Delete must have where condition!")
      return
    }

    await this.client[tbName].delete({ where })
  }

  deleteMany = async (tbName, where = {}) => {
    if (Object.keys(where).length === 0) {
      console.log("Delete must have where condition!")
      return
    }

    await this.client[tbName].deleteMany({ where })
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
