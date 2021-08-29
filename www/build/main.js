webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonservice_commonservice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyorderPage = /** @class */ (function () {
    function MyorderPage(navCtrl, navParams, commonserv, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonserv = commonserv;
        this.data = data;
        this.orderItems = [];
        this.showEmptyOrderMessage = false;
        this.getOrderUrl = "ticket/orderhistory";
        this.overalltotal = 0.0;
        this.commonserv.storage.ready().then(function () {
            _this.commonserv.storage.get("cart").then(function (data) {
                _this.orderItems = data;
                console.log(_this.orderItems);
                if (_this.orderItems && _this.orderItems.length > 0) {
                    _this.orderItems.forEach(function (item, index) {
                        _this.overalltotal = _this.overalltotal + (parseFloat(item.total));
                    });
                    console.log('final amount', _this.overalltotal);
                }
                else {
                    _this.showEmptyOrderMessage = true;
                }
            });
        });
    }
    //token= localStorage.getItem('order'); 
    MyorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyorderPage');
        this.order();
    };
    // orderUrl=
    MyorderPage.prototype.order = function () {
        var _this = this;
        this.commonserv.pageLoading("");
        var myData = {
            date1: 'data.description',
            date2: '24.8149233,93.9449727',
        };
        //commonAPI 
        this.data.commonAPI(myData, this.getOrderUrl).then(function (res) {
            _this.commonserv.stopLoading();
            if (res.type == 'fail') {
                alert('fail');
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.item = res;
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
        });
    };
    MyorderPage.prototype.detailOrder = function (val) {
        console.log('orderid:-', val.id);
    };
    MyorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\myorder\myorder.html"*/'<!--\n  Generated template for the MyorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color=purpledark>\n        <ion-toolbar>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" ></ion-icon>\n              </button>\n            <ion-title >My Orders</ion-title>\n          </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-card *ngFor="let ite of item" (click)="detailOrder(ite)">\n  <div class="cardpadding">\n    <p><b>Order Date:</b> {{ite.ordered_date | date:\'medium\'}}</p>\n    <p><b>Payment Type:</b> {{ite.payment_type}}</p>\n    <p><b>Total:</b> ₹ {{ite.total}} only/-</p>\n    <p><b>Status: </b>\n      <span *ngIf="ite.status==\'1\'">Pending</span>\n      <span *ngIf="ite.status==\'2\'">Confirm</span>\n    </p>\n  </div>\n  \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\myorder\myorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_commonservice_commonservice__["a" /* CommonserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__["a" /* DataserviceProvider */]])
    ], MyorderPage);
    return MyorderPage;
}());

//# sourceMappingURL=myorder.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, data, common, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.menu = menu;
        this.RegistrationUrl = "site/signup";
    }
    RegistrationPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    RegistrationPage.prototype.register = function () {
        var _this = this;
        if (this.username && this.password && this.email && this.phoneno && this.address) {
            this.common.pageLoading('Please wait...');
            this.data.checkSignup(this.username, this.password, this.email, this.phoneno, this.address, this.RegistrationUrl).then(function (res) {
                console.log('login_response:-', res);
                // alert(1)
                if (res == 0) {
                    _this.common.presentToast("Error occured");
                    _this.common.stopLoading();
                }
                else if (res.type == 'success') {
                    console.log('success');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    _this.common.stopLoading();
                }
                else {
                    _this.common.presentToast(res.msg);
                    _this.common.stopLoading();
                }
            }).catch(function (err) {
                console.log('login function:-', err);
                _this.common.stopLoading();
            });
        }
        else {
            this.common.presentToast('Credentials can\'t be blank');
        }
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\registration\registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color =purpledark>\n    <ion-toolbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu" ></ion-icon>\n        </button>\n  <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content class="register">\n    \n    <div class = "padding"></div>\n    <div class="inputs"> \n            <div>Username:</div>\n            <ion-item>\n              <ion-input  class = "regisinput" required [(ngModel)]="username" type="text" placeholder="Username"></ion-input>\n            </ion-item>\n\n            <div>Email address:</div>\n            <ion-item>\n              <ion-input class = "regisinput" required [(ngModel)]="email" type="text" placeholder="Email"></ion-input>\n            </ion-item>\n\n            <div>Phone number:</div>\n            <ion-item>\n              <ion-input class = "regisinput" required [(ngModel)]="phoneno" type="number" placeholder="Phone number"></ion-input>\n            </ion-item>\n\n            <div >Address:</div>\n            <ion-item>\n              <ion-input class = "regisinput" required [(ngModel)]="address" type="text"   placeholder="Address"></ion-input>\n            </ion-item>\n\n            <div>Password:</div>\n            <ion-item>\n              <ion-input class = "regisinput" required [(ngModel)]="password" type="password"  placeholder="Password"></ion-input>\n            </ion-item>\n          <div class="padding"></div>\n        <button ion-button class="registrationbutton" ion-button color="blue" type="submit"  (click)="register()"\n          full>Register</button>\n      </div>\n     \n  </ion-content>\n\n\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__["a" /* DataserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonservice_commonservice__["a" /* CommonserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewarrivalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewarrivalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewarrivalsPage = /** @class */ (function () {
    function NewarrivalsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewarrivalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewarrivalsPage');
    };
    NewarrivalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newarrivals',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\newarrivals\newarrivals.html"*/'<!--\n  Generated template for the TrendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n      <ion-toolbar>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal">\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-buttons>\n          <ion-title (click)="goNext1()">Phisakhol</ion-title>\n          <ion-buttons end>\n            <button ion-button icon-only color="royal"(click)="goMyCart()" >\n                <ion-icon name="cart"></ion-icon>\n            </button>\n            <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-navbar> \n</ion-header>\n\n<ion-content >\n  \n <!--<body background="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80">-->\n  <div class="bg-color">\n\n  <ion-grid> \n    \n    <ion-row padding>\n        \n      <ion-col  col-6>\n        \n        <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7415243/2018/9/17/67868b8d-c8bb-430f-aea9-bb571d9db91d1537166122051-na-3721537166121914-1.jpg"></ion-img>\n        <div class="font1">\n        <div class="font">England Fs</div> \n        <div class="font2">₹ 8859</div>\n      </div>\n    \n      </ion-col>\n    \n      <ion-col col-6>\n        <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7415246/2018/9/17/3210cf07-b42e-47f3-b657-81f01f2236ae1537166135582-na-3991537166135410-1.jpg"></ion-img>\n      <div class="font1">\n        <div class="font">Killer</div>\n      <div class="font2">₹ 9990</div>\n    </div>\n      </ion-col>  \n    </ion-row>\n    <hr class="hr">\n    <ion-row padding>\n        <ion-col col-6>\n          <ion-img class="image" src ="\n          https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2279483/2017/11/25/11511590732594-Athena-Black-double-breast-trench-coat-with-stylised-collar-6581511590732526-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Athena</div>\n       <div class="font2">₹ 3340</div>\n      </div>\n        </ion-col>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7765539/2018/11/10/1b533d36-a410-4455-b6fa-6dde42518ff11541837660523-FabAlley-Women-Grey-Solid-Double-Breasted-Trench-Coat-31541837660250-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Hangup</div>\n          <div class="font2">₹ 7540</div>\n          </div>\n        </ion-col>\n    </ion-row>\n    <hr class="hr"> \n    <ion-row padding>\n      <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7772502/2018/11/21/4ce71f6b-e12f-4588-a9bf-98b7e64b4f551542799009858-STREET-9-Women-Coats-5471542799009623-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Arrow</div>\n          <div class="font2">₹ 5690</div>\n          </div>\n        </ion-col>\n      <ion-col col-6>\n        <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2248722/2017/11/15/11510724225048-na-2061510724224848-1.jpg"></ion-img>\n        <div class="font1">\n        <div class="font">Black</div>\n          <div class="font2">₹ 2290</div>\n          </div>\n      </ion-col>\n    </ion-row> \n    <hr class="hr">\n   \n</ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\newarrivals\newarrivals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewarrivalsPage);
    return NewarrivalsPage;
}());

//# sourceMappingURL=newarrivals.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the CommonserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonserviceProvider = /** @class */ (function () {
    function CommonserviceProvider(http, storage, alertCtrl, loadingCtrl, toastCtrl, plt, events, popoverCtrl) {
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
    }
    CommonserviceProvider.prototype.updateCart1 = function () {
        var _this = this;
        //key will always be "store_url"
        return new Promise(function (resolve, reject) {
            _this.storage.ready().then(function () {
                _this.storage.get("cart").then(function (data) {
                    var cartItems = data;
                    var counter = 0;
                    if (cartItems) {
                        for (var i = 0; i < cartItems.length; i++) {
                            counter = counter + data[i].qty;
                        }
                    }
                    if (cartItems && cartItems.length > 0) {
                        _this.cart_count1 = counter;
                        resolve(_this.cart_count1);
                    }
                    else {
                        _this.cart_count1 = 0;
                        //return this.cart_count1;
                        resolve(_this.cart_count1);
                    }
                });
            });
        });
    };
    //toast message 
    CommonserviceProvider.prototype.presentToast = function (m) {
        var toast = this.toastCtrl.create({
            message: m,
            duration: 50000,
            position: 'middle',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    };
    CommonserviceProvider.prototype.pageLoading = function (m) {
        if (m) {
            this.msg = m;
        }
        else {
            this.msg = "Please wait...";
        }
        this.loader = this.loadingCtrl.create({
            content: this.msg,
            duration: 15000,
            spinner: 'crescent',
        });
        this.loader.present();
        this.loader.onDidDismiss(function () {
            // console.log('Dismissed loading');
        });
    };
    CommonserviceProvider.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    CommonserviceProvider.prototype.presentAlert = function (t, m) {
        var alert = this.alertCtrl.create({
            title: t,
            subTitle: m,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */])
    ], CommonserviceProvider.prototype, "nav", void 0);
    CommonserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* PopoverController */]])
    ], CommonserviceProvider);
    return CommonserviceProvider;
}());

