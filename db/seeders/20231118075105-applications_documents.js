"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("applications_documents", [
      {
        applications_id: 2,
        document_type: "Resume - John Doe",
        document_url: "https://www.example.com/johndoe_resume",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 5,
        document_type: "CV - Mary Smith",
        document_url: "https://www.example.com/marysmith_cv",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        document_type: "Cover Letter - Jane Doe",
        document_url: "https://www.example.com/janedoe_coverletter",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 7,
        document_type: "Offer Letter - Employment Agreement",
        document_url: "https://www.example.com/offerletter_agreement",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 4,
        document_type: "Portfolio - Graphic Design Projects",
        document_url: "https://www.example.com/portfolio_graphicdesign",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 6,
        document_type: "Reference Letters",
        document_url: "https://www.example.com/referenceletters",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 1,
        document_type: "Educational Certificates",
        document_url: "https://www.example.com/educationalcertificates",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        document_type: "Transcript - University Degree",
        document_url: "https://www.example.com/transcript_universitydegree",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 5,
        document_type: "Technical Certifications",
        document_url: "https://www.example.com/technicalcertifications",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 7,
        document_type: "Past Employment Contracts",
        document_url: "https://www.example.com/pastemployment_contracts",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 4,
        document_type: "Project Proposals",
        document_url: "https://www.example.com/projectproposals",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 2,
        document_type: "Work Samples - Software Development",
        document_url: "https://www.example.com/worksamples_dev",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 1,
        document_type: "Recommendation Letters",
        document_url: "https://www.example.com/recommendationletters",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 6,
        document_type: "Publications - Research Papers",
        document_url: "https://www.example.com/publications_researchpapers",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        applications_id: 3,
        document_type: "Training Certificates",
        document_url: "https://www.example.com/trainingcertificates",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("applications_documents", null, {});
  },
};
