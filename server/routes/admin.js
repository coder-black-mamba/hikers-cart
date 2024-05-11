import { Router } from 'express';
import checkAdmin from '../middlewares/auth/checkAdmin.js';

const adminRouter = Router();

adminRouter.use(checkAdmin);
// basic get for admin home page
adminRouter.get('/', (req, res) => {
    res.send('admin access granted');
});

export default adminRouter;
