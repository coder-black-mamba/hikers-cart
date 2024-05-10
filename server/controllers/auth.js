import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
// configuring dotenv
dotenv.config();

// sign up controller
export const signUp = async (req, res) => {
    try {
        console.log(process.env.SALT_ROUNDS);
        const { username, email, password } = req.body;
        // checking if email already exists
        const prevUser = await User.findOne({ email });
        if (prevUser) {
            return res.status(400).json({
                message: 'email already exists',
                status: 400,
            });
        }
        // salt generating
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
        // hashing password
        const hashedPassword = await bcrypt.hash(password, salt);
        // generate jwt token

        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        // eslint-disable-next-line no-underscore-dangle
        const token = jwt.sign({ id: user._id, username, email }, process.env.JWT_SECRET, {
            expiresIn: '12h',
        });
        // sending back response to the user
        return res.status(201).json({
            message: 'user created successfully',
            status: 201,
            token,
            user: { username, email },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'internal server error',
            status: 500,
        });
    }
};

export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        // checking if email already exists
        const prevUser = await User.findOne({ email });
        console.log(prevUser);
        if (!prevUser) {
            return res.status(404).json({
                message: 'user not found',
                status: 404,
            });
        }
        // hashing password
        const hashedPassword = prevUser.password;
        // compare password usinf bcrypt
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'invalid credentials',
                status: 401,
            });
        }
        // generate jwt token
        const token = jwt.sign(
            // eslint-disable-next-line no-underscore-dangle
            { id: prevUser._id, usernae: prevUser.username, email },
            process.env.JWT_SECRET,
            {
                expiresIn: '12h',
                // eslint-disable-next-line prettier/prettier
            },
        );
        // sending back response to the user
        return res.status(200).json({
            message: 'user logged in successfully',
            status: 200,
            token,
            user: { username: prevUser.username, email },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'internal server error',
            status: 500,
        });
    }
};
// i am going to change this
// const exportModule = { signUpController, logInController };
// export default exportModule;
// const hello = 'HI';
// export default hello;
