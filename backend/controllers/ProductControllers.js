import { Op } from "sequelize";
import Product from "../models/ProductModel.js";

//req.query, req.params dan req.body ---> digunakan ketika mengambil data dari server dengan nama/column database yang di defenisikan pada link (HTTP yang ditangani oleh REST API) misalnya http://blablablabla.com/id atau http://blablabalbla.com/search?nama=joe&&age=32 atau http://blablablablabal.com/:id penggunaannya masing masing dijelaskan dibawah...

//req.query => ketika mengambil data lebih dari 1 column misalnya harga dan nama pada server, maka penulisannya HTTP di REST APInya http://blablablabla.com/search?nama=[string]&&age=[integer]

//req.params => ketika mengambil data dengan 1 column tertentu misalnya id, maka HTTPnya http://blablablabla.com/id atau http://blablalbala.com/:id 

export const getProducts = async(req, res) =>{
    try{
        const response = await Product.findAll();
        res.status(200).json(response);
    }catch{error}{
        console.log(error.message);
    }
}

export const getProductsById = async(req, res) =>{
    try{
        const response = await Product.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}
export const getProductsByCategory = async(req, res) =>{
    try{
        const response = await Product.findAll({
            where: {
                kategori: req.params.kategori,
            },
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}
export const createProduct = async(req, res) =>{
    try{
        await Product.create(req.body);
        res.status(201).json({msg: "Created Product"});
    }catch(error){
        console.log(error.message);
    }
}

export const updateProduct = async(req, res) =>{
    try{
        await Product.update(req.body,{
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({msg: "Product Updated"});
    }catch(error){
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res) =>{
    try{
        await Product.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json({msg: "Product is Deleted!"});
    }catch(error){
        console.log(error.message);
    }
}
export const getProductsByNameLimits = async(req, res) =>{
    try{
        const { namaProduk, maxHarga } = req.query;
        const response = await Product.findAll({
            where: {
                namaproduct: { [Op.like] : `%${namaProduk}%`},//alasan menggunakan Op.like adalah kode ini (express framework) menggunakan sequelize yang berinteraksi dengan database untuk mencari kata kunci data tertentu jadi tidak perlu menggunakan penulisan SQL LIKE itu lagi 
                harga: {[Op.lte] : Number(maxHarga)}//.lte adalah method dari sequelize untuk mencari angka yang dicari kurang dari angka yang di dalam database (Less Than or Equal).
            },
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}