const Joi = require("joi");

// Validation schema for creating a product
const validateProduct = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        description: Joi.string().max(500),
        price: Joi.number().positive().required(),
        category: Joi.string().required(),
        stock: Joi.number().integer().min(0).required(),
        variants: Joi.array().items(
            Joi.object({
                name: Joi.string().required(),
                additionalPrice: Joi.number().min(0)
            })
        )
    });
    return schema.validate(data);
};

// Validation schema for creating a category
const validateCategory = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        description: Joi.string().max(500).optional()
    });
    return schema.validate(data);
};

module.exports = { validateProduct, validateCategory };
