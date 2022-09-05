const { SuperAdmin } = require("../models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.signUp = (req, res) => {
    SuperAdmin.findOne({
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
                    SuperAdmin.create({
                        email: req.body.email,
                        password: hash,
                        username: req.body.username,
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
    SuperAdmin.findOne({
        where : { uuid: req.params.uuid}
    }).then(user => {
        if (user){
            SuperAdmin.destroy({
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

module.exports.login = (req, res) => {
    SuperAdmin.findOne({
        where : { email: req.body.email}
    }).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.status(401).json({
                        message: "There was an error while Authentication",
                        error: err
                    })
                }
                if(result) {
                    const token = jwt.sign({
                        SuperAdminId: user.id,
                        role: "super"
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).json({
                        message: "User Authentication is Successful!",
                        token: token
                    })
                }

                return res.status(401).json({
                    message: "Password Mismatch!! Authentication Failed.",
                })
                
            })
        } else {
            return res.status(404).json({
                message: "Authentication Failed. User not Found!"
            })
        }
    })
}

module.exports.allAccounts = (req, res) => {
    SuperAdmin.findAll().then(accounts =>{
        return res.status(200).json(accounts)
    }).catch(err =>{
        return res.status(500).json({
            error: err
        })
    })
}