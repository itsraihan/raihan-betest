import jwt from 'jsonwebtoken';
import config from '../config';

function generateToken(payload) {
  return jwt.sign(payload, config.jwt_secret, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, config.jwt_secret);
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = { generateToken, authenticateToken };
