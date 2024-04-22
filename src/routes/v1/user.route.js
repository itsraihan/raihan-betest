import express from 'express';
import * as userController from '../../controllers/user.controller';
import { authenticateToken, generateToken } from '../../middleware/auth.middleware';

const router = express.Router();

// POST /api/v1/users/token
router.post('/token', (req, res) => {
  const token = generateToken(req.body);
  res.json({ token });
});

// Authentication Middleware
router.use(authenticateToken);

// POST /api/users
router.post('/', userController.createUser);

// GET /api/users/account/:accountNumber
router.get('/', userController.getUsers);

// GET /api/users/account/:accountNumber
router.get('/account/:accountNumber', userController.getUserByAccountNumber);

// GET /api/users/identity/:identityNumber
router.get('/identity/:identityNumber', userController.getUserByIdentityNumber);

// PUT /api/users/:id
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id
router.delete('/:id', userController.deleteUser);

export default router;
