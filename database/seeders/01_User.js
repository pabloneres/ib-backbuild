"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                username: "pablo",
                email: "pablo@adonisjs.com",
                password: "secret",
            },
            {
                username: "pablo2",
                email: "romain@adonisjs.com",
                password: "supersecret",
            },
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=01_User.js.map