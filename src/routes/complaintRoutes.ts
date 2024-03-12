const express = require('express');


import { submitComplaint, getAllComplaints, getComplaintById } from '../controllers/complaintController';

const complaintRouter = express.Router();


complaintRouter.post('/submit', submitComplaint);


complaintRouter.get('/all', getAllComplaints);


complaintRouter.get('/:id', getComplaintById);

export { complaintRouter };
