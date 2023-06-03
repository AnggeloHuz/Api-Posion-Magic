const mysql = require('mysql2');
const { promisify } = require('util');
const { database } = require('./keys');


const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED')
        }
    }

    if(connection) connection.release()
    console.log('**** DASE DE DATOS CONECTADA ****');
    return;
})

// Función para los errores de las peticiones a la base de datos
async function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results) => {
            if (error) {
                console.log(`Existe un error: ${error}`)
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = {
    pool,
    query
};