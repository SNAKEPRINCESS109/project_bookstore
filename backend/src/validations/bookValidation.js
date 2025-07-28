import Joi from 'joi';

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  coverImage: Joi.string().uri().required(),
  description: Joi.string().allow(''),
});
