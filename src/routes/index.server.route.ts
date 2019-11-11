import { Express } from "express";
import { indexController } from "../controllers/index.server.controller";
import { emailController } from "../controllers/email.server.controller";

export default class IndexRoute {
  constructor(app: Express) {
    app.route("/").get(indexController.index);
    app.route("/contact").post(emailController.contact)
    app.route("/valuation").post(emailController.valuation)
  }
}
