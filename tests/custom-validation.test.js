import Joi from 'joi';

describe("Joi", () => {
  it("should can create custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().min(3).max(15).email(),
      password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
        if(value.startsWith('test')) {
          return helpers.error('password.wrong');
        }

        return value;
      }).messages({
        'password.wrong': 'Password tidak boleh dimulai dengan kata "test"'
      }),
      confirmPassword: Joi.string().min(6).max(100)
    }).custom((value, helpers) => {
      if(value.confirmPassword !== value.password) {
        return helpers.error('register.passw.diff');
      }
    }).messages({
      'register.passw.diff': 'Konfirmasi password tidak sesuai !'
    });


    const request = {
      username: 'test@gmail.com',
      password: 'tisting',
      confirmPassword: 'tisting'
    };
  
    const result = registerSchema.validate(request, {abortEarly: false});
    console.info(result);
  });
});