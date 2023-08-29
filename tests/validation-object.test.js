import Joi from 'joi';

describe("Joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().min(3).email().required(),
      password: Joi.string().min(6).max(100)
    });

    const request = {
      username: "tes",
      password: "123"
    }

    const results = loginSchema.validate(request, {abortEarly: false});
    if(results.error) {
      results.error.details.forEach(detail => {
        console.info(`Error message: ${detail.message}`)
      });
    }
  });
});