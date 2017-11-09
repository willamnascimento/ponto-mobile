webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApontamentoPageModule", function() { return ApontamentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apontamento__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApontamentoPageModule = (function () {
    function ApontamentoPageModule() {
    }
    return ApontamentoPageModule;
}());
ApontamentoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__apontamento__["a" /* ApontamentoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apontamento__["a" /* ApontamentoPage */]),
        ],
    })
], ApontamentoPageModule);

//# sourceMappingURL=apontamento.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApontamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cache_cache__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApontamentoPage = (function () {
    function ApontamentoPage(navCtrl, navParams, viewCtrl, cache) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cache = cache;
    }
    ApontamentoPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    ApontamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApontamentoPage');
    };
    return ApontamentoPage;
}());
ApontamentoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-apontamento',template:/*ion-inline-start:"C:\Projetos\ponto-mobile.git\src\pages\apontamento\apontamento.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Apontamento</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row no-padding>\n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-label class="label-green-center">Entrada </ion-label>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento"></ion-col>\n\n        \n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-row no-padding>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">07</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-2 no-padding class="col-apontamento-hora1">\n\n                        <ion-label>:</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">59</ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento">\n\n                <ion-icon name="checkmark" style="color: greenyellow; margin: -5px 0 0 15px; font-size: 3.4em !important;"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row no-padding>\n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-label class="label-green-center">Intervalo </ion-label>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento"></ion-col>\n\n        \n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-row no-padding>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-2 no-padding class="col-apontamento-hora1">\n\n                        <ion-label>:</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento">\n\n                <ion-icon name="close" style="color: red; margin: -5px 0 0 15px; font-size: 3.4em !important;"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row no-padding>\n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-label class="label-green-center">Chegada </ion-label>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento"></ion-col>\n\n        \n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-row no-padding>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-2 no-padding class="col-apontamento-hora1">\n\n                        <ion-label>:</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-5  class="col-apontamento">\n\n                <ion-icon name="close" style="color: red; margin: -5px 0 0 15px; font-size: 3.4em !important;"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row no-padding>\n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-label class="label-green-center">Saída </ion-label>\n\n            </ion-col>\n\n            <ion-col col-5 no-padding class="col-apontamento"></ion-col>\n\n        \n\n            <ion-col col-3 no-padding class="col-apontamento"></ion-col>\n\n            <ion-col col-4 no-padding class="col-apontamento">\n\n                <ion-row no-padding>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-2 no-padding class="col-apontamento-hora1">\n\n                        <ion-label>:</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-5 no-padding class="col-apontamento-hora">\n\n                        <ion-label class="label-gray-center">00</ion-label>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-col>\n\n            <ion-col col-5 class="col-apontamento">\n\n                <ion-icon name="close" style="color: red; margin: -5px 0 0 15px; font-size: 3.4em !important;"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row style="margin-top: 15px;">\n\n            <ion-col col-12 no-padding no-marging>\n\n                <button class="btn-center" ion-button  outline item-end icon-right (click)="openCreateAccount()" style="height: 120px;">\n\n                    <ion-icon name="clock" style="font-size: 7.4em !important; padding-left: 0;"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-row no-padding no-margin>\n\n        <ion-col col-4 no-padding></ion-col>\n\n        <ion-col col-4 no-padding style="text-align: center;">\n\n            <span class="span-ion-footer btn-center">© ClickPonto 2017</span>\n\n        </ion-col>\n\n        <ion-col col-4 no-padding></ion-col>\n\n    </ion-row>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projetos\ponto-mobile.git\src\pages\apontamento\apontamento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_cache_cache__["a" /* CacheProvider */]])
], ApontamentoPage);

//# sourceMappingURL=apontamento.js.map

/***/ })

});
//# sourceMappingURL=1.js.map