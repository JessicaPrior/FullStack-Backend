import express from "express";
import { AlbumController } from "../controller/AlbumController";

export const albumRouter = express.Router();

const albumController = new AlbumController();

albumRouter.post("/create", albumController.createAlbum);
albumRouter.get("/all", albumController.getAllAlbuns);
albumRouter.post("/add-photo", albumController.addItem);
albumRouter.get("/:id", albumController.getAlbumById);
