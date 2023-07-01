const { Router } = require("express");

const {
  createOneTrainee,
  getAllTrainees,
  getOneTrainee,
  updateOneTrainee,
  deleteOneTrainee,
} = require("../controllers/trainee.controller");

class TraineeRoutes {
  routesFromTrainee() {
    const traineeRoutes = Router();
    traineeRoutes.post("/createOneTrainee", createOneTrainee);
    traineeRoutes.get("/getAllTrainees", getAllTrainees);
    traineeRoutes.get("/getOneTrainee/:id", getOneTrainee);
    traineeRoutes.patch("/updateOneTrainee/:id", updateOneTrainee);
    traineeRoutes.delete("/deleteOneTrainee/:id", deleteOneTrainee);
    return traineeRoutes;
  }
}

module.exports = new TraineeRoutes();
