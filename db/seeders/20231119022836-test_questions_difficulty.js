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
    await queryInterface.bulkInsert("questions_difficulty", [
      {
        difficulty: "Easy",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        difficulty: "Medium",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        difficulty: "Hard",
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
    await queryInterface.bulkDelete("questions_difficulty", null, {});
  },
};
