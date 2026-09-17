//pada aplikasi ini menggunakan express routers
import express from "express";
import { getProducts, getProductsById, createProduct, updateProduct, deleteProduct, getProductsByCategory, getProductsByNameLimits } from "../controllers/ProductControllers.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/search', getProductsByNameLimits);
router.get('/products/kategori/:kategori', getProductsByCategory);
router.get('/products/:id', getProductsById);
router.post('/products/', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;