const express = require('express');


import { submitComplaint, getAllComplaints, getComplaintById } from '../controllers/complaintController';

const complaintRouter = express.Router();

// Route to submit a new complaint
complaintRouter.post('/submit', submitComplaint);

// Route to get all complaints
complaintRouter.get('/all', getAllComplaints);

// Route to get a complaint by ID
complaintRouter.get('/:id', getComplaintById);

export { complaintRouter };
