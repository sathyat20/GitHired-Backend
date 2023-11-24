const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Import middlewares
const verifyToken = require("./middlewares/verifyToken");

// Import routers
const UserRouter = require("./routers/userRouter");
const ApplicationsRouter = require("./routers/applicationsRouter");
const AuthRouter = require("./routers/authRouter");
const QuestionsRouter = require("./routers/questionsRouter");
const ContactsRouter = require("./routers/contactsRouter");

// Import controllers
const UserController = require("./controllers/userController");
const ApplicationsController = require("./controllers/applicationsController");
const AuthController = require("./controllers/authController");
const QuestionsController = require("./controllers/questionsController");
const ContactsController = require("./controllers/contactsController");
const NotesController = require("./controllers/notesController");
const InterviewController = require("./controllers/interviewController");
const RemindersController = require("./controllers/remindersController");

// Import db
const db = require("./db/models");
const {
  user,
  application,
  contact,
  applicationStatus,
  applicationReminder,
  question,
  questionCategory,
  questionDifficulty,
  questionLanguage,
  questionPlatform,
  questionStatus,
  applicationNote,
  applicationInterview,
  applicationContacts,
} = db;

// Initializing controllers
const userController = new UserController(
  user,
  application,
  applicationStatus,
  applicationNote,
  applicationInterview,
  applicationReminder,
  question,
  contact
);
const applicationsController = new ApplicationsController(
  application,
  applicationStatus,
  applicationReminder,
  applicationNote,
  applicationInterview
);
const authController = new AuthController(user);
const questionsController = new QuestionsController(
  question,
  questionCategory,
  questionDifficulty,
  questionLanguage,
  questionPlatform,
  questionStatus
);
const contactsController = new ContactsController(
  contact,
  applicationContacts,
  application
);
const notesController = new NotesController(applicationNote);
const interviewController = new InterviewController(applicationInterview);
const remindersController = new RemindersController(applicationReminder);

// Initializing routers
const userRouter = new UserRouter(userController, verifyToken);
const applicationsRouter = new ApplicationsRouter(
  applicationsController,
  notesController,
  interviewController,
  remindersController,
  verifyToken
).routes();
const authRouter = new AuthRouter(authController, verifyToken);
const questionsRouter = new QuestionsRouter(questionsController, verifyToken);
const contactsRouter = new ContactsRouter(contactsController, verifyToken);

const app = express();

// Cors options setup
const allowedOrigins = [
  "https://git-hired-app.netlify.app",
  "http://localhost:3000", // Add localhost:3000 as an allowed origin
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
// Initializing middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter.routes());
app.use("/applications", applicationsRouter);
app.use("/auth", authRouter.routes());
app.use("/questions", questionsRouter.routes());
app.use("/contacts", contactsRouter.routes());

app.listen(PORT, () => {
  console.log(`GitHired app listening on port ${PORT}!`);
});
