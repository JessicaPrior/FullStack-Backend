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
exports.userData = exports.UserData = void 0;
const User_1 = require("../model/User");
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
class UserData extends BaseDatabase_1.default {
    signup(id, name, email, nickname, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default.connection
                    .insert({
                    id,
                    name,
                    email,
                    password,
                    nickname
                })
                    .into(UserData.TableName);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection
                    .select("*")
                    .from(UserData.TableName)
                    .where({ email });
                return User_1.User.toUserModel(result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    userById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.default.connection
                    .select("*")
                    .from(UserData.TableName)
                    .where({ id });
                return User_1.User.toUserModel(result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserData = UserData;
UserData.TableName = "USER";
exports.userData = new UserData();
//# sourceMappingURL=UserData.js.map