const pool = require('../config/database')

//Completada
async function ListarPosiones(req, res) {
    try {
        const consulta = await pool.query('SELECT * FROM posiones');
        res.status(200).json({ status: 200, data: consulta, menssage: 'Se ha listado con éxito todas las posiones de la tienda'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function AgregarPosion(req, res) {
    try {
        const { body } = req

        if (!body.nombre || !body.categoria || !body.cantidad || !body.descripcion || !body.precio || !body.imagen) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, cantidad, categoria, descripcion, imagen y precio'})
        }

        await pool.query('INSERT INTO posiones SET ?', [body]);
        res.status(200).json({ status: 200, menssage: 'Se ha agregado con éxito la posion'})
    } catch(error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function EditarPosion(req, res) {
    try {
        const { id } = req.params
        const { body } = req

        if (!body.nombre || !body.categoria || !body.cantidad || !body.descripcion || !body.precio || !body.imagen) {
            return res.status(400).json({ status: 400, menssage: 'No has ingresado propiedades necesarias: nombre, cantidad, categoria, descripcion, imagen y precio'})
        }

        const consulta = pool.query('SELECT * FROM posiones WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la posion que deseas editar'})
        }

        await pool.query('UPDATE posiones SET ? WHERE id = ?', [body, id]);
        res.status(200).json({ status: 200, menssage: 'Se ha editado con éxito el posion'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

//Completada
async function EliminarPosion(req, res) {
    try {
        const { id } = req.params

        const consulta = await pool.query('SELECT * FROM posiones WHERE id = ?', [id])
        if (consulta.length === 0) {
            return res.status(400).json({ status: 400, menssage: 'No existe la posion que deseas eliminar'})
        }

        await pool.query('DELETE FROM posiones WHERE id = ?', [id]);
        res.status(200).json({ status: 200, menssage: 'Se ha eliminado con éxito la posion'})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, menssage: 'Ocurrio un error dentro del servidor'});
    }
}

module.exports = {
    ListarPosiones,
    AgregarPosion,
    EditarPosion,
    EliminarPosion
}