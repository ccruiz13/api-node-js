const {
  BaseException,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
  InternalServerException,
  InsufficientBalanceException
} = require('../exception/BaseException');
const DomainConfigurationException = require('../../domain/exceptions/DomainConfigurationException');
const ErrorResponse = require('../input/response/GenericResponse')
const MessagesResponse = require('../exception/MessagesResponse')

class ErrorHandler {
/**
   * Manejador global de excepciones
   * @param {Error} err
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   */

static handle(err, req, res, next) {

    if (err instanceof DomainConfigurationException) {
        return res.status(404).json(new ErrorResponse(err.message, err.name));
    }
    if (err instanceof NotFoundException) {
      return res.status(404).json(new ErrorResponse(err.message, err.name));
    }

    if (err instanceof BadRequestException) {
      return res.status(400).json(new ErrorResponse(err.message, err.name));
    }

    if (err instanceof UnauthorizedException) {
      return res.status(401).json(new ErrorResponse(err.message, err.name));
    }

     if (err instanceof ConflictException) {
      return res.status(409).json(new ErrorResponse(err.message, err.name));
    }

     if (err instanceof InternalServerException) {
      return res.status(500).json(new ErrorResponse(err.message, err.name));
    }

     if (err instanceof InsufficientBalanceException) {
      return res.status(400).json(new ErrorResponse(err.message, err.name));
    }

    if (err instanceof BaseException) {
      return res.status(err.statusCode || 500).json(new ErrorResponse(err.message, err.name));
    }

    return res.status(500).json(new ErrorResponse(MessagesResponse.GENERIC_EXCEPTION, MessagesResponse.INTERNAL_SERVER_ERROR));

}

}

module.exports = ErrorHandler;