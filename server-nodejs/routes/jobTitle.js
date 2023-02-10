const Controller = require("../controllers/jobTitle");

const router = require("express").Router();

router
  .post("/", Controller.createJobTitle)
  .get("/", Controller.readAllJobTitles)
  .get("/:id", Controller.readOneJobTitle)
  .put("/:id", Controller.updateJobTitle)
  .delete("/:id", Controller.deleteJobTitle);

module.exports = router;
