import { model } from 'mongoose';
import CategorySchema from '../schemas/Category.js';

const Category = model('Category', CategorySchema);

export default Category;
