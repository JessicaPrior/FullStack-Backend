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
exports.ImageBusiness = void 0;
const ImageDataBase_1 = require("../data/ImageDataBase");
const CustomError_1 = require("../error/CustomError");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
class ImageBusiness {
    createImage(image, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const date = new Date();
                const authenticator = new Authenticator_1.Authenticator();
                const verifyToken = authenticator.getData(user.token);
                if (!image.subtitle || !image.file || !image.collection) {
                    throw new CustomError_1.CustomError("Missing input", 422);
                }
                if (!verifyToken) {
                    throw new CustomError_1.CustomError("Not authorized", 401);
                }
                const idGenerator = new IdGenerator_1.IdGenerator();
                const id = idGenerator.generate();
                const imageDatabase = new ImageDataBase_1.ImageDatabase();
                const result = yield imageDatabase.createImage(id, image.subtitle, verifyToken.id, date, image.file, image.tags, image.collection);
                return result;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    getAllImages(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authenticator = new Authenticator_1.Authenticator();
                const verifyToken = authenticator.getData(user);
                if (!verifyToken) {
                    throw new CustomError_1.CustomError("Not authorized", 401);
                }
                const imageDatabase = new ImageDataBase_1.ImageDatabase();
                const image = yield imageDatabase.getAllImages();
                return image;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    getImageById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imageDatabase = new ImageDataBase_1.ImageDatabase();
                const image = yield imageDatabase.getImageById(input.id);
                if (!input.id) {
                    throw new CustomError_1.CustomError("invalid-id", 401);
                }
                return {
                    id: image.getId(),
                    subtitle: image.getSubtitle(),
                    author: image.getAuthor(),
                    date: image.getDate(),
                    file: image.getFile(),
                    tags: image.getTags(),
                    collection: image.getCollection()
                };
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
}
exports.ImageBusiness = ImageBusiness;
//# sourceMappingURL=ImageBusiness.js.map