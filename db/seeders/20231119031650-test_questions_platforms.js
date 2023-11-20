"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("questions_platform", [
      {
        platform: "Leetcode",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        platform: "Hackerrank",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        platform: "Neetcode",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        platform: "Kaggle",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        platform: "Others",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("questions_platform", null, {});
  },
};
