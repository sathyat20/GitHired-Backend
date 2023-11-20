"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("XREF_applications_contacts", [
      {
        contacts_id: 1,
        applications_id: 1,
      },
      {
        contacts_id: 1,
        applications_id: 2,
      },
      {
        contacts_id: 2,
        applications_id: 1,
      },
      {
        contacts_id: 3,
        applications_id: 1,
      },
      {
        contacts_id: 4,
        applications_id: 3,
      },
      {
        contacts_id: 5,
        applications_id: 3,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("XREF_applications_contacts", null, {});
  },
};
