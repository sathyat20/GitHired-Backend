const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(applicationsController, notesController) {
    this.applicationsController = applicationsController;
    this.notesController = notesController;
  }

  routes = () => {
    // Routes for Applications
    router.get("/", this.applicationsController.test);
    router.post("/create", this.applicationsController.createOneApplication);
    router.put(
      "/edit/:applicationId",
      this.applicationsController.updateOneApplication
    );
    router.delete("/delete/:id", this.applicationsController.deleteOne);

    // Routes for Notes
    router.get("/notes", this.notesController.test);
    router.get("/notes/:id", this.notesController.getOne);
    // router.get("/notes/preview", this.controller.getAllNotesPreview);
    // router.post("/notes/create", this.controller.createOneNote);
    // router.put("/notes/edit/:notesId", this.controller.editOneNote);
    // router.delete("/notes/delete/:id", this.controller.deleteOne);

    // Routes for Interviews
    // router.get("/interviews/:interviewsId", this.controller.getOneInterview);
    // router.get("/interviews/preview", this.controller.getAllInterviewsPreview);
    // router.post("/interviews/create", this.controller.createOneInterview);
    // router.put(
    //   "/interviews/edit/:interviewsId",
    //   this.controller.editOneInterview
    // );
    // router.delete(
    //   "/interviews/delete/:interviewsId",
    //   this.controller.deleteOneInterview
    // );

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
