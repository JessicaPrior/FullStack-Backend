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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
const Image_1 = require("../model/Image");
class ImageDatabase extends BaseDatabase_1.default {
    createImage(id, subtitle, author, date, file, tags, collection) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default.connection(ImageDatabase.TABLE_NAME)
                    .insert({
                    id,
                    subtitle,
                    author,
                    date,
                    file,
                    tags,
                    collection
                });
                const result = yield BaseDatabase_1.default.connection(ImageDatabase.Hashtag_Table)
                    .select("tags")
                    .where({ tags });
                if (result.length <= 0) {
                    yield BaseDatabase_1.default.connection(ImageDatabase.Hashtag_Table)
                        .insert({ id, tags });
                }
                return;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllImages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} 
       `);
                return (result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getImageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
          SELECT * from ${ImageDatabase.TABLE_NAME} WHERE id = '${id}'
       `);
                return Image_1.Image.toImageModel(result[0][0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ImageDatabase = ImageDatabase;
ImageDatabase.TABLE_NAME = "Image_Table";
ImageDatabase.Hashtag_Table = "Hashtag_Table";
//# sourceMappingURL=ImageDataBase.js.map