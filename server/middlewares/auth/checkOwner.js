import Hostel from '../../models/Hostel.js';

// check if a user logged in
export const checkOwner = async (req, res, next) => {
    try {
        const hostel = await Hostel.findOne({
            _id: req.params.id,
        });
        if (!hostel) {
            return res.status(404).json({
                message: 'hostel not found',
                status: 404,
            });
        }
        if (req.user.id !== hostel.createdBy) {
            return res.status(403).json({
                message: 'your access to requested content is forbidden',
                status: 403,
            });
        }
        return next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500,
        });
    }
};

export const hello = 'HEllo';
