import express from 'express';
import { signup } from '../signup/handler.js';
export const userRouter = express.Router();
userRouter.post('/signup', signup);
