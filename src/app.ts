
const cors = require('cors');

import { authRouter } from './routes/authRoutes';
import { complaintRouter } from './routes/complaintRoutes';
import { adminRouter } from './routes/adminRoutes';

const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());


// Routes
app.use('/auth', authRouter);
app.use('/complaints', complaintRouter);
app.use('/admin', adminRouter);


app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    
});
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(1)
});
export default app;
