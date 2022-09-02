const { Roles } = require("../models");


module.exports.create = (req, res) => {
    Roles.findOne({
        where : { role: req.body.role}
    }).then( user => {
        if(user){
            return res.status(409).json({
                message: 'Role already exists!'
            })
        } else {
            Roles.create({
                role: req.body.role,
                }).then(result => {
                    console.log(result)
                    res.status(201).json({
                        message:"Create a new role for Jym Space!"
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
    } )
};

module.exports.deleteRole = (req, res) => {
    Roles.findOne({
        where : { id: req.params.id}
    }).then(user => {
        if (user){
            Roles.destroy({
                where: {
                  uuid: req.params.id
                }
              }).then(result =>{
                return res.status(200).json({
                    message: `Role Deleted Succesfully`
                })
              })
              .catch(err => {
                return res.staus(500).json({
                    error:err
                })
              })
        } else {
            return res.status(500).json({
                message: "Role doesn't exist"
            })
        }
    })
    
}

module.exports.allRoles = (req, res) => {
    Roles.findAll().then(accounts =>{
        return res.status(200).json(accounts)
    }).catch(err =>{
        return res.status(500).json({
            error: err
        })
    })
}