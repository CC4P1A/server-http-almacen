import express from 'express';
import * as Product from './product.js';

const router = express.Router();

router.use(express.json());

// Product routes
router.post('/products', Product.create);
router.get('/products', Product.readAll);
router.get('/products/:id', Product.read);
router.put('/products/:id', Product.update);
router.delete('/products/:id', Product.remove);


export default router;