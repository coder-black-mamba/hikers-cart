import { Schema } from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    details: String,
});

export default CategorySchema;
