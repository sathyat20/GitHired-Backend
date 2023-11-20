'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.createTable("questions", {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "users",
              key: "id",
            },
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          link: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "questions_category",
              key: "id",
            },
          },
          difficulty_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "questions_difficulty",
              key: "id",
            },
          },
          status_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "questions_status",
              key: "id",
            },
          },
          platform_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: "questions_platform",
              key: "id",
            },
          },
          notes: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          starred: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
          },
          date_attempted: {
            type: Sequelize.DATEONLY,
            allowNull: true,
          },
          date_solved: {
            type: Sequelize.DATEONLY,
            allowNull: true,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("questions")
  }
};
