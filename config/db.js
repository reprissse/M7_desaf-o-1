import pkg from 'pg';
import 'dotenv/config';

const {Pool} = pkg
const { DB_USER, DB_PASS, DB_DATABASE, DB_HOST } = process.env;

//configuración
const config = {
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
    host: DB_HOST,
};

//configuración para realizar conexion
const pool = new Pool(config);

/*const getData = async () => {
    const response = await pool.query('select now()');
    console.log(response.rows);
};

getData();*/

export default pool;
