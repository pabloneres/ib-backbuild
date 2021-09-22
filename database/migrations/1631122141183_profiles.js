"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Profiles extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "profiles";
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
            table.string("zip");
            table.string("city");
            table.string("state");
            table.string("cpf");
            table.string("birth");
            table.string("cell");
            table.string("barbername");
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Profiles;
//# sourceMappingURL=1631122141183_profiles.js.map