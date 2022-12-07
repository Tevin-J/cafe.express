import express from 'express';
import cors from 'cors';

export const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
