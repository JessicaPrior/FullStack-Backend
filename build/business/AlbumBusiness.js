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
exports.AlbumBusiness = void 0;
const AlbumData_1 = require("../data/AlbumData");
const CustomError_1 = require("../error/CustomError");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
class AlbumBusiness {
    createAlbum(album, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authenticator = new Authenticator_1.Authenticator();
                const verifyToken = authenticator.getData(user.token);
                if (!album.title || !album.subtitle || !album.image) {
                    throw new CustomError_1.CustomError("Missing input", 422);
                }
                if (!verifyToken) {
                    throw new CustomError_1.CustomError("Not authorized", 401);
                }
                const idGenerator = new IdGenerator_1.IdGenerator();
                const id = idGenerator.generate();
                const albumDataBase = new AlbumData_1.AlbumDataBase();
                const result = yield albumDataBase.createAlbum(id, album.title, album.subtitle, album.image);
                return result;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    getAllAlbuns(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authenticator = new Authenticator_1.Authenticator();
                const verifyToken = authenticator.getData(user);
                if (!verifyToken) {
                    throw new CustomError_1.CustomError("Not authorized", 401);
                }
                const albumDataBase = new AlbumData_1.AlbumDataBase();
                const album = yield albumDataBase.getAllAlbuns();
                return album;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    getAlbumById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const albumDataBase = new AlbumData_1.AlbumDataBase();
                const album = yield albumDataBase.getAlbumById(input);
                if (!input) {
                    throw new CustomError_1.CustomError("invalid-id", 401);
                }
                return {
                    album
                };
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    addItem(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idGenerator = new IdGenerator_1.IdGenerator();
                const id = idGenerator.generate();
                const albumDataBase = new AlbumData_1.AlbumDataBase();
                const item = yield albumDataBase.addItem(id, input.image_id, input.album_id);
                return item;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
}
exports.AlbumBusiness = AlbumBusiness;
//# sourceMappingURL=AlbumBusiness.js.map