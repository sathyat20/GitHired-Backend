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
    await queryInterface.bulkInsert("questions_category", [
      {
        category_name: "Arrays & Hashing",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Two Pointers",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Sliding Windows",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Stacks",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Binary Search",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Trees",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Graphs",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "Backtracking",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "1-D Dynamic Programming",
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
    await queryInterface.bulkDelete("questions_category", null, {});
  },
};