//# sourceMappingURL=commonservice.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DataserviceProvider = /** @class */ (function () {
    function DataserviceProvider(http) {
        this.http = http;
        this.apiBaseUrl = "http://phpstack-178083-797126.cloudwaysapps.com/api/"; // api base url
        this.apiImageUrl = "http://phpstack-178083-797126.cloudwaysapps.com/web/";
        //this.trips = TRIPS;
    }
    DataserviceProvider.prototype.checkLogin = function (user, secondPara, loginURL) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl1;
            return __generator(this, function (_a) {
                apiUrl1 = this.apiBaseUrl + loginURL;
                //  console.log(secondPara)
                this.payload = {
                    "Username": user,
                    "Password": secondPara
                };
                console.log(JSON.stringify(this.payload));
                // return this.http.post(this.loginUrl,JSON.stringify(this.payload))
                return [2 /*return*/, this.http.post(apiUrl1, JSON.stringify(this.payload))
                        .toPromise()
                        .then(function (response) {
                        return response.json();
                    })
                        .catch(function (err) {
                        console.log('login_error:-', err);
                        return 0;
                    })];
            });
        });
    };
    //this.username, this.password, this.email, this.phoneno, this.address,
    DataserviceProvider.prototype.checkSignup = function (username, pass, email, phone, add, regiterURL) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl1;
            return __generator(this, function (_a) {
                apiUrl1 = this.apiBaseUrl + regiterURL;
                //  console.log(secondPara)
                this.payload = {
                    "Username": username,
                    "Password": pass,
                    "Email": email,
                    "Phoneno": phone,
                    "Address": add
                };
                console.log(JSON.stringify(this.payload));
                // return this.http.post(this.loginUrl,JSON.stringify(this.payload))
                return [2 /*return*/, this.http.post(apiUrl1, JSON.stringify(this.payload))
                        .toPromise()
                        .then(function (response) {
                        return response.json();
                    })
                        .catch(function (err) {
                        console.log('login_error:-', err);
                        return 0;
                    })];
            });
        });
    };
    DataserviceProvider.prototype.checkaddress = function (address, mobile, pincode, addressURL) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl1;
            return __generator(this, function (_a) {
                apiUrl1 = this.apiBaseUrl + addressURL;
                //  console.log(secondPara)
                this.payload = {
                    "Address": address,
                    "Mobile": mobile,
                    "Pincode": pincode
                };
                console.log(JSON.stringify(this.payload));
                // return this.http.post(this.loginUrl,JSON.stringify(this.payload))
                return [2 /*return*/, this.http.post(apiUrl1, JSON.stringify(this.payload))
                        .toPromise()
                        .then(function (response) {
                        return response.json();
                    })
                        .catch(function (err) {
                        console.log('login_error:-', err);
                        return 0;
                    })];
            });
        });
    };
    // get report 
    DataserviceProvider.prototype.commonAPI = function (data, apiURL) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl1;
            return __generator(this, function (_a) {
                this.payload = JSON.stringify(data);
                apiUrl1 = this.apiBaseUrl + apiURL;
                console.log('payload:-', this.payload);
                // console.log('Token:-', localStorage.getItem('tokenKey'))
                this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Token": localStorage.getItem('tokenKey') });
                return [2 /*return*/, this.http.post(apiUrl1, this.payload, { headers: this.headers })
                        .toPromise()
                        .then(function (response) {
                        console.log('success:-', response.json());
                        return response.json();
                    })
                        .catch(function (err) {
                        console.log("DATA API ERROR: ", err);
                        return 0;
                    })];
            });
        });
    };
    DataserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataserviceProvider);
    return DataserviceProvider;
}());

//# sourceMappingURL=dataservice.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arbin_arbin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonservice_commonservice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sale_sale__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newarrivals_newarrivals__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, data, common) {
        //  this.initializeItems();
        var _this = this;
        this.navCtrl = navCtrl;
        this.data = data;
        this.common = common;
        this.dashboardUrl = "ticket/dashboard";
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    HomePage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sale_sale__["a" /* SalePage */]);
    };
    HomePage.prototype.goNext2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__newarrivals_newarrivals__["a" /* NewarrivalsPage */]);
    };
    HomePage.prototype.goNext4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__arbin_arbin__["a" /* ArbinPage */]);
    };
    HomePage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    HomePage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'India',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.getDashboard = function () {
        var _this = this;
        var myData = {
            date1: 'data.description',
            date2: '24.8149233,93.9449727',
        };
        //commonAPI 
        this.data.commonAPI(myData, this.dashboardUrl).then(function (res) {
            if (res.type == 'fail') {
                alert('fail');
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.dashboard = res;
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\home\home.html"*/'<ion-header >\n    <ion-navbar color=purpledark>\n        <ion-toolbar>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" ></ion-icon>\n              </button>\n            <ion-buttons start>\n              <button ion-button icon-only color="royal" >\n                <ion-icon name="search" ></ion-icon>\n                </button>\n            </ion-buttons>\n            <ion-title class="phi">Phisakhol</ion-title>\n            <ion-buttons end>\n              <button ion-button icon-only color="royal" (click)="goMyCart()">\n                  <ion-icon name="cart"></ion-icon>   \n              </button>\n              <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n\n              \n              \n            </ion-buttons>\n          </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n<ion-content class="padding">\n    <ion-slides class="slide" autoplay="2000" loop="false" speed="2000" pager >\n        <ion-slide (click)="goNext4()">\n          <img class="slideimage" src="http://phpstack-178083-797126.cloudwaysapps.com/web/slider/1234.jpg"\n         >\n         <div class="card-title3" align="center">CUSTOMIZE YOUR CHOICE</div>\n        </ion-slide>\n      <ion-slide (click)="goNext1()" >\n          <img class="slideimage" src="https://media1.popsugar-assets.com/files/thumbor/R2KH7NfTN571lZTXwpAzZ0bkXy8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/01/07/764/n/1922564/5df130ce2ffb3f63_D_S_Spring_16_Group/i/Ralph-Lauren-Denim-Supply.jpg"\n          >\n          <div class="card-title1" align="center">Sale 50%</div>\n        </ion-slide >\n      \n        <ion-slide (click)="goNext2()">\n          <img class="slideimage" src="http://phpstack-178083-797126.cloudwaysapps.com/web/slider/12345.jpg"\n         >\n         <div class="card-title1" align="center">Buy 1 Get 1 Free</div>\n        </ion-slide>\n      </ion-slides>\n      <button class="button" ion-button full large (click)="goNext4()" color="purpledark">CUSTOMIZE  YOUR  PRODUCT</button>\n      <ion-row>\n        <ion-col col-4>\n          <img src="http://phpstack-178083-797126.cloudwaysapps.com/web/slider/a1.jpg" (click)="goNext4()"/>\n        </ion-col>\n        <ion-col col-4>\n          <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/5/3/38b41c86-8a87-4ef2-966e-6c81ba638cb61556882568955-Just-in--1-.jpg" (click)="goNext1()"/>\n        </ion-col>\n        <ion-col col-4>\n          <img src="http://phpstack-178083-797126.cloudwaysapps.com/web/slider/a24.jpg" (click)="goNext4()"/>\n        </ion-col>\n      </ion-row>\n      \n      <div class="img">\n        <div (click)="goNext1()">\n          <img src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/5/6/aff1d9be-44ff-4a45-8b2a-02f1d44c7c4f1557132074161-Women_Kazo-Faballey-Athena_DWPB_B6.jpg"/>\n          <div class="card-title" align="center">Look cool,Think cool</div>\n        </div> \n      </div>  \n    \n</ion-content>\n '/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__["a" /* DataserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonservice_commonservice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, commonserv, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonserv = commonserv;
        this.dataService = dataService;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.overalltotal = 0.0;
        this.commonserv.storage.ready().then(function () {
            _this.commonserv.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems && _this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.overalltotal = _this.overalltotal + (parseFloat(item.total));
                    });
                    console.log('final amount', _this.overalltotal);
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.pay = function () {
        var token = localStorage.getItem('tokenKey');
        if (token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
        }
        else {
            this.commonserv.presentToast('Please login to continue');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {
                "nextLogin": 'cart'
            });
        }
    };
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price;
        price = parseFloat(item.price);
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.commonserv.storage.set("cart", this.cartItems).then(function () {
            _this.overalltotal = _this.overalltotal - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
        this.commonserv.events.publish("updateCart");
    };
    CartPage.prototype.changeQty = function (item, index, change) {
        var _this = this;
        var price;
        // console.log('item.product_type.selling_price:-',item.productype);
        price = parseFloat(item.price);
        var qty = item.qty;
        if (change < 0 && item.qty == 1) {
            return;
        }
        qty = qty + change;
        item.qty = qty;
        item.total = qty * price;
        // console.log('Change total:-',(parseFloat(this.total.toString()) + (price * change)))
        this.cartItems[index] = item;
        this.commonserv.storage.set("cart", this.cartItems).then(function () {
            // this.commonserv.presentToast("Cart updated");
            _this.commonserv.events.publish("updateCart");
        });
        this.overalltotal = (parseFloat(this.overalltotal.toString()) + (parseFloat(price.toString()) * change));
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\cart\cart.html"*/'<ion-header>\n    <ion-navbar color="purpledark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <strong>My Cart</strong> \n      </ion-title>\n     \n    </ion-navbar>\n  \n  </ion-header> \n  \n  <ion-content class="" >\n  \n      \n    <ion-list class="abc">\n           \n                  <ion-item-divider [hidden]="!showEmptyCartMessage">\n                    <strong>Your cart is empty.</strong>\n                  </ion-item-divider>\n  \n                 \n                  \n                \n        <ion-item class="abc" *ngFor="let item of cartItems; let i = index" >\n          <ion-card>\n            \n            <ion-row class="">\n                <ion-col col-12="">\n                    \n                    <ion-row >\n                        <ion-col  col-4="">\n                            \n                            <img alt="" src="{{dataService.apiImageUrl}}{{item.image_name}}">\n                        </ion-col>\n                        <ion-col col-8="">\n                            <div class="item-name" text-wrap="">\n                                 \n                                {{item.name}}\n                            </div>\n                            <p class="item-detail" text-wrap="">Body Type:{{item.bodytype}}</p>\n                            <p class="item-detail" text-wrap="">Sleeve: {{item.sleeve}}</p>\n                            <p class="item-detail" text-wrap="">Fabric: {{item.fabric}}</p>\n                           \n                            <p class="item-detail" text-wrap="">Size: {{item.size}}</p>\n                         <span>\n                                <p class="item-detail">Price:\n                                    <span class="item-price currency"> {{item.price}}</span>\n                                </p>\n                            </span>\n                            \n  \n                            <ion-row class="counter ">\n                                \n                                <ion-col col-10="">\n  \n                                   \n                                      <ion-row class="count">\n                                        <ion-col class="item-count1" (click)="changeQty(item,i, -1)"><div class="plus">-</div></ion-col>\n                                        <ion-col class="border"><div class="plus">{{item.qty}}</div>  </ion-col>\n                                        <ion-col class="item-count2" (click)="changeQty(item,i, 1)"><div class="plus">+</div></ion-col>\n                                      </ion-row>\n                                       \n                                    \n                                </ion-col>\n                                <ion-col  col-2="">\n                                    <ion-icon color="danger" name="trash" role="img" (click)="removeFromCart(item, i)" ></ion-icon>\n                                </ion-col>\n                              \n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n          </ion-card>\n           \n       </ion-item>\n    </ion-list>\n  <div [hidden]="showEmptyCartMessage" >\n    <ion-row class="price-details ">\n        <ion-col class="" col-12="">\n          <!--   <p class="bill-detail">Price Subtotal\n                <span>Rs 18.00</span>\n            </p>\n           \n  \n            <p class="bill-detail">Total VAT(10%)\n                <span>Rs1.8</span>\n            </p>\n            <p class="bill-detail">Other Taxes\n                <span> 0%</span>\n            </p> -->\n           \n            <!---->\n            <div class="abcd">\n               \n                <div>\n                    <strong class="abc1" >CART TOTAL &nbsp;\n                  ₹ {{ overalltotal}}/- only </strong> \n                </div>\n                \n            </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button full large color="primary" (click)="pay()" >Continue</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_commonservice_commonservice__["a" /* CommonserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__["a" /* DataserviceProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MancustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mantrousers_mantrousers__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manshirts_manshirts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MancustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MancustomPage = /** @class */ (function () {
    function MancustomPage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    MancustomPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MancustomPage.prototype.goNext2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manshirts_manshirts__["a" /* ManshirtsPage */]);
    };
    MancustomPage.prototype.goNext3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mantrousers_mantrousers__["a" /* MantrousersPage */]);
    };
    MancustomPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    MancustomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    MancustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mancustom',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\mancustom\mancustom.html"*/'<!--\n  Generated template for the MancustomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal" >\n              <ion-icon name="search" ></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title >Men Custom</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>   \n</ion-header>\n\n<ion-content class="padding" >\n    <body >\n        <ion-card (click)="goNext2()">\n          \n          <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanschawbel%2Ffiles%2F2017%2F12%2Fdrdrew.jpg"\n            style="width:400px;height:200px;" />\n              <div class="card-title" >Shirts</div>\n              <div class="card-subtitle" ></div>\n         \n        </ion-card>\n        <!--<div class="fits">Find your Fit</div>-->\n        <ion-card  (click)="goNext3()">\n          <img  \n            src="https://i.dmarge.com/2017/05/david-gandy-hats.jpg"\n            style="width:400px;height:200px;"/>\n              <div class="card-title">Blazers</div>\n              <div class="card-subtitle"></div>\n        </ion-card>\n      </body>\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\mancustom\mancustom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], MancustomPage);
    return MancustomPage;
}());

