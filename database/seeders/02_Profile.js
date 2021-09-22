"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Profile_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Profile"));
class ProfileSeeder extends Seeder_1.default {
    async run() {
        await Profile_1.default.create({
            user_id: 1,
            firstname: "Pablo",
            lastname: "Neres",
            zip: "07175-140",
            city: "Guarulhos",
            state: "SP",
            cpf: "49774922859",
            birth: "16/06/1999",
            cell: "11958528808",
            barbername: "PabloBarber",
        });
    }
}
exports.default = ProfileSeeder;
//# sourceMappingURL=02_Profile.js.map