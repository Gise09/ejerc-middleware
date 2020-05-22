const fs = require('fs');
const path = require('path');
const rutaBase = __basedir;
const pathAGuardar = path.join(rutaBase, 'logs', 'userLogs.txt')

const userLogs = (req, res, next) => {
    fs.appendFileSync(pathAGuardar, `El usuario ingresó a la ruta: ${req.url}\n`);
    return next();
};

module.exports = userLogs;