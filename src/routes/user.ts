import express from 'express';
import { getRegularUsers, signup } from '../signup/handler.js';
export const userRouter = express.Router();
userRouter.post('/signup', signup);
userRouter.get('/regular', getRegularUsers);
