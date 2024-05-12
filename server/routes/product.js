import { Router } from 'express';
import { createProduct, getAllProduct, getProductById } from '../controllers/product.js';
import checkAdmin from '../middlewares/auth/checkAdmin.js';
import checkLogin from '../middlewares/auth/checkLogIn.js';

const productRouter = Router();

productRouter.get('/', getAllProduct);

// getting pproduct by id
productRouter.get('/:id', getProductById);

// creating a new product
productRouter.post('/', checkLogin, checkAdmin, createProduct);
// updating a product
productRouter.put('/:id', checkLogin, checkAdmin, createProduct);
// deleting a product
productRouter.delete('/:id', checkLogin, checkAdmin, createProduct);

export default productRouter;
