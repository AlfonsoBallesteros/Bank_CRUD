const jwt = require('jsonwebtoken');

const config = require('../config')

function generateToken(client){
  
    const token = jwt.sign({id: client._id}, config.secret, {
        expiresIn: 60 * 60 * 24
    });
  
    return({ 
        auth: true, 
        token: token
    });
  }
  
function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No hay token' });
    }
    // Decode the Tokenreq.userId = decoded.id;
    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
}

  module.exports = {
    generateToken,
    verifyToken
  }
  