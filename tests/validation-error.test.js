import Joi from 'joi';

describe("Joi", () => {
  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(10).required();
    const result = usernameSchema.validate("salahan");

    console.info(result);
    if(result.error) {
      result.error.details.forEach(detail => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});