const { JobTitle } = require("../models");

class Controller {
  static async createJobTitle(req, res, next) {
    try {
      const { code, name } = req.body;
      const newJobTitle = await JobTitle.create({ code, name });

      res.status(201).json(newJobTitle);
    } catch (err) {
      next(err);
    }
  }
  static async readAllJobTitles(req, res, next) {
    try {
      const jobTitles = await JobTitle.findAll();

      res.status(200).json(jobTitles);
    } catch (err) {
      next(err);
    }
  }
  static async readOneJobTitle(req, res, next) {
    try {
      const { id } = req.params;
      const jobTitle = await JobTitle.findByPk(id);

      if (!jobTitle) {
        throw {
          name: "Job Title Not Found",
        };
      }

      res.status(200).json(jobTitle);
    } catch (err) {
      next(err);
    }
  }
  static async updateJobTitle(req, res, next) {
    try {
      const { id } = req.params;
      const { code, name } = req.body;
      const jobTitle = await JobTitle.findByPk(id);

      if (!jobTitle) {
        throw {
          name: "Job Title Not Found",
        };
      }

      await JobTitle.update(
        { code, name },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        msg: `Job Title has been updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteJobTitle(req, res, next) {
    try {
      const { id } = req.params;
      const jobTitle = await JobTitle.findByPk(id);

      if (!jobTitle) {
        throw {
          name: "Job Title Not Found",
        };
      }

      await JobTitle.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        msg: `Job Title has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
