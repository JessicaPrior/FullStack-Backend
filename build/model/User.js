"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password, nickname) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getNickname() {
        return this.nickname;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    static toUserModel(user) {
        return new User(user.id, user.name, user.email, user.password, user.nickname);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map