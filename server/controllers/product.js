export const getAllProduct = async (req, res) => {
    try {
        // Controller logic goes here

        return res.status(200).json({
            message: 'successfully got all products',
            status: 200,
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

        return res.status(200).json({
            message: 'success message',
            status: 200,
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

        return res.status(200).json({
            message: 'success message',
            status: 200,
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

        return res.status(200).json({
            message: 'success message',
            status: 200,
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

        return res.status(200).json({
            message: 'success message',
            status: 200,
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
