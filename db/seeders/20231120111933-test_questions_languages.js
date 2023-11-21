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
    await queryInterface.bulkInsert("questions_languages", [
      {
        questions_id: 1,
        languages: "JavaScript",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 1,
        languages: "Python",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 2,
        languages: "Python",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 2,
        languages: "JavaScript",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 3,
        languages: "Java",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 4,
        languages: "Golang",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 5,
        languages: "Python",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 6,
        languages: "JavaScript",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        questions_id: 7,
        languages: "C++",
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
    await queryInterface.bulkDelete("questions_languages", null, {});
  },
};
