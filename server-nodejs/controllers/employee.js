const { Employee, JobPosition } = require("../models");

class Controller {
  static async createEmployee(req, res, next) {
    try {
      const { name, nik, address, JobPositionId } = req.body;
      const newEmployee = await Employee.create({
        name,
        nik,
        address,
        JobPositionId,
      });

      res.status(201).json(newEmployee);
    } catch (err) {
      next(err);
    }
  }
  static async readAllEmployees(req, res, next) {
    try {
      const employees = await Employee.findAll({ include: JobPosition });

      res.status(200).json(employees);
    } catch (err) {
      next(err);
    }
  }
  static async readOneEmployee(req, res, next) {
    try {
      const { id } = req.params;
      const employee = await Employee.findByPk(id, { include: JobPosition });

      if (!employee) {
        throw {
          name: "Employee Not Found",
        };
      }

      res.status(200).json(employee);
    } catch (err) {
      next(err);
    }
  }
  static async updateEmployee(req, res, next) {
    try {
      const { id } = req.params;
      const { name, nik, address, JobPositionId } = req.body;
      const employee = await Employee.findByPk(id);

      if (!employee) {
        throw {
          name: "Employee Not Found",
        };
      }

      await Employee.update(
        { name, nik, address, JobPositionId },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        msg: `Employee has been updated`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async deleteEmployee(req, res, next) {
    try {
      const { id } = req.params;
      const employee = await Employee.findByPk(id);

      if (!employee) {
        throw {
          name: "Employee Not Found",
        };
      }

      await Employee.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        msg: `Employee has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
