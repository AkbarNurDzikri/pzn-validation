import Joi from 'joi';

describe("Joi", () => {
  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(10).email().required();
    const result = usernameSchema.validate("454325", {abortEarly: false});

    // console.info(result.error.details);
    if(result.error) {
      result.error.details.forEach(detail => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});