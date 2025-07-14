class BaseException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundException extends BaseException {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

class BadRequestException extends BaseException {
  constructor(message = 'Bad request') {
    super(message, 400);
  }
}

class UnauthorizedException extends BaseException {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

class ConflictException extends BaseException {
  constructor(message = 'Conflict') {
    super(message, 409);
  }
}

class InternalServerException extends BaseException {
  constructor(message = 'Internal server error') {
    super(message, 500);
  }
}

class InsufficientBalanceException extends BaseException {
  constructor(fundName) {
    super(`No tiene saldo disponible para vincularse al fondo ${fundName}`, 400);
  }
}

module.exports = {
  BaseException,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
  InternalServerException,
  InsufficientBalanceException
};
