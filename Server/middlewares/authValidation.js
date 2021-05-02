const jwt = require('jsonwebtoken')
    // import { decode } from 'jwt-decode';
const keys = require('../config/keys')




exports.adminValidation = (req, res, next) => {

    var token = req.headers['authorization'].replace(/^Bearer\s/, '');
    if (!token)

        return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, keys.secretOrKey, function(err, decoded) {

        if (err)

            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        if (decoded.role !== 'Admin') {
            return res.status(500).json({ message: `Unable to perform action, you have to be ADMIN member!` });
        } else {
            req.id = decoded.id
            next()
        }

    })

}
exports.userValidation = (req, res, next) => {

    var token = req.headers['authorization'].replace(/^Bearer\s/, '');
    if (!token)

        return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, keys.secretOrKey, function(err, decoded) {

        if (err)

            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        if (decoded.role !== 'User') {
            return res.status(500).json({ message: `Unable to perform action, you have to be USER member!` });
        } else {
            req.id = decoded.id
            next()
        }

    })

}
exports.techValidation = (req, res, next) => {

    var token = req.headers['authorization'].replace(/^Bearer\s/, '');
    if (!token)

        return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, keys.secretOrKey, function(err, decoded) {

        if (err)

            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });


        if (decoded.role !== 'Tech') {
            return res.status(500).json({ message: `Unable to perform action, you have to be TECHNICIEN member!` });
        } else {
            req.id = decoded.id
            next()
        }

    })

}