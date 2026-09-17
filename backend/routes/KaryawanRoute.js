//pada aplikasi ini menggunakan express routers
import express from "express";
import { getKaryawans, getKaryawanById, createKaryawan, updateKaryawan, deleteKaryawan } from "../controllers/KaryawanControllers.js";

const router = express.Router();

router.get('/karyawans', getKaryawans);
router.get('/karyawans/:id', getKaryawanById);
router.post('/karyawans/', createKaryawan);
router.patch('/karyawans/:id', updateKaryawan);
router.delete('/karyawans/:id', deleteKaryawan);

export default router;