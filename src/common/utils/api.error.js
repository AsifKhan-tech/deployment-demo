class APIError extends Error {
  constructor(statusCode, message, code = "API_ERROR") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad Request") {
    return new APIError(400, message);
  }
}
