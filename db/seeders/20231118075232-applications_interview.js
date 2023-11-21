"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("application_interviews", [
      {
        application_id: 2,
        title: "Interview Preparation: Senior Software Developer Role",
        content:
          "Prepare examples of handling large-scale projects and describe experiences in managing technical teams. Research the company's recent software development methodologies and innovations. Practice explaining the implementation of complex algorithms and problem-solving approaches. Also, brainstorm questions to ask about team dynamics, future projects, and the company's tech stack.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        title: "Phone Interview Preparation with HR",
        content:
          "Review the job description thoroughly and align key skills with past experiences. Prepare to discuss career goals and how they align with the company's mission. Practice answering behavioral questions focusing on teamwork, conflict resolution, and leadership. Create a list of questions regarding the company's culture, growth opportunities, and recent achievements to ask the interviewer.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 3,
        title: "Final Round Interview Preparation",
        content:
          "Revise technical skills, especially those relevant to the position, and review projects related to the company's industry. Prepare to discuss challenges faced in previous roles and how they were overcome. Practice storytelling to articulate experiences effectively. Prepare specific questions about the company's roadmap, goals, and potential challenges it might face.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        title: "Technical Interview Preparation",
        content:
          "Study algorithms, data structures, and relevant technologies mentioned in the job description. Solve practice problems and review past projects to discuss implementation details. Practice coding on a whiteboard or using an online coding platform. Prepare questions related to the company's technical challenges and the team's collaboration process.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        title: "Behavioral Interview Preparation",
        content:
          "Create a list of STAR (Situation, Task, Action, Result) examples for common behavioral questions. Focus on instances highlighting adaptability, conflict resolution, and leadership. Prepare to discuss past projects in detail and extract lessons learned. Develop insightful questions about team dynamics, project management styles, and the company's vision.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 6,
        title: "Panel Interview Preparation",
        content:
          "Research each interviewer's background and expertise. Prepare examples demonstrating adaptability in diverse work environments and multicultural teams. Practice answering questions regarding your contribution to innovative solutions and handling conflicting opinions. Prepare questions related to the company's global expansion and future market strategies.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        title: "Technical Assessment Preparation",
        content:
          "Review the topics specified for the technical assessment and practice related problems. Brush up on coding languages and frameworks relevant to the role. Prepare to discuss past projects in detail and justify design decisions. Prepare questions about the evaluation process and feedback expectations post-assessment.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 3,
        title: "Case Study Presentation Preparation",
        content:
          "Gather comprehensive research material on the case study topic provided. Structure the presentation with a clear problem statement, analysis, and proposed solutions. Practice presenting within the allocated time frame. Prepare questions regarding the evaluation criteria and expected outcomes of the presentation.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        title: "Mock Interview Practice",
        content:
          "Schedule mock interviews with peers or mentors. Focus on refining communication skills and concise responses. Seek feedback on body language, tone, and clarity of answers. Analyze areas of improvement and tailor preparation accordingly.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        title: "Cultural Fit Interview Preparation",
        content:
          "Research the company's values, mission, and corporate culture. Prepare anecdotes that showcase alignment with these values. Reflect on personal experiences demonstrating teamwork, collaboration, and cultural adaptability. Prepare questions to gauge how the company fosters an inclusive environment.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        title: "Leadership Interview Preparation",
        content:
          "Highlight leadership experiences and challenges faced in previous roles. Prepare examples of inspiring and motivating teams towards a common goal. Discuss strategies for handling conflicts and fostering a positive team culture. Prepare questions on the company's leadership philosophy and succession planning.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 2,
        title: "Behavioral Questions Preparation",
        content:
          "Practice responding to behavioral questions using the STAR (Situation, Task, Action, Result) method. Focus on situations that exhibit problem-solving skills, decision-making, and adaptability. Prepare questions regarding the company's approach to employee development and learning opportunities.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 6,
        title: "Remote Interview Preparation",
        content:
          "Test your internet connection and ensure a quiet, well-lit space for the interview. Familiarize yourself with the video conferencing platform. Prepare backup plans in case of technical difficulties. Anticipate questions related to remote work experience and self-motivation.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        title: "Industry Trends Research",
        content:
          "Stay updated on recent industry trends, market dynamics, and emerging technologies. Prepare to discuss the impact of these trends on the company and how you can contribute. Craft questions about the company's positioning in the industry and plans for technological advancements.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 3,
        title: "Personal Branding in Interviews",
        content:
          "Define your unique selling points and strengths relevant to the job role. Craft a compelling elevator pitch showcasing your skills and experiences. Prepare stories illustrating personal and professional growth. Prepare questions about the company's approach to employee development.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 5,
        title: "Stress Interview Preparation",
        content:
          "Simulate high-pressure scenarios and practice maintaining composure. Review past challenging situations and discuss strategies used to overcome stress. Prepare questions regarding the interviewer's expectations during the stress interview.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 7,
        title: "Adaptability and Flexibility",
        content:
          "Reflect on experiences of adapting to new environments or sudden changes in previous roles. Prepare examples of successfully handling ambiguous situations and multitasking. Craft questions regarding the company's approach to change management.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 4,
        title: "Negotiation Strategy Preparation",
        content:
          "Research industry-standard compensation packages for the role. Define your desired salary range and additional benefits. Practice negotiation scenarios considering both parties' interests. Prepare questions about the company's policies on performance-based incentives.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 2,
        title: "Presentation Skills Improvement",
        content:
          "Practice delivering concise and impactful presentations. Focus on clarity, structure, and engaging delivery. Seek feedback on presentation style and effectiveness. Prepare questions about presentation expectations during the interview process.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        application_id: 1,
        title: "Post-Interview Reflection",
        content:
          "Plan time for self-reflection after each interview round. Evaluate your performance, noting strengths and areas for improvement. Prepare follow-up questions or topics to address in subsequent interviews.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete("application_interviews", null, {});
  },
};
