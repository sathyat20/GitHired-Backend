"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("contacts", [
      {
        user_id: 1,
        contact_name: "Albert",
        company: "Rocket",
        position: "Coding Instructor",
        email: "albert@rocketacademy.co",
        notes: "Met at networking session at TikTok",
        phone_number: "83293232",
        last_contacted_date: "2023-10-22",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        contact_name: "Emily",
        company: "Tech Innovation",
        position: "Software Engineer",
        email: "emily@techinnovation.com",
        notes: "Collaborated on a project last year",
        phone_number: "74561239",
        last_contacted_date: "2023-11-05",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        contact_name: "Mark",
        company: "Digital Creations",
        position: "Creative Director",
        email: "mark@digitalcreations.com",
        notes: "Met at a design conference",
        phone_number: "98762345",
        last_contacted_date: "2023-09-15",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        contact_name: "Sophia",
        company: "DataTech",
        position: "Data Scientist",
        email: "sophia@datatech.com",
        notes: "Connected through LinkedIn",
        phone_number: "55442211",
        last_contacted_date: "2023-11-10",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        contact_name: "David",
        company: "Code Masters",
        position: "Lead Developer",
        email: "david@codemasters.com",
        notes: "Attended a coding workshop together",
        phone_number: "67894561",
        last_contacted_date: "2023-10-30",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("contacts", null, {});
  },
};
