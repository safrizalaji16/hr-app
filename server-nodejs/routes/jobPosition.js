const Controller = require("../controllers/jobPosition");

const router = require("express").Router();

router
  .post("/", Controller.createJobPosition)
  .get("/", Controller.readAllJobPositions)
  .get("/:id", Controller.readOneJobPosition)
  .put("/:id", Controller.updateJobPosition)
  .delete("/:id", Controller.deleteJobPosition);

module.exports = router;
