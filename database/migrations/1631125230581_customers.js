"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Customers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "customers";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table
                .integer("user_id")
                .references("id")
                .inTable("users")
                .notNullable()
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.string("firstname");
            table.string("lastname");
            table.string("email");
            table.string("zip");
            table.string("city");
            table.string("state");
            table.string("birth");
            table.string("cell");
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Customers;
//# sourceMappingURL=1631125230581_customers.js.map