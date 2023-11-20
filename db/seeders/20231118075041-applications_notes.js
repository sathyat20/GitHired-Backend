"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("applications_notes", [
      {
        applications_id: 2,
        title: "Interview Feedback",
        content: "Positive feedback on technical skills.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 5,
        title: "Company Culture",
        content: "Team-oriented culture with emphasis on innovation.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        title: "Interview Questions",
        content:
          "Asked about past project experiences and problem-solving scenarios.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 7,
        title: "Salary Negotiation",
        content: "Offered $10,000 above initial base salary.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 4,
        title: "Work Environment",
        content: "Open office space with collaborative atmosphere.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 6,
        title: "Team Dynamics",
        content: "Multicultural team with diverse perspectives.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 1,
        title: "Job Responsibilities",
        content:
          "Mainly focused on frontend development and client interaction.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        title: "Company Projects",
        content: "Recent projects involved AI integration and data analysis.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 5,
        title: "Benefits Package",
        content: "Comprehensive healthcare coverage and wellness programs.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 7,
        title: "Training Opportunities",
        content: "Offered specialized training programs for skill enhancement.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 4,
        title: "Work-Life Balance",
        content: "Flexible work hours and remote work options available.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 2,
        title: "Company Growth",
        content: "Plans for expansion into international markets discussed.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 1,
        title: "Career Growth",
        content:
          "Opportunities for promotion and career advancement emphasized.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 6,
        title: "Work Challenges",
        content:
          "Discussed challenges in adopting new technologies within the company.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        title: "Future Projects",
        content: "Upcoming projects on renewable energy initiatives mentioned.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 5,
        title: "Remote Work Policy",
        content:
          "Flexibility for remote work with proper infrastructure support.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 7,
        title: "Feedback Process",
        content: "Detailed feedback process after project completions.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 4,
        title: "Team Collaboration",
        content:
          "Emphasis on cross-functional collaboration for project success.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 2,
        title: "Management Style",
        content: "Managerial approach focused on autonomy and mentorship.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 1,
        title: "Office Location",
        content: "Central city location with easy access to transportation.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("applications_notes", null, {});
  },
};
