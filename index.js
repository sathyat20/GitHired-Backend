const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

// Import Routers
const UserRouter = require("./routers/userRouter");
const ApplicationsRouter = require("./routers/applicationsRouter");

// Import Controllers
const UserController = require("./controllers/userController");
const ApplicationsController = require("./controllers/applicationsController");

// import db
const db = require("./db/models");
const { user, application, applicationStatus, applicationReminder } = db;

// Initializing Controllers
const userController = new UserController(user, application, applicationStatus);
const applicationsController = new ApplicationsController(
  application,
  applicationStatus,
  applicationReminder
);

// Initializing Routers
const userRouter = new UserRouter(userController);
const applicationsRouter = new ApplicationsRouter(applicationsController);

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter.routes());
app.use("/applications", applicationsRouter.routes());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