//# sourceMappingURL=mancustom.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MantrousersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MantrousersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MantrousersPage = /** @class */ (function () {
    function MantrousersPage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.bodytype = "single";
        this.fabric = "fabric1";
        this.sleeve = "default";
        this.getPicture = "ticket/custom";
        this.item = [];
        this.price = 0;
        this.qty = 1;
        this.shippingMethodChange();
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    MantrousersPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    MantrousersPage.prototype.goNexthomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MantrousersPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    MantrousersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    MantrousersPage.prototype.shippingMethodChange = function () {
        var _this = this;
        this.common.pageLoading("");
        // alert(1);
        // SELECT `id`, `name`, `bodytype`, `fabric`, `sleeve`, `price`, `image`, `genderid` FROM `custom` WHERE 1
        console.log('bodytype:-', this.bodytype);
        var myData = {
            name: 'mb',
            bodytype: this.bodytype,
            fabric: this.fabric,
            sleeve: this.sleeve,
            size: this.size
        };
        //commonAPI 
        this.data.commonAPI(myData, this.getPicture).then(function (res) {
            if (res.type == 'fail') {
                alert('fail');
                _this.common.stopLoading();
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.common.stopLoading();
                    _this.item = res;
                    _this.item1 = res;
                    console.log('image name:-', _this.item[0].image_name);
                    _this.productImage = _this.item[0].image_name;
                    _this.price = _this.item[0].price;
                }
                else {
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
            _this.common.stopLoading();
        });
    };
    MantrousersPage.prototype.addToCart = function (selected_prod_type) {
        var _this = this;
        console.log('given Products:-', selected_prod_type);
        console.log('Selling Price:-', selected_prod_type[0].price);
        var sp = selected_prod_type[0].price;
        // alert(this.selected_prod_type.length);
        if (selected_prod_type.length == 0) {
            this.common.presentAlert('Error', 'Please select any product option');
        }
        else {
            if (!this.size) {
                this.common.presentAlert('Error', 'Please select a size');
            }
            else {
                this.common.storage.get("cart").then(function (data) {
                    if (data == undefined || data.length == 0) {
                        data = [];
                        data.push({
                            // "productype":  selected_prod_type,
                            "bodytype": selected_prod_type[0].bodytype,
                            "fabric": selected_prod_type[0].fabric,
                            "id": selected_prod_type[0].id,
                            "qty": _this.qty,
                            "size": _this.size,
                            "image_name": selected_prod_type[0].image_name,
                            "name": selected_prod_type[0].name,
                            "sleeve": selected_prod_type[0].sleeve,
                            "price": parseFloat(selected_prod_type[0].price),
                            "total": parseFloat(selected_prod_type[0].price),
                        });
                    }
                    else {
                        var alreadyAdded = false;
                        var alreadyProductType = false;
                        var alreadyAddedIndex = -1;
                        //data = []; 
                        ///  console.log('data.length', data.length)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == selected_prod_type[0].id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                            }
                            /* else {
            
                              // if product type is not matched
                                      data.push({
                                        "productype":  selected_prod_type[0],
                                        "product_image":this.getProd.img_path,
                                        "product_name": this.getProd.p_name,
                                        "qty": 1
                                      // "amount": parseFloat(product.price)
                                      });
                            } */
                        }
                        if (alreadyAdded) {
                            if (alreadyProductType) {
                                data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + _this.qty;
                                data[alreadyAddedIndex].total = parseFloat(data[alreadyAddedIndex].total) + (_this.qty * parseFloat(sp));
                            }
                            else {
                                data.push({
                                    "bodytype": selected_prod_type[0].bodytype,
                                    "fabric": selected_prod_type[0].fabric,
                                    "id": selected_prod_type[0].id,
                                    "qty": _this.qty,
                                    "size": _this.size,
                                    "image_name": selected_prod_type[0].image_name,
                                    "name": selected_prod_type[0].name,
                                    "sleeve": selected_prod_type[0].sleeve,
                                    "price": parseFloat(selected_prod_type[0].price),
                                    "total": parseFloat(selected_prod_type[0].price),
                                });
                            }
                        }
                        else {
                            data.push({
                                // "productype":  selected_prod_type[0],
                                "bodytype": selected_prod_type[0].bodytype,
                                "fabric": selected_prod_type[0].fabric,
                                "id": selected_prod_type[0].id,
                                "qty": _this.qty,
                                "size": _this.size,
                                "image_name": selected_prod_type[0].image_name,
                                "name": selected_prod_type[0].name,
                                "sleeve": selected_prod_type[0].sleeve,
                                "price": parseFloat(selected_prod_type[0].price),
                                "total": parseFloat(selected_prod_type[0].price),
                            });
                        }
                    }
                    _this.common.storage.set("cart", data).then(function () {
                        // console.log("Cart Updated");
                        // this.common.presentToast('You added an item to your  cart ')
                        console.log(data);
                        _this.common.events.publish("updateCart");
                        _this.common.updateCart1()
                            .then(function (cart) {
                            _this.cart_count = cart;
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log('error from cart :-', err);
                        });
                        //console.log(this.cart_count);
                    });
                });
            }
        }
    };
    MantrousersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mantrousers',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\mantrousers\mantrousers.html"*/'<!--\n  Generated template for the MantrousersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal" >\n              <ion-icon name="search" ></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title (click)="goNexthome()">Men Blazers</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n         \n            <img class = "img"  src="{{ data.apiImageUrl }}{{ productImage }}"/>\n            <div class="price">₹ {{price}}/- only</div>  \n            <ion-icon class="info" name="information-circle" (click)="goNext1()"></ion-icon>\n            <div class="design">Design everything</div>\n            \n          <ion-grid padding> \n              <ion-row >\n                <ion-col col-12>\n                   <ion-list class = "list">\n                      <ion-item>\n                        <ion-label class = "label">Body type</ion-label>\n                        <ion-select [(ngModel)]="bodytype" (ionChange)="shippingMethodChange($event)">\n                            <ion-option value="bandh">Bandhgala</ion-option>\n                            <ion-option value="single">Single Button</ion-option>\n                            <ion-option value="nehru">Nehru</ion-option>\n                          </ion-select>\n                        </ion-item>\n                      </ion-list>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-list>\n                       <ion-item>\n                         <ion-label>Size</ion-label>\n                         <ion-select [(ngModel)]="size">\n                             <ion-option value="36">36</ion-option>\n                             <ion-option value="38">38</ion-option>\n                             <ion-option value="40">40</ion-option>\n                             <ion-option value="42">42</ion-option>\n                             <ion-option value="44">44</ion-option>\n                             <ion-option value="46">46</ion-option>\n                             <ion-option value="48">48</ion-option>\n                             <ion-option value="50">50</ion-option>\n                           </ion-select>\n                         </ion-item>\n                       </ion-list>\n                </ion-col>\n              </ion-row>\n              <ion-row >\n                  <ion-col col-12>\n                      <ion-list>\n                         <ion-item>\n                           <ion-label>Fabric</ion-label>\n                           <ion-select [(ngModel)]="fabric" (ionChange)="shippingMethodChange($event)">\n                               <ion-option value="fabric1">Fabric 1</ion-option>\n                               <ion-option value="fabric2">Fabric 2</ion-option>\n                               <ion-option value="fabric3">Fabric 3</ion-option>\n                             </ion-select>\n                           </ion-item>\n                         </ion-list>\n                  </ion-col>\n                    <ion-col col-12>\n                        <ion-list>\n                           <ion-item>\n                             <ion-label>Sleeve</ion-label>\n                             <ion-select [(ngModel)]="sleeve" >\n                                 <ion-option value="default">-------</ion-option>\n                               </ion-select>\n                             </ion-item>\n                           </ion-list>\n                    </ion-col>\n                \n              </ion-row>\n          </ion-grid>\n          <hr class="hr">\n          \n\n          <button class="button" ion-button full large color="default" (click)="addToCart(item1)">Add to Cart</button>\n    <hr class="hr">\n    <div class="about">Estimated delivery within 7-10 working days.</div>\n    <div class="about">If product is unsatisfactory the return has to be made within 30 days.</div> \n    <hr class="hr"> \n         \n\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\mantrousers\mantrousers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], MantrousersPage);
    return MantrousersPage;
}());

