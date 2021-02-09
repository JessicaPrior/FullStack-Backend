"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumController = void 0;
const AlbumBusiness_1 = require("../business/AlbumBusiness");
class AlbumController {
    createAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const album = {
                    title: req.body.title,
                    subtitle: req.body.subtitle,
                    image: req.body.image
                };
                const user = {
                    token: req.headers.authorization
                };
                const albumBusiness = new AlbumBusiness_1.AlbumBusiness();
                yield albumBusiness.createAlbum(album, user);
                res.status(200).send({ message: "Album published succefully" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getAllAlbuns(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                const albumBusiness = new AlbumBusiness_1.AlbumBusiness();
                const result = yield albumBusiness.getAllAlbuns(authorization);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getAlbumById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id
                };
                const albumBusiness = new AlbumBusiness_1.AlbumBusiness();
                const result = yield albumBusiness.getAlbumById(input.id);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    image_id: req.body.image_id,
                    album_id: req.body.album_id
                };
                const albumBusiness = new AlbumBusiness_1.AlbumBusiness();
                yield albumBusiness.addItem(input);
                res.status(200).send({ message: "Image added successfully" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.AlbumController = AlbumController;
//# sourceMappingURL=AlbumController.js.map