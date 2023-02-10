const router = require("express").Router();
const userRouter = require("./user");
const employeeRouter = require("./employee");
const jobTitleRouter = require("./jobTitle");
const jobPositionRouter = require("./jobPosition");
const { authentication } = require("../middlewares/authentication");

router
  .use("/", userRouter)
  .use(authentication)
  .use("/job-titles", jobTitleRouter)
  .use("/job-positions", jobPositionRouter)
  .use("/employees", employeeRouter);

module.exports = router;