//# sourceMappingURL=mantrousers.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, data, common, commonserv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.commonserv = commonserv;
        this.cartItems = [];
        this.buyUrl = "ticket/buyitems";
        this.paymentUrl = "ticket/adddeliveryaddress";
        this.lastshow = false;
        this.showUrl = "ticket/showdeliveryaddress";
        this.overalltotal = 0.0;
        this.commonserv.storage.ready().then(function () {
            _this.commonserv.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems && _this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.overalltotal = _this.overalltotal + (parseFloat(item.total));
                    });
                    console.log('final amount', _this.overalltotal);
                }
            });
        });
        this.showaddress();
    }
    PaymentPage.prototype.goNextthankyou = function () {
        var _this = this;
        this.common.pageLoading('Please wait...');
        var myData = {
            cart: this.cartItems,
            paymenttype: 'cod',
            finalamount: this.overalltotal
        };
        //commonAPI  
        this.data.commonAPI(myData, this.buyUrl).then(function (res) {
            _this.common.stopLoading();
            // alert(1)
            if (res.type == 'success') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__["a" /* ThankyouPage */]);
                var data_1 = [];
                _this.common.storage.set("cart", data_1).then(function () {
                    data_1.push({});
                }).catch(function (err) {
                    console.log('error from cart :-', err);
                });
                //console.log(this.cart_count);
            }
            else {
                alert('fail');
            }
        }).catch(function (err) {
            console.log('login function:-', err);
            _this.common.stopLoading();
        });
    };
    PaymentPage.prototype.adddeliveryaddress = function () {
        var _this = this;
        if (this.address && this.mobile && this.pincode) {
            this.common.pageLoading('Please wait...');
            var myData = {
                Address: this.address,
                Mobile: this.mobile,
                Pincode: this.pincode,
            };
            //commonAPI 
            this.data.commonAPI(myData, this.paymentUrl).then(function (res) {
                console.log('login_response:-', res);
                // alert(1)
                if (res == 0) {
                    _this.common.presentToast("Error occured");
                    _this.common.stopLoading();
                }
                else if (res.type == 'success') {
                    console.log('success');
                    _this.common.stopLoading();
                    _this.lastshow = true; // hide the delivery add field
                }
                else {
                    _this.common.presentToast(res.msg);
                    _this.common.stopLoading();
                }
            }).catch(function (err) {
                console.log('login function:-', err);
                _this.common.stopLoading();
            });
        }
        else {
            this.common.presentToast('Credentials can\'t be blank');
        }
    };
    PaymentPage.prototype.showaddress = function () {
        var _this = this;
        this.common.pageLoading('Please wait...');
        var myData = {
            Address: 'this.address',
        };
        //commonAPI  
        this.data.commonAPI(myData, this.showUrl).then(function (res) {
            _this.common.stopLoading();
            // alert(1)
            if (res.type == 'fail') {
                console.log('fail', res);
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    // this.dashboard=res;
                    _this.lastshow = true; // hide the delivery add field
                    console.log('add', res[0].address);
                    _this.add1 = res[0].address;
                    _this.pin1 = res[0].pincode;
                    _this.phone1 = res[0].mobile;
                }
            }
        }).catch(function (err) {
            console.log('login function:-', err);
            _this.common.stopLoading();
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>  \n        <ion-title>Payment</ion-title>   \n      </ion-toolbar>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding>\n  <!--<div class="address">Address: </div>\n  <ion-item class = "textarea">\n    <ion-textarea [(ngModel)]="_message" name="message"></ion-textarea>\n  </ion-item>\n  <div class="padding"></div>\n  <div class="border">Estimated delivery within 7-10 working days</div>\n  <div class="padding"></div>\n  <div class="address">Payment Options:</div>\n  <div class="padding"></div>-->\n  <div  *ngIf="!lastshow">\n  <ion-label>Shipping details</ion-label>\n  <ion-item>\n      <ion-input type="text"  [(ngModel)]="address" placeholder="Address"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input  [(ngModel)]="mobile"  placeholder="mobile"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-input  [(ngModel)]="pincode" placeholder="pincode"></ion-input>\n        </ion-item>\n      \n    \n\n    \n    <div class="padding"></div>\n    <button ion-button ion-button color="blue" type="submit" (click)="adddeliveryaddress()">Submit</button>\n    <div class="padding"></div>\n  </div>\n  <div *ngIf="lastshow">\n    <hr>\n    <ion-card>\n      <h3>Shiiping details</h3>\n      <p>\n        <ion-item>\n          {{add1}}\n        </ion-item>\n        <ion-item>\n            {{pin1}}\n          </ion-item>\n          <ion-item>\n              {{phone1}}\n            </ion-item>\n      </p>\n    </ion-card>\n    <ion-list radio-group>\n        <ion-item>\n          <ion-label>Cash on Delivery</ion-label>\n          <ion-radio checked=false value="go"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Debit/Credit Card</ion-label>\n          <ion-radio value="rust"></ion-radio>\n        </ion-item>\n    </ion-list>\n  <div class="padding"></div>\n  <div class="address">Item details:</div>\n\n  <button class="footer" ion-button full large color="dark" (click)="goNextthankyou()">Place order</button>\n  <hr class="hr"> \n</div>\n</ion-content>\n\n\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dataservice_dataservice__["a" /* DataserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonservice_commonservice__["a" /* CommonserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myorder_myorder__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ThankyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage.prototype.goOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myorder_myorder__["a" /* MyorderPage */]);
    };
    ThankyouPage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\thankyou\thankyou.html"*/'<!--\n  Generated template for the ThankyouPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark"></ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align = "center">Thank You</h3>\n  <div>Your order was completed sucessfully</div>\n  <div class="padding"></div>\n  <div class="border">Estimated delivery within 7-10 working days</div>\n  \n  <div class="padding"></div>\n  <button class="button" ion-button full large color="purpledark" (click)="goOrder()">My Orders</button>\n  <button class="button" ion-button full large color="purpledark" (click)="goHome()">Continue Shopping</button>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManshirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ManshirtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManshirtsPage = /** @class */ (function () {
    //selectsize:FormGroup;
    function ManshirtsPage(navCtrl, navParams, data, common) {
        //this.selectsize = FormBuilder.group({
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.bodytype = "slim";
        this.fabric = "fabric1";
        this.sleeve = "default";
        this.getPicture = "ticket/custom";
        this.item = [];
        this.price = 0;
        this.qty = 1;
        //});
        this.shippingMethodChange();
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    ManshirtsPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    ManshirtsPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    ManshirtsPage.prototype.goNexthome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ManshirtsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    ManshirtsPage.prototype.shippingMethodChange = function () {
        var _this = this;
        this.common.pageLoading("");
        // alert(1);
        // SELECT `id`, `name`, `bodytype`, `fabric`, `sleeve`, `price`, `image`, `genderid` FROM `custom` WHERE 1
        console.log('bodytype:-', this.bodytype);
        var myData = {
            name: 'ms',
            bodytype: this.bodytype,
            fabric: this.fabric,
            sleeve: this.sleeve,
            size: this.size
        };
        //commonAPI 
        this.data.commonAPI(myData, this.getPicture).then(function (res) {
            if (res.type == 'fail') {
                alert('fail');
                _this.common.stopLoading();
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.common.stopLoading();
                    _this.item = res;
                    _this.item1 = res;
                    console.log('image name:-', _this.item[0].image_name);
                    _this.productImage = _this.item[0].image_name;
                    _this.price = _this.item[0].price;
                }
                else {
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
            _this.common.stopLoading();
        });
    };
    ManshirtsPage.prototype.addToCart = function (selected_prod_type) {
        var _this = this;
        console.log('given Products:-', selected_prod_type);
        console.log('Selling Price:-', selected_prod_type[0].price);
        var sp = selected_prod_type[0].price;
        // alert(this.selected_prod_type.length);
        if (selected_prod_type.length == 0) {
            this.common.presentAlert('Error', 'Please select any product option');
        }
        else {
            if (!this.size) {
                this.common.presentAlert('Error', 'Please select a size');
            }
            else {
                this.common.storage.get("cart").then(function (data) {
                    if (data == undefined || data.length == 0) {
                        data = [];
                        data.push({
                            // "productype":  selected_prod_type,
                            "bodytype": selected_prod_type[0].bodytype,
                            "fabric": selected_prod_type[0].fabric,
                            "id": selected_prod_type[0].id,
                            "qty": _this.qty,
                            "size": _this.size,
                            "image_name": selected_prod_type[0].image_name,
                            "name": selected_prod_type[0].name,
                            "sleeve": selected_prod_type[0].sleeve,
                            "price": parseFloat(selected_prod_type[0].price),
                            "total": parseFloat(selected_prod_type[0].price),
                        });
                    }
                    else {
                        var alreadyAdded = false;
                        var alreadyProductType = false;
                        var alreadyAddedIndex = -1;
                        //data = []; 
                        ///  console.log('data.length', data.length)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == selected_prod_type[0].id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                            }
                            /* else {
            
                              // if product type is not matched
                                      data.push({
                                        "productype":  selected_prod_type[0],
                                        "product_image":this.getProd.img_path,
                                        "product_name": this.getProd.p_name,
                                        "qty": 1
                                      // "amount": parseFloat(product.price)
                                      });
                            } */
                        }
                        if (alreadyAdded) {
                            if (alreadyProductType) {
                                data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + _this.qty;
                                data[alreadyAddedIndex].total = parseFloat(data[alreadyAddedIndex].total) + (_this.qty * parseFloat(sp));
                            }
                            else {
                                data.push({
                                    "bodytype": selected_prod_type[0].bodytype,
                                    "fabric": selected_prod_type[0].fabric,
                                    "id": selected_prod_type[0].id,
                                    "qty": _this.qty,
                                    "size": _this.size,
                                    "image_name": selected_prod_type[0].image_name,
                                    "name": selected_prod_type[0].name,
                                    "sleeve": selected_prod_type[0].sleeve,
                                    "price": parseFloat(selected_prod_type[0].price),
                                    "total": parseFloat(selected_prod_type[0].price),
                                });
                            }
                        }
                        else {
                            data.push({
                                // "productype":  selected_prod_type[0],
                                "bodytype": selected_prod_type[0].bodytype,
                                "fabric": selected_prod_type[0].fabric,
                                "id": selected_prod_type[0].id,
                                "qty": _this.qty,
                                "size": _this.size,
                                "image_name": selected_prod_type[0].image_name,
                                "name": selected_prod_type[0].name,
                                "sleeve": selected_prod_type[0].sleeve,
                                "price": parseFloat(selected_prod_type[0].price),
                                "total": parseFloat(selected_prod_type[0].price),
                            });
                        }
                    }
                    _this.common.storage.set("cart", data).then(function () {
                        // console.log("Cart Updated");
                        // this.common.presentToast('You added an item to your  cart ')
                        console.log(data);
                        _this.common.events.publish("updateCart");
                        _this.common.updateCart1()
                            .then(function (cart) {
                            _this.cart_count = cart;
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log('error from cart :-', err);
                        });
                        //console.log(this.cart_count);
                    });
                });
            }
        }
    };
    ManshirtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manshirts',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\manshirts\manshirts.html"*/'\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal" >\n              <ion-icon name="search" ></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title (click)="goNexthome()">Men Shirt</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n      <img class = "img"  src="{{ data.apiImageUrl }}{{ productImage }}"/>\n    \n      \n     \n          <div class="price">₹ {{price}}/- only</div>  \n          <ion-icon class="info" name="information-circle" (click)="goNext1()"></ion-icon>\n      \n     \n  \n   \n    <div class="design">Design everything</div>\n    \n   \n    \n    <ion-grid padding> \n        <ion-row >\n          <ion-col col-12>\n             <ion-list class = "list">\n                <ion-item>\n                    <ion-label>Body Type</ion-label>\n                  <ion-select [(ngModel)]="bodytype" (ionChange)="shippingMethodChange($event)">\n                      <ion-option value="slim">Slim</ion-option>\n                      <ion-option value="healthy">Healthy</ion-option>\n                      <ion-option value="custom">Custom</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n          </ion-col>\n          <ion-col col-12>\n           <ion-list>\n                 <ion-item>\n                   <ion-label>Size</ion-label>\n                   <ion-select [(ngModel)]="size">\n                       <ion-option value="36">36</ion-option>\n                       <ion-option value="38">38</ion-option>\n                       <ion-option value="40">40</ion-option>\n                       <ion-option value="42">42</ion-option>\n                       <ion-option value="44">44</ion-option>\n                       <ion-option value="46">46</ion-option>\n                       <ion-option value="48">48</ion-option>\n                       <ion-option value="50">50</ion-option>\n                     </ion-select>\n                   </ion-item>\n                 </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row >\n            <ion-col col-12>\n                <ion-list>\n                   <ion-item>\n                     <ion-label>Fabric</ion-label>\n                     <ion-select [(ngModel)]="fabric" (ionChange)="shippingMethodChange($event)">\n                         <ion-option value="fabric1">Fabric 1</ion-option>\n                         <ion-option value="fabric2">Fabric 2</ion-option>\n                         <ion-option value="fabric3">Fabric 3</ion-option>\n                       </ion-select>\n                     </ion-item>\n                   </ion-list>\n            </ion-col>\n            <ion-col col-12>\n                <ion-list>\n                   <ion-item>\n                     <ion-label>Sleeve</ion-label>\n                     <ion-select [(ngModel)]="sleeve" (ionChange)="shippingMethodChange($event)">\n                         <ion-option value="half">Half</ion-option>\n                         <ion-option value="default">Full</ion-option>\n                       </ion-select>\n                     </ion-item>\n                   </ion-list>\n             </ion-col>\n        </ion-row>\n    </ion-grid>\n    <button class="button" ion-button full large color="default" (click)="addToCart(item1)">Add to Cart</button>\n    <hr class="hr">\n    <div class="about">Estimated delivery within 7-10 working days.</div>\n    <div class="about">If product is unsatisfactory the return has to be made within 30 days.</div> \n    <hr class="hr">  \n <!--</body>  --> \n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\manshirts\manshirts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], ManshirtsPage);
    return ManshirtsPage;
}());

//# sourceMappingURL=manshirts.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomencustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__womenshirts_womenshirts__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__womenblouse_womenblouse__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WomencustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WomencustomPage = /** @class */ (function () {
    function WomencustomPage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    WomencustomPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    WomencustomPage.prototype.goNext2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__womenshirts_womenshirts__["a" /* WomenshirtsPage */]);
    };
    WomencustomPage.prototype.goNext3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__womenblouse_womenblouse__["a" /* WomenblousePage */]);
    };
    WomencustomPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WomencustomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    WomencustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-womencustom',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womencustom\womencustom.html"*/'<!--\n  Generated template for the WomencustomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n        <ion-buttons start>\n          <button ion-button icon-only color="royal" >\n            <ion-icon name="search" ></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>Women Custom</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="padding">\n    \n        <ion-card (click)="goNext2()">\n          <img \n            src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/tamara-rojo-landscape-2.jpg?w968"\n            style="width:400px;height:200px;"/>\n              <div class="card-title">Shirts</div>\n              <div class="card-subtitle"></div>\n        </ion-card>\n        <!--<div class="fits">Find your Fit</div>-->\n        <ion-card (click)="goNext3()">\n          <img  \n            src="https://hips.hearstapps.com/elleuk.cdnds.net/17/04/2560x1280/landscape-1485177451-lolakirke.jpg?resize=1200:*"\n            style="width:400px;height:200px;"/>\n              <div class="card-title">Blouse</div>\n              <div class="card-subtitle"></div>\n        </ion-card>\n     \n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womencustom\womencustom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], WomencustomPage);
    return WomencustomPage;
}());

