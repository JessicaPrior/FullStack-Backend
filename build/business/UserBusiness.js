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
exports.userBusiness = exports.UserBusiness = void 0;
const UserData_1 = require("../data/UserData");
const CustomError_1 = require("../error/CustomError");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerator_1 = require("../services/IdGenerator");
class UserBusiness {
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!user.name || !user.email || !user.nickname || !user.password) {
                    throw new CustomError_1.CustomError("Missing input", 422);
                }
                if (user.email.indexOf("@") === -1) {
                    throw new CustomError_1.CustomError("Invalid email", 422);
                }
                if (user.password.length < 6) {
                    throw new CustomError_1.CustomError("Invalid password", 422);
                }
                const idGenerator = new IdGenerator_1.IdGenerator();
                const id = idGenerator.generate();
                const hashManager = new HashManager_1.HashManager();
                const hashPassword = yield hashManager.hash(user.password);
                const userDatabase = new UserData_1.UserData();
                yield userDatabase.signup(id, user.name, user.email, user.nickname, hashPassword);
                const authenticator = new Authenticator_1.Authenticator();
                const accessToken = authenticator.generateToken({ id });
                return accessToken;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!user.email || !user.password) {
                    throw new CustomError_1.CustomError("Missing input", 422);
                }
                const userDatabase = new UserData_1.UserData();
                const userFromDB = yield userDatabase.login(user.email);
                if (!userFromDB) {
                    throw new CustomError_1.CustomError("Invalid credentials", 401);
                }
                const hashManager = new HashManager_1.HashManager();
                const hashCompare = yield hashManager.compare(user.password, userFromDB.getPassword());
                if (!hashCompare) {
                    throw new CustomError_1.CustomError("Invalid credentials", 401);
                }
                const authenticator = new Authenticator_1.Authenticator();
                const accessToken = authenticator.generateToken({ id: userFromDB.getId() });
                if (!hashCompare) {
                    throw new CustomError_1.CustomError("Invalid Password!", 422);
                }
                return accessToken;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.message, error.statusCode);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
exports.userBusiness = new UserBusiness();
//# sourceMappingURL=UserBusiness.js.map