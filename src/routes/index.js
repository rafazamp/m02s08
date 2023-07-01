const { Router } = require("express");
const routes = Router();

const { routesFromCategory } = require("./category.routes");
const { routesFromTrainee } = require("./trainee.routes");
const { routesFromCompany } = require("./company.routes");
const { routesFromContract } = require("./contract.routes");

routes.use("/api", [routesFromCategory(), routesFromTrainee(), routesFromCompany(), routesFromContract()]);

module.exports = routes;
