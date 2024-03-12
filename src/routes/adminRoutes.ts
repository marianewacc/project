const express = require('express');


import { adminController } from '../controllers/adminController';

const adminRouter = express.Router();

// Route to create a new admin
adminRouter.post('/create', adminController.createAdmin);

// Route to get all admins
adminRouter.get('/all', adminController.getAllAdmins);

// Route to get an admin by ID
adminRouter.get('/:id', adminController.getAdminById);

export { adminRouter };
