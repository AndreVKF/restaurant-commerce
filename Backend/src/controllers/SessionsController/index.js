const ErrorHandler = require("../../common/ErrorHandler")

const { compare } = require("bcrypt")
const { sign, verify } = require("jsonwebtoken")
const { jwtConfig } = require("../../configs/auth")

class SessionsController {
  dbEngine

  constructor(dbEngine) {
    this.dbEngine = dbEngine
  }

  create = async (req, res) => {
    const { email, password } = req.body

    const user = await this.dbEngine.getUnique("Users", { email })

    if (!user) {
      throw new ErrorHandler("Email e/ou password incorretos!!", 401)
    }

    const isPasswordMatch = await compare(password, user.password)

    if (!isPasswordMatch) {
      throw new ErrorHandler("Email e/ou password incorretos!!", 401)
    }

    // create jwt
    const { secret, expiresIn } = jwtConfig
    const token = sign({ userId: user.id_user }, secret, { expiresIn })
    delete user.password

    const date = new Date()
    const tokenExpiresIn = new Date(date.setDate(date.getDate() + 1))

    res.json({
      user,
      token,
      expiresIn: tokenExpiresIn.toLocaleString(),
    })
  }

  validate = async (req, res) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new ErrorHandler("Token não foi informado!!")
    }

    const [, token] = authHeader.split(" ")

    try {
      const { userId } = verify(token, jwtConfig.secret)
      return res.status(200).json({ message: "Token validado!!" })
    } catch {
      throw new ErrorHandler("Token inválido!!", 401)
    }
  }
}

module.exports = SessionsController
