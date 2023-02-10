"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "JobPositions",
      [
        {
          code: "CEO",
          name: "Chief Executive Office",
          JobTitleId: 1,
        },
        {
          code: "PM",
          name: "Project Manager",
          JobTitleId: 1,
        },
        {
          code: "SE",
          name: "Software Engineer",
          JobTitleId: 2,
        },
        {
          code: "ME",
          name: "Mechanical Engineer",
          JobTitleId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("JobPositions", null, {});
  },
};
