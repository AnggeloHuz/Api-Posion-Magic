const pool = require('../config/database')

//Completada
async function ListarIngredientes(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM ingredientes');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todas los ingredientes de la tienda'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function AgregarIngrediente(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.cantidad || !body.descripcion) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, cantidad y descripcion'})
        }

        const consulta = await pool.query('INSERT INTO ingredientes SET ?', [body]);
        res.status(200).json({ status: 200,  data: consulta, menssage: 'Se ha agregado con éxito el ingrediente'})
    } catch(error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function EliminarIngrediente(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM ingredientes WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe el ingrediente que deseas eliminar'})
        }

        await pool.query('DELETE FROM ingredientes WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la ingrediente'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

module.exports = {
    ListarIngredientes,
    AgregarIngrediente,
    EliminarIngrediente
}