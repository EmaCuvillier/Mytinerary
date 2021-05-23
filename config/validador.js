const joi = require('joi')

const validador = (req, res, next) =>{
//El schema
    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.pattern.base' : 'The name cannot contain numbers or special characters',
            'string.min': 'The name must have at least 2 letters',
            'string.max': 'The name must have a maximum of 20 letters',
            'string.empty': 'This field may not be blank'
        }),
        lastName: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.min': 'The last name must have at least 2 letters',
            'string.max': 'The last name must have a maximum of 20 letters',
            'string.empty': 'This field may not be blank',
            'string.pattern.base' : 'The last name cannot contain numbers or special characters',
        }),
        email: joi.string().required().trim().email().messages({
            'string.empty': 'This field may not be blank',
            'string.email': 'It is not a valid email'
        }),
        password: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            'string.empty': 'This field may not be blank',
            'string.min': 'The password must have at least 5 digits',
            'string.pattern.base' : 'The password must have letters and numbers',
        }),
        picture: joi.string().required().trim().messages({
            'string.empty': 'This field may not be blank',
        }),
        country: joi.string().required().trim().messages({
            'string.empty': 'This field may not be blank',
        })
    })
//La verificación
    const validation = schema.validate(req.body, {abortEarly: false})
//Respuesta o el next
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validador