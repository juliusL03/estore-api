import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Estore API",
      version: "1.0.0",
      description: "Ecommerce REST API built with Node.js, Express, TypeScript, and PostgreSQL",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // or wherever you keep your route files
};

export const swaggerSpec = swaggerJSDoc(options);
