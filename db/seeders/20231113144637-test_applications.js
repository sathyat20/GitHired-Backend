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
   await queryInterface.bulkInsert("applications", [
     {
       user_id: 1,
       job_position: "Software Engineer (Self-driving)",
       color: "#FD2D00",
       company_name: "Tesla",
       status_id: 1,
       isBookmarked: true,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Senior Software Developer",
       color: "#A2A0A0",
       company_name: "Apple",
       status_id: 2,
       isBookmarked: true,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Prompt Engineer",
       color: "#0D692E",
       company_name: "OpenAI",
       status_id: 3,
       isBookmarked: true,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Graphics Engine Developer",
       color: "#B23BFF",
       company_name: "Pixar",
       status_id: 4,
       isBookmarked: false,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Business Analyst (Technical)",
       color: "#B23BFF",
       company_name: "Synapxe",
       status_id: 2,
       isBookmarked: true,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Bubble Tea Engineer",
       color: "#FD2D00",
       company_name: "Rocket Academy",
       status_id: 5,
       isBookmarked: true,
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       user_id: 1,
       job_position: "Fundamentals Coach",
       color: "#FD2D00",
       company_name: "Rocket Academy",
       status_id: 2,
       isBookmarked: true,
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
    queryInterface.bulkDelete("applications", null, {})
  }
};
