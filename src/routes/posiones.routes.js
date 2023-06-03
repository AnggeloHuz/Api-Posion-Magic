const express = require('express');
const router = express.Router();
const { ListarPosiones, AgregarPosion, EditarPosion, EliminarPosion } = require('../controller/posiones')

// Listar todos los Posiones de la tienda
router.get('/', ListarPosiones)

// Agregar Posiones a la Tienda
router.post('/add', AgregarPosion)

// Editar Posiones de la Tienda
router.put('/edit/:id', EditarPosion)

// Eliminar Posion de la Tienda
router.delete('/delete/:id', EliminarPosion)

module.exports = router;