const express = require("express");

const router = express.Router();

const petController = require("../controller/petController");

router.get("/", petController.index );

router.get('/add/:nome', petController.add); // :/ separa os atributos desejados

router.get('/buscar/:nome', petController.buscar);


module.exports = router;


