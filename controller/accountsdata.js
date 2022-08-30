const { AccountsData } = require("../models");
const bcrypt = require('bcrypt')


module.exports.signUp = (req, res) => {
    AccountsData.findOne({
        where : { email: req.body.email}
    }).then( user => {
        if(user){
            return res.status(409).json({
                message: 'Email already exists!'
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    AccountsData.create({
                        email: req.body.email,
                        password: hash,
                        name: req.body.name,
                        roles: req.body.roles
                        }).then(result => {
                            console.log(result)
                            res.status(201).json({
                                message:"User has signed up!"
                            })
                        }).catch((err) => {
                        if (err) {
                          console.log(err);
                          res.status(500).json({
                            error:err
                        })
                        }
                        });
                        
                }
            })

        }
    } )
};

module.exports.deleteUser = (req, res) => {
    AccountsData.findOne({
        where : { uuid: req.params.uuid}
    }).then(user => {
        if (user){
            AccountsData.destroy({
                where: {
                  uuid: req.params.uuid
                }
              }).then(result =>{
                return res.status(200).json({
                    message: `${req.body.email} user Deleted Succesfully`
                })
              })
              .catch(err => {
                return res.staus(500).json({
                    error:err
                })
              })
        } else {
            return res.status(500).json({
                message: "User not present"
            })
        }
    })
    
}