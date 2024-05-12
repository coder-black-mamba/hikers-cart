import Category from '../models/Category.js';

export const getAllCategories = async (req, res) => {
    try {
        // Controller logic goes here
        const categories = await Category.find();
        return res.status(200).json({
            message: 'successfully fetched all categories message',
            status: 200,
            categories,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const createCategory = async (req, res) => {
    try {
        // Controller logic goes here
        const { name, description } = req.body;
        // checking if category alredy exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({
                message: 'category already exists',
                status: 400,
            });
        }

        // create a new category
        const newCategory = new Category({ name, description });
        const category = await newCategory.save();
        return res.status(200).json({
            message: 'successfully created category',
            status: 200,
            category,
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

export const deleteCategory = async (req, res) => {
    try {
        // Controller logic goes here
        // check if category exists
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                message: 'category not found',
                status: 404,
            });
        }

        await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'successfully deleted category',
            status: 200,
            category,
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
