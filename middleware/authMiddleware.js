const jwt = require("jsonwebtoken");
const {secret} = require("../config");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS")
        next();

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token)
            return res.status(403).json({status: false, message: "To access API you need token"});
        const decodeData = jwt.verify(token, secret);
        req.user = decodeData;
        next();
    } catch (e) {
        return res.status(403).json({message: "To access API you need token"})
    }
}
