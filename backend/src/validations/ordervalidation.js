import Joi from 'joi';

export const orderSchema = Joi.object({
  books: Joi.array().items(
    Joi.object({
      bookId: Joi.string().required(),
      quantity: Joi.number().min(1).required(),
    })
  ).required(),
  totalAmount: Joi.number().required(),
});
