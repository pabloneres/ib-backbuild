"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async index() {
        const users = await User_1.default.all();
        return users;
    }
    async store({ request }) {
        const data = request.all();
        const user = await User_1.default.create(data);
        return user;
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map