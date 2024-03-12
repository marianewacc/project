import { Request, Response } from 'express';

// Mock user data (replace with database integration)
let users: any[] = [];

// SignUp API
export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('1');
        const { email, password } = req.body;
        console.log(email, password);
        // Check if user with the same email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            res.status(400).json({ error: 'User with this email already exists' });
            return;
        }

        // Create new user
        const newUser = { email, password };
        users.push(newUser);

        // Return success message
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// SignIn API
export const signIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = users.find(user => user.email === email);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        // Compare passwords
        if (user.password !== password) {
            res.status(401).json({ error: 'Invalid password' });
            return;
        }

        // Return user details
        res.status(200).json({ message: 'User signed in successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
