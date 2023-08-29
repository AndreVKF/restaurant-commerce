require("express-async-errors")
require("dotenv/config")

const packageJson = require("./package.json")
const formidable = require("express-formidable")
const errors = require("./src/middleware/errors")
const express = require("express")
const cors = require("cors")
const uploadConfig = require("./src/configs/uploads")
// not using .env to make sure works in any local
const env = require("./Env")

const ErrorHandler = require("./src/common/ErrorHandler")
const routes = require("./src/routes")

const app = express()
const port = env.SERVER_PORT || 3333

app.use(express.json())
app.use(cors())
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

// Error handler
app.use(errors)

app.get("/", (req, res) => {
  res.json({ message: `Hello from ${packageJson.name} ${packageJson.version}` })
})

app.listen(port, () => console.log(`Listening to port: ${port}`))
