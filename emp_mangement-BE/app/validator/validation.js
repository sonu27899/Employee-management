const { check } = require("express-validator");

exports.validateemployee=[
    check('first_name')
        .isLength({ min: 1 })
        .withMessage('First Name is Required'),

    check('last_name')
        .isLength({ min: 1 })
        .withMessage('Last Name is Required'),

    check('designation')
        .isLength({ min: 1 })
        .withMessage('Designation is Required'),

    check('email')
        .isLength({min:1})
        .withMessage('Email is Required')
        .isEmail()
        .withMessage('Email should be valid'),

    check('dob')
        .isLength({min:1})
        .withMessage('Date Of Birth Is Required'),
    
    check('address')
        .isLength({min:1})
        .withMessage('Address Is Required'),

    check('department')
        .isLength({min:1})
        .withMessage('Department Is Required'),
];


exports.validateupdateemployee=[
    check('first_name')
        .isLength({ min: 1 })
        .withMessage('First Name is Required'),

    check('last_name')
        .isLength({ min: 1 })
        .withMessage('Last Name is Required'),

    check('designation')
        .isLength({ min: 1 })
        .withMessage('Designation is Required'),

    check('email')
        .isLength({min:1})
        .withMessage('Email is Required')
        .isEmail()
        .withMessage('Email should be valid'),

    check('dob')
        .isLength({min:1})
        .withMessage('Date Of Birth Is Required'),
    
    check('address')
        .isLength({min:1})
        .withMessage('Address Is Required'),

    check('department')
        .isLength({min:1})
        .withMessage('Department Is Required'),

    check('Id')
        .isLength({min:1})
        .withMessage('Emp Id is Required')
];

exports.validatedeleteemployee=[
    check('Id')
        .isLength({min:1})
        .withMessage('Emp Id is Required')
];