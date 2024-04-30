// Primero, importo el módulo de la base de datos.
import pool from '../config/db.js';

// Luego, tomo los argumentos de la línea de comandos.
const argumentos = process.argv.slice(2);
// Asigno cada argumento a una variable.
const opcion = argumentos[0];
const nombre = argumentos[1];
const rut = argumentos[2];
const curso = argumentos[3];
const nivel = argumentos[4];

// Aquí defino una función para agregar un estudiante a la base de datos.
const agregarEstudiante = async(nombre, rut, curso, nivel)=>{
    // Creo la consulta SQL para insertar un nuevo estudiante.
    const sql = 'insert into Escuela (nombre, rut, curso, nivel) values ($1, $2, $3, $4)';
    // Defino los valores que se insertarán.
    const values = [nombre, rut, curso, nivel];

    // Ejecuto la consulta SQL.
    const response = await pool.query(sql,values);
    // Imprimo un mensaje para confirmar que el estudiante fue agregado.
    console.log('Estudiante agregado a la base de datos Escuela');
}

// Esta función muestra todos los estudiantes en la base de datos.
const mostrarEstudiantes = async ()=>{
    // Creo la consulta SQL para seleccionar todos los estudiantes.
    const sql = 'select * from Escuela';
    // Ejecuto la consulta SQL.
    const response = await pool.query(sql);
    // Imprimo los resultados.
    console.log(response.rows);
}

// Esta función actualiza los datos de un estudiante existente.
const update = async (nombre, rut, curso, nivel)=>{
    // Creo la consulta SQL para actualizar un estudiante.
    const sql = 'update Escuela set nombre = $1, rut = $2, curso = $3, nivel = $4 where rut = $2';
    // Defino los nuevos valores.
    const values = [nombre, rut, curso, nivel];

    // Ejecuto la consulta SQL.
    const response = await pool.query(sql, values);
    // Imprimo un mensaje para confirmar que el estudiante fue actualizado.
    console.log('Estudiante actualizado')
}

// Esta función elimina un estudiante de la base de datos.
const deleteEstudiante = async (rut) => {
    // Creo la consulta SQL para eliminar un estudiante.
    const sql = 'delete from Escuela where rut = $1'
    // Defino el rut del estudiante a eliminar.
    const values = [rut];
    // Ejecuto la consulta SQL.
    const response = await pool.query(sql, values);
    // Imprimo un mensaje para confirmar que el estudiante fue eliminado.
    console.log(`Estudiante con rut: ${rut} eliminado`)
}

// Dependiendo de la opción proporcionada, ejecuto la función correspondiente.
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






