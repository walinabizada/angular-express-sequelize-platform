const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    // console.log('x-access-token', token);
    if (!token){
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.secretKeyJWT, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;