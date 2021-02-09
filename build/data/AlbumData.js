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
exports.AlbumDataBase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
class AlbumDataBase extends BaseDatabase_1.default {
    createAlbum(id, title, subtitle, image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default.connection
                    .insert({
                    id,
                    title,
                    subtitle,
                    image
                })
                    .into(AlbumDataBase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllAlbuns() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
          SELECT * from ${AlbumDataBase.TABLE_NAME} 
       `);
                return (result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAlbumById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection.raw(`
            select im.file from Album_Table at 
            left join Inserction_Table it on it.album_id = at.id 
            join Image_Table im on it.image_id = im.id 
            where album_id = '${id}'
       `);
                return (result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    addItem(id, image_id, album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const search = yield BaseDatabase_1.default.connection.raw(`
                select * from Inserction_Table where image_id = '${image_id}'
            `);
                if (search[0].length > 0) {
                    throw new Error("Image already exists");
                }
                const result = yield BaseDatabase_1.default.connection
                    .insert({
                    id,
                    image_id,
                    album_id
                })
                    .into("Inserction_Table");
                return (result);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.AlbumDataBase = AlbumDataBase;
AlbumDataBase.TABLE_NAME = "Album_Table";
//# sourceMappingURL=AlbumData.js.map