import { Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct,
} from '../controllers/product.js';
import checkAdmin from '../middlewares/auth/checkAdmin.js';
import checkLogin from '../middlewares/auth/checkLogIn.js';
import { validateProduct, validatorChecks } from '../middlewares/product/validateProduct.js';

const productRouter = Router();

productRouter.get('/', getAllProduct);

// getting pproduct by id
productRouter.get('/:id', getProductById);

// creating a new product
productRouter.post('/', checkLogin, checkAdmin, validatorChecks, validateProduct, createProduct);
// updating a product
productRouter.put('/:id', checkLogin, checkAdmin, validatorChecks, validateProduct, updateProduct);
// deleting a product
productRouter.delete('/:id', checkLogin, checkAdmin, deleteProduct);

export default productRouter;
