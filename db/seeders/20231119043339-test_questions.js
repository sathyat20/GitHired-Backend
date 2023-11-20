"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("questions", [
      {
        user_id: 1,
        title: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/",
        category_id: 1,
        difficulty_id: 1,
        status_id: 1,
        platform_id: 2,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Three Sum",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 1,
        difficulty_id: 1,
        status_id: 1,
        platform_id: 1,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 2,
        difficulty_id: 2,
        status_id: 2,
        platform_id: 2,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 2,
        difficulty_id: 2,
        status_id: 2,
        platform_id: 3,
        notes: "Can be solved on Python or JavaScript",
        starred: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 2,
        difficulty_id: 3,
        status_id: 2,
        platform_id: 4,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 2,
        difficulty_id: 3,
        status_id: 2,
        platform_id: 5,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/3sum/description/",
        category_id: 2,
        difficulty_id: 1,
        status_id: 2,
        platform_id: 2,
        notes: "Can be solved on Python or JavaScript",
        starred: true,
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
    queryInterface.bulkDelete("questions", null, {});
  },
};
