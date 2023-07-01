const { Router } = require("express");

const {
  createOneCategory,
  getAllCategories,
  getOneCategory,
  updateOneCategory,
  deleteOneCategory,
} = require("../controllers/category.controller");

class CategoryRoutes {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/getAllCategories", getAllCategories);
    categoryRoutes.get("/getOneCategory/:id", getOneCategory);
    categoryRoutes.patch("/updateOneCategory/:id", updateOneCategory);
    categoryRoutes.delete("/deleteOneCategory/:id", deleteOneCategory);
    return categoryRoutes;
  }
}
module.exports = new CategoryRoutes();