//# sourceMappingURL=womencustom.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomenshirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WomenshirtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WomenshirtsPage = /** @class */ (function () {
    function WomenshirtsPage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.bodytype = "diana";
        this.fabric = "fabric1";
        this.sleeve = "default";
        this.getPicture = "ticket/custom";
        this.item = [];
        this.price = 0;
        this.qty = 1;
        this.shippingMethodChange();
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    WomenshirtsPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    WomenshirtsPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
    };
    WomenshirtsPage.prototype.goNexthomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    WomenshirtsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    WomenshirtsPage.prototype.shippingMethodChange = function () {
        var _this = this;
        this.common.pageLoading("");
        // alert(1);
        // SELECT `id`, `name`, `bodytype`, `fabric`, `sleeve`, `price`, `image`, `genderid` FROM `custom` WHERE 1
        console.log('bodytype:-', this.bodytype);
        var myData = {
            name: 'ws',
            bodytype: this.bodytype,
            fabric: this.fabric,
            sleeve: this.sleeve,
            size: this.size
        };
        //commonAPI 
        this.data.commonAPI(myData, this.getPicture).then(function (res) {
            if (res.type == 'fail') {
                alert('fail');
                _this.common.stopLoading();
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.common.stopLoading();
                    _this.item = res;
                    _this.item1 = res;
                    console.log('image name:-', _this.item[0].image_name);
                    _this.productImage = _this.item[0].image_name;
                    _this.price = _this.item[0].price;
                }
                else {
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
            _this.common.stopLoading();
        });
    };
    WomenshirtsPage.prototype.addToCart = function (selected_prod_type) {
        var _this = this;
        console.log('given Products:-', selected_prod_type);
        console.log('Selling Price:-', selected_prod_type[0].price);
        var sp = selected_prod_type[0].price;
        // alert(this.selected_prod_type.length);
        if (selected_prod_type.length == 0) {
            this.common.presentAlert('Error', 'Please select any product option');
        }
        else {
            if (!this.size) {
                this.common.presentAlert('Error', 'Please select a size');
            }
            else {
                this.common.storage.get("cart").then(function (data) {
                    if (data == undefined || data.length == 0) {
                        data = [];
                        data.push({
                            // "productype":  selected_prod_type,
                            "bodytype": selected_prod_type[0].bodytype,
                            "fabric": selected_prod_type[0].fabric,
                            "id": selected_prod_type[0].id,
                            "qty": _this.qty,
                            "size": _this.size,
                            "image_name": selected_prod_type[0].image_name,
                            "name": selected_prod_type[0].name,
                            "sleeve": selected_prod_type[0].sleeve,
                            "price": parseFloat(selected_prod_type[0].price),
                            "total": parseFloat(selected_prod_type[0].price),
                        });
                    }
                    else {
                        var alreadyAdded = false;
                        var alreadyProductType = false;
                        var alreadyAddedIndex = -1;
                        //data = []; 
                        ///  console.log('data.length', data.length)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == selected_prod_type[0].id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                            }
                            /* else {
            
                              // if product type is not matched
                                      data.push({
                                        "productype":  selected_prod_type[0],
                                        "product_image":this.getProd.img_path,
                                        "product_name": this.getProd.p_name,
                                        "qty": 1
                                      // "amount": parseFloat(product.price)
                                      });
                            } */
                        }
                        if (alreadyAdded) {
                            if (alreadyProductType) {
                                data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + _this.qty;
                                data[alreadyAddedIndex].total = parseFloat(data[alreadyAddedIndex].total) + (_this.qty * parseFloat(sp));
                            }
                            else {
                                data.push({
                                    "bodytype": selected_prod_type[0].bodytype,
                                    "fabric": selected_prod_type[0].fabric,
                                    "id": selected_prod_type[0].id,
                                    "qty": _this.qty,
                                    "size": _this.size,
                                    "image_name": selected_prod_type[0].image_name,
                                    "name": selected_prod_type[0].name,
                                    "sleeve": selected_prod_type[0].sleeve,
                                    "price": parseFloat(selected_prod_type[0].price),
                                    "total": parseFloat(selected_prod_type[0].price),
                                });
                            }
                        }
                        else {
                            data.push({
                                // "productype":  selected_prod_type[0],
                                "bodytype": selected_prod_type[0].bodytype,
                                "fabric": selected_prod_type[0].fabric,
                                "id": selected_prod_type[0].id,
                                "qty": _this.qty,
                                "size": _this.size,
                                "image_name": selected_prod_type[0].image_name,
                                "name": selected_prod_type[0].name,
                                "sleeve": selected_prod_type[0].sleeve,
                                "price": parseFloat(selected_prod_type[0].price),
                                "total": parseFloat(selected_prod_type[0].price),
                            });
                        }
                    }
                    _this.common.storage.set("cart", data).then(function () {
                        // console.log("Cart Updated");
                        // this.common.presentToast('You added an item to your  cart ')
                        console.log(data);
                        _this.common.events.publish("updateCart");
                        _this.common.updateCart1()
                            .then(function (cart) {
                            _this.cart_count = cart;
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log('error from cart :-', err);
                        });
                        //console.log(this.cart_count);
                    });
                });
            }
        }
    };
    WomenshirtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-womenshirts',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womenshirts\womenshirts.html"*/'<!--\n  Generated template for the MantrousersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal" >\n              <ion-icon name="search" ></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title (click)="goNexthome()">Women Shirt</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n        <img class = "img"  src="{{ data.apiImageUrl }}{{ productImage }}" />\n        <div class="price">₹ {{price}}/- only</div>  \n        <ion-icon class="info" name="information-circle" (click)="goNext1()"></ion-icon>\n        \n    \n   \n\n \n  <div class="design">Design everything</div>\n        \n        <ion-grid padding> \n            <ion-row >\n              <ion-col col-12>\n                 <ion-list class = "list">\n                    <ion-item>\n                      <ion-label class = "label">Body type</ion-label>\n                      <ion-select [(ngModel)]="bodytype" (ionChange)="shippingMethodChange($event)">\n                          <ion-option value="diana">Diana</ion-option>\n                          <ion-option value="venus">Venus</ion-option>\n                          <ion-option value="aura">Aura</ion-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-list>\n              </ion-col>\n              <ion-col col-12>\n                  <ion-list>\n                     <ion-item>\n                       <ion-label>Size</ion-label>\n                       <ion-select [(ngModel)]="size">\n                           <ion-option value="36">36</ion-option>\n                           <ion-option value="38">38</ion-option>\n                           <ion-option value="40">40</ion-option>\n                           <ion-option value="42">42</ion-option>\n                           <ion-option value="44">44</ion-option>\n                           <ion-option value="46">46</ion-option>\n                           <ion-option value="48">48</ion-option>\n                           <ion-option value="50">50</ion-option>\n                         </ion-select>\n                       </ion-item>\n                     </ion-list>\n              </ion-col>\n            </ion-row>\n            <ion-row >\n                <ion-col col-12>\n                    <ion-list>\n                       <ion-item>\n                         <ion-label>Fabric</ion-label>\n                         <ion-select [(ngModel)]="fabric" (ionChange)="shippingMethodChange($event)">\n                             <ion-option value="fabric1">Fabric 1</ion-option>\n                             <ion-option value="fabric2">Fabric 2</ion-option>\n                             <ion-option value="fabric3">Fabric 3</ion-option>\n                           </ion-select>\n                         </ion-item>\n                       </ion-list>\n                </ion-col>\n                <ion-col col-12>\n                  <ion-list>\n                     <ion-item>\n                       <ion-label>Sleeve</ion-label>\n                       <ion-select [(ngModel)]="sleeve" (ionChange)="shippingMethodChange($event)">\n                           <ion-option value="half">Half</ion-option>\n                           <ion-option value="default">Full</ion-option>\n                         </ion-select>\n                       </ion-item>\n                     </ion-list>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n        <hr class="hr">\n        \n        <button class="button" ion-button full large color="default" (click)="addToCart(item1)">Add to Cart</button>\n  <hr class="hr">\n  <div class="about">Estimated delivery within 7-10 working days.</div>\n  <div class="about">If product is unsatisfactory the return has to be made within 30 days.</div> \n  <hr class="hr"> \n       \n\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womenshirts\womenshirts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], WomenshirtsPage);
    return WomenshirtsPage;
}());

//# sourceMappingURL=womenshirts.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomenblousePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WomenblousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WomenblousePage = /** @class */ (function () {
    function WomenblousePage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.bodytype = "drapey";
        this.fabric = "fabric1";
        this.sleeve = "default";
        this.getPicture = "ticket/custom";
        this.item = [];
        this.price = 0;
        this.qty = 1;
        this.shippingMethodChange();
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    WomenblousePage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    WomenblousePage.prototype.goNexthomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    WomenblousePage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    WomenblousePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    WomenblousePage.prototype.shippingMethodChange = function () {
        var _this = this;
        this.common.pageLoading("");
        // alert(1);
        // SELECT `id`, `name`, `bodytype`, `fabric`, `sleeve`, `price`, `image`, `genderid` FROM `custom` WHERE 1
        console.log('bodytype:-', this.bodytype);
        var myData = {
            name: 'wb',
            bodytype: this.bodytype,
            fabric: this.fabric,
            sleeve: this.sleeve,
            size: this.size
        };
        //commonAPI 
        this.data.commonAPI(myData, this.getPicture).then(function (res) {
            if (res.type == 'fail') {
                alert('fail');
                _this.common.stopLoading();
            }
            else {
                console.log('result from api:-', res);
                if (res.length > 0) {
                    _this.common.stopLoading();
                    _this.item = res;
                    _this.item1 = res;
                    console.log('image name:-', _this.item[0].image_name);
                    _this.productImage = _this.item[0].image_name;
                    _this.price = _this.item[0].price;
                }
                else {
                }
            }
        }).catch(function (err) {
            console.log('dashboard error api:-', err);
            _this.common.stopLoading();
        });
    };
    WomenblousePage.prototype.addToCart = function (selected_prod_type) {
        var _this = this;
        console.log('given Products:-', selected_prod_type);
        console.log('Selling Price:-', selected_prod_type[0].price);
        var sp = selected_prod_type[0].price;
        // alert(this.selected_prod_type.length);
        if (selected_prod_type.length == 0) {
            this.common.presentAlert('Error', 'Please select any product option');
        }
        else {
            if (!this.size) {
                this.common.presentAlert('Error', 'Please select a size');
            }
            else 
            // alert(2);
            {
                this.common.storage.get("cart").then(function (data) {
                    if (data == undefined || data.length == 0) {
                        data = [];
                        data.push({
                            // "productype":  selected_prod_type,
                            "bodytype": selected_prod_type[0].bodytype,
                            "fabric": selected_prod_type[0].fabric,
                            "id": selected_prod_type[0].id,
                            "qty": _this.qty,
                            "size": _this.size,
                            "image_name": selected_prod_type[0].image_name,
                            "name": selected_prod_type[0].name,
                            "sleeve": selected_prod_type[0].sleeve,
                            "price": parseFloat(selected_prod_type[0].price),
                            "total": parseFloat(selected_prod_type[0].price),
                        });
                    }
                    else {
                        var alreadyAdded = false;
                        var alreadyProductType = false;
                        var alreadyAddedIndex = -1;
                        //data = []; 
                        ///  console.log('data.length', data.length)
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == selected_prod_type[0].id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                            }
                            /* else {
            
                              // if product type is not matched
                                      data.push({
                                        "productype":  selected_prod_type[0],
                                        "product_image":this.getProd.img_path,
                                        "product_name": this.getProd.p_name,
                                        "qty": 1
                                      // "amount": parseFloat(product.price)
                                      });
                            } */
                        }
                        if (alreadyAdded) {
                            if (alreadyProductType) {
                                data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + _this.qty;
                                data[alreadyAddedIndex].total = parseFloat(data[alreadyAddedIndex].total) + (_this.qty * parseFloat(sp));
                            }
                            else {
                                data.push({
                                    "bodytype": selected_prod_type[0].bodytype,
                                    "fabric": selected_prod_type[0].fabric,
                                    "id": selected_prod_type[0].id,
                                    "qty": _this.qty,
                                    "size": _this.size,
                                    "image_name": selected_prod_type[0].image_name,
                                    "name": selected_prod_type[0].name,
                                    "sleeve": selected_prod_type[0].sleeve,
                                    "price": parseFloat(selected_prod_type[0].price),
                                    "total": parseFloat(selected_prod_type[0].price),
                                });
                            }
                        }
                        else {
                            data.push({
                                // "productype":  selected_prod_type[0],
                                "bodytype": selected_prod_type[0].bodytype,
                                "fabric": selected_prod_type[0].fabric,
                                "id": selected_prod_type[0].id,
                                "qty": _this.qty,
                                "size": _this.size,
                                "image_name": selected_prod_type[0].image_name,
                                "name": selected_prod_type[0].name,
                                "sleeve": selected_prod_type[0].sleeve,
                                "price": parseFloat(selected_prod_type[0].price),
                                "total": parseFloat(selected_prod_type[0].price),
                            });
                        }
                    }
                    _this.common.storage.set("cart", data).then(function () {
                        // console.log("Cart Updated");
                        // this.common.presentToast('You added an item to your  cart ')
                        console.log(data);
                        _this.common.events.publish("updateCart");
                        _this.common.updateCart1()
                            .then(function (cart) {
                            _this.cart_count = cart;
                            _this.navCtrl.pop();
                        }).catch(function (err) {
                            console.log('error from cart :-', err);
                        });
                        //console.log(this.cart_count);
                    });
                });
            }
        }
    };
    WomenblousePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-womenblouse',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womenblouse\womenblouse.html"*/'<!--\n  Generated template for the WomenblousePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            <button ion-button icon-only color="royal" >\n              <ion-icon name="search" ></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title (click)="goNexthome()">Women Blouse</ion-title>\n          <ion-buttons end>\n          <button ion-button icon-only color="royal" (click)="goMyCart()">\n            <ion-icon name="cart"></ion-icon>\n          </button>\n          <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    \n            <img class = "img"  src="{{ data.apiImageUrl }}{{ productImage }}"/>\n            <div class="price">₹ {{price}}/- only</div>  \n          <ion-icon class="info" name="information-circle" (click)="goNext1()"></ion-icon>\n      \n     \n  \n   \n    <div class="design">Design everything</div>\n            \n          <ion-grid padding> \n              <ion-row >\n                <ion-col col-12>\n                   <ion-list class = "list">\n                      <ion-item>\n                        <ion-label class = "label">Style</ion-label>\n                        <ion-select [(ngModel)]="bodytype" (ionChange)="shippingMethodChange($event)">\n                            <ion-option value="drapey">Drapey</ion-option>\n                            <ion-option value="plated">Pleated</ion-option>\n                            <ion-option value="placket">Placket</ion-option>\n                          </ion-select>\n                        </ion-item>\n                      </ion-list>\n                </ion-col>\n                <ion-col col-12>\n                    <ion-list>\n                       <ion-item>\n                         <ion-label>Size</ion-label>\n                         <ion-select [(ngModel)]="size">\n                             <ion-option value="36">36</ion-option>\n                             <ion-option value="38">38</ion-option>\n                             <ion-option value="40">40</ion-option>\n                             <ion-option value="42">42</ion-option>\n                             <ion-option value="44">44</ion-option>\n                             <ion-option value="46">46</ion-option>\n                             <ion-option value="48">48</ion-option>\n                             <ion-option value="50">50</ion-option>\n                           </ion-select>\n                         </ion-item>\n                       </ion-list>\n                </ion-col>\n              </ion-row>\n              <ion-row >\n                  <ion-col col-12>\n                      <ion-list>\n                         <ion-item>\n                           <ion-label>Fabric</ion-label>\n                           <ion-select [(ngModel)]="fabric" (ionChange)="shippingMethodChange($event)">\n                               <ion-option value="fabric1">Fabric 1</ion-option>\n                               <ion-option value="fabric2">Fabric 2</ion-option>\n                               <ion-option value="fabric3">Fabric 3</ion-option>\n                             </ion-select>\n                           </ion-item>\n                         </ion-list>\n                  </ion-col>\n                  <ion-col col-12>\n                      <ion-list>\n                         <ion-item>\n                           <ion-label>Sleeve</ion-label>\n                           <ion-select [(ngModel)]="sleeve" (ionChange)="shippingMethodChange($event)">\n                               <ion-option value="half">Half</ion-option>\n                               <ion-option value="default">Full</ion-option>\n                             </ion-select>\n                           </ion-item>\n                         </ion-list>\n                   </ion-col>\n              </ion-row>\n          </ion-grid>\n          <hr class="hr">\n         \n\n          <button class="button" ion-button full large color="default" (click)="addToCart(item1)">Add to Cart</button>\n          <hr class="hr">\n          <div class="about">Estimated delivery within 7-10 working days.</div>\n          <div class="about">If product is unsatisfactory the return has to be made within 30 days.</div> \n          <hr class="hr">  \n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\womenblouse\womenblouse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], WomenblousePage);
    return WomenblousePage;
}());

