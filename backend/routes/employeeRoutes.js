import express from 'express';
import { registerEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/register', registerEmployee);

export default router;
