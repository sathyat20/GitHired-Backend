"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("application_contacts", [
      {
        contact_id: 1,
        application_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contact_id: 1,
        application_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contact_id: 2,
        application_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contact_id: 3,
        application_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contact_id: 4,
        application_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        contact_id: 5,
        application_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("application_contacts", null, {});
  },
};
