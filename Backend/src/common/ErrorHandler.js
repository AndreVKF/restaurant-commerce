class ErrorHandler {
  message
  statusCode

  constructor(message, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

module.exports = ErrorHandler
