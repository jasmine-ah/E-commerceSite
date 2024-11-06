const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'default-jwt-secret';

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token.' });

        req.userId = decoded.userId; 
        next();
    });
};
