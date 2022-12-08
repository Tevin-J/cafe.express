import express from 'express';
import { getRegularUsers, signup, updateUser } from '../signup/handler.js';
export const userRouter = express.Router();
userRouter.post('/signup', signup);
userRouter.get('/regular', getRegularUsers);
userRouter.patch('/update', updateUser);
