"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = exports.LimitExceededException = exports.InternalFailureException = exports.ConflictException = exports.BadRequestException = void 0;
const TranscribeServiceException_1 = require("./TranscribeServiceException");
class BadRequestException extends TranscribeServiceException_1.TranscribeServiceException {
    name = "BadRequestException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "BadRequestException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, BadRequestException.prototype);
        this.Message = opts.Message;
    }
}
exports.BadRequestException = BadRequestException;
class ConflictException extends TranscribeServiceException_1.TranscribeServiceException {
    name = "ConflictException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
        this.Message = opts.Message;
    }
}
exports.ConflictException = ConflictException;
class InternalFailureException extends TranscribeServiceException_1.TranscribeServiceException {
    name = "InternalFailureException";
    $fault = "server";
    Message;
    constructor(opts) {
        super({
            name: "InternalFailureException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalFailureException.prototype);
        this.Message = opts.Message;
    }
}
exports.InternalFailureException = InternalFailureException;
class LimitExceededException extends TranscribeServiceException_1.TranscribeServiceException {
    name = "LimitExceededException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, LimitExceededException.prototype);
        this.Message = opts.Message;
    }
}
exports.LimitExceededException = LimitExceededException;
class NotFoundException extends TranscribeServiceException_1.TranscribeServiceException {
    name = "NotFoundException";
    $fault = "client";
    Message;
    constructor(opts) {
        super({
            name: "NotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, NotFoundException.prototype);
        this.Message = opts.Message;
    }
}
exports.NotFoundException = NotFoundException;
