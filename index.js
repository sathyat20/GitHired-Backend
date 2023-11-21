const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Import Routers
const UserRouter = require("./routers/userRouter");
const ApplicationsRouter = require("./routers/applicationsRouter");
const AuthRouter = require("./routers/authRouter");
const QuestionsRouter = require("./routers/questionsRouter");
const ContactsRouter = require("./routers/contactsRouter");

// Import Controllers
const UserController = require("./controllers/userController");
const ApplicationsController = require("./controllers/applicationsController");
const AuthController = require("./controllers/authController");
const QuestionsController = require("./controllers/questionsController");
const ContactsController = require("./controllers/contactsController");
const NotesController = require("./controllers/notesController");
const InterviewController = require("./controllers/interviewController");

// import db
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
} = db;

// Initializing Controllers
const userController = new UserController(
  user,
  application,
  applicationStatus,
  applicationNote,
  applicationInterview,
  applicationReminder
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
const contactsController = new ContactsController(contact);
const notesController = new NotesController(applicationNote);
const interviewController = new InterviewController(applicationInterview);

// Initializing Routers
const userRouter = new UserRouter(userController);
const applicationsRouter = new ApplicationsRouter(
  applicationsController,
  notesController,
  interviewController
);
const authRouter = new AuthRouter(authController);
const questionsRouter = new QuestionsRouter(questionsController);
const contactsRouter = new ContactsRouter(contactsController);

const app = express();
const allowedOrigins = [
  "https://git-hired-app.netlify.app",
  "http://localhost:3000", // Add localhost:8080 as an allowed origin
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

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter.routes());
app.use("/applications", applicationsRouter.routes());
app.use("/auth", authRouter.routes());
app.use("/questions", questionsRouter.routes());
app.use("/contacts", contactsRouter.routes());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
