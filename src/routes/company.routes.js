const { Router } = require("express");

const {
  createOneCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  deleteOneCompany,
} = require("../controllers/company.controller");

class CompanyRoutes {
  routesFromCompany() {
    const companyRoutes = Router();
    companyRoutes.post("/createOneCompany", createOneCompany);
    companyRoutes.get("/getAllCompanies", getAllCompanies);
    companyRoutes.get("/getOneCompany/:id", getOneCompany);
    companyRoutes.patch("/updateOneCompany/:id", updateOneCompany);
    companyRoutes.delete("/deleteOneCompany/:id", deleteOneCompany);
    return companyRoutes;
  }
}
module.exports = new CompanyRoutes();
