// check if a user logged in
import jwt from 'jsonwebtoken';

export const checkLogIn = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'token is not valid',
                status: 401,
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // check if jwt is not expired
        if (decoded.exp * 1000 < Date.now()) {
            console.log(decoded.exp);
            console.log(Date.now());
            return res.status(401).json({
                message: 'token is not valid',
                status: 401,
            });
        }
        req.user = decoded;
        return next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const hello = 'HEllo';
