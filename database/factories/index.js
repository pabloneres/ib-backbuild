"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFactory = exports.UserFactory = void 0;
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Customer_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Customer"));
exports.UserFactory = Factory_1.default.define(User_1.default, ({ faker }) => {
    return {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}).build();
exports.CustomerFactory = Factory_1.default.define(Customer_1.default, ({ faker }) => {
    return {
        user_id: 1,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        zip: faker.address.zipCode(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        birth: faker.datatype.string(),
        cell: faker.phone.phoneNumber(),
    };
}).build();
//# sourceMappingURL=index.js.map