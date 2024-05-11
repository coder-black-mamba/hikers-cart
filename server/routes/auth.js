import { Router } from 'express';
import { logIn, signUp } from '../controllers/auth.js';
import { validatorChecks as logInCheck, validateLogIn } from '../middlewares/auth/validateLogIn.js';
// eslint-disable-next-line prettier/prettier
import {
    validatorChecks as signUpCheck,
    validateSignUp,
} from '../middlewares/auth/validateSignUp.js';

const authRouter = Router();
// signing a user in
authRouter.post('/signup', signUpCheck, validateSignUp, signUp);

// logging a user in
authRouter.post('/login', logInCheck, validateLogIn, logIn);

export default authRouter;
