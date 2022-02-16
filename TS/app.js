"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.myfun = function () {
        console.log("hello typescript");
    };
    return App;
}());
var x = new App();
x.myfun();
