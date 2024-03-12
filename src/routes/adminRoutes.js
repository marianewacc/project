"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
var express = require('express');
var adminController_1 = require("../controllers/adminController");
var adminRouter = express.Router();
exports.adminRouter = adminRouter;
// Route to create a new admin
adminRouter.post('/create', adminController_1.adminController.createAdmin);
// Route to get all admins
adminRouter.get('/all', adminController_1.adminController.getAllAdmins);
// Route to get an admin by ID
adminRouter.get('/:id', adminController_1.adminController.getAdminById);
