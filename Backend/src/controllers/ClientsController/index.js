/*
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/
const { hash } = require("bcrypt")
const env = require("../../../Env")
const ErrorHandler = require("../../common/ErrorHandler")

class ClientsController {
  dbEngine
  tbName

  constructor(dbEngine) {
    this.dbEngine = dbEngine
    this.tbName = "Users"
  }

  show = async (req, res) => {
    const { id_user } = req.params

    // add as client user
    const clientType = await this.dbEngine.getUnique("User_Types", {
      type: "CLIENT",
    })

    const client = await this.dbEngine.getUnique(this.tbName, {
      id_user: Number(id_user),
      id_user_type: clientType.id_user_type,
    })

    return res.json(client || {})
  }

  create = async (req, res) => {
    const body = req.body
    const data = {
      name: body.name.toUpperCase(),
      email: body.email.toLowerCase(),
      password: body.password,
      avatar_url: body.avatar_url,
    }

    if (!data.email || !data.password) {
      throw new ErrorHandler("Email e password são campos obrigatórios!!")
    }

    // check if email is registered
    const hasEmailBeenRegistered = await this.dbEngine.getUnique(this.tbName, {
      email: data.email,
    })

    if (hasEmailBeenRegistered) {
      throw new ErrorHandler("Email já foi cadastrado!!")
    }

    // hash password
    const hashedPassword = await hash(data.password, Number(env.BCRYPT_SALT))
    data.password = hashedPassword

    // add as client user
    const clientType = await this.dbEngine.getUnique("User_Types", {
      type: "CLIENT",
    })
    data.id_user_type = clientType.id_user_type

    const user = await this.dbEngine.createSingle(this.tbName, data)

    return res.json(user)
  }
}

module.exports = ClientsController
