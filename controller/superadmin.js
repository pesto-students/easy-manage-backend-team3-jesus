const { superAdminSignUp, loginSuperUser, viewSuperUsersData, deleteSuperUser} = require("../services/superadmin")


module.exports.signUp = (req, res) => { //To sign up Super User
    return superAdminSignUp(req, res);
};

module.exports.deleteUser = (req, res) => { //To Delete a Super User
    return deleteSuperUser(req, res)
}

module.exports.login = (req, res) => { // To Login a Super User
return loginSuperUser(req, res)
}

module.exports.allAccounts = (req, res) => { // To Display all available users with "Super Admin Access"
return viewSuperUsersData(req, res)
}