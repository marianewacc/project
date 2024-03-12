// import {Response, NextFunction } from 'express';
// @ts-ignore
const cors = require('cors');

import { authRouter } from './routes/authRoutes';
import { complaintRouter } from './routes/complaintRoutes';
import { adminRouter } from './routes/adminRoutes';

const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());


// Routes
app.use('/auth', authRouter);
app.use('/complaints', complaintRouter);
app.use('/admin', adminRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    // res.send('Internal Server Error');
});
const PORT = process.env.PORT || 5000; // Use the environment port or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
