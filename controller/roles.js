const {createRole, deleteFromRole, getAllRoles} = require("../services/roles.js")


module.exports.create = (req, res) => {
return createRole(req, res)
};

module.exports.deleteRole = (req, res) => {
       return deleteFromRole(req, res)
}

module.exports.allRoles = (req, res) => {
    return getAllRoles(req, res)
}