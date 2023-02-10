const Controller = require("../controllers/employee");

const router = require("express").Router();

router
  .post("/", Controller.createEmployee)
  .get("/", Controller.readAllEmployees)
  .get("/:id", Controller.readOneEmployee)
  .put("/:id", Controller.updateEmployee)
  .delete("/:id", Controller.deleteEmployee);

module.exports = router;
