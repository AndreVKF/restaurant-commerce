const ErrorHandler = require("../common/ErrorHandler")
const { Prisma } = require("@prisma/client")

const errors = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json({
      message: err.message,
    })

    return
  }

  console.log(err)

  res.status(500).json({
    status: "error",
    message: "Erro interno do servidor!!",
  })
}

module.exports = errors
