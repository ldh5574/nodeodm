/*
Node-OpenDroneMap Node.js App and REST API to access OpenDroneMap.
Copyright (C) 2016 Node-OpenDroneMap Contributors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";
let swaggerJSDoc = require('swagger-jsdoc');
let fs = require('fs');

let options = {
  swaggerDefinition: {
    info: {
      title: 'Node-OpenDroneMap',
      version: '0.1.0',
      license: {
        name: 'GPLv3',
        url: 'http://www.gnu.org/licenses/'
      }, 
      contact: {
        name: 'Piero Toffanin',
        url: 'https://www.masseranolabs.com',
        email: 'pt@masseranolabs.com'
      }
    },
    consumes: ["application/json"],
    produces: ["application/json", "application/zip"],
    basePath: "/",
    schemes: ["http"]
  },
  apis: ['../index.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
let swaggerSpec = swaggerJSDoc(options);
fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec));