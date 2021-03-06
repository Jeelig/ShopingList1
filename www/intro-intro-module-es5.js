function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntroIntroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-menu-button slot=\"start\"></ion-menu-button>\n      <ion-title>Mes listes</ion-title>\n      \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding >\n   \n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"chargement...\">\n          </ion-refresher-content>\n        </ion-refresher>\n  \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" (click)=\"presentPrompt()\"  slot=\"fixed\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    \n  \n    <div >\n      \n            \n      <ion-list>\n        <ion-card *ngFor=\"let item of listeAll\" >\n            <ion-item-sliding>\n            <ion-item   lines=\"none\">\n                 <ion-label>\n                    <ion-label button (click)=\"showListe(item.id_liste)\">\n                        {{item.name}} \n                    </ion-label>\n              </ion-label>\n            </ion-item>\n          \n          <ion-item-options side=\"end\">\n              <ion-item-option color=\"success\" (click)=\"presentActionSheet(item.id_liste,item.id)\" >\n                  <ion-icon name=\"information-circle-sharp\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              <ion-item-option color=\"danger\" >\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              \n            </ion-item-options>\n          </ion-item-sliding>\n          \n          </ion-card>\n    </ion-list>\n    </div>\n    \n    \n  \n  \n  \n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/intro/intro-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/intro/intro-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: IntroPageRoutingModule */

  /***/
  function srcAppIntroIntroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function () {
      return IntroPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./intro.page */
    "./src/app/intro/intro.page.ts");

    var routes = [{
      path: '',
      component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }];

    var IntroPageRoutingModule = function IntroPageRoutingModule() {
      _classCallCheck(this, IntroPageRoutingModule);
    };

    IntroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IntroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/intro/intro.module.ts":
  /*!***************************************!*\
    !*** ./src/app/intro/intro.module.ts ***!
    \***************************************/

  /*! exports provided: IntroPageModule */

  /***/
  function srcAppIntroIntroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPageModule", function () {
      return IntroPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./intro-routing.module */
    "./src/app/intro/intro-routing.module.ts");
    /* harmony import */


    var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./intro.page */
    "./src/app/intro/intro.page.ts");

    var IntroPageModule = function IntroPageModule() {
      _classCallCheck(this, IntroPageModule);
    };

    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]],
      declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })], IntroPageModule);
    /***/
  },

  /***/
  "./src/app/intro/intro.page.scss":
  /*!***************************************!*\
    !*** ./src/app/intro/intro.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntroIntroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/intro/intro.page.ts":
  /*!*************************************!*\
    !*** ./src/app/intro/intro.page.ts ***!
    \*************************************/

  /*! exports provided: IntroPage */

  /***/
  function srcAppIntroIntroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroPage", function () {
      return IntroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/servie-api.service */
    "./src/app/services/servie-api.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var IntroPage = /*#__PURE__*/function () {
      function IntroPage(navCtrl, alertCtrl, apiService, alertService, storage, loadingCtrl, http, actionSheetController) {
        _classCallCheck(this, IntroPage);

        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.alertService = alertService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.liste = {};
        this.liste_response = {};
        this.listeAll = [];
        this.listeArticle = [];
        this.viewListe();
      }

      _createClass(IntroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewListe();
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this = this;

          setTimeout(function () {
            event.target.complete();

            _this.viewListe();
          }, 1000);
        }
      }, {
        key: "addList",
        value: function addList() {
          this.navCtrl.navigateForward("/add-liste");
        }
      }, {
        key: "loading",
        value: function loading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.viewListe();
                    _context.next = 3;
                    return this.loadingCtrl.create({
                      message: 'Loading ... ',
                      duration: 1000
                    });

                  case 3:
                    loading = _context.sent;
                    loading.present();
                    this.viewListe();
                    setTimeout(function () {
                      loading.dismiss();
                    }, 1000);
                    this.viewListe();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentPrompt",
        value: function presentPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var b, id, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // id user dss
                    this.storage.getItem('myitem').then(function (data) {
                      id = data["id"];
                    }, function (error) {
                      return console.error(error);
                    });
                    _context2.next = 3;
                    return this.alertCtrl.create({
                      // title: 'Confirm purchase',
                      header: 'Créer une nouvelle liste',
                      inputs: [{
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nouvelle liste '
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(data) {
                          console.log('Cancel clicked');

                          _this2.viewListe();
                        }
                      }, {
                        text: 'Valider',
                        handler: function handler(data) {
                          // validation 
                          _this2.apiService.createliste(data.name).subscribe(function (da) {
                            var id1 = da["id"];

                            _this2.apiService.createlistead(id1, id).subscribe(function (da) {
                              console.log("chekina", da);

                              _this2.viewListe();
                            }, function (error) {
                              // this.alertService.presentToast(error);
                              console.log("error", error);
                            }, function () {//  this.alertService.presentToast("liste ajouter");             
                            });
                          }, function (error) {
                            _this2.alertService.presentToast(error);
                          }, function () {
                            _this2.alertService.presentToast(" Ajouté avec succes ");

                            _this2.viewListe();
                          });

                          _this2.loading();
                        }
                      }]
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert;

                  case 6:
                    _context2.sent.present();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "viewListe",
        value: function viewListe() {
          var _this3 = this;

          var idUser;
          var body;
          var base_path = 'https://api.axelib.io/0.1/';
          this.storage.getItem('myitem').then(function (data) {
            idUser = data.id, console.log("myitem", data);
            console.log(" id", idUser); //tramission des données  

            body = "1=" + idUser; //headers 

            console.error("my body", body);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo"); //tramission des données  

            body = "1=" + idUser;
            return _this3.http.post(base_path + 'query/liste_projet/0', body, {
              headers: headers
            }).subscribe(function (data) {
              _this3.liste = data["data"];
              _this3.listeAll = data["data"];
              console.log(_this3.listeAll);
            });
          }, function (error) {
            return console.error("erro my Item", error);
          });
        }
      }, {
        key: "viewListe1",
        value: function viewListe1() {
          var _this4 = this;

          var idUser;
          var body;
          var base_path = 'https://api.axelib.io/0.1/list/liste/all';
          this.storage.getItem('myitem').then(function (data) {
            idUser = data.id, console.log("myitem", data);
            console.log(" id", idUser); //tramission des données  
            // body =  "1="+idUser;

            body = "orderBy=id:desc"; //headers 

            console.error("my body", body);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo"); //tramission des données  

            body = "1=" + idUser;
            return _this4.http.post(base_path, body, {
              headers: headers
            }).subscribe(function (data) {
              _this4.liste = data["data"];
              _this4.listeAll = data["data"];
              console.log(data);
            });
          }, function (error) {
            return console.error("erro my Item", error);
          });
        }
      }, {
        key: "goTo",
        value: function goTo(route) {
          this.navCtrl.navigateForward("/".concat(route));
        }
      }, {
        key: "showListe",
        value: function showListe(id) {
          this.navCtrl.navigateForward('/liste-detail/' + id);
        } // delete 
        // this.nativeStorage.remove('AccepterPart');
        // delete article liste 

      }, {
        key: "deletelisteId",
        value: function deletelisteId(id) {
          var _this5 = this;

          var base_path = 'https://api.axelib.io/0.1/delete/article/'; //tramission des données

          var body = "id=" + id;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo");
          return this.http.post(base_path + id, body, {
            headers: headers
          }).subscribe(function (data) {
            console.log("delete", data);

            _this5.loading();
          });
        } // delete liste 

      }, {
        key: "deleteliste",
        value: function deleteliste(id) {
          var _this6 = this;

          var base_path = 'https://api.axelib.io/0.1/delete/liste/'; //tramission des données

          var body = "id=" + id;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo");
          return this.http.post(base_path + id, body, {
            headers: headers
          }).subscribe(function (data) {
            console.log("delete", data);

            _this6.loading();
          });
        } // delete listeUser 

      }, {
        key: "deletelink",
        value: function deletelink(id) {
          var _this7 = this;

          var base_path = 'https://api.axelib.io/0.1/delete/link_listeuser/'; //tramission des données

          var body = "id=" + id;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo");
          return this.http.post(base_path + id, body, {
            headers: headers
          }).subscribe(function (data) {
            console.log("delete", data);

            _this7.loading();
          });
        } // listeidArticle

      }, {
        key: "listeidArticle",
        value: function listeidArticle(id, idlink) {
          var _this8 = this;

          var base_path = 'https://api.axelib.io/0.1/list/article/all'; //"id" : "like:sun"
          //tramission des données

          var body = "orderBy=id:desc" + "&id_liste=like:" + id;
          var mylisteproject;
          var liste = [];
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo");
          this.http.post(base_path, body, {
            headers: headers
          }).subscribe(function (data) {
            mylisteproject = data["data"];
            var a = [];
            a = data["data"];

            if (a.length == 0) {
              // delete liste 
              _this8.deleteInvitation(id);

              _this8.deleteliste(idlink); // delete link


              _this8.deletelink(id);
            } else {
              a.forEach(function (element) {
                // delete article 
                _this8.deletelisteId(element["id"]);

                console.log(element["id"]);
              }); // delete liste 

              _this8.deleteInvitation(id);

              _this8.deleteliste(id); // delete link


              _this8.deletelink(idlink);

              console.log(mylisteproject);
            }
          });
          this.loading();
          return mylisteproject;
        } //

      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(idliste, idlink) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var a, actionSheet;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    a = [];
                    _context3.next = 3;
                    return this.actionSheetController.create({
                      buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          console.log('Delete clicked', idliste);

                          _this9.listeidArticle(idliste, idlink);

                          console.log('Delete clicked'); //  console.log('Delete clicked',this.listeidArticle(idliste));
                        }
                      }, {
                        text: 'Share',
                        icon: 'share',
                        handler: function handler() {
                          console.log('Share clicked');

                          _this9.addfreinds(idliste);
                        }
                      }, {
                        text: 'Favorite',
                        icon: 'heart',
                        handler: function handler() {
                          console.log('Favorite clicked');
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: 'close',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 3:
                    actionSheet = _context3.sent;
                    _context3.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addfreinds",
        value: function addfreinds(id) {
          this.navCtrl.navigateForward('/search/' + id);
        }
      }, {
        key: "deleteInvitation",
        value: function deleteInvitation(id) {
          var _this10 = this;

          var base_path = 'https://api.axelib.io/0.1/delete/invitation/'; //tramission des données

          var body = "id=" + id;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]().set("Content-Type", "x-www-form-urlencoded").set("ProjectID", "6lQwueo");
          return this.http.post(base_path + id, body, {
            headers: headers
          }).subscribe(function (data) {
            console.log("delete", data);

            _this10.loading();
          });
        }
      }]);

      return IntroPage;
    }();

    IntroPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.page.scss */
      "./src/app/intro/intro.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_servie_api_service__WEBPACK_IMPORTED_MODULE_3__["ServieApiService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], IntroPage);
    /***/
  }
}]);
//# sourceMappingURL=intro-intro-module-es5.js.map