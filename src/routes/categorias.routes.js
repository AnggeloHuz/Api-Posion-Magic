const express = require('express');
const router = express.Router();
const { ListarCategorias, AgregarCategoria, EliminarCategoria} = require('../controller/categorias')

// Listar todos los Categorias de la tienda
router.get('/', ListarCategorias)

// Agregar Categoria a la Tienda
router.post('/add', AgregarCategoria)

// Eliminar Categoria de la Tienda
router.delete('/delete/:id', EliminarCategoria)

module.exports = router;