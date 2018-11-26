const Yup = require('yup');

const userSchemaValidator = Yup.object().shape({
    firstName: Yup.string().required('firstName required'),
    lastName: Yup.string().required('lastName required'),
    email: Yup.string().required('email required').email('email invalid'),
    password: Yup.string().required('password required'),
    accountType: Yup.string().required('accountType required'),
    language: Yup.string().required('language required'),
    country: Yup.string().required('country required'),
    timezone: Yup.string().required('timezone required'),
    birthYear: Yup.string().required('birthYear required'),
});

const validate = async (req, res, next) => {
    try {
        await userSchemaValidator.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            status: 400,
            name: error.name,
            message: error.errors
        });
    }
};

module.exports = validate;
