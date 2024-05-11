import { model } from 'mongoose';
import ProductSchema from '../schemas/Product.js';

const Product = model('Product', ProductSchema);

export default Product;
