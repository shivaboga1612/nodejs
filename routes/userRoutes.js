const express = require('express');

const router = express.Router();


const { userRegister } = require("../controller/register");
const { userLogin } = require('../controller/login');
const { createProduct } = require('../controller/createProduct');
const { validateRole } = require('../middleware/validateRole');
const { getAllProducts } = require('../controller/getProducts');
const updateProduct = require('../controller/updateProduct');
const deleteProduct = require('../controller/deleteProduct');




router.post('/register', userRegister);
router.post('/login', userLogin)
router.post('/createProduct', validateRole, createProduct); //Only admin
router.get("/getAllProducts", validateRole ,getAllProducts); //Only admin and manager
router.post("/updateProduct", validateRole,updateProduct); //Only admin and manager
router.post("/deleteProduct",validateRole,deleteProduct) //Only admin



module.exports = router