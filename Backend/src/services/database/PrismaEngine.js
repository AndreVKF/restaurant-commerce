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

  getUnique = async (tbName, where = {}) => {
    const registry = await this.client[tbName].findUnique({ where })

    return registry
  }
}

module.exports = PrismaEngine
