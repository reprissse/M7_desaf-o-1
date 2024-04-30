import pool from '../config/db.js';

const argumentos = process.argv.slice(2);
//nombre
const opcion = argumentos[0];
const nombre = argumentos[1];
const rut = argumentos[2];
const curso = argumentos[3];
const nivel = argumentos[4];

// Función para agregar un estudiante a la base de datos
const agregarEstudiante = async(nombre, rut, curso, nivel)=>{
    const sql = 'insert into Escuela (nombre, rut, curso, nivel) values ($1, $2, $3, $4)';
    const values = [nombre, rut, curso, nivel];

    const response = await pool.query(sql,values);
    console.log('Estudiante agregado a la base de datos Escuela');
}

// Función para mostrar todos los estudiantes en la base de datos
const mostrarEstudiantes = async ()=>{
    const sql = 'select * from Escuela';
    const response = await pool.query(sql);
    console.log(response.rows);
}

// Función para actualizar los datos de un estudiante existente
const update = async (nombre, rut, curso, nivel)=>{
    const sql = 'update Escuela set nombre = $1, curso = $3, nivel = $4 where rut = $2';
    const values = [nombre, rut, curso, nivel];

    const response = await pool.query(sql, values);
    console.log('Estudiante actualizado')
}

// Función para eliminar un estudiante de la base de datos
const deleteEstudiante = async (rut) => {
    const sql = 'delete from Escuela where rut = $1'
    const values = [rut];
    const response = await pool.query(sql, values);
    console.log(`Estudiante con rut: ${rut} eliminado`)
}

// Dependiendo de la opción proporcionada, ejecuta la función correspondiente
switch (opcion) {
    case 'agregar':
        agregarEstudiante(nombre, rut, curso, nivel);
        break;
    case 'mostrar':
        mostrarEstudiantes();
        break;
    case 'actualizar':
        update(nombre, rut, curso, nivel);
        break;
    case 'eliminar':
        deleteEstudiante(rut);
        break;
    default:
        console.log('Opción no reconocida');
}






