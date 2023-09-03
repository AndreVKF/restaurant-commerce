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

    const user = await this.dbEngine.getUser(email)

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

    const returnUserData = {
      id_user: user.id_user,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
      user_type: user.user_type.type,
    }

    const date = new Date()
    const tokenExpiresIn = new Date(date.setDate(date.getDate() + 1))

    res.json({
      user: returnUserData,
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
      const user = await this.dbEngine.getUnique("Users", { id_user: userId })
      const userType = await this.dbEngine.getUnique("User_Types", {
        id_user_type: user.id_user_type,
      })

      const returnUserData = {
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
        user_type: userType.type,
      }

      return res.status(200).json(returnUserData)
    } catch {
      throw new ErrorHandler("Token inválido!!", 401)
    }
  }
}

module.exports = SessionsController
