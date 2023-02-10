const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password, username } = req.body;
      const newUser = await User.create({ email, password, username });

      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw {
          name: "Error email or password",
        };
      }

      const findUser = await User.findOne({
        where: { email },
      });

      if (!findUser || !comparePassword(password, findUser.password)) {
        throw {
          name: "Error email or password",
        };
      }

      const access_token = createToken({ id: findUser.id });

      res.status(200).json({
        access_token,
        username: findUser.username,
        email: findUser.email,
        msg: "Login Success!",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
