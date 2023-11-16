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
    await queryInterface.bulkInsert("users", [
      {
        email: "foong@rocketacademy.co",
        first_name: "Foong",
        last_name: "Leung",
        profile_pic: "hello",
        application_goal_count: 5,
        questions_goal_count: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "sam@rocketacademy.co",
        first_name: "Sam",
        last_name: "Shaunessy",
        profile_pic: "hello",
        application_goal_count: 4,
        questions_goal_count: 2,
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
