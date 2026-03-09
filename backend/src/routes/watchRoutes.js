import express from 'express';
import {
    getWatches,
    getWatchById,
    createWatch,
    updateWatch,
    deleteWatch,
} from '../controller/watchController.js';

const router = express.Router();

router.route('/')
    .get(getWatches)
    .post(createWatch);

router.route('/:id')
    .get(getWatchById)
    .put(updateWatch)
    .delete(deleteWatch);

export default router;
