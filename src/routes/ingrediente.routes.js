const express = require('express');
const router = express.Router();
const { ListarIngredientes, AgregarIngrediente, EliminarIngrediente} = require('../controller/ingredientes')

// Listar todos los Ingredientes de la tienda
router.get('/', ListarIngredientes)

// Agregar Ingrediente a la Tienda
router.post('/add', AgregarIngrediente)

// Eliminar Ingrediente de la Tienda
router.delete('/delete/:id', EliminarIngrediente)

module.exports = router;