import Joi from 'joi';

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("8-17-1945");
    
    const resultFalse1 = birthDateSchema.validate("8-17-1944");
    console.info(resultFalse1);
    
    const resultTrue = birthDateSchema.validate("8-3-1994");
    console.info(resultTrue);

    const resultFalse2 = birthDateSchema.validate("8-17-2024");
    console.info(resultFalse2);
  });
});