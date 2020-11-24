const express = require('express')
const Router = express.Router();
const authControler = require('../Controlers/authControler')



Router.post("/api/auth/user",authControler.signUpControler)

Router.post("/api/auth/login",authControler.loginControler)

module.exports = Router