import Joi from "joi";

class BaseDTO {
  static schema = Joi.object({});

  static validatePayload(payload) {
    const { error, value } = this.schema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });
  }
}
