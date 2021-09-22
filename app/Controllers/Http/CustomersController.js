"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Customer"));
class CustomersController {
    async index({ auth }) {
        const costumers = await Customer_1.default.query().where("user_id", auth.user.id);
        return costumers;
    }
}
exports.default = CustomersController;
//# sourceMappingURL=CustomersController.js.map