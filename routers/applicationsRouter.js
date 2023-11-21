const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(
    applicationsController,
    notesController,
    interviewController,
    verifyToken
  ) {
    this.applicationsController = applicationsController;
    this.notesController = notesController;
    this.interviewController = interviewController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    // Routes for Applications
    router.get("/", this.verifyToken, this.applicationsController.test);
    router.get("/:id", this.applicationsController.getOne);
    router.post("/create", this.applicationsController.createOneApplication);
    router.put("/edit/:id", this.applicationsController.editOne);
    router.delete("/delete/:id", this.applicationsController.deleteOne);

    // Routes for Notes
    router.get("/notes", this.notesController.test);
    router.get("/notes/:id", this.notesController.getOne);
    router.post(
      "/notes/create",
      this.verifyToken,
      this.notesController.createOneNote
    );
    router.put(
      "/notes/edit/:id",
      this.verifyToken,
      this.notesController.editOne
    );
    router.delete(
      "/notes/delete/:id",
      this.verifyToken,
      this.notesController.deleteOne
    );

    // Routes for Interviews
    router.get("/interviews", this.interviewController.test);
    router.get("/interviews/:id", this.interviewController.getOne);
    router.post(
      "/interviews/create",
      this.verifyToken,
      this.interviewController.createOneInterview
    );
    router.put(
      "/interviews/edit/:id",
      this.verifyToken,
      this.interviewController.editOne
    );
    router.delete(
      "/interviews/delete/:id",
      this.verifyToken,
      this.interviewController.deleteOne
    );

    // Routes for Documents
    // router.get("/documents/:documentsId", this.controller.getOneDocument);
    // router.get("/documents", this.controller.getAllDocuments);
    // router.post("/documents/create", this.controller.createOneDocument);
    // router.put("/documents/edit/:documentsId", this.controller.editOneDocument);
    // router.delete(
    //   "/documents/delete/:documentsId",
    //   this.controller.deleteOneDocument
    // );
    return router;
  };
}

module.exports = ApplicationsRouter;
