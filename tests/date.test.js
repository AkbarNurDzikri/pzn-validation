import Joi from 'joi';

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("8-17-1945");
    
    const resultFalse1 = birthDateSchema.validate("8-17-1944");
    // console.info(resultFalse1);
    console.info(typeof resultFalse1.value); // Date Object
    console.info(typeof resultFalse1.error); // ValidationError Object
    
    const resultTrue = birthDateSchema.validate("8-3-1994");
    // console.info(resultTrue);
    console.info(typeof resultTrue.value);
    console.info(typeof resultTrue.error);

    const resultFalse2 = birthDateSchema.validate("8-17-2024");
    // console.info(resultFalse2);
  });
});