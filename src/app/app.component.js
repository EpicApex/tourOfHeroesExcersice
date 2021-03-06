"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour Of Heroes';
        this.hero = {
            id: 1,
            name: 'Winston',
            role: 'DPS',
            nemesis: 'Reaper'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./app.component.css'],
        template: "\n              <h1> {{title}} </h1> \n\n              <h2> Hero Description SUP                                   </h2>  \n \n              <div><label> ID </label> {{hero.id}}                        </div> \n\n              <div>\n                    <label> Name   - </label> \n                    <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n              </div>                                                             \n\n              <div><label> Role - </label> {{hero.role}}                  </div> \n\n              <div> {{hero.nemesis}} is its nemesis                       </div>\n            "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map