// class and constructor
var App = /** @class */ (function () {
    function App() {
        this.name = "kajal parchande";
    }
    App.prototype.getname = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getname();
