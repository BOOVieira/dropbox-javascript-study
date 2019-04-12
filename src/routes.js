const express = require("express");
const multer = require("multer");
const multerConfig = require("./Config/multer");

const routes = express.Router();

const BoxController = require("./Controllers/BoxController");
const FileController = require("./Controllers/FileController");

//Requisições REST: GET (read), POST (create), PUT (edit), DELETE (delete)

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single("file"), FileController.store);

module.exports = routes; 