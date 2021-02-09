"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumRouter = void 0;
const express_1 = __importDefault(require("express"));
const AlbumController_1 = require("../controller/AlbumController");
exports.albumRouter = express_1.default.Router();
const albumController = new AlbumController_1.AlbumController();
exports.albumRouter.post("/create", albumController.createAlbum);
exports.albumRouter.get("/all", albumController.getAllAlbuns);
exports.albumRouter.post("/add-photo", albumController.addItem);
exports.albumRouter.get("/:id", albumController.getAlbumById);
//# sourceMappingURL=albumRouter.js.map