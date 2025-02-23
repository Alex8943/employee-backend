import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { dot } from "node:test/reporters";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.dev_host,
    user: process.env.dev_user,
    password: process.env.dev_password,
    database: process.env.dev_db_name
});

export async function testDBConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("database connected");
        connection.release();
    }catch(error){
        console.log("error getting database connection: ", error);
    }
}

export default pool;