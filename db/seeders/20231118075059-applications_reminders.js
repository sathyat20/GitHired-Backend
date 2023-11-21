"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("application_reminders", [
      {
        application_id: 3,
        reminder_date: "2023-11-20",
        reminder_note: "Prepare for Technical Round",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        reminder_date: "2023-11-22",
        reminder_note: "Follow-up Email Sent",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 2,
        reminder_date: "2023-11-25",
        reminder_note: "Review Portfolio",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        reminder_date: "2023-11-21",
        reminder_note: "Practice Interview Questions",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        reminder_date: "2023-11-24",
        reminder_note: "Update Resume",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 6,
        reminder_date: "2023-11-19",
        reminder_note: "Networking Event Attend",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        reminder_date: "2023-11-23",
        reminder_note: "Mock Interview Preparation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 3,
        reminder_date: "2023-11-26",
        reminder_note: "Research Company History",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        reminder_date: "2023-11-18",
        reminder_note: "LinkedIn Profile Update",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        reminder_date: "2023-11-27",
        reminder_note: "Dress Code Check",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        reminder_date: "2023-11-20",
        reminder_note: "Company's Recent Projects Review",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 2,
        reminder_date: "2023-11-24",
        reminder_note: "Prepare Elevator Pitch",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        reminder_date: "2023-11-28",
        reminder_note: "Industry Trends Research",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 6,
        reminder_date: "2023-11-21",
        reminder_note: "Update LinkedIn Connections",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 3,
        reminder_date: "2023-11-23",
        reminder_note: "Behavioral Interview Practice",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        reminder_date: "2023-11-19",
        reminder_note: "Prepare References List",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        reminder_date: "2023-11-25",
        reminder_note: "Company's Mission Statement Review",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        reminder_date: "2023-11-22",
        reminder_note: "Coding Challenge Preparation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 2,
        reminder_date: "2023-11-26",
        reminder_note: "Behavioral Questions Preparation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        reminder_date: "2023-11-18",
        reminder_note: "Portfolio Projects Update",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("application_reminders", null, {});
  },
};
