const fs = require('fs');

const adminVerify = (req, res, next) => {
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];

    if(admins.indexOf(req.query.user) == -1){
        res.send('No tienes los privilegios para ingresar');
    };
    next();
}

module.exports = adminVerify;