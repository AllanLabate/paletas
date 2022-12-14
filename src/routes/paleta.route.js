const route = require('express').Router();
const controllerPaletas = require(`../controllers/paleta.controller`);

route.get(`/todas-paletas`, controllerPaletas.findPaletasController);
route.get(`/paleta/:id`, controllerPaletas.findPaletaByIdController);

route.post(`/create`, controllerPaletas.createPaletaController);

route.put(`/update/:id`, controllerPaletas.updatePaletaController);

route.delete(`/delete/:id`, controllerPaletas.deletePaletaController);

module.exports = route;
