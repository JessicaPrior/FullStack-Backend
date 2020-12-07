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
exports.ImageController = void 0;
const ImageBusiness_1 = require("../business/ImageBusiness");
class ImageController {
    createImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const image = {
                    subtitle: req.body.subtitle,
                    file: req.body.file,
                    tags: req.body.tags,
                    collection: req.body.collection
                };
                const user = {
                    token: req.headers.authorization
                };
                const imageBusiness = new ImageBusiness_1.ImageBusiness();
                yield imageBusiness.createImage(image, user);
                res.status(200).send({ message: "Image published succefully" });
            }
            catch (error) {
                console.log("roda ooo sua vagabunda");
                res.status(400).send({ error: error.message });
            }
        });
    }
    getAllImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authorization } = req.headers;
                const imageBusiness = new ImageBusiness_1.ImageBusiness();
                const result = yield imageBusiness.getAllImages(authorization);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
    getImageById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id
                };
                const imageBusiness = new ImageBusiness_1.ImageBusiness();
                const result = yield imageBusiness.getImageById(input);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map