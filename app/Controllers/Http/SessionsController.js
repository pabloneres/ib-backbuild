"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SessionsController {
    async auth({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.use("api").attempt(email, password);
        return token;
    }
}
exports.default = SessionsController;
//# sourceMappingURL=SessionsController.js.map