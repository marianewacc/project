import { Request, Response } from 'express';

// Mock admin data (replace with database integration)
let admins: any[] = [];

// Admin controller for handling admin-related functionalities
export const adminController = {
    // Create new admin
    createAdmin: async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            // Check if admin with the same email already exists
            const existingAdmin = admins.find((admin) => admin.email === email);
            if (existingAdmin) {
                res.status(400).json({ error: 'Admin with this email already exists' });
                return;
            }

            // Create new admin
            const newAdmin = { email, password }; // You may add additional fields as needed
            admins.push(newAdmin);

            // Return success message
            res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Get all admins
    getAllAdmins: async (req: Request, res: Response): Promise<void> => {
        try {
            // Retrieve all admins
            res.status(200).json({ admins });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Get admin by ID
    getAdminById: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;

            // Find admin by ID
            const admin = admins.find((admin) => admin.id === id);
            if (!admin) {
                res.status(404).json({ error: 'Admin not found' });
                return;
            }

            res.status(200).json({ admin });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Other admin controller functions...
};
