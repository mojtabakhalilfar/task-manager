const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description: "This is a simple task manager API built with Express",
    },
    servers: [
      {
        url: "http://localhost:3000", // آدرس سرور تو
      },
    ],
  },
  apis: ["./src/routes/**/*.js"], // مسیر فایل‌هایی که می‌خوای روشون Swagger بنویسی
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
