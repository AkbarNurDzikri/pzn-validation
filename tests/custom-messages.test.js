import Joi from 'joi';

describe("Joi", () => {
  it("should can use custom messages", () => {
    const simpleSchema = Joi.string().min(4).max(10).required().messages({
      'string.min': '{{#label}} minimal 4 karakter',
      'string.max': '{{#label}} maksimal 10 karakter',
    });

    const request = "tes";

    const result = simpleSchema.validate(request);
    console.info(result);
  });
});