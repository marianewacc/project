const express = require('express');

import { signUp, signIn } from '../controllers/authController';

const authRouter = express.Router();


authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

export { authRouter };
