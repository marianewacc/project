import { Request, Response } from 'express';

let complaints: any[] = [];

export const submitComplaint = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, categories } = req.body;

        const newComplaint = { title, description, categories, status: 'PENDING' };
        complaints.push(newComplaint);

        res.status(201).json({ message: 'Complaint submitted successfully', complaint: newComplaint });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getAllComplaints = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ complaints });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getComplaintById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const complaint = complaints.find(complaint => complaint.id === id);
        if (!complaint) {
            res.status(404).json({ error: 'Complaint not found' });
            return;
        }

        res.status(200).json({ complaint });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
