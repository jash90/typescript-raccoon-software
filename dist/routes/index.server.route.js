"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_server_controller_1 = require("../controllers/email.server.controller");
var IndexRoute = /** @class */ (function () {
    function IndexRoute(app) {
        app.route("/contact").post(email_server_controller_1.emailController.contact);
        app.route("/valuation").post(email_server_controller_1.emailController.valuation);
    }
    return IndexRoute;
}());
exports.default = IndexRoute;
//# sourceMappingURL=index.server.route.js.map