const express = require('express')
const app = express()
const connectdb = require('./config/db')
connectdb();

const signUpAuthRouter = require('./Routes/Auth/Signup')

const foodtypeRouter = require('./Routes/foodTypeRouter')
const allPizzasRouter = require('./Routes/allPizzasRouter')





app.use(express.json())


app.use("/",signUpAuthRouter )

app.use("/",foodtypeRouter)
app.use("/",allPizzasRouter)





app.listen(3000,()=>{
    console.log("Listeining")
})