//# sourceMappingURL=womenblouse.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__arbin_arbin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newarrivals_newarrivals__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SalePage = /** @class */ (function () {
    function SalePage(navCtrl, data, common) {
        //  this.initializeItems();
        var _this = this;
        this.navCtrl = navCtrl;
        this.data = data;
        this.common = common;
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    SalePage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SalePage.prototype.goNext3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newarrivals_newarrivals__["a" /* NewarrivalsPage */]);
    };
    SalePage.prototype.goNext4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__arbin_arbin__["a" /* ArbinPage */]);
    };
    SalePage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    SalePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    SalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sale',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\sale\sale.html"*/'<!--\n  Generated template for the TrendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="purpledark">\n        <ion-toolbar>\n            <ion-buttons start>\n              <button ion-button icon-only color="royal">\n                <ion-icon name="search"></ion-icon>\n              </button>\n            </ion-buttons>\n            <ion-title (click)="goNext1()">Phisakhol</ion-title>\n            <ion-buttons end>\n              <button ion-button icon-only color="royal"(click)="goMyCart()" >\n                  <ion-icon name="cart"></ion-icon>\n              </button>\n              <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-navbar> \n</ion-header>\n  \n  <ion-content >\n    \n   <!--<body background="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80">-->\n    <div class="bg-color">\n\n    <ion-grid> \n      \n      <ion-row padding>\n          \n        <ion-col  col-6>\n          \n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1744648/2017/2/1/11485939100958-Harpa-Mustard-Yellow-Top-6191485939100702-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Hereth </div> \n          <div class="font2">₹ 859</div>\n        </div>\n      \n        </ion-col>\n      \n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8802279/2019/3/5/2bd78f87-f38f-4182-a1e5-679b48e0afd21551782803329-StyleStone-Womens-White-and-Golden-Animal-Chain-Print-Shirt--1.jpg"></ion-img>\n        <div class="font1">\n          <div class="font">Haski</div>\n        <div class="font2">₹ 990</div>\n      </div>\n        </ion-col>  \n      </ion-row>\n      <hr class="hr">\n      <ion-row padding>\n          <ion-col col-6>\n            <ion-img class="image" src ="\n            https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/8793155/2019/3/12/4e6b1662-6e74-4095-84bf-025e713cb62b1552388011002-Black-Women-Trousers-5531552388009969-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Avenues</div>\n         <div class="font2">₹ 1340</div>\n        </div>\n          </ion-col>\n          <ion-col col-6>\n            <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1236464/2016/8/10/11470813138150-Roadster-Black-Polo-T-shirt-2971470813137791-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Zara</div>\n            <div class="font2">₹ 1540</div>\n            </div>\n          </ion-col>\n      </ion-row>\n      <hr class="hr"> \n      <ion-row padding>\n        <ion-col col-6>\n            <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8675913/2019/2/8/a2d7ea83-8ab0-4d45-82f2-2bf3cded3bc91549627730684-MANGO-Women-Tshirts-1231549627729780-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Mango</div>\n            <div class="font2">₹ 690</div>\n            </div>\n          </ion-col>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7452058/2019/1/30/0b7be930-948c-4e5e-9419-da64232295941548845036379-DILLINGER-Men-Green--Black-Printed-Round-Neck-T-shirt-921548-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Black</div>\n            <div class="font2">₹ 2290</div>\n            </div>\n        </ion-col>\n      </ion-row> \n      <hr class="hr">\n      <ion-row padding>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/3881067/2018/10/12/0e99aa0a-87ba-4acf-844f-d24737d6fb0b1539340332343-HIGHLANDER-Men-Grey-Tapered-Fit-Solid-Cropped-Chinos-2153934-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">N & Y</div>\n          <div class="font2">₹ 1290</div>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/2102605/2017/9/8/11504847902240-Harpa-Women-Tops-4311504847902031-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">PluSS</div>\n          <div class="font2">₹ 790</div>\n          </div>\n        </ion-col>\n      </ion-row> \n     \n  </ion-grid>\n  </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\sale\sale.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__["a" /* DataserviceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], SalePage);
    return SalePage;
}());

//# sourceMappingURL=sale.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonservice_commonservice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_sevice__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_list__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_arbin_arbin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mancustom_mancustom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_womencustom_womencustom__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_manshirts_manshirts__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mantrousers_mantrousers__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_womenshirts_womenshirts__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_womenblouse_womenblouse__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_registration_registration__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trends_trends__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_newarrivals_newarrivals__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sale_sale__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_thankyou_thankyou__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_myorder_myorder__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_arbin_arbin__["a" /* ArbinPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mancustom_mancustom__["a" /* MancustomPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_womencustom_womencustom__["a" /* WomencustomPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_manshirts_manshirts__["a" /* ManshirtsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mantrousers_mantrousers__["a" /* MantrousersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_womenshirts_womenshirts__["a" /* WomenshirtsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_womenblouse_womenblouse__["a" /* WomenblousePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trends_trends__["a" /* TrendsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newarrivals_newarrivals__["a" /* NewarrivalsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sale_sale__["a" /* SalePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_myorder_myorder__["a" /* MyorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_arbin_arbin__["a" /* ArbinPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mancustom_mancustom__["a" /* MancustomPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_womencustom_womencustom__["a" /* WomencustomPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_manshirts_manshirts__["a" /* ManshirtsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mantrousers_mantrousers__["a" /* MantrousersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_womenshirts_womenshirts__["a" /* WomenshirtsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_womenblouse_womenblouse__["a" /* WomenblousePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_trends_trends__["a" /* TrendsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newarrivals_newarrivals__["a" /* NewarrivalsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_sale_sale__["a" /* SalePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_myorder_myorder__["a" /* MyorderPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_commonservice_commonservice__["a" /* CommonserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_sevice__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    AuthServiceProvider_1 = AuthServiceProvider;
    // Login
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials.");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post(AuthServiceProvider_1.LOGIN_URL, credentials)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    if (data.access_token) {
                        _this.token = 'Bearer ' + data.access_token;
                        _this.access = true;
                    }
                    else {
                        _this.access = false;
                    }
                });
                setTimeout(function () {
                    observer.next(_this.access);
                }, 500);
                setTimeout(function () {
                    observer.complete();
                }, 1000);
            }, function (err) { return console.error(err); });
        }
    };
    // Register
    AuthServiceProvider.prototype.register = function (credentials) {
        var _this = this;
        if (credentials.name === null || credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.http.post(AuthServiceProvider_1.REGISTER_URL, credentials)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                });
                observer.next(true);
                observer.complete();
            });
        }
    };
    // Get Token
    AuthServiceProvider.prototype.getToken = function () {
        return this.token;
    };
    // Logout
    AuthServiceProvider.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    // Change to this http://ed43bb3b.ngrok.io/api/login
    AuthServiceProvider.LOGIN_URL = 'http://contoh.dev/api/login';
    // Change to this http://ed43bb3b.ngrok.io/api/register
    AuthServiceProvider.REGISTER_URL = 'http://contoh.dev/api/register';
    AuthServiceProvider = AuthServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var AuthServiceProvider_1;
}());

//# sourceMappingURL=auth-sevice.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_arbin_arbin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myorder_myorder__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.username = 'Guest';
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.listenToLoginEvents();
        });
        var token = localStorage.getItem('tokenKey');
        if (token) {
            this.pages = [
                { title: 'Phisakhol', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                // { title: 'Login', component: LoginPage },
                { title: 'Find your Fit', component: __WEBPACK_IMPORTED_MODULE_5__pages_arbin_arbin__["a" /* ArbinPage */] },
                // { title: 'Registration', component: RegistrationPage },
                { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_9__pages_myorder_myorder__["a" /* MyorderPage */] },
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */] },
                { title: 'Logout', component: 'logout' }
            ];
            this.username = localStorage.getItem('username');
        }
        else {
            this.pages = [
                { title: 'Phisakhol', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
                { title: 'Find your Fit', component: __WEBPACK_IMPORTED_MODULE_5__pages_arbin_arbin__["a" /* ArbinPage */] },
                { title: 'Registration', component: __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */] },
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */] },
            ];
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == 'logout') {
            localStorage.clear();
            this.platform.exitApp();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (uname, tok) {
            console.log('username', uname);
            _this.username = uname;
            _this.pages = [
                { title: 'Phisakhol', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                // { title: 'Login', component: LoginPage },
                { title: 'Find your Fit', component: __WEBPACK_IMPORTED_MODULE_5__pages_arbin_arbin__["a" /* ArbinPage */] },
                // { title: 'Registration', component: RegistrationPage },
                { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_9__pages_myorder_myorder__["a" /* MyorderPage */] },
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */] },
                { title: 'Logout', component: 'logout' }
            ];
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar color="purpledark">\n      <ion-title >Hola, <span> {{username}}</span></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="abcd" >\n    \n    <ion-list >\n      <button color="purple1" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TrendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrendsPage = /** @class */ (function () {
    function TrendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrendsPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    TrendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trends',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\trends\trends.html"*/'<!--\n  Generated template for the TrendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="purpledark">\n        <ion-toolbar>\n            <ion-buttons start>\n              <button ion-button icon-only color="royal">\n                <ion-icon name="search"></ion-icon>\n              </button>\n            </ion-buttons>\n            <ion-title (click)="goNext1()">Phisakhol</ion-title>\n            <ion-buttons end>\n              <button ion-button icon-only color="royal"(click)="goMyCart()" >\n                  <ion-icon name="cart"></ion-icon>\n              </button>\n              <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-navbar> \n</ion-header>\n  \n  <ion-content >\n   <!--<body background="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80">-->\n    <div class="bg-color">\n    <ion-grid> \n      \n      <ion-row padding>\n          \n        <ion-col  col-6>\n          \n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1744648/2017/2/1/11485939100958-Harpa-Mustard-Yellow-Top-6191485939100702-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Hereth </div> \n          <div class="font2">₹ 859</div>\n        </div>\n      \n        </ion-col>\n      \n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8802279/2019/3/5/2bd78f87-f38f-4182-a1e5-679b48e0afd21551782803329-StyleStone-Womens-White-and-Golden-Animal-Chain-Print-Shirt--1.jpg"></ion-img>\n        <div class="font1">\n          <div class="font">Haski</div>\n        <div class="font2">₹ 990</div>\n      </div>\n        </ion-col>  \n      </ion-row>\n      <hr class="hr">\n      <ion-row padding>\n          <ion-col col-6>\n            <ion-img class="image" src ="\n            https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/8793155/2019/3/12/4e6b1662-6e74-4095-84bf-025e713cb62b1552388011002-Black-Women-Trousers-5531552388009969-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Avenues</div>\n         <div class="font2">₹ 1340</div>\n        </div>\n          </ion-col>\n          <ion-col col-6>\n            <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1236464/2016/8/10/11470813138150-Roadster-Black-Polo-T-shirt-2971470813137791-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Zara</div>\n            <div class="font2">₹ 1540</div>\n            </div>\n          </ion-col>\n      </ion-row>\n      <hr class="hr"> \n      <ion-row padding>\n        <ion-col col-6>\n            <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8675913/2019/2/8/a2d7ea83-8ab0-4d45-82f2-2bf3cded3bc91549627730684-MANGO-Women-Tshirts-1231549627729780-1.jpg"></ion-img>\n            <div class="font1">\n            <div class="font">Mango</div>\n            <div class="font2">₹ 690</div>\n            </div>\n          </ion-col>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7452058/2019/1/30/0b7be930-948c-4e5e-9419-da64232295941548845036379-DILLINGER-Men-Green--Black-Printed-Round-Neck-T-shirt-921548-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">Black</div>\n            <div class="font2">₹ 2290</div>\n            </div>\n        </ion-col>\n      </ion-row> \n      <hr class="hr">\n      <ion-row padding>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/3881067/2018/10/12/0e99aa0a-87ba-4acf-844f-d24737d6fb0b1539340332343-HIGHLANDER-Men-Grey-Tapered-Fit-Solid-Cropped-Chinos-2153934-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">N & Y</div>\n          <div class="font2">₹ 1290</div>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <ion-img class="image" src ="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/2102605/2017/9/8/11504847902240-Harpa-Women-Tops-4311504847902031-1.jpg"></ion-img>\n          <div class="font1">\n          <div class="font">PluSS</div>\n          <div class="font2">₹ 790</div>\n          </div>\n        </ion-col>\n      </ion-row> \n     \n  </ion-grid>\n  </div>\n  </ion-content>\n  '/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\trends\trends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TrendsPage);
    return TrendsPage;
}());

//# sourceMappingURL=trends.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="purpledark">\n    <ion-toolbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n        </button>\n          <ion-buttons start>\n            \n          </ion-buttons>\n        <ion-title>About Your Fit</ion-title>\n          <ion-buttons end>\n          \n          \n        </ion-buttons>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class="hd">Your Fit</div> \n  <hr class="hr">\n  <div class = "about">\n    #. Your Fit is a one stop solution for finding your perfect fit. You can choose from an array of fits and sizes to fit your body perfectly. Your Fit also lets you choose from a variety of styling options like fabric cuff and collar so you can create your own style statement.\n  </div>\n  <div class = "about">\n    #. We believe we have the perfect fit for any kind of body type. But if after trying, you still feel the fit is not perfect for you, you can return the Your Fit garment for a full refund.\n  </div>\n  <hr class="hr">  \n  <div class="hd">Terms & Condition</div>\n  <hr class="hr">\n  <div class = "about">\n      #. There could be some variation between the screen and actual product colour.\n  </div>\n  <div class = "about">\n      #. Estimated delivery within 7 - 10 days.\n  </div>\n  <div class = "about">\n      #. If product is unsatisfactory, the return has to be made within 30 days to be eligible for exchange.\n  </div>\n  <hr class="hr">\n  \n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArbinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mancustom_mancustom__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__womencustom_womencustom__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArbinPage = /** @class */ (function () {
    function ArbinPage(navCtrl, navParams, data, common) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.common.events.subscribe("updateCart", function () {
            _this.common.updateCart1()
                .then(function (cart) {
                _this.cart_count = cart;
            }).catch(function (err) {
                console.log('error from cart :-', err);
            });
        });
    }
    ArbinPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ArbinPage.prototype.goNext2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mancustom_mancustom__["a" /* MancustomPage */]);
    };
    ArbinPage.prototype.goNext3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__womencustom_womencustom__["a" /* WomencustomPage */]);
    };
    ArbinPage.prototype.goMyCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ArbinPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.updateCart1()
            .then(function (cart) {
            _this.cart_count = cart;
        }).catch(function (err) {
            console.log('error from cart :-', err);
        });
    };
    ArbinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arbin',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\arbin\arbin.html"*/'<!--\n  Generated template for the ArbinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="purpledark">\n        <ion-toolbar>\n            <button ion-button menuToggle>\n                <ion-icon name="menu" ></ion-icon>\n              </button>\n            <ion-buttons start>\n              <button ion-button icon-only color="royal">\n                <ion-icon name="search"></ion-icon>\n              </button>\n            </ion-buttons>\n            <ion-title >Gender</ion-title>\n            <ion-buttons end>\n              <button ion-button icon-only color="royal"(click)="goMyCart()" >\n                  <ion-icon name="cart"></ion-icon>\n              </button>\n              <ion-badge class="cart-badge">{{ cart_count }}</ion-badge>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-navbar> \n</ion-header>\n\n<ion-content class="padding">\n  <body >\n  <ion-card (click)="goNext2()">\n    <img  class= "cardimg"\n      src="http://blog.paisacube.com/wp-content/uploads/2017/09/8.jpg" />\n        <div class="card-title">Men</div>\n        <div class="card-subtitle"></div>\n  </ion-card>\n  <!--<div class="fits">Find your Fit</div>-->\n  <ion-card (click)="goNext3()">\n    <img  class= "cardimg"\n      src="http://travelmyday.com/wp-content/uploads/2017/08/810-24.jpg" />\n        <div class="card-title"> Women</div>\n        <div class="card-subtitle"></div>\n  </ion-card>\n</body>\n</ion-content>\n'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\arbin\arbin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_dataservice_dataservice__["a" /* DataserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonservice_commonservice__["a" /* CommonserviceProvider */]])
    ], ArbinPage);
    return ArbinPage;
}());

