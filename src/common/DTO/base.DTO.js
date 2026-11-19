import Joi from "joi";

class BaseDTO {
  static schema = Joi.object({});

  static validatePayload(payload) {
    const { errors, value } = this.schema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (errors) {
      const errors = errors.details.map((detail) => detail.message);
      return { errors, value: null };
    }

    return { value, errors: null };
  }
}

export default BaseDTO;
