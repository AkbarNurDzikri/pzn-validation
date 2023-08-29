import Joi from 'joi';

describe("Joi", () => {
  // it("should can use simple custom messages", () => {
  //   const simpleSchema = Joi.string().min(4).max(10).required().messages({
  //     'string.min': '{{#label}} minimal 4 karakter',
  //     'string.max': '{{#label}} maksimal 10 karakter',
  //   });

  //   const request = "tes";

  //   const result = simpleSchema.validate(request);
  //   console.info(result);
  // });

  it("should can use complex custom messages", () => {
    const complexSchema = Joi.object({
      username: Joi.string().required().email().messages({
        'any.required': '{{#label}} harus diisi',
        'string.email': '{{#label}} harus valid email',
      }),
      password: Joi.string().required().min(6).max(10).messages({
        'any.required': '{{#label}} harus diisi',
        'string.min': '{{#label}} minimal {{#limit}} karakter',
        'string.max': '{{#label}} maksimal {{#limit}} karakter',
      })
    });
    
    const request = {
      username: 'dzikri',
      password: 'tes',
    };
  
    const result = complexSchema.validate(request, {
      abortEarly: false
    });
    console.info(result);
  });

});