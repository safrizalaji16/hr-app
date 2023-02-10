const router = require("express").Router();
const userRouter = require("./user");
const employeeRouter = require("./employee");
const jobTitleRouter = require("./jobTitle");
const jobPositionRouter = require("./jobPosition");

router.use("/", userRouter);
router.use("/job-titles", jobTitleRouter);
router.use("/job-positions", jobPositionRouter);
router.use("/employees", employeeRouter);

module.exports = router;
