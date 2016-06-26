"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var num = 2;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 22, name: 'Reaper' },
    { id: 23, name: 'Soldier 76' },
    { id: 24, name: 'Genji' },
    { id: 25, name: 'Hanso' },
];
var HEROES2 = HEROES.slice(0);
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heros';
        this.heroes = HEROES;
        this.oldHeroes = this.heroes.map(function (hero) { return Object.assign({}, hero); });
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent.prototype.onChange = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log('change!', args);
        // this.oldHeroes = this.heroes.slice(0);
    };
    AppComponent.prototype.onReset = function () {
        this.heroes = this.oldHeroes.map(function (hero) { return Object.assign({}, hero); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>My First Angular " + num + " App</h1>\n        <h2>{{hero.name}} details!</h2>\n        <li *ngFor=\"let hero of heroes\">{{hero.id}} - {{hero.name}}</li>\n        <div *ngFor=\"let hero of heroes\">\n             <input [(ngModel)]=\"hero.name\" (keydown)=\"onChange(hero.name)\" placeholder=\"name\" />\n        </div>\n        <button (click)=\"onReset()\">Reset</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map