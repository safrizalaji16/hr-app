const { JobPosition } = require("../models");

class Controller {
  static async createJobPosition(req, res, next) {
    try {
      const { code, name, JobTitleId } = req.body;
      const newJobPosition = await JobPosition.create({
        code,
        name,
        JobTitleId,
      });

      res.status(201).json(newJobPosition);
    } catch (err) {
      next(err);
    }
  }
  static async readAllJobPositions(req, res, next) {
    try {
      const jobPositions = await JobPosition.findAll();

      res.status(200).json(jobPositions);
    } catch (err) {
      next(err);
    }
  }
  static async readOneJobPosition(req, res, next) {
    try {
      const { id } = req.params;
      const jobPosition = await JobPosition.findByPk(id);

      if (!jobPosition) {
        throw {
          name: "Job Position Not Found",
        };
      }

      res.status(200).json(jobPosition);
    } catch (err) {
      next(err);
    }
  }
  static async updateJobPosition(req, res, next) {
    try {
      const { id } = req.params;
      const { code, name, JobTitleId } = req.body;
      const jobPosition = await JobPosition.findByPk(id);

      if (!jobPosition) {
        throw {
          name: "Job Position Not Found",
        };
      }

      await JobPosition.update(
        { code, name, JobTitleId },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        msg: `Job position has been updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteJobPosition(req, res, next) {
    try {
      const { id } = req.params;
      const jobPosition = await JobPosition.findByPk(id);

      if (!jobPosition) {
        throw {
          name: "Job Position Not Found",
        };
      }

      await JobPosition.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        msg: `Job Position has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
