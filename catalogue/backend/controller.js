import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
}).promise()


 //GET ALL PRODUCTS 
export async function getProducts(pageNo) {
    const rowsPerPage = 24;
    try{
        const totalResult = await pool.query("SELECT COUNT(*) as total FROM product");
        const total = totalResult[0][0].total;
        const pages = Math.ceil(total/rowsPerPage);
        const page = pageNo-1;
        const start = page*rowsPerPage;
        const [rows] = await pool.query(`SELECT * FROM product LIMIT ?, ?`, [ start, rowsPerPage ]);
        return {rows, pages};
    }catch(err) {
        console.log(err);
    }
}

//GET A PRODUCT
export async function getProduct(id) {
    const [rows] = await pool.query(`
        SELECT * FROM product WHERE productID= ?
    `, [id]);
    return rows[0];
}

//CREATE A PRODUCT
export async function createProduct( productName, imageUrl, amount, currency) {
    //const id = Math.floor(Math.random() * 100) + 1;
    const result = await pool.query(`
        INSERT INTO product ( productName, imageUrl, amount, currency) VALUES ( ?, ?, ?, ?)
    `, [ productName, imageUrl, amount, currency])
    return result;
}

//DELETE A PRODUCT
export async function deleteProduct(id) {
    const [rows] = await pool.query(`
        DELETE FROM product WHERE productID= ?
    `, [id]);
    return (`Product of ID ${id} has been deleted`);
}

