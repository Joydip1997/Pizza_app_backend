const { emit, findOne } = require('../../Models/User');
const UserModel = require('../../Models/User');
const { use } = require('../Auth/Signup');

var jwt = require('jsonwebtoken');



module.exports.signUpControler = async(req,res)=>{
    const {name,email,password} = req.body
  

    let user = UserModel.findOne({email},async(err,usr)=>
    {
        if(!err)
        {
            if(!usr)
            {
                let user  = UserModel({
                    name,
                    email,
                    password,
                })
                var token = jwt.sign({ USER:user }, 'shhhhh');
                await user.save()
                
                res.send(token)
            }
            else{
                res.send("User already registered")
            }
        }
    })

  

    res.send(user);
}

module.exports.loginControler = (req,res)=>{
    const email = req.body.email
    let user = UserModel.findOne({email},(err,usr)=>
    {
        if(!err)
        {
            if(usr)
            {
                var token = jwt.sign({ USER:usr }, 'shhhhh');
                res.send(token)
            }
        }
    })
   


}