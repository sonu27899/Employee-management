module.exports = (app) => {
  const fs = require('fs');
  const express = require('express');
  const router = express.Router();
  console.log("Innnn")
  
  fs.readdirSync('./app/routes/').forEach(version => {
    
      if (version.indexOf('.js') == -1) {
          fs.readdirSync('./app/routes/' + version).forEach(async (routerType) => {
              if ((routerType.indexOf('.') !== 0) && (routerType.slice(-3) === '.js')) {
                  const routerPath = await require('./' + version + '/' + routerType)(router);
                  app.use('/' + version, routerPath);
              } else {
                  fs.readdirSync('./app/routes/' + version + '/' + routerType).forEach(async (files) => {
                      const routerPath = await require('./' + version + '/' + routerType + '/' + files)(router);
                      console.log("path", '/' + version + '/' + routerType);
                      app.use('/' + version + '/' + routerType, routerPath);
                  });
              }
          });
      }
  });
}