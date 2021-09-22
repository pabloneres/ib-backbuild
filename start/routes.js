"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post("/session", "SessionsController.auth");
Route_1.default.get("/", async () => {
    return { hello: "world" };
});
Route_1.default.group(() => {
    Route_1.default.get("/", "UsersController.index");
    Route_1.default.post("/", "UsersController.store");
}).prefix("users");
Route_1.default.group(() => {
    Route_1.default.get("/", "ProfilesController.index");
    Route_1.default.post("/", "ProfilesController.store");
}).prefix("profiles");
Route_1.default.group(() => {
    Route_1.default.get("/", "CustomersController.index");
    Route_1.default.post("/", "CustomersController.store");
})
    .prefix("costumers")
    .middleware(["auth"]);
//# sourceMappingURL=routes.js.map