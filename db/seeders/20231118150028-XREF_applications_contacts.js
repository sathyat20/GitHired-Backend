"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("XREF_applications_contacts", [
      {
        contact_id: 1,
        application_id: 1,
      },
      {
        contact_id: 1,
        application_id: 2,
      },
      {
        contact_id: 2,
        application_id: 1,
      },
      {
        contact_id: 3,
        application_id: 1,
      },
      {
        contact_id: 4,
        application_id: 3,
      },
      {
        contact_id: 5,
        application_id: 3,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("XREF_applications_contacts", null, {});
  },
};
