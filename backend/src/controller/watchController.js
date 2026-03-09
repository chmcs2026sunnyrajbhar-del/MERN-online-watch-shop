import Watch from '../models/Watch.js';

// Get all watches (with filtering and sorting)
export const getWatches = async (req, res) => {
    try {
        const { brand, category, type, sort = 'price', order = 'asc' } = req.query;

        const query = {};
        if (brand) {
            query.brand = { $regex: brand, $options: 'i' };
        }
        if (category) {
            query.category = { $regex: category, $options: 'i' };
        }
        if (type) {
            query.type = type;
        }

        const sortDef = {};
        sortDef[sort] = order === 'desc' ? -1 : 1;

        const watches = await Watch.find(query).sort(sortDef);
        res.status(200).json({ success: true, count: watches.length, data: watches });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get single watch
export const getWatchById = async (req, res) => {
    try {
        const watch = await Watch.findById(req.params.id);
        if (!watch) {
            return res.status(404).json({ success: false, message: 'Watch not found' });
        }
        res.status(200).json({ success: true, data: watch });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create a watch
export const createWatch = async (req, res) => {
    try {
        const watch = await Watch.create(req.body);
        res.status(201).json({ success: true, data: watch });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update a watch
export const updateWatch = async (req, res) => {
    try {
        const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true,
        });
        if (!watch) {
            return res.status(404).json({ success: false, message: 'Watch not found' });
        }
        res.status(200).json({ success: true, data: watch });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a watch
export const deleteWatch = async (req, res) => {
    try {
        const watch = await Watch.findByIdAndDelete(req.params.id);
        if (!watch) {
            return res.status(404).json({ success: false, message: 'Watch not found' });
        }
        res.status(200).json({ success: true, message: 'Watch deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
