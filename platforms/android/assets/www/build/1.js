webpackJsonp([1],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account__ = __webpack_require__(288);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */]),
        ],
    })
], CreateAccountPageModule);

//# sourceMappingURL=create-account.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dados_dados__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
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
    function CreateAccountPage(navCtrl, navParams, toast, dados, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.dados = dados;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.account = {};
        this.account = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            nome: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            senha: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            apelido: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            carga_horaria: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    CreateAccountPage.prototype.ngOnInit = function () {
        // ...
    };
    CreateAccountPage.prototype.createAccount = function () {
        var _this = this;
        this.showLoading();
        this.dados.createAccount(this.account.value)
            .subscribe(function (data) {
            _this.toast.create({ message: data.message, position: 'botton', duration: 3000, }).present();
            if (data.message.match("sucesso"))
                _this.navCtrl.push('ApontamentoPage');
            else
                _this.loading.dismiss();
        }, function (err) {
            _this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + err, position: 'botton', duration: 3000 }).present();
            console.log(err);
        });
    };
    CreateAccountPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    return CreateAccountPage;
}());
CreateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-create-account',template:/*ion-inline-start:"C:\Projetos\ponto-mobile.git\src\pages\create-account\create-account.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Criar Conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n    <form [formGroup]="account" (ngSubmit)="createAccount()">\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label stacked>Email</ion-label>\n\n                <ion-input type="text" name="email" formControlName="email"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Nome</ion-label>\n\n                <ion-input type="text" name="nome" formControlName="nome"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Senha</ion-label>\n\n                <ion-input type="password" name="senha" formControlName="senha"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Apelido</ion-label>\n\n                <ion-input type="text" name="apelido" formControlName="apelido"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Carga Horária</ion-label>\n\n                <ion-input type="text" name="carga_horaria"formControlName="carga_horaria"></ion-input>\n\n            </ion-item>\n\n            <ion-item></ion-item>\n\n        </ion-list>\n\n        <button [disabled]="account.invalid" ion-button block color="primary">Criar conta</button>\n    </form>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Projetos\ponto-mobile.git\src\pages\create-account\create-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_dados_dados__["a" /* Dados */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
], CreateAccountPage);

//# sourceMappingURL=create-account.js.map

/***/ })

});
//# sourceMappingURL=1.js.map