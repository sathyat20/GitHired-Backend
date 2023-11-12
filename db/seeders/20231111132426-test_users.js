'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
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
       username: "fleung",
       password: "heyheyhey",
       profile_pic: "hello",
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       email: "sam@rocketacademy.co",
       first_name: "Sam",
       last_name: "Shaunessy",
       username: "sshaun",
       password: "oops",
       profile_pic: "hello",
       created_at: new Date(),
       updated_at: new Date(),
     },
   ]);
  },

  async down (queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  }
};
