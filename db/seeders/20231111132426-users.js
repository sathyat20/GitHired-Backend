"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        email: "gbrllim@gmail.com",
        first_name: "Gabriel",
        last_name: "Lim",
        profile_pic:
          "https://firebasestorage.googleapis.com/v0/b/githired-c0060.appspot.com/o/profile-images%2Fdisplayphotos-01.jpg?alt=media&token=aca70dc5-3623-4186-9408-97d2836801f7",
        application_goal_count: 5,
        questions_goal_count: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "sathya@unisoft.sg",
        first_name: "Sathya",
        last_name: "T",
        profile_pic:
          "https://firebasestorage.googleapis.com/v0/b/githired-c0060.appspot.com/o/profile-images%2Flogo.png?alt=media&token=528a1a33-05e4-4930-b597-6b0b8de24cc3",
        application_goal_count: 14,
        questions_goal_count: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "iggy@rocketacademy.co",
        first_name: "Iggy",
        last_name: "Mr",
        profile_pic:
          "https://firebasestorage.googleapis.com/v0/b/githired-c0060.appspot.com/o/profile-images%2Fmorty.png?alt=media&token=902c7548-dd7e-4a2d-93f9-e5a59fb8b9bc",
        application_goal_count: 10,
        questions_goal_count: 5,
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
