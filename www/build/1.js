webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateAccountPageModule = (function () {
    function CreateAccountPageModule() {
    }
    return CreateAccountPageModule;
}());
CreateAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */]),
        ],
    })
], CreateAccountPageModule);

//# sourceMappingURL=create-account.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dados_dados__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, navParams, toast, dados) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.dados = dados;
        this.model = new User();
    }
    CreateAccountPage.prototype.createAccount = function () {
        var _this = this;
        this.dados.createAccount(this.model.email, this.model.password)
            .then(function (result) {
            _this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
            //Salvar o token no Ionic Storage para usar em futuras requisições.
            //Redirecionar o usuario para outra tela usando o navCtrl
            //this.navCtrl.pop();
            //this.navCtrl.setRoot()
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    };
    return CreateAccountPage;
}());
CreateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-create-account',template:/*ion-inline-start:"C:\Projetos\ponto-mobile.git\src\pages\create-account\create-account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Criar Conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" name="email" [(ngModel)]="model.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="model.password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="createAccount()" color="primary">Criar conta</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\ponto-mobile.git\src\pages\create-account\create-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_dados_dados__["a" /* Dados */]])
], CreateAccountPage);

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=create-account.js.map

/***/ })

});
//# sourceMappingURL=1.js.map