const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRegDoc=require("../routes/authDoc");
const userGet = require("../routes/userDocs");
const postDocs = require("../routes/postDoc");

const options= {
    definition: {
        openapi: '3.0.0',
        info: {
          version: '1.0.0',
          title: 'BLOG APIs',
          description: 'Blog apis configurations',
        },
        servers: [
          {
            url: 'http://localhost:3000/',
            description: 'Development server',
          },

          
        ],
    
        tags: [
          { name: 'AUTHENTICATION', description: 'Authentication Routes' },
          {name:'USERS',description:'Getting user by Id'},
          {name:'POST',description:'Post users'}
        ],
        components: {
            securitySchemes: {
              token:{
                type:'apiKey',
                scheme:'bearer',
                bearerFormat:'JWT',
                name:'token',
                in:'header'
  
              },
  
            },
  
          },
          paths: {
            ...userRegDoc,
            ...userGet,
            ...postDocs
          },
        },
        apis: ['../routes/*/.js'],
  
  };
  const swaggerDocumention = (app) =>{
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
  }
const swaggerSpec=swaggerJSDoc(options);
module.exports =swaggerDocumention;