//# sourceMappingURL=arbin.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonservice_commonservice__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, data, common, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.common = common;
        this.events = events;
        this.loginUrl = "site/login";
    }
    LoginPage.prototype.goNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goNext2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.username && this.password) {
            this.common.pageLoading('Please wait...');
            this.data.checkLogin(this.username, this.password, this.loginUrl).then(function (res) {
                console.log('login_response:-', res);
                // alert(1)
                if (res == 0) {
                    _this.common.presentToast("Error occured");
                    _this.common.stopLoading();
                }
                else if (res.type == 'success') {
                    _this.common.stopLoading();
                    console.log('nextLogin:-', _this.navParams.get('nextLogin'));
                    localStorage.setItem('tokenKey', res.msg);
                    localStorage.setItem('username', res.username);
                    _this.eventLogin(res.msg, res.username);
                    if (_this.navParams.get('nextLogin')) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
                else {
                    _this.common.presentToast(res.msg);
                    _this.common.stopLoading();
                }
            }).catch(function (err) {
                console.log('login function:-', err);
                _this.common.stopLoading();
            });
        }
        else {
            this.common.presentToast('username/password can\'t be blank');
        }
    };
    LoginPage.prototype.eventLogin = function (stoken, uname) {
        console.log('User logined and subscribe!', uname + ' ' + stoken);
        this.events.publish('user:login', uname, stoken);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Books & Knowledge\Final Year Project\test2\src\pages\login\login.html"*/'<ion-content class="bg">\n    <img class="hi" src="../../assets/imgs/Captures1.png" pager style="width:200px;height:85px;">\n    <ion-input  class="a" required placeholder="Username"  [(ngModel)]="username" ></ion-input>\n    <ion-input class="a1" required type="password"  placeholder="Password"  [(ngModel)]="password" ></ion-input>\n    <button ion-button class="a2" (click)="login()" block><b>Login</b></button>\n    <div class="a3">\n    <p>Forgot your Login details?<b>Click Here</b></p>\n    </div>\n    <div class="a4">\n    <b (click)="goNext2()">Signup Here</b>\n    </div>\n    \n\n</ion-content>'/*ion-inline-end:"D:\Books & Knowledge\Final Year Project\test2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dataservice_dataservice__["a" /* DataserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_commonservice_commonservice__["a" /* CommonserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map