const { JWT_SECRET } = require("../../Env")

module.exports = {
  jwtConfig: {
    secret: JWT_SECRET,
    expiresIn: "1d",
  },
}
