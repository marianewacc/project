const express = require('express');


import { adminController } from '../controllers/adminController';

const adminRouter = express.Router();


adminRouter.post('/create', adminController.createAdmin);


adminRouter.get('/all', adminController.getAllAdmins);


adminRouter.get('/:id', adminController.getAdminById);

export { adminRouter };
