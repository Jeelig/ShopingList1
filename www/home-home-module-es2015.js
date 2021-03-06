(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n   \n</ion-header>\n  <ion-content>\n      <div class=\"padd\">\n          <div class=\"logo\">\n              <ion-icon color=\"light\" name=\"create-outline\"></ion-icon>\n          </div>\n    <div class=\"ion-padding\">\n      <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input inputmode=\"email\"  formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div *ngFor=\"let error of errorMessages.email\">\n            <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n              <small class=\"error-message\">{{error.message}}</small>\n            </ng-container>\n          </div>\n          <ion-item>\n              <ion-label position=\"floating\">password</ion-label>\n              <ion-input  type=\"password\"inputmode=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n            <div *ngFor=\"let error of errorMessages.password\">\n              <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n                <small class=\"error-message\">{{error.message}}</small>\n              </ng-container>\n            </div>\n        <ion-item lines=\"none\"> \n            <ion-button routerLink=\"/forgotpassword\" fill=\"clear\" slot=\"end\" >Mot de passe oublié ?</ion-button>\n        </ion-item>\n        <ion-button color=\"light\" fill=\"outline\" [disabled]=\"!registrationForm.valid\" shape=\"round\"  type=\"submit\" expand=\"block\">\n            Connexion <ion-icon slot=\"end\"> </ion-icon>\n        </ion-button>\n      </form>\n      <ion-button  expand=\"block\"  shape=\"round\" routerLink=\"/inscription\" >Inscription</ion-button>\n      <div> \n          <ion-button  expand=\"block\"  shape=\"round\" color=\"danger\" (click)=\"loginwithgoogle()\">\n              <!--Basic: auto-select the icon based on the platform -->\n              <ion-icon name=\"logo-google\"></ion-icon>\n              oogle\n          </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:linear-gradient(#89f7fe,#66a6ff);\n}\n\nion-item {\n  --ion-background-color:transparent!important;\n}\n\n.padd {\n  padding: 5%;\n}\n\n.redIocne {\n  --ion-background-color: #cd201f;\n}\n\n.logo {\n  height: 130px;\n  position: relative;\n}\n\n.logo ion-icon {\n  position: absolute;\n  font-size: 5em;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGVrLXRhdHkvRG9jdW1lbnRzL0lvbmljL2FsbGVyL1Nob3BwaW5nTGlzdC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1REFBQTtBQ0RGOztBREdBO0VBQ0UsNENBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgjODlmN2ZlLCM2NmE2ZmYpO1xufVxuaW9uLWl0ZW17XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuXG59XG4ucGFkZHtcbiAgcGFkZGluZzogNSU7XG4gIFxufVxuLnJlZElvY25le1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjY2QyMDFmOyBcbn1cbi5sb2dve1xuICBoZWlnaHQ6IDEzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9nbyBpb24taWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDVlbTtcbiAgdG9wOjUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUgKTtcblxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoIzg5ZjdmZSwjNjZhNmZmKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtcbn1cblxuLnBhZGQge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLnJlZElvY25lIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2NkMjAxZjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDEzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDVlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/servie-api.service */ "./src/app/services/servie-api.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");








let HomePage = class HomePage {
    constructor(nativeStorage, formBuilder, apiService, alertService, navCtrl, googlePlus) {
        this.nativeStorage = nativeStorage;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.user = {};
        this.errorMessages = {
            password: [
                { type: 'required', message: 'password is required' },
                { type: 'maxlength', message: 'password cant be longer than 100 characters' }
            ],
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email address' }
            ],
        };
        this.registrationForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
                ]
            ],
        });
    }
    get password() {
        return this.registrationForm.get("password");
    }
    get email() {
        return this.registrationForm.get('email');
    }
    submit() {
        let email = this.registrationForm.value.email;
        let password = this.registrationForm.value.password;
        this.apiService.login(email, password).subscribe(data => {
            this.alertService.presentToast("Welcome");
        }, error => {
            let text = error.error.message;
            this.alertService.presentToast(text);
            console.log(error);
        }, () => {
            // aller vers la passage suivante  sans retour 
            this.navCtrl.navigateRoot("/intro");
        });
    }
    loginwithgoogle() {
        this.googlePlus.login({})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__["ServieApiService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_servie_api_service__WEBPACK_IMPORTED_MODULE_4__["ServieApiService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map