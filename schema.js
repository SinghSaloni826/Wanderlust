const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("" , null)
    }).required()
});

//joi is a package in npm that we need to install after that we 
// use it its basically helps to checks the schema of a model very helpful and intresting tool!!