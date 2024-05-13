import Product from '../models/Product.js';

export const getAllProduct = async (req, res) => {
    try {
        // Controller logic goes here
        const products = await Product.find();

        return res.status(200).json({
            message: 'successfully got all products',
            status: 200,
            products,
            // Add data to response here
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        // Controller logic goes here
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                status: 404,
            });
        }
        return res.status(200).json({
            message: 'success message',
            status: 200,
            product,
            // Add data to response here
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        // Controller logic goes here
        const product = await Product.create(req.body);
        return res.status(200).json({
            message: 'success message',
            status: 200,
            product,
            // Add data to response here
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        // Controller logic goes here
        // check if product exists
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                status: 404,
            });
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).json({
            message: 'successfully updated product',
            status: 200,
            product: updatedProduct,
            // Add data to response here
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        // Controller logic goes here
        // check if product exists
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                status: 404,
            });
        }
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'successfullt deleted product',
            status: 200,
            product: deletedProduct,
            // Add data to response here
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};
