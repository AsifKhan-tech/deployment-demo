import Joi from "joi";

class BaseDTO {
  static schema = Joi.object({});

  static validatePayload(payload) {
    const { error, value } = this.schema.validate(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return { errors, value: null };
    }

    return { value, error: null };
  }
}

export default BaseDTO;
