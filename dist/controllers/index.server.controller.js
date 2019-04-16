"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res, next) {
        res.render('index', { title: 'Express' });
    };
    IndexController.prototype.msg = function (req, res) {
        res.json({ msg: 'Hello!' });
    };
    return IndexController;
}());
exports.default = IndexController;
exports.indexController = new IndexController();
//# sourceMappingURL=index.server.controller.js.map