const pool = require('../config/database')

//Completada
async function ListarCategorias(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM categorias');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todas las categorias de la tienda'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function AgregarCategoria(req, res) {
    try {
        const { body } = req

        if (!body.nombre) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre'})
        }

        await pool.query('INSERT INTO categorias SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito la categoria'})
    } catch(error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function EliminarCategoria(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM categorias WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la categoria que deseas eliminar'})
        }

        await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la categoria'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

module.exports = {
    ListarCategorias,
    AgregarCategoria,
    EliminarCategoria
}