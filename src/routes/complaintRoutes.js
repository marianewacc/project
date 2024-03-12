"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complaintRouter = void 0;
var express = require('express');
var complaintController_1 = require("../controllers/complaintController");
var complaintRouter = express.Router();
exports.complaintRouter = complaintRouter;
// Route to submit a new complaint
complaintRouter.post('/submit', complaintController_1.submitComplaint);
// Route to get all complaints
complaintRouter.get('/all', complaintController_1.getAllComplaints);
// Route to get a complaint by ID
complaintRouter.get('/:id', complaintController_1.getComplaintById);
