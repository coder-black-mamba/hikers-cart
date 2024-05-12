import { Router } from 'express';
import { createCategory, deleteCategory, getAllCategories } from '../controllers/category.js';
import checkAdmin from '../middlewares/auth/checkAdmin.js';
import checkLogIn from '../middlewares/auth/checkLogIn.js';
import {
    validatorChecks as checkCategory,
    validateCategory,
} from '../middlewares/category/validateCategory.js';

const categoryRouter = Router();

// getting all categories
categoryRouter.get('/', getAllCategories);
// creating a category
categoryRouter.post('/', checkLogIn, checkAdmin, checkCategory, validateCategory, createCategory);
// deleting a category
categoryRouter.delete('/:id', checkLogIn, checkAdmin, deleteCategory);

export default categoryRouter;
