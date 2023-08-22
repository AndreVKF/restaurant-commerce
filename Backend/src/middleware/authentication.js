const { verify } = require("jsonwebtoken")

const ErrorHandler = require("../common/ErrorHandler")
const { jwtConfig } = require("../configs/auth")

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new ErrorHandler("Token não foi informado!!", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { userId } = verify(token, jwtConfig.secret)
    req.user = { id_user: userId }

    return next()
  } catch {
    throw new ErrorHandler("Token inválido!!", 401)
  }
}

module.exports = authentication
