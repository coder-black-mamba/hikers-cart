// eslint-disable-next-line import/no-import-module-exports
import { Schema } from 'mongoose';

const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
            ref: 'Category',
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        quantity: {
            type: Number,
            required: true,
        },
        sold: {
            type: Number,
        },
        brand: {
            type: String,
            required: true,
        },
        sizes: {
            type: String,
            required: true,
            enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        },
        color: {
            type: String,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        technical_specification: {
            type: String,
        },
        // Additional product details (optional): image URL, stock, etc.
        reviews: [
            {
                userId: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                },
                rating: {
                    type: Number,
                    min: 1,
                    max: 5,
                },
                comment: {
                    type: String,
                },
            },
        ],
    },
    // eslint-disable-next-line prettier/prettier
    { timestamps: true },
);

export default ProductSchema;
