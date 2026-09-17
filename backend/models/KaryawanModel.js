import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Karyawan = db.define('karyawans', {
    IdKaryawan: DataTypes.STRING,
    NamaKaryawan: DataTypes.STRING,
    JenisKelamin: DataTypes.STRING,
    Jabatan: DataTypes.STRING,
    Pendidikan: DataTypes.STRING
},{
    freezeTableName:true
});

export default Karyawan;

//buat function untuk membaca tabel, gunakan async
(async() =>{
    await db.sync()
})();