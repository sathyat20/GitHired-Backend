const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Import Routers
const UserRouter = require("./routers/userRouter");
const ApplicationsRouter = require("./routers/applicationsRouter");
const AuthRouter = require("./routers/authRouter");
const QuestionsRouter = require("./routers/questionsRouter")

// Import Controllers
const UserController = require("./controllers/userController");
const ApplicationsController = require("./controllers/applicationsController");
const AuthController = require("./controllers/authController");
const QuestionsController = require("./controllers/questionsController");

// import db
const db = require("./db/models");
const { user, application, applicationStatus, applicationReminder,
question, questionCategory, questionDifficulty, questionLanguage, questionPlatform, 
questionStatus } = db;

// Initializing Controllers
const userController = new UserController(user, application, applicationStatus);
const applicationsController = new ApplicationsController(
  application,
  applicationStatus,
  applicationReminder
);
const authController = new AuthController(user)
const questionsController = new QuestionsController(
  question,
  questionCategory,
  questionDifficulty,
  questionLanguage,
  questionPlatform,
  questionStatus
);

// Initializing Routers
const userRouter = new UserRouter(userController);
const applicationsRouter = new ApplicationsRouter(applicationsController);
const authRouter = new AuthRouter(authController);
const questionsRouter = new QuestionsRouter(questionsController)

const app = express();
const corsOptions = {
  origin: "https://git-hired-app.netlify.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter.routes());
app.use("/applications", applicationsRouter.routes());
app.use("/auth", authRouter.routes())
app.use("/questions", questionsRouter.routes())

app.get("/", (req, res) => {
  res.send("Hello, World!");
}); 

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
