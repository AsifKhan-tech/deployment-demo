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

  static unauthorized(message = "Unauthorized", code = "UNAUTHORIZED") {
    return new APIError(401, message, code);
  }

  static forbidden(message = "forbidden") {
    return new APIError(403, message);
  }

  static notFound(message = "account found") {
    return new APIError(404, message);
  }

  static conflict(message = "Conflict - User already exists") {
    return new APIError(409, message);
  }
}
