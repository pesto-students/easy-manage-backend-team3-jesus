const { GymPlan } = require("../models");


module.exports.createGymPlan = (req, res) => {
    GymPlan.findOne({
        where : { planName: req.body.planName}
    }).then( user => {
        if(user){
            return res.status(409).json({
                message: 'Plan already exists!'
            })
        } else {
            GymPlan.create({
                planName: req.body.planName,
                price: req.body.price,
                GymId: req.userData.GymId
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

module.exports.deleteGymPlan = (req, res) => {
    GymPlan.findOne({
        where : { id: req.params.id}
    }).then(user => {
        if (user){
            GymPlan.destroy({
                where: {
                    id: req.params.id
                }
              }).then(result =>{
                return res.status(200).json({
                    message: `Plan Deleted Succesfully`
                })
              })
              .catch(err => {
                return res.staus(500).json({
                    error:err
                })
              })
        } else {
            return res.status(500).json({
                message: "Plan doesn't exist"
            })
        }
    })
    
}


module.exports.updateGymPlan = (req, res) => {
    GymPlan.findOne({
        where : { id: req.params.id}
    }).then(user => {
        if (user){
            GymPlan.update({
                planName: req.body.planName,
                price: req.body.price
            },{
                where: {
                    id: req.params.id
                }
              }).then(result =>{
                return res.status(200).json({
                    message: `Plan Updated Succesfully`
                })
              })
              .catch(err => {
                return res.staus(500).json({
                    error:err
                })
              })
        } else {
            return res.status(500).json({
                message: "Plan doesn't exist"
            })
        }
    })
    
}


module.exports.allGymPlanData = (req, res) => {
    GymPlan.findAll({
        where : { GymId: req.userData.id}
    }).then(accounts =>{
        return res.status(200).json(accounts)
    }).catch(err =>{
        return res.status(500).json({
            error: err
        })
    })
}