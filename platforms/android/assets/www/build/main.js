webpackJsonp([1],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/










var Home2Page = (function () {
    function Home2Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.scrollTopButton = false;
        this.segments = 'topSeller';
        this.loadingServerData = true;
    }
    Home2Page.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    Home2Page.prototype.onScroll = function (e) {
        this.content.resize();
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //  console.log(e);
    };
    Home2Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    Home2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */])
    ], Home2Page.prototype, "content", void 0);
    Home2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\home2\home2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home2" (ionScroll)="onScroll($event)">\n  <!-- top banners -->\n  <banners></banners>\n  <sliding-tabs [type]="\'image\'"></sliding-tabs>\n\n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==1">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\home2\home2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home2Page);
    return Home2Page;
}());

//# sourceMappingURL=home2.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var Home3Page = (function () {
    function Home3Page(http, config, navCtrl, shared, translate) {
        this.http = http;
        this.config = config;
        this.navCtrl = navCtrl;
        this.shared = shared;
    }
    Home3Page.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { type: value });
    };
    Home3Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */])
    ], Home3Page.prototype, "content", void 0);
    Home3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\home3\home3.html"*/'<ion-header>\n\n    \n\n      <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    \n\n        <ion-title text-center>\n\n          <img src="assets/logo_header.png" alt="logo">\n\n        </ion-title>\n\n    \n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="openSearch()">\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n            <ion-icon name="cart">\n\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n            </ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n  \n\n  <ion-content class="page-home3">\n\n    <!-- top banners -->\n\n    <banners></banners>\n\n\n\n    <div class="modules">\n\n    	<!-- Top Seller -->\n\n    <div class="module">\n\n      <h3>{{ \'Newest Products\' | translate }}<small>View All</small></h3>\n\n      <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product" dir="{{shared.dir}}">\n\n        <ion-slide *ngFor="let p of shared.tab1" >\n\n          <product [data]="p" [type]="\'normal\'"></product>\n\n        </ion-slide>\n\n        <ion-slide class="swiper-slide-last">\n\n          <ion-card (click)="openProducts(\'latest\')">\n\n            <ion-card-content>\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              <h4>{{ \'View All\' | translate }}</h4>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <!-- Deals -->\n\n    <div class="module">\n\n      <h3>{{ \'On Sale Products\' | translate }}<small>View All</small></h3>\n\n      <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product" dir="{{shared.dir}}">\n\n        <ion-slide *ngFor="let p of shared.tab2" >\n\n          <product [data]="p" [type]="\'normal\'"></product>\n\n        </ion-slide>\n\n        <ion-slide class="swiper-slide-last" >\n\n          <ion-card (click)="openProducts(\'sale\')">\n\n            <ion-card-content>\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              <h4>{{ \'View All\' | translate }}</h4>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <!-- Most Liked -->\n\n    <div class="module">\n\n      <h3>{{ \'Featured Products\' | translate }}<small>View All</small></h3>\n\n      <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product" dir="{{shared.dir}}">\n\n        <ion-slide *ngFor="let p of shared.tab3" >\n\n          <product [data]="p" [type]="\'normal\'"></product>\n\n        </ion-slide>\n\n        <ion-slide class="swiper-slide-last" >\n\n          <ion-card (click)="openProducts(\'featured\')">\n\n            <ion-card-content>\n\n              <ion-icon name="checkmark-circle"></ion-icon>\n\n              <h4>{{ \'View All\' | translate }}</h4>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <!-- Recent Viewed items products -->\n\n    <!-- <div class="module recent-module" *ngIf="shared.recentViewedProducts.length!=0">\n\n      <h3>{{\'Recently Viewed\'|translate}}<small>Remove All</small></h3>\n\n      <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product" dir="{{shared.dir}}">\n\n        <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n\n          <product [data]="p" [type]="\'recent\'"></product>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div> -->\n\n    </div>\n\n\n\n  </ion-content>\n\n  <ion-footer *ngIf="config.footerShowHide==1">\n\n    <footer ></footer>\n\n  </ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\home3\home3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home3Page);
    return Home3Page;
}());

//# sourceMappingURL=home3.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_categories6_sub_categories6__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var Home5Page = (function () {
    function Home5Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.segments = 'topSeller';
    }
    Home5Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sub_categories6_sub_categories6__["a" /* SubCategories6Page */], { 'parent': parent });
    };
    Home5Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */])
    ], Home5Page.prototype, "content", void 0);
    Home5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home5',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\home5\home5.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home5">\n  <ion-card *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n    <img *ngIf="c.image" src="{{c.image.src[0]}}" />\n    <div class="categories-title">{{c.name}}</div>\n    \n  </ion-card>\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==1">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\home5\home5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home5Page);
    return Home5Page;
}());

//# sourceMappingURL=home5.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_categories_sub_categories__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var Home4Page = (function () {
    function Home4Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
    }
    Home4Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            //  console.log(JSON.stringify(this.shared))
            if (value.parent == parent) {
                count++;
                console.log(value);
            }
        }
        if (count != 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'parent': parent });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { id: parent, name: "" });
    };
    Home4Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home4Page.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { type: value });
    };
    Home4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */])
    ], Home4Page.prototype, "content", void 0);
    Home4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\home4\home4.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title text-center>\n\n      <img src="assets/logo_header.png" alt="logo">\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="page-home4">\n\n  <!-- top banners -->\n\n  <banners></banners>\n\n\n\n  <ion-grid class="categories-grid">\n\n    <!--<h3>{{ \'Categories\' | translate }}</h3>-->\n\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated fadeIn">\n\n        <ion-card>\n\n          <div class="category-icon"><img *ngIf="c.image" src="{{c.image.src}}" /></div>\n\n          <div class="cateogry-content">\n\n          	<div class="categories-title">{{c.name}}</div>\n\n          \n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <div class="modules">\n\n  	<!-- Top Seller -->\n\n  <div class="module">\n\n    <h3>{{ \'Newest Products\' | translate }}<small>View All</small></h3>\n\n    <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product">\n\n      <ion-slide *ngFor="let p of shared.tab1">\n\n        <product [data]="p" [type]="\'normal\'"></product>\n\n      </ion-slide>\n\n      <ion-slide class="swiper-slide-last">\n\n        <ion-card (click)="openProducts(\'top seller\')">\n\n          <ion-card-content>\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n            <h4>{{\'View All\'| translate }}</h4>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- Deals -->\n\n  <div class="module">\n\n    <h3>{{ \'On Sale Products\' | translate }}<small>View All</small></h3>\n\n    <ion-slides slidesPerView={{config.sliderPerView}} class="animate-product" dir="{{shared.dir}}">\n\n      <ion-slide *ngFor="let p of shared.tab2">\n\n        <product [data]="p" [type]="\'normal\'"></product>\n\n      </ion-slide>\n\n      <ion-slide class="swiper-slide-last">\n\n        <ion-card (click)="openProducts(\'special\')">\n\n          <ion-card-content>\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n            <h4>{{\'View All\'| translate }}</h4>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- Most Liked -->\n\n  <div class="module">\n\n    <h3>{{ \'Featured Products\' | translate }}<small>View All</small></h3>\n\n    <ion-slides slidesPerView={{config.sliderPerView}}  class="animate-product" dir="{{shared.dir}}">\n\n      <ion-slide *ngFor="let p of shared.tab3">\n\n        <product [data]="p" [type]="\'normal\'"></product>\n\n      </ion-slide>\n\n      <ion-slide class="swiper-slide-last">\n\n        <ion-card (click)="openProducts(\'most liked\')">\n\n          <ion-card-content>\n\n            <ion-icon name="checkmark-circle"></ion-icon>\n\n            <h4>{{\'View All\'| translate }}</h4>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <!-- Recent Viewed items products -->\n\n  <!-- <div class="module recent-module" *ngIf="shared.recentViewedProducts.length!=0" >\n\n    <h3>{{\'Recently Viewed\'|translate}}<small>Remove All</small></h3>\n\n    <ion-slides slidesPerView={{config.sliderPerView}} class="animate-product" dir="{{shared.dir}}">\n\n      <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n\n        <product [data]="p" [type]="\'recent\'"></product>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div> -->\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==1">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\home4\home4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home4Page);
    return Home4Page;
}());

//# sourceMappingURL=home4.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/


var LoadingProvider = (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            duration: 20000
        });
        this.loading.present();
    };
    LoadingProvider.prototype.hide = function () {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    };
    LoadingProvider.prototype.autoHide = function (time) {
        this.loading = this.loadingCtrl.create({
            duration: time
        });
        this.loading.present();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shipping_address_shipping_address__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_coupon_coupon__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__thank_you_thank_you__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/

















var CartPage = (function () {
    function CartPage(navCtrl, shared, config, http, loading, alert, storage, translate, events, modalCtrl, applicationRef, couponProvider, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.storage = storage;
        this.translate = translate;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.applicationRef = applicationRef;
        this.couponProvider = couponProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.c = '';
        this.m = '';
        this.couponArray = [];
        this.products = [];
        this.loadingServerData = true;
        //============================================================================================  
        this.qunatityPlus = function (p) {
            var _this = this;
            if (p.stock_quantity == p.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
                p.quantity++;
                p.subtotal = p.subtotal + parseFloat(p.price);
                p.total = p.total + parseFloat(p.price);
                this.updateCart();
            }
        };
        //============================================================================================  
        //function decreasing the quantity
        this.qunatityMinus = function (p) {
            if (p.quantity != 1) {
                p.quantity--;
                p.subtotal = parseFloat(p.price) * p.quantity;
                p.total = parseFloat(p.price) * p.quantity;
                this.updateCart();
            }
        };
        //============================================================================================   
        //getting getMostLikedProducts from the server
        this.getCoupon = function (code) {
            var _this = this;
            this.loading.show();
            this.config.Woocommerce.getAsync("coupons?code=" + code).then(function (data) {
                _this.loading.hide();
                var d = JSON.parse(data.body);
                var coupon = d[0];
                if (d.length == 0)
                    _this.translate.get("Invalid Coupon Code!").subscribe(function (res) { _this.alert.show(res); });
                else
                    _this.applyCouponCart(coupon);
            }, function (error) {
                _this.loading.hide();
                console.log(error);
            });
        };
        this.margin = function (code) {
            /*
              this.loading.show();
         
             this.config.Woocommerce.getAsync("coupons?code=" + code).then((data) => {
         
               this.loading.hide();
               let d = JSON.parse(data.body);
               let coupon = d[0];
               if (d.length == 0) this.translate.get("Invalid Coupon Code!").subscribe((res) => { this.alert.show(res); });
               else
                 this.applyCouponCart(coupon);
         
         
             }, error => {
               this.loading.hide();
               console.log(error);
             });
            */
        };
        //============================================================================================  
        //applying coupon on the cart
        this.applyCouponCart = function (coupon) {
            //checking the coupon is valid or not
            if (this.couponProvider.validateCouponService(coupon, this.products, this.shared.couponArray) == false) {
                return 0;
            }
            else {
                if (coupon.individual_use == 1) {
                    this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
                    this.shared.couponArray = [];
                    console.log('individual_use');
                }
                var v = {};
                v.code = coupon.code;
                v.amount = coupon.amount;
                v.product_ids = coupon.product_ids;
                v.excluded_product_ids = coupon.exclude_product_ids;
                v.product_categories = coupon.product_categories;
                v.excluded_product_categories = coupon.excluded_product_categories;
                v.discount = coupon.amount;
                v.individual_use = coupon.individual_use;
                v.free_shipping = coupon.free_shipping;
                v.discount_type = coupon.discount_type;
                // v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
                // v.usage_limit = coupon.usage_limit;
                // v.used_by = coupon.used_by ;
                // v.usage_limit_per_user = coupon.usage_limit_per_user ;
                // v.exclude_sale_items = coupon.exclude_sale_items;
                this.shared.couponArray.push(coupon);
            }
            //applying coupon service
            this.products = this.couponProvider.apply(coupon, this.products);
            this.updateCart();
        };
        //============================================================================================  
        //delete Coupon
        this.deleteCoupon = function (code) {
            var _this = this;
            this.shared.couponArray.forEach(function (value, index) {
                if (value.code == code) {
                    _this.shared.couponArray.splice(index, 1);
                    return true;
                }
            });
            this.updateCart();
            console.log(this.shared.couponArray);
        };
        events.subscribe('openThankYouPage', function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__thank_you_thank_you__["a" /* ThankYouPage */]);
        });
        events.subscribe('openShippingAddressPage', function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__shipping_address_shipping_address__["a" /* ShippingAddressPage */]);
        });
    }
    //============================================================================================  
    CartPage.prototype.totalPrice = function () {
        var price = 0;
        var subPrice = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var value = _a[_i];
            subPrice = subPrice + value.subtotal;
            price = price + value.total;
        }
        this.subtotal = subPrice;
        this.total = price;
        // console.log(price);
    };
    ;
    //============================================================================================  
    CartPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id).then(function (data) {
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            console.log(err);
        });
    };
    //============================================================================================  
    CartPage.prototype.removeCart = function (id) {
        var _this = this;
        this.products.forEach(function (value, index) {
            if (value.cart_id == id) {
                _this.products.splice(index, 1);
                console.log("removing" + id);
            }
        });
        this.shared.removeCart(this.products);
        this.updateCart();
    };
    //============================================================================================  
    CartPage.prototype.proceedToCheckOut = function () {
        if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
            modal.present();
        }
        else {
            // <!-- 2.0 updates -->
            if (this.config.checkOutPage == 1)
                this.shared.onePageCheckOut(this.m);
            else
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__shipping_address_shipping_address__["a" /* ShippingAddressPage */]);
        }
    };
    //============================================================================================  
    CartPage.prototype.openProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__products_products__["a" /* ProductsPage */], { sortOrder: 'newest' });
    };
    //============================================================================================  
    CartPage.prototype.ionViewWillEnter = function () {
        //if (this.config.admob == 1) this.shared.showAd();
        this.updateCart();
    };
    //============================================================================================  
    CartPage.prototype.updateCart = function () {
        var _this = this;
        if (this.shared.cartProducts.length != 0) {
            this.loading.show();
            this.loadingServerData = false;
        }
        var count = 0;
        this.shared.cartProducts.forEach(function (value, index) {
            var id = value.product_id;
            if (value.variation_id != undefined)
                id = value.variation_id;
            _this.config.Woocommerce.getAsync("products/" + id).then(function (data) {
                count++;
                var p = JSON.parse(data.body);
                if (p.id == undefined) {
                    _this.shared.cartProducts.splice(index, 1);
                }
                else if (p.status == 'trash') {
                    _this.shared.cartProducts.splice(index, 1);
                }
                else {
                    value.price = p.price;
                    value.name = p.name;
                    value.stock_quantity = p.stock_quantity;
                    value.tax_status = p.tax_status;
                    //value.image = p.images[0].src;
                    value.tax_class = p.tax_class;
                    value.tax_status = p.tax_status;
                    value.on_sale = p.on_sale;
                    value.categories = p.categories;
                    if (p.stock_quantity == null) { }
                    else if (p.stock_quantity < value.quantity)
                        value.quantity = p.stock_quantity;
                    else if (p.in_stock == false) {
                        _this.shared.cartProducts.splice(index, 1);
                    }
                    value.subtotal = parseFloat(value.price) * value.quantity;
                    value.total = parseFloat(value.price) * value.quantity;
                }
                _this.applicationRef.tick();
                if (count == _this.shared.cartProducts.length) {
                    _this.changingCart();
                    _this.loading.hide();
                    _this.loadingServerData = true;
                }
            });
        });
    };
    //==========================================================================
    CartPage.prototype.changingCart = function () {
        var _this = this;
        this.products = this.shared.cartProducts;
        this.storage.set('cartProducts', this.shared.cartProducts);
        this.shared.cartTotalItems();
        this.shared.couponArray.forEach(function (value) {
            _this.products = _this.couponProvider.apply(value, _this.shared.cartProducts);
        });
        this.totalPrice();
    };
    CartPage.prototype.couponslist = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Demo Coupons',
            buttons: [
                {
                    icon: 'arrow-round-forward',
                    text: 'Product Fixed (fp). A fixed total discount for selected products only',
                    handler: function () {
                        _this.c = 'fp';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Cart Fixed (fc). A fixed total discount for the entire cart',
                    handler: function () {
                        _this.c = 'fc';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Product Percentage (percentage). A percentage discount for selected products only',
                    handler: function () {
                        _this.c = 'percentage';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_11__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\cart\cart.html"*/'<ion-header #myElement>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'My Cart\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-cart">\n\n  <ion-grid class="page-empty" *ngIf="products.length==0 && loadingServerData" [@animate]>\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="cart"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your cart is empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button color="secondary" (click)="openProductsPage()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class="card-product animated flipInX" *ngFor="let product of products" [@animate]>\n    <ion-card-header>\n      <h3>{{product.name}}\n        <br>\n        <small>{{product.categories_name}}</small>\n      </h3>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{product.image}}">\n        </ion-thumbnail>\n\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6 [innerHTML]="product.price_html"></ion-col>\n        </ion-row>\n\n        <!-- <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row> -->\n\n        <ion-row align-items-center>\n          <ion-col col-6>{{\'Quantity\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <button ion-button small outline (click)="qunatityMinus(product);" *ngIf="!product.sold_individually">\n              <ion-icon name="remove"></ion-icon>\n            </button>\n            <span class="dgi">{{product.quantity}}</span>\n            <button ion-button small outline (click)="qunatityPlus(product);" *ngIf="!product.sold_individually">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Sub Total\' |translate}}&nbsp;:&nbsp;</strong>\n          </ion-col>\n          <ion-col col-6>\n            <strong>{{product.subtotal }}</strong>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}&nbsp;:&nbsp;</strong>\n          </ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row> -->\n      </ion-item>\n      <button ion-button small color="secondary" (click)="getSingleProductDetail(product.product_id)">{{\'View\' |\n        translate}}</button>\n      <button ion-button small clear color="danger" (click)="removeCart(product.cart_id);">{{\'Remove\' | translate}}</button>\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <div *ngIf="products.length!=0">\n    <ion-card class="card-product" *ngFor="let coupon of shared.couponArray">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Code\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.code}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Amount\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.amount| curency}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'percent\'">\n            {{\'A percentage discount for the entire cart\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_cart\'">\n            {{\'A fixed total discount for the entire cart\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_product\'">\n            {{\'A fixed total discount for selected products only\'|translate}}\n          </ion-col>\n          <ion-col col-12 *ngIf="coupon.discount_type == \'percent_product\'">\n            {{\'A percentage discount for selected products only\'|translate}}\n          </ion-col>\n          <ion-col col-12>\n            <button ion-button small color="secondary" (click)="deleteCoupon(coupon.code)">{{\'Remove\'|translate}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="card-product">\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'coupon code\'|translate}}" [(ngModel)]="c"></ion-input>\n            <button ion-button item-end [disabled]="c==\'\'" (click)="getCoupon(c)">{{\'Apply\'|translate}}</button>\n          </ion-item>\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n  \n      <ion-card class="card-product">\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-input type="number" placeholder="{{\'Margin\'|translate}}" [(ngModel)]="m"></ion-input>\n            <button ion-button item-end [disabled]="m==\'\'" (click)="margin(m)">{{\'Apply\'|translate}}</button>\n          </ion-item>\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n  <ion-card *ngIf="products.length!=0">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'SubTotal\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{subtotal | curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Discount\' |translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          - {{subtotal-total| curency}}\n        </ion-col>\n      </ion-row>\n        <ion-row>\n        <ion-col col-6>\n          {{\'Your Margin\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{ m | curency}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Total\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{ (total * 1) + (m*1) | curency}}&nbsp;+&nbsp;{{\'shipping\'|translate}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <button [disabled]="products.length==0" ion-button solid block color="secondary" (click)="proceedToCheckOut()">\n    {{\'Proceed\'|translate}}\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_15__providers_coupon_coupon__["a" /* CouponProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
        this.sharedData.currentOpenedModel = this;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\privacy-policy\privacy-policy.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'Privacy Policy\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [innerHTML]="sharedData.privacyPolicy"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\privacy-policy\privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var TermServicesPage = (function () {
    function TermServicesPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
        this.sharedData.currentOpenedModel = this;
    }
    TermServicesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-term-services',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\term-services\term-services.html"*/'\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n              <ion-icon name="close"></ion-icon>\n\n            </button>\n\n      </ion-buttons>\n\n      <ion-title translate> {{\'Term and Services\'| translate }}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [innerHTML]="sharedData.termServices"></div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Softwares\Code\src\pages\term-services\term-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TermServicesPage);
    return TermServicesPage;
}());

//# sourceMappingURL=term-services.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var RefundPolicyPage = (function () {
    function RefundPolicyPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
        this.sharedData.currentOpenedModel = this;
    }
    RefundPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RefundPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refund-policy',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\refund-policy\refund-policy.html"*/'<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>{{\'Refund Policy\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <div [innerHTML]="sharedData.refundPolicy"></div>\n\n  </ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\refund-policy\refund-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], RefundPolicyPage);
    return RefundPolicyPage;
}());

//# sourceMappingURL=refund-policy.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var MyOrdersPage = (function () {
    function MyOrdersPage(navCtrl, navParams, http, config, shared, translate, alert, loading, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.page = 1;
        this.orders = new Array;
        this.httpRunning = true;
    }
    MyOrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.httpRunning = true;
        if (this.page == 1) {
            this.loading.show();
        }
        this.config.Woocommerce.getAsync('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id).then(function (dat) {
            _this.infinite.complete();
            _this.httpRunning = false;
            var data = JSON.parse(dat.body);
            if (_this.page == 1) {
                _this.orders = new Array;
                _this.loading.hide();
            }
            if (data.length != 0) {
                _this.page++;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    _this.orders.push(value);
                }
            }
            if (data.length == 0) {
                _this.infinite.enable(false);
            }
            _this.applicationRef.tick();
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Server Error while Loading Orders");
        });
    };
    ;
    MyOrdersPage.prototype.showOrderDetail = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__["a" /* OrderDetailPage */], { 'data': order });
    };
    MyOrdersPage.prototype.ionViewDidLoad = function () {
        this.httpRunning = true;
        this.getOrders();
    };
    MyOrdersPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    MyOrdersPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    MyOrdersPage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */]);
    };
    MyOrdersPage.prototype.refreshPage = function () {
        this.page = 1;
        this.getOrders();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], MyOrdersPage.prototype, "infinite", void 0);
    MyOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-orders',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\my-orders\my-orders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Customer Orders\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-my-orders">\n  <ion-grid class="page-empty" *ngIf="orders.length==0 && httpRunning==false">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="briefcase"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your Order List is Empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button (click)="openShop()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let order of orders" (click)="showOrderDetail(order)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Order ID\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{\'#\'+order.number}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Date\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{order.date_created|date}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Price\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{order.total|curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row [class.pending]="order.status==\'pending\' || order.status==\'refunded\'" [class.cancel]="order.status==\'cancelled\' || order.status==\'failed\'"\n        [class.inprocess]="order.status==\'processing\'" [class.complete]="order.status==\'completed\'">\n        <ion-col col-6>\n          {{\'Status\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          <span>\n            <strong>{{order.status|translate}}</strong>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-infinite-scroll #infinite (ionInfinite)="getOrders($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\my-orders\my-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, config, http, alert, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.alert = alert;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.searchResult = [];
        this.showCategories = true;
        this.count = 0;
        this.onChangeKeyword = function (e) {
            //console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
        };
        this.getSearchData = function () {
            var _this = this;
            if (this.search != undefined) {
                if (this.search == null || this.search == '') {
                    this.shared.toast("Please enter something");
                    return 0;
                }
            }
            else {
                this.shared.toast("Please enter something");
                return 0;
            }
            var string = this.search;
            var matches = string.match(/\d+/g); // creates array from matches
            console.log(matches);
            var str = this.search;
            var searchKeywords = str.replace(/[0-9]/g, ' ');
            ;
            console.log(searchKeywords);
            this.loading.show();
            this.config.Woocommerce.getAsync("products?status=publish&per_page=50&search=" + searchKeywords).then(function (data) {
                _this.searchResult = JSON.parse(data.body);
                console.log(matches);
                if (matches == null) {
                    _this.loading.hide();
                    if (_this.searchResult.length == 0) {
                        _this.shared.toast("No Product found!");
                    }
                }
                else if (matches.length == 0) {
                    _this.loading.hide();
                    if (_this.searchResult.length == 0) {
                        _this.shared.toast("No Product found!");
                    }
                }
                else if (matches.length != 0) {
                    _this.getProductsByIds(matches);
                }
                _this.applicationRef.tick();
            });
        };
    }
    SearchPage.prototype.getProductsByIds = function (matches) {
        var _this = this;
        this.config.Woocommerce.getAsync("products/?include=" + matches).then(function (data) {
            _this.loading.hide();
            var d = JSON.parse(data.body);
            for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                var v = d_1[_i];
                _this.searchResult.unshift(v);
            }
            if (_this.searchResult.length == 0) {
                _this.shared.toast("No Product found!");
            }
            _this.applicationRef.tick();
        });
    };
    SearchPage.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { id: id, name: name });
    };
    SearchPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Search\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form #loginForm="ngForm" (ngSubmit)="getSearchData()">\n    <ion-searchbar [(ngModel)]="search" name="search" placeholder="{{\'Search\'|translate}}" [showCancelButton]="shouldShowCancel"\n      (ionInput)="onChangeKeyword($event)">\n    </ion-searchbar>\n  </form>\n\n  <div class="list" *ngFor="let p of searchResult">\n    <product [data]="p" [type]="\'list\'"></product>\n  </div>\n\n  <ion-list >\n    <ion-item *ngFor="let c of shared.allCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-avatar item-start>\n        <img src="{{c.image.src}}" *ngIf="c.image">\n      </ion-avatar>\n      <h2>{{c.name}}</h2>\n     \n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var ProductsPage = (function () {
    function ProductsPage(navCtrl, navParams, config, shared, loading, translate, http, actionSheet, menuCtrl, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.translate = translate;
        this.http = http;
        this.actionSheet = actionSheet;
        this.menuCtrl = menuCtrl;
        this.applicationRef = applicationRef;
        this.queryAttributes = "";
        this.attributes = [];
        this.tempAttributes = [];
        this.selectedAttributes = [];
        this.scrollTopButton = false;
        //@ViewChild(IonRange) priceRange: IonRange;
        this.products = new Array;
        this.selectedTab = '';
        this.categoryId = '';
        this.categoryName = '';
        this.sortOrder = 'Newest';
        this.sortArray = ['Newest', 'A - Z', 'Z - A'];
        //, 'A - Z Date', 'Z - A Date'
        //'Latest', 'On Sale', 'Featured'
        this.page = 1;
        this.applyFilter = false;
        this.filters = [];
        this.selectedFilters = [];
        this.maxAmount = 1000;
        this.minAmount = 0;
        this.price = { lower: 0, upper: this.maxAmount };
        this.side = "right";
        this.productView = 'grid';
        this.filterOnSale = false;
        this.filterFeatured = false;
        this.loadingServerData = true;
        this.type = "";
        this.listOfFilteredIdsFromCustom = [];
        //============================================================================================  
        // filling filter array for keyword search 
        this.fillFilterArray = function (value, option) {
            this.applyFilters();
        };
        if (shared.dir == "rtl")
            this.side = "left";
        if (this.navParams.get('id') != undefined)
            this.selectedTab = this.categoryId = this.navParams.get('id');
        if (this.navParams.get('name') != undefined)
            this.categoryName = this.navParams.get('name');
        if (this.navParams.get('type') != undefined)
            this.type = this.navParams.get('type');
        console.log(this.type);
        this.applicationRef.tick();
        this.getFilterdProducts();
    }
    ProductsPage.prototype.getFilterdProducts = function () {
        var _this = this;
        if (this.page == 1) {
            this.products = [];
            this.loading.show();
            this.loadingServerData = false;
        }
        var query = '&page=' + this.page;
        if (this.sortOrder == "Newest")
            query = query + "&order=desc&orderby=date";
        else if (this.sortOrder == "A - Z")
            query = query + "&order=asc&orderby=title";
        else if (this.sortOrder == "Z - A")
            query = query + "&order=desc&orderby=title";
        if (this.type == "featured" || this.filterFeatured) {
            query = query + "&featured=true";
            this.filterFeatured = true;
        }
        if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) {
            query = query + "&on_sale=true";
            this.filterOnSale = true;
        }
        if (this.price.lower != this.minAmount && this.applyFilter == true)
            query = query + "&min_price=" + this.price.lower;
        if (this.price.upper != this.maxAmount && this.applyFilter == true)
            query = query + "&max_price=" + this.price.upper;
        if (this.selectedTab != '')
            query = query + '&cat_id=' + this.selectedTab;
        query = query + '&page=' + this.page;
        query = query + this.queryAttributes;
        console.log("custom Id = " + query);
        this.getAllAttributes();
        this.http.get(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.data)
                _this.listOfFilteredIdsFromCustom = data.data;
            _this.applicationRef.tick();
            _this.getFilterdProductsFromWoo();
        });
    };
    ProductsPage.prototype.getFilterdProductsFromWoo = function () {
        var _this = this;
        if (this.listOfFilteredIdsFromCustom.length == 0) {
            this.infinite.enable(false);
            this.loadingServerData = true;
            this.loading.hide();
            return 0;
        }
        var q = 'products?include=' + this.listOfFilteredIdsFromCustom + "&status=publish";
        console.log(this.listOfFilteredIdsFromCustom);
        if (this.sortOrder == "Newest")
            q = q + "&order=desc&orderby=date";
        else if (this.sortOrder == "A - Z")
            q = q + "&order=asc&orderby=title";
        else if (this.sortOrder == "Z - A")
            q = q + "&order=desc&orderby=title";
        // if (this.type == "featured" || this.filterFeatured) { q = q + "&featured=true"; this.filterFeatured = true; }
        // if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { q = q + "&on_sale=true"; this.filterOnSale = true; }
        console.log(q);
        this.config.Woocommerce.getAsync(q).then(function (dat) {
            _this.loading.hide();
            var data = JSON.parse(dat.body);
            _this.infinite.complete();
            if (_this.page == 1) {
                _this.products = new Array;
                _this.scrollToTop();
                _this.infinite.enable(true);
            }
            if (data.length != 0) {
                _this.page++;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    _this.products.push(value);
                }
            }
            if (data.length == 0 || data.length < 10) {
                _this.infinite.enable(false);
            }
            _this.applicationRef.tick();
            _this.loadingServerData = true;
        });
    };
    ProductsPage.prototype.resetFilters = function () {
        this.reset();
    };
    ProductsPage.prototype.reset = function () {
        this.applyFilter = false;
        this.filterFeatured = false;
        this.type = "latest";
        this.sortOrder = "Newest";
        this.filterOnSale = false;
        this.page = 1;
        this.selectedAttributes = [];
        this.queryAttributes = "";
        this.getFilterdProducts();
    };
    //changing tab
    ProductsPage.prototype.changeTab = function (c) {
        if (c == '')
            this.selectedTab = c;
        else
            this.selectedTab = c.id;
        this.reset();
    };
    ProductsPage.prototype.applyFilters = function () {
        this.toggleMenu();
        //this.type = "latest";
        this.applyFilter = true;
        //this.infinite.enable(true);
        this.page = 1;
        //this.getProducts(null);
        this.getFilterdProducts();
    };
    ProductsPage.prototype.getSortProducts = function (value) {
        console.log(value);
        // if (value == this.sortOrder) return 0;
        // else {
        this.sortOrder = value;
        //this.infinite.enable(true);
        this.applyFilter = true;
        this.page = 1;
        this.type = "";
        this.getFilterdProducts();
        // }
    };
    ProductsPage.prototype.openSortBy = function () {
        var _this = this;
        var buttonArray = [];
        this.translate.get(this.sortArray).subscribe(function (res) {
            // console.log(res);
            var _loop_1 = function (key) {
                buttonArray.push({ text: res[key], handler: function () { _this.getSortProducts(key); } });
            };
            for (var key in res) {
                _loop_1(key);
            }
            _this.translate.get('Cancel').subscribe(function (res) {
                buttonArray.push({
                    text: res,
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                });
                var actionSheet = _this.actionSheet.create({
                    buttons: buttonArray
                });
                actionSheet.present();
            });
        });
    };
    ProductsPage.prototype.changeLayout = function () {
        if (this.productView == 'list')
            this.productView = "grid";
        else
            this.productView = "list";
        this.scrollToTop();
    };
    ProductsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    ProductsPage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    ProductsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
        // console.log("loaded");
        var _this = this;
        try {
            setTimeout(function () {
                var ind = 0;
                _this.shared.allCategories.forEach(function (value, index) {
                    if (_this.selectedTab == value.id) {
                        ind = index;
                        console.log("index to go " + ind);
                    }
                });
                //this.slides.slideTo(ind, 1000, true);
            }, 100);
        }
        catch (error) {
        }
    };
    ProductsPage.prototype.removeString = function (s) {
        //console.log(s.replace('pa_', ''));
        return s.replace('pa_', '');
    };
    //=======================================================================================
    ProductsPage.prototype.getAllAttributes = function () {
        var _this = this;
        // let cat = "&cat_id=" + this.selectedTab;
        // if (this.selectedTab == '') cat = '';
        var query = '';
        if (this.selectedTab != '')
            query = query + '&cat_id=' + this.selectedTab;
        query = query + this.queryAttributes;
        this.http.get(this.config.url + '/api/appsettings/ionic_get_attributes/?insecure=cool' + query).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.attributes) {
                _this.attributes = data.attributes;
            }
            else {
                _this.attributes = [];
            }
            if (_this.minAmount != data.min_price)
                _this.minAmount = data.min_price;
            if (_this.maxAmount != data.max_price)
                _this.maxAmount = data.max_price;
            if (_this.minAmount > _this.price.lower)
                _this.price.lower = _this.minAmount;
            if (_this.maxAmount < _this.price.upper)
                _this.price.upper = _this.maxAmount;
            if (_this.applyFilter == false) {
                _this.price.lower = _this.minAmount;
                _this.price.upper = _this.maxAmount;
            }
            _this.on_sale = data.on_sale;
            _this.featured = data.featured;
            _this.applicationRef.tick();
        });
    };
    //=======================================================================================
    ProductsPage.prototype.selectAttribute = function (a, v) {
        var _this = this;
        var found = false;
        this.selectedAttributes.forEach(function (x, index) {
            if (x.slug == a.attribute_slug) {
                found = true;
                if (v.value == false) {
                    x.list.forEach(function (y, ind) {
                        if (y == v.name) {
                            x.list.splice(ind, 1);
                        }
                    });
                }
                else {
                    var valueFound_1 = false;
                    x.list.forEach(function (y, ind) {
                        if (y == v.name) {
                            valueFound_1 = true;
                            x.list.splice(ind, 1);
                        }
                    });
                    if (valueFound_1 == false) {
                        x.list.push(v.name);
                    }
                }
            }
            if (x.list.length == 0) {
                _this.selectedAttributes.splice(index, 1);
            }
        });
        if (found == false)
            this.selectedAttributes.push({ slug: a.attribute_slug, list: [v.name] });
        console.log(this.selectedAttributes);
        this.applicationRef.tick();
        this.queryAttributes = "";
        for (var _i = 0, _a = this.selectedAttributes; _i < _a.length; _i++) {
            var x = _a[_i];
            this.queryAttributes = this.queryAttributes + "&" + x.slug + "=";
            for (var _b = 0, _c = x.list; _b < _c.length; _b++) {
                var y = _c[_b];
                this.queryAttributes = this.queryAttributes + y + ",";
            }
        }
        this.queryAttributes;
        console.log(this.queryAttributes);
        this.applyFilters();
    };
    //=======================================================================================
    ProductsPage.prototype.toggleMenu = function () {
        console.log("called toggle");
        if (this.config.appDirection == "ltr")
            this.menuCtrl.toggle("right");
        else
            this.menuCtrl.toggle("left");
    };
    //=======================================================================================
    ProductsPage.prototype.checkAttributeSelected = function (a, v) {
        var v1 = this.queryAttributes.indexOf(a.attribute_slug);
        var v2 = this.queryAttributes.indexOf(v.name);
        if (v1 != -1 && v2 != -1) {
            v.value = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ProductsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], ProductsPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], ProductsPage.prototype, "infinite", void 0);
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\products\products.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Shop\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <!-- <ion-toolbar class="toolbar-secondary">\n\n    <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n\n      <ion-slide [class.selected]="selectedTab==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">{{\'All\'|translate}}</ion-slide>\n\n\n\n      <ion-slide [class.selected]="selectedTab==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n\n        {{c.name}}\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-toolbar> -->\n\n</ion-header>\n\n\n\n\n\n<ion-content class="page-products" (ionScroll)="onScroll($event)">\n\n\n\n  <ion-grid *ngIf="productView==\'grid\'">\n\n    <ion-col *ngFor="let p of products" col-6>\n\n      <product [data]="p" [type]="\'normal\'"></product>\n\n    </ion-col>\n\n  </ion-grid>\n\n\n\n  <ion-list class="list-view" *ngIf="productView==\'list\'">\n\n    <span *ngFor="let p of products">\n\n      <product [data]="p" [type]="\'list\'"></product>\n\n    </span>\n\n  </ion-list>\n\n  <ion-col *ngIf="products.length==0 && loadingServerData" col-12 class="animated fadeIn">\n\n    <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n\n  </ion-col>\n\n\n\n  <ion-infinite-scroll #infinite (ionInfinite)="getFilterdProducts()">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n  <ion-fab bottom right *ngIf="scrollTopButton">\n\n    <button ion-fab (click)="scrollToTop()">\n\n      <ion-icon name="arrow-round-up"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="light">\n\n    <ion-buttons left>\n\n<small>Sort by\n\n</small>\n\n\n\n      <button small ion-button clear color="secondary" (click)="openSortBy()">\n\n      {{sortOrder| translate}}\n\n  <ion-icon name="arrow-up"></ion-icon>\n\n</button>\n\n    </ion-buttons>\n\n\n\n    <ion-buttons right>\n\n      <!-- <button ion-button icon-only (click)="changeLayout()">\n\n        <ion-icon name="list" [name]="productView==\'grid\'? \'list\' : \'apps\'"></ion-icon>\n\n      </button> -->\n\n      <button ion-button icon-only (click)="resetFilters()" *ngIf="applyFilter">\n\n        <ion-icon name="refresh" ></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<ion-menu [content]="content" side="{{side}}" id="menu2">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>{{"Filters"|translate}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content class="side-menu">\n\n    <h3 style="margin-bottom:0;">{{\'By Price\'| translate}}</h3>\n\n    <ion-item dir="ltr">\n\n      <ion-range dualKnobs="true" pin="true" (ionBlur)="applyFilters()" [(ngModel)]="price" [min]="minAmount" [max]="maxAmount">\n\n        <ion-label range-left>{{price.lower}}</ion-label>\n\n        <ion-label range-right>{{price.upper}}</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <div *ngIf="on_sale==\'True\' || featured==\'True\'">\n\n      <ion-list>\n\n        <h3>{{\'By Sale/Featured\'| translate}}</h3>\n\n        <ion-item *ngIf="on_sale==\'True\'">\n\n          <ion-label>{{\'Sale\'| translate}}</ion-label>\n\n          <ion-checkbox [(ngModel)]="filterOnSale" (click)="fillFilterArray($event,\'sale\')"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item *ngIf="featured==\'True\'">\n\n          <ion-label>{{\'Featured\'| translate}}</ion-label>\n\n          <ion-checkbox [(ngModel)]="filterFeatured" (click)="fillFilterArray($event,\'featured\')"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngIf="attributes.length!=0;">\n\n      <!-- <h3>{{\'Filter by attributes\'| translate}}</h3> -->\n\n      <ion-list>\n\n        <div *ngFor="let a of attributes">\n\n          <h3 class="capital">{{"By "+a.attribute_name}}</h3>\n\n          <ion-item *ngFor="let v of a.attribute_terms" >\n\n            <ion-label>{{v.name}}</ion-label>\n\n            <ion-checkbox [(ngModel)]="v.value" [checked]="checkAttributeSelected(a,v)" (ionChange)="selectAttribute(a,v)"></ion-checkbox>\n\n          </ion-item>\n\n        </div>\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>'/*ion-inline-end:"C:\Softwares\Code\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__term_services_term_services__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var SignUpPage = (function () {
    function SignUpPage(http, config, viewCtrl, modalCtrl, loading, shared, platform) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.formData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            username: '',
            wpgdprc: 1,
            register: 'Register',
            nonce: "",
        };
        this.sellerPhone = "";
        this.errorMessage = '';
        this.shared.currentOpenedModel = this;
    }
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        // this.config.Woocommerce.postAsync("customers", this.formData).then((data) => {
        //   this.loading.hide();
        //   let dat = JSON.parse(data.body);
        //   console.log(dat);
        //   if (dat.message == undefined) {
        //     //this.shared.login(dat);
        //     this.shared.toast("User Created");
        //     this.viewCtrl.dismiss();
        //   }
        //   if (dat.message != undefined)
        //     this.errorMessage = dat.message;
        // });
        this.http.get(this.config.url + '/api/appusers/register/?username=' + this.formData.username + '&password=' + this.formData.password + '&email=' + this.formData.email
            + '&nick_name=' + this.formData.first_name + ' ' + this.formData.last_name + '&nonce=' + this.formData.nonce
            + '&first_name=' + this.formData.first_name + '&last_name=' + this.formData.last_name + '&display_name=' + this.formData.first_name + ' '
            + this.formData.last_name + '&phone=' + this.sellerPhone).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.status == "ok") {
                _this.shared.toast("User Created. Login Using your Username & Password");
                _this.viewCtrl.dismiss();
            }
            else {
                _this.errorMessage = data.error;
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                console.log(err);
                var result = JSON.parse(err._body);
                _this.errorMessage = result.error;
            }
        });
    };
    SignUpPage.prototype.openPrivacyPolicyPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SignUpPage.prototype.openTermServicesPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__term_services_term_services__["a" /* TermServicesPage */]);
        modal.present();
    };
    SignUpPage.prototype.openRefundPolicyPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
        modal.present();
    };
    SignUpPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //https://www.fashaish.com/Supply/api/get_nonce/?controller=AppUsers&method=register
        this.loading.show();
        this.http.get(this.config.url + '/api/get_nonce/?controller=AppUsers&method=register').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            var res = data;
            _this.formData.nonce = res.nonce;
            console.log(res);
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sign-up\sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Create an Account\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-sign-up" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="assets/avatar.png" *ngIf="image==null">\n          <img class="avatar" src="{{image}}" *ngIf="image!=null">\n        </div>\n        <!-- <div class="upload">\n          <ion-icon name="camera" (click)=\'openCamera()\'></ion-icon>\n        </div> -->\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="signUp()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" name="customers_firstname" [(ngModel)]="formData.first_name"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" name="customers_lastname" [(ngModel)]="formData.last_name"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Username\'|translate}}" name="username" [(ngModel)]="formData.username" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="email" email placeholder="{{\'Email\'|translate}}" name="customers_email_address" [(ngModel)]="formData.email"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Password\'|translate}}" name="customers_password" [(ngModel)]="formData.password"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="tel" placeholder="{{\'Phone Number\'|translate}}" name="customers_password" [(ngModel)]="sellerPhone"\n              required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label class="red-color" *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage|translate}}</span>\n        </label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{"Creating an account means you’re okay with our"|translate}}\n          <a (click)="openTermServicesPage()">{{\'Term and Services\'|translate}}</a>,\n          <a (click)="openPrivacyPolicyPage()">{{\'Privacy Policy\'|translate}}</a> {{\'and\'|translate}}\n          <a (click)="openRefundPolicyPage()">{{\'Refund Policy\'|translate}}</a>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{\'Register\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SelectCountryPage = (function () {
    function SelectCountryPage(navCtrl, navParams, http, events, config, viewCtrl, modalCtrl, loading, shared, location) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.countries = new Array;
        this.items = this.countries = this.location.data.countries;
        setTimeout(function () { _this.searchBar.setFocus(); }, 250);
    }
    SelectCountryPage.prototype.initializeItems = function () {
        this.items = this.countries;
    };
    SelectCountryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectCountryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectCountryPage.prototype.selectCountry = function (c) {
        var page = this.navParams.get('page');
        this.events.publish("countryChange", page, c);
        if (page == 'shipping') {
            this.shared.shippingCountryName = c.name;
            this.shared.shipping.country = c.value;
            this.shared.shipping.state = null;
            this.shared.shipping.city = null;
            this.shared.shipping.postcode = null;
            this.shared.shippingStateName = "";
        }
        else if (page == 'billing') {
            this.shared.billingCountryName = c.name;
            this.shared.billing.country = c.value;
            this.shared.billing.state = null;
            this.shared.billing.city = null;
            this.shared.billing.postcode = null;
            this.shared.billingStateName = "";
        }
        this.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('Searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Searchbar */])
    ], SelectCountryPage.prototype, "searchBar", void 0);
    SelectCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-country',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\select-country\select-country.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Select Country\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-country">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" #Searchbar></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectCountry(item)">\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\select-country\select-country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], SelectCountryPage);
    return SelectCountryPage;
}());

//# sourceMappingURL=select-country.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectZonesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SelectZonesPage = (function () {
    function SelectZonesPage(navCtrl, navParams, http, events, config, viewCtrl, modalCtrl, loading, shared, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.zones = new Array;
        var page = this.navParams.get('page');
        var id = this.navParams.get('id');
        if (page == 'shipping')
            this.items = this.zones = this.location.data.states[this.shared.shipping.country];
        else
            this.items = this.zones = this.location.data.states[this.shared.billing.country];
        if (page == 'shippingUpdate' || page == 'billingUpdate') {
            console.log(id);
            this.items = this.zones = this.location.data.states[id];
            console.log(this.items);
        }
    }
    SelectZonesPage.prototype.initializeItems = function () {
        this.items = this.zones;
    };
    SelectZonesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectZonesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectZonesPage.prototype.selectZone = function (c) {
        var page = this.navParams.get('page');
        this.events.publish("stateChange", page, c);
        if (page == 'shipping') {
            if (c == 'other') {
                this.shared.shipping.state = 'other';
                this.shared.shippingStateName = "other";
            }
            else {
                this.shared.shipping.state = c.value;
                this.shared.shippingStateName = c.name;
                // this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
        }
        else {
            if (c == 'other') {
                this.shared.billing.state = 'other';
                this.shared.billingStateName = "other";
            }
            else {
                this.shared.billing.state = c.value;
                this.shared.billingStateName = c.name;
            }
        }
        this.dismiss();
    };
    SelectZonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-zones',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\select-zones\select-zones.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Select Zone\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-zones">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" autofocus></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectZone(item)">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)="selectZone(\'other\')">\n      {{\'other\'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\select-zones\select-zones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], SelectZonesPage);
    return SelectZonesPage;
}());

//# sourceMappingURL=select-zones.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_coupon_coupon__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, http, config, shared, loading, alert, spinnerDialog, couponProvider, translate, actionSheetCtrl, iab, applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.alert = alert;
        this.spinnerDialog = spinnerDialog;
        this.couponProvider = couponProvider;
        this.translate = translate;
        this.actionSheetCtrl = actionSheetCtrl;
        this.iab = iab;
        this.applicationRef = applicationRef;
        this.discount = 0;
        this.productsTotal = 0;
        this.totalAmountWithDisocunt = 0;
        this.paymentMethods = [];
        this.selectedPaymentMethod = '';
        this.selectedPaymentMethodTitle = '';
        this.order = {};
        this.tax = 0;
        this.loaderTaxCalculating = true;
        this.loaderPaymentMethods = true;
        //============================================================================================  
        //placing order
        this.addOrder = function (nonce) {
            var customer_id = 0;
            if (this.shared.customerData.id != null)
                customer_id = this.shared.customerData.id;
            var token = null;
            if (this.shared.customerData.cookie != null)
                token = this.shared.customerData.cookie;
            var onePage = this.config.checkOutPage;
            //this.loading.auto();
            var data = {
                token: token,
                payment_method: this.selectedPaymentMethod,
                payment_method_title: this.selectedPaymentMethodTitle,
                billing_info: this.shared.billing,
                shipping_info: this.shared.shipping,
                products: this.getProducts(),
                shipping_ids: this.shared.shipping_lines,
                coupons: this.getCoupons(),
                customer_note: this.customerNotes,
                customer_id: customer_id,
                one_page: onePage,
                platform: this.shared.device,
            };
            console.log(this.shared.customerData);
            this.shared.openCheckoutWebview(data);
        };
        //============================================================================================  
        //CAlculate Discount total
        this.calculateDiscount = function () {
            var total = 0;
            for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total = total + parseFloat(value.subtotal);
            }
            this.productsTotal = total;
            this.discount = parseFloat(this.shared.productsTotal()) - total;
        };
        //============================================================================================  
        //CAlculate all total
        this.calculateTotal = function () {
            this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
        };
        this.order = {
            token: this.shared.customerData.cookie,
            payment_method: this.selectedPaymentMethod,
            payment_method_title: this.selectedPaymentMethodTitle,
            billing: this.shared.billing,
            shipping: this.shared.shipping,
            line_items: this.shared.cartProducts,
            shipping_lines: this.shared.shipping_lines,
            coupon_lines: this.shared.couponArray,
            customer_note: this.customerNotes,
            customer_id: this.shared.customerData.id,
        };
        //this.productsTotal = this.shared.productsTotal();
        this.calculateDiscount();
        this.calculateTotal();
        // if (this.shared.shipping_lines[0].method_id != "local_pickup")
        this.calculateTax();
    }
    OrderPage.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //Object.assign(c, JSON.parse(data.body)
    OrderPage.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    OrderPage.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    OrderPage.prototype.selectPayment = function (p) {
        this.selectedPaymentMethod = p.id;
        this.selectedPaymentMethodTitle = p.title;
        this.scrollToBottom();
    };
    //========================================================================================
    OrderPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
            console.log("botton");
        }, 300);
    };
    OrderPage.prototype.ngOnInit = function () {
        //this.loading.show();
        var _this = this;
        this.config.Woocommerce.getAsync("payment_gateways").then(function (data) {
            _this.loaderPaymentMethods = false;
            _this.paymentMethods = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
    };
    OrderPage.prototype.openHomePage = function () {
        this.navCtrl.popToRoot();
    };
    OrderPage.prototype.calculateTax = function () {
        var _this = this;
        var data = {
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
        };
        this.http.get(this.config.url + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loaderTaxCalculating = false;
            var res = parseFloat(JSON.stringify(data));
            if (res) {
                console.log("tax " + res);
            }
            else {
                console.log("tax err " + res);
                res = 0;
            }
            _this.tax = res;
            _this.applicationRef.tick();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], OrderPage.prototype, "content", void 0);
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\order\order.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Order\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openHomePage()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+\', \'+order.shipping.city+\', \'+order.shipping.state+\'\n      \'+order.shipping.postcode+\',\'+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Seller Info\'| translate }}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.first_name+\', \'+order.billing.address_2+\', \'+order.billing.phone}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping_lines[0].method_title}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of order.line_items">\n      <ion-row>\n        <h3>{{product.name}}\n          <br>\n          <small *ngFor="let c of product.categories">{{c.name}}&nbsp;&nbsp;</small>\n        </h3>\n      </ion-row>\n      <ion-item>\n\n        <ion-thumbnail item-start>\n          <img src="{{product.image}}">\n        </ion-thumbnail>\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.price| curency}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>{{\'Quantity\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.quantity}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>{{\'Subtotal\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.subtotal| curency}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      {{\'SubTotal\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Products Price\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{productsTotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping Cost\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.shipping_lines[0].total|curency}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="shared.couponArray.length!=0">\n        <ion-col>\n          <strong>{{\'Coupons\'|translate}}</strong>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngFor="let coupon of shared.couponArray">\n        <ion-col col-6>\n          {{coupon.code}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{coupon.amount| curency}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Discount\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{discount| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right *ngIf="!loaderTaxCalculating">\n          {{tax| curency}}\n        </ion-col>\n        <ion-col col-6 text-right *ngIf="loaderTaxCalculating">\n          <ion-spinner></ion-spinner>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <strong>{{\'Total\'|translate}}</strong>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <strong>{{totalAmountWithDisocunt| curency}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-card *ngFor="let coupon of shared.couponArray">\n      <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Code\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.code}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            {{\'Coupon Amount\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n            {{coupon.amount}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card> -->\n  <ion-card>\n\n\n\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-input type="text" placeholder="{{\'Note to the buyer\'|translate}}" name="note" [(ngModel)]="customerNotes"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card text-center>\n    <ion-spinner *ngIf="loaderPaymentMethods"></ion-spinner>\n    <ion-card-content *ngIf="!loaderPaymentMethods">\n      <ion-list>\n        <ion-item>\n          <ion-label color="dark">{{\'Payment\'|translate}}</ion-label>\n          <ion-select [(ngModel)]="payment_method" (ionChange)=" selectPayment(payment_method)" okText="{{\'ok\'|translate}}"\n            cancelText="{{\'cancel\'|translate}}">\n            <span *ngFor="let p of paymentMethods">\n              <ion-option [value]="p" *ngIf="p.enabled">{{p.title}}</ion-option>\n            </span>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button block class="button-footer" color="secondary" (click)="addOrder()" *ngIf="selectedPaymentMethod!=\'\'">{{\'Continue\'|translate}}</button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_8__providers_coupon_coupon__["a" /* CouponProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/



var CouponProvider = (function () {
    function CouponProvider(shared, alert) {
        this.shared = shared;
        this.alert = alert;
        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All below services are used for coupon >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.lineItemTotalService = function (lineItems) {
            var total = 0;
            for (var _i = 0, lineItems_1 = lineItems; _i < lineItems_1.length; _i++) {
                var value = lineItems_1[_i];
                // console.log(value);
                var subtotal = parseFloat(value.total);
                total = total + subtotal;
            }
            return total;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkOnSaleService = function (lineItems, coupon) {
            if (coupon.exclude_sale_items == false)
                return false;
            var found = false;
            lineItems.some(function (value, index) {
                if (value.on_sale == true)
                    found = true;
            });
            if (found && coupon.discount_type == 'fixed_cart')
                return true;
            else if (found && coupon.discount_type == 'percent')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.emailCheckService = function (emailList) {
            if (emailList.length == 0)
                return false;
            var found = false;
            for (var _i = 0, emailList_1 = emailList; _i < emailList_1.length; _i++) {
                var value = emailList_1[_i];
                if (value == this.shared.customerData.email) {
                    found = true;
                    return true;
                }
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkCategoriesService = function (value, coupon) {
            // console.log(value);
            // console.log(coupon.product_categories);
            if (coupon.product_categories.length == 0 && coupon.excluded_product_categories.length == 0)
                return true;
            var found = 0;
            for (var _i = 0, _a = coupon.product_categories; _i < _a.length; _i++) {
                var y = _a[_i];
                for (var _b = 0, _c = value.categories; _b < _c.length; _b++) {
                    var z = _c[_b];
                    console.log("product_categories x = " + z.id + " y=" + y);
                    if (z.id == y) {
                        found++;
                    }
                }
            }
            if (coupon.product_categories.length == 0) {
                found++;
            }
            var found2 = 0;
            //for excluded categries
            for (var _d = 0, _e = coupon.excluded_product_categories; _d < _e.length; _d++) {
                var y = _e[_d];
                for (var _f = 0, _g = value.categories; _f < _g.length; _f++) {
                    var z = _g[_f];
                    console.log("excluded_product_categories x = " + z.id + " y=" + y);
                    if (z.id == y) {
                        found2++;
                    }
                }
            }
            //  console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.couponApplyOnProductService = function (value, coupon) {
            if (coupon.product_ids.length == 0 && coupon.excluded_product_ids.length == 0)
                return true;
            var id = value.product_id;
            var found = 0;
            //checking in allowed products
            for (var _i = 0, _a = coupon.product_ids; _i < _a.length; _i++) {
                var value_1 = _a[_i];
                //  console.log("id = " + id + "vid" + vId + " value =" + value);
                if (id == value_1) {
                    found++;
                    return true;
                }
            }
            if (coupon.product_ids.length == 0) {
                found++;
            }
            var found2 = 0;
            //checking in excluded products
            for (var _b = 0, _c = coupon.excluded_product_ids; _b < _c.length; _b++) {
                var value_2 = _c[_b];
                if (id == value_2) {
                    found2++;
                    return true;
                }
            }
            // console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0) {
                return true;
            }
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkAlreadyAppliedService = function (coupon, couponLines) {
            if (couponLines.length == 0)
                return false;
            var found = false;
            for (var _i = 0, couponLines_1 = couponLines; _i < couponLines_1.length; _i++) {
                var value = couponLines_1[_i];
                if (value.code == coupon.code)
                    found = true;
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkUserUsageService = function (coupon) {
            if (coupon.used_by.length == 0)
                return false;
            if (coupon.usage_limit == null && coupon.usage_limit_per_user == null)
                return false;
            if (coupon.usage_limit == null) { }
            else if (coupon.usage_count >= coupon.usage_limit)
                return true;
            //console.log($rootScope.customerData);
            var id = this.shared.customerData.customers_email_address;
            if (this.shared.customerData != null)
                var id2 = this.shared.customerData.customers_id;
            var count = 0;
            for (var _i = 0, _a = coupon.used_by; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value == id || value == id2)
                    count++;
            }
            if (count >= coupon.usage_limit_per_user)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check ==============================
        this.checkNoItemInCartService = function (lineItems, coupon) {
            var productIds = coupon.product_ids;
            var ExProductIds = coupon.excluded_product_ids;
            var pCategory = coupon.product_categories;
            var ExPCategory = coupon.excluded_product_categories;
            if (productIds.length == 0 && ExProductIds.length == 0 && pCategory.length == 0 && ExPCategory.length == 0)
                return true;
            // var pFound = 0;
            // var ExPfound = 0;
            var result = false;
            //checking in products ids
            if (productIds.length != 0) {
                for (var _i = 0, lineItems_2 = lineItems; _i < lineItems_2.length; _i++) {
                    var x = lineItems_2[_i];
                    var id = x.product_id;
                    var vId = -1;
                    if (x.variation_id != undefined)
                        vId = x.variation_id;
                    for (var _a = 0, productIds_1 = productIds; _a < productIds_1.length; _a++) {
                        var y = productIds_1[_a];
                        if (id == y || vId == y) {
                            result = true;
                        }
                    }
                }
            }
            else {
                result = true;
            }
            //checking in excluded products ids
            if (ExProductIds.length != 0) {
                for (var _b = 0, lineItems_3 = lineItems; _b < lineItems_3.length; _b++) {
                    var x = lineItems_3[_b];
                    var id_1 = x.product_id;
                    var vId_1 = -1;
                    if (x.variation_id != undefined)
                        vId_1 = x.variation_id;
                    for (var _c = 0, ExProductIds_1 = ExProductIds; _c < ExProductIds_1.length; _c++) {
                        var y = ExProductIds_1[_c];
                        if (id_1 == y || vId_1 == y) {
                            result = false;
                        }
                    }
                }
            }
            var result2 = false;
            //checking in products categories
            if (pCategory.length != 0) {
                for (var _d = 0, lineItems_4 = lineItems; _d < lineItems_4.length; _d++) {
                    var w = lineItems_4[_d];
                    for (var _e = 0, _f = w.categories; _e < _f.length; _e++) {
                        var x = _f[_e];
                        for (var _g = 0, pCategory_1 = pCategory; _g < pCategory_1.length; _g++) {
                            var y = pCategory_1[_g];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = true;
                            }
                        }
                    }
                }
            }
            else {
                result2 = true;
            }
            if (ExPCategory.length != 0) {
                for (var _h = 0, lineItems_5 = lineItems; _h < lineItems_5.length; _h++) {
                    var w = lineItems_5[_h];
                    for (var _j = 0, _k = w.categories; _j < _k.length; _j++) {
                        var x = _k[_j];
                        for (var _l = 0, pCategory_2 = pCategory; _l < pCategory_2.length; _l++) {
                            var y = pCategory_2[_l];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = false;
                            }
                        }
                    }
                }
            }
            //console.log("result " + result + " result2 " + result2);
            if (result == true && result2 == true && coupon.discount_type != 'fixed_cart')
                return true;
            else if (result == true && result2 == true && coupon.discount_type != 'percent')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'fixed_product')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'fixed_product')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check the validity of coupon  ==============================
        this.validateCouponService = function (coupon, lineItems, couponLines) {
            var expDate = new Date(coupon.date_expires);
            var todayDate = new Date();
            //checking coupon expire or not
            if (expDate <= todayDate && coupon.date_expires != null) {
                this.alert.show("Sorry Coupon is Expired");
                return false;
            }
            else if (this.lineItemTotalService(lineItems) <= coupon.minimum_amount) {
                this.alert.show("Sorry your Cart total is low than coupon min limit!");
                return false;
            }
            else if (this.lineItemTotalService(lineItems) >= coupon.maximum_amount && coupon.maximum_amount != 0) {
                this.alert.show("Sorry your Cart total is Higher than coupon Max limit!");
                return false;
            }
            else if (this.emailCheckService(coupon.email_restrictions) == true) {
                this.alert.show("Sorry, this coupon is not valid for this email address!");
                return false;
            }
            else if (this.checkOnSaleService(lineItems, coupon) == true) {
                this.alert.show("Sorry, this coupon is not valid for sale items.");
                return false;
            }
            else if (this.checkAlreadyAppliedService(coupon, couponLines) == true) {
                this.alert.show("Coupon code already applied!");
                return false;
            }
            else if (couponLines != 0 && couponLines[0].individual_use == true) {
                this.alert.show('Sorry Individual Use Coupon is already applied any other coupon cannot be applied with it !');
                return false;
            }
            else if (this.checkUserUsageService(coupon) == true) {
                this.alert.show('Coupon usage limit has been reached.');
                return false;
            }
            else if (this.checkCouponApplyOrNotOnCurrentProducts(coupon, lineItems) == false) {
                this.alert.show('Sorry Coupon Cannot be Applied on these Products!');
                return false;
            }
            else
                return true;
        };
        //========================================================================================================
        //=============================== service to apply check coupon ==============================
        this.apply = function (coupon, lineItems) {
            var _this = this;
            var productLimit = coupon.limit_usage_to_x_items;
            // if (productLimit == 0) productLimit = null;
            var product_qty_flag = 0;
            //fixed cart applying on line items
            if (coupon.discount_type == 'fixed_cart') {
                var cartTotal = parseFloat(this.lineItemTotalService(lineItems));
                var discount = parseFloat((coupon.amount / cartTotal).toString());
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var result = value.total - parseFloat((discount * value.total).toString());
                        if (result < 0)
                            result = 0;
                        value.total = result;
                        //console.log("insdir coupe== "+value.total);
                    }
                });
                //console.log('fixed_cart'); //console.log(lineItems);
                return lineItems;
            }
            else if (coupon.discount_type == 'percent_old') {
                lineItems.forEach(function (value, index) {
                    var amount = parseFloat(coupon.amount);
                    var subtotal = parseFloat(value.subtotal);
                    var total = parseFloat(value.total);
                    var discount = (subtotal / 100) * amount;
                    value.total = parseFloat((total - discount).toString());
                    if (value.total < 0)
                        value.total = 0;
                });
                // console.log('percent'); console.log(lineItems);
                return lineItems;
            }
            else if (coupon.discount_type == 'fixed_product') {
                var amount = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var quantity = value.quantity;
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= quantity; l++) {
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - amount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (amount * quantity)).toString());
                        }
                        if (value.total < 0) {
                            value.total = 0;
                        }
                    }
                });
                // console.log('fixed_product');
                return lineItems;
            }
            else if (coupon.discount_type == 'percent') {
                var amount_1 = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= value.quantity; l++) {
                                var discount = parseFloat(((value.price / 100) * amount_1).toString());
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - discount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (total / 100) * amount_1).toString());
                        }
                        if (value.total < 0)
                            value.total = 0;
                    }
                });
                //console.log('percent_product');
                return lineItems;
            }
            // else return lineItems;
        };
    }
    //========================================================================================================
    //=============================== service to check coupon will apply on cart or not  ==============================
    CouponProvider.prototype.checkCouponApplyOrNotOnCurrentProducts = function (coupon, lineItems) {
        console.log(coupon.product_categories.length);
        var found = 0;
        if (coupon.product_categories.length == 0) {
            found++;
        }
        for (var _i = 0, _a = coupon.product_categories; _i < _a.length; _i++) {
            var y = _a[_i];
            for (var _b = 0, _c = lineItems.categories; _b < _c.length; _b++) {
                var z = _c[_b];
                console.log("product_categories x = " + z.id + " y=" + y);
                if (z.id == y) {
                    found++;
                }
            }
        }
        var found2 = 0;
        //for excluded categries
        for (var _d = 0, _e = coupon.excluded_product_categories; _d < _e.length; _d++) {
            var y = _e[_d];
            for (var _f = 0, _g = lineItems.categories; _f < _g.length; _f++) {
                var z = _g[_f];
                console.log("excluded_product_categories x = " + z.id + " y=" + y);
                if (z.id == y) {
                    found2++;
                }
            }
        }
        if (found2 != 0)
            return false;
        else if (found == 0)
            return false;
        else
            return true;
    };
    CouponProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertProvider */]])
    ], CouponProvider);
    return CouponProvider;
}());

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories6Page = (function () {
    function SubCategories6Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories6Page_1 = SubCategories6Page;
    SubCategories6Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories6Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories6Page_1, { 'parent': id });
    };
    SubCategories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories6Page = SubCategories6Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories6\sub-categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="page-sub-categories6" text-center>\n  <ion-card *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n    <img *ngIf="c.image" src="{{c.image.src}}" />\n    <div class="categories-title">{{c.name}}</div>\n    \n  </ion-card>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n</button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories6\sub-categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories6Page);
    return SubCategories6Page;
    var SubCategories6Page_1;
}());

//# sourceMappingURL=sub-categories6.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategoriesPage = (function () {
    function SubCategoriesPage(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategoriesPage_1 = SubCategoriesPage;
    SubCategoriesPage.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategoriesPage_1, { 'parent': id });
    };
    SubCategoriesPage.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategoriesPage = SubCategoriesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories\sub-categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Sub Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content text-center>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n      	\n          <ion-card >\n          	<div class="category-icon"><img *ngIf="c.image" src="{{c.image.src}}" /></div>\n            <div class="cateogry-content">\n                <div class="categories-title">{{c.name}}</div>\n                \n            </div>\n\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n</button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories\sub-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategoriesPage);
    return SubCategoriesPage;
    var SubCategoriesPage_1;
}());

//# sourceMappingURL=sub-categories.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var ContactUsPage = (function () {
    function ContactUsPage(http, config, loading, shared, navCtrl, alert, callNumber, socialSharing, navParams) {
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.callNumber = callNumber;
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.errorMessage = '';
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
    };
    ContactUsPage.prototype.call = function () {
        this.callNumber.callNumber(this.config.phoneNo, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactUsPage.prototype.whatsapp = function () {
        var _this = this;
        this.socialSharing.canShareVia("com.whatsapp").then(function () {
            _this.socialSharing.shareViaWhatsAppToReceiver(_this.config.phoneNo, "Hello", "", "");
        }).catch(function (err) { return _this.shared.toast("Whatsapp in not Available"); });
    };
    ContactUsPage.prototype.email = function () {
        this.socialSharing.shareViaEmail("", "Hello Support", this.config.email).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    ContactUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ContactUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\contact-us\contact-us.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Contact Us\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="page-contact-us">\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-label>Feel free to contact us on below mentioned details for any query related to orders.\n\n\n\n        Support time is 10Am to 7Pm (Monday to Saturday) </ion-label>\n\n      <ion-list>\n\n        <ion-item (click)="call()">\n\n          <ion-icon name="call" item-start></ion-icon>\n\n          {{config.phoneNo}}\n\n          <ion-icon name="md-arrow-round-forward" item-end></ion-icon>\n\n        </ion-item>\n\n        <ion-item (click)="whatsapp()">\n\n          <ion-icon name="logo-whatsapp" item-start></ion-icon>\n\n          {{config.phoneNo}}\n\n          <ion-icon name="md-arrow-round-forward" item-end></ion-icon>\n\n        </ion-item>\n\n        <ion-item (click)="email()">\n\n          <ion-icon name="mail" item-start></ion-icon>\n\n          {{config.email}}\n\n          <ion-icon name="md-arrow-round-forward" item-end></ion-icon>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  \n\n\n\n</ion-content>\n\n\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    CategoriesPage.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent) {
                count++;
                //console.log(val.parent + "   " + parent);
            }
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'parent': parent });
    };
    CategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    CategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    CategoriesPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories\categories.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Categories\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n\n        <ion-card>\n\n        	\n\n            <div class="category-icon"><img *ngIf="c.image" src="{{c.image.src}}" /></div>\n\n            <div class="cateogry-content">\n\n                <div class="categories-title">{{c.name}}</div>\n\n            </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var MyAccountPage = (function () {
    function MyAccountPage(http, config, shared, translate, platform, navCtrl, alert, applicationRef, loading) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.translate = translate;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.applicationRef = applicationRef;
        this.loading = loading;
        this.myAccountData = {};
        this.password = '';
        //============================================================================================  
        //function updating user information
        this.updateInfo = function () {
            var _this = this;
            this.loading.show();
            if (this.password != '')
                this.myAccountData.password = this.password;
            this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, this.myAccountData).then(function (data) {
                _this.loading.hide();
                _this.shared.login(JSON.parse(data.body));
                _this.applicationRef.tick();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__settings_settings__["a" /* SettingsPage */]);
                _this.shared.toast("Data Updated!");
            }, function (err) { _this.shared.toast("Error Updating Data!"); });
        };
    }
    MyAccountPage.prototype.ionViewWillEnter = function () {
        this.myAccountData.first_name = this.shared.customerData.first_name;
        this.myAccountData.last_name = this.shared.customerData.last_name;
    };
    MyAccountPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    MyAccountPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\my-account\my-account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Edit Profile\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-my-account" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="{{shared.customerData.avatar_url}}">\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #userForm="ngForm" (ngSubmit)="updateInfo()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" [(ngModel)]="myAccountData.first_name" name="customers_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" [(ngModel)]="myAccountData.last_name" name="customers_lastname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'New Password\'|translate}}" [(ngModel)]="password" name="password"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!userForm.form.valid">{{\'Update\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <!-- <form #passwordForm="ngForm" (ngSubmit)="updatePassword()">\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Current Password\'|translate}}" [(ngModel)]="passwordData.currentPassword" name="currentPassword"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder=" {{\'New Password\'|translate}}" [(ngModel)]="passwordData.customers_password" name="customers_password"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!passwordForm.form.valid">{{\'Change Password\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form> -->\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\my-account\my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__term_services_term_services__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__refund_policy_refund_policy__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_account_my_account__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__ = __webpack_require__(227);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, modalCtrl, config, storage, loading, http, localNotifications, events, shared, iab, socialSharing, plt, appVersion, oneSignal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.localNotifications = localNotifications;
        this.events = events;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.setting = {};
    }
    SettingsPage.prototype.turnOnOffNotification = function (value) {
        if (this.setting.localNotification == false) {
            this.localNotifications.cancel(1).then(function (result) {
            });
        }
        else {
            this.localNotifications.schedule({
                id: 1,
                title: this.config.notifTitle,
                text: this.config.notifText,
                every: this.config.notifDuration,
            });
        }
        this.updateSetting();
    };
    SettingsPage.prototype.updateSetting = function () {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    };
    SettingsPage.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    SettingsPage.prototype.logOut = function () {
        this.shared.logOut();
    };
    SettingsPage.prototype.openPage = function (page) {
        if (page == 'myAccount')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__my_account_my_account__["a" /* MyAccountPage */]);
    };
    SettingsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    //============================================================================================
    //turning on off local  notification
    SettingsPage.prototype.onOffPushNotification = function (value) {
        if (value == false) {
            this.oneSignal.setSubscription(false);
        }
        else {
            this.oneSignal.setSubscription(true);
        }
        this.updateSetting();
    };
    ;
    SettingsPage.prototype.hideShowFooterMenu = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.hideShowCartButton = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.showModal = function (value) {
        this.loading.autoHide(1000);
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('setting').then(function (val) {
            if (val != null || val != undefined) {
                _this.setting = val;
            }
            else {
                _this.setting.localNotification = true;
                _this.setting.notification = true;
                _this.setting.cartButton = true;
                _this.setting.footer = true;
            }
        });
    };
    SettingsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__cart_cart__["a" /* CartPage */]);
    };
    SettingsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__search_search__["a" /* SearchPage */]);
    };
    SettingsPage.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    SettingsPage.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share(_this.config.appName, _this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    SettingsPage.prototype.showAd = function () {
        this.loading.autoHide(2000);
        this.events.publish('showAd');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Settings\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-settings">\n\n  <ion-list class="list-avatar" padding>\n    <ion-item text-center *ngIf="shared.customerData.id==null" (click)="openLoginPage()">\n      <ion-avatar>\n        <ion-icon name="contact"></ion-icon>\n      </ion-avatar>\n      <h2>{{ \'Login & Register\' | translate }}</h2>\n      <p>{{ \'Please login or create an account for free\' | translate }}</p>\n    </ion-item>\n\n    <ion-item text-center *ngIf="shared.customerData.id!=null">\n      <ion-avatar>\n        <img src="{{shared.customerData.avatar_url}}">\n      </ion-avatar>\n      <h2>{{shared.customerData.first_name +"&nbsp;"+shared.customerData.last_name}}</h2>\n      <p>{{shared.customerData.email}}</p>\n      <button ion-button color="light" (click)="openPage(\'myAccount\')">\n        {{\'Edit Profile\' | translate }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list padding>\n    <ion-item>\n      <ion-label>{{"Turn on/off Local Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.localNotification" (ionChange)="turnOnOffNotification()"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{"Turn on/off Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.notification" (ionChange)="onOffPushNotification(setting.notification)"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list padding>\n    <button ion-item (click)="openSite()">\n      {{"Official Website"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="showModal(\'privacyPolicy\')">\n      {{"Privacy Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n    <button ion-item (click)="showModal(\'refundPolicy\')">\n      {{"Refund Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n    <button ion-item (click)="showModal(\'termServices\')">\n      {{"Term and Services"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="rateUs()">\n      {{"Rate Us"|translate}}\n      <ion-icon showWhen="android" name="star-half" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="share()">\n      {{"Share"|translate}}\n      <ion-icon showWhen="android" name="share" item-end></ion-icon>\n    </button>\n    <!-- <button ion-item *ngIf="config.admob == 1" (click)="showAd()">\n      {{"Show Interstitial Ad"|translate}}\n      <ion-icon showWhen="android" name="easel" item-end></ion-icon>\n    </button> -->\n  </ion-list>\n  <ion-list *ngIf="shared.customerData.id!=null" padding>\n    <button ion-button block color="secondary" (click)="logOut()">\n      {{\'Log Out\' | translate }}\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__["a" /* OneSignal */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/



var NewsDetailPage = (function () {
    function NewsDetailPage(navCtrl, navParams, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.post = this.navParams.get('post');
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\news-detail\news-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Announcement Details\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-news-detail">\n\n  <ion-card>\n\n    <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n    <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        <h2>{{post.title.rendered}}\n\n        <br>\n\n        <small>\n\n         <ion-icon name="clock"></ion-icon>{{post.date}}</small></h2>\n\n      </ion-card-title>\n\n      <div class="post-description" [innerHTML]="post.content.rendered"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\news-detail\news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var Categories2Page = (function () {
    function Categories2Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories2Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__["a" /* SubCategories2Page */], { 'parent': parent });
    };
    Categories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories2Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories2\categories2.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories2">\n\n\n\n  <ion-list>\n    <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n      <ion-thumbnail item-start>\n        <img *ngIf="c.image" src="{{c.image.src}}">\n      </ion-thumbnail>\n      \n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories2\categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories2Page);
    return Categories2Page;
}());

//# sourceMappingURL=categories2.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var Categories4Page = (function () {
    function Categories4Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories4Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__["a" /* SubCategories4Page */], { 'parent': parent });
    };
    Categories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories4\categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-categories4">\n      <ion-grid>\n          <ion-row>\n            <ion-col col-6  *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n                <ion-card>\n                  <img *ngIf="c.image" src="{{c.image.src}}"/>\n                  <div class="categories-title">{{c.name}}</div>\n                 \n                </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n    \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories4\categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories4Page);
    return Categories4Page;
}());

//# sourceMappingURL=categories4.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories5Page = (function () {
    function Categories5Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories5Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    Categories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories5Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories5',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories5\categories5.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-categories5">\n\n\n  <ion-list *ngFor="let c of shared.categories" class="animated fadeIn">\n    <ion-list-header (click)="openProducts(c.id,c.name)">\n      {{c.name}}\n   \n      <ion-avatar item-end>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-avatar>\n \n    </ion-list-header>\n    \n    <div *ngFor="let s of shared.subCategories">\n      <ion-item *ngIf="c.id==s.parent" (click)="openProducts(s.id,s.name)">\n        <h2>{{s.name}}\n          <br>\n          <small>{{s.count}} {{\'Products\'| translate }}</small>\n        </h2>\n        <ion-avatar item-end>\n          <img *ngIf="c.image" src="{{s.image.src}}">\n        </ion-avatar>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories5\categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories5Page);
    return Categories5Page;
}());

//# sourceMappingURL=categories5.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var Categories3Page = (function () {
    function Categories3Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories3Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
            console.log(val.parent + "   " + parent);
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__["a" /* SubCategories3Page */], { 'parent': parent });
    };
    Categories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories3Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories3\categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  \n  <ion-content class="page-categories3">\n      <ion-list>\n          <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n            <ion-avatar item-start>\n              <img *ngIf="c.image"  src="{{c.image.src}}">\n            </ion-avatar>\n           \n          </ion-item>\n        </ion-list>\n      \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories3\categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories3Page);
    return Categories3Page;
}());

//# sourceMappingURL=categories3.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var Categories6Page = (function () {
    function Categories6Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories6Page.prototype.openSubCategories = function (parent) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == parent)
                count++;
        }
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */], { id: parent, name: "", sortOrder: 'newest' });
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__["a" /* SubCategories6Page */], { 'parent': parent });
    };
    Categories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\categories6\categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories6">\n\n  <ion-card *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n    <img *ngIf="c.image" src="{{c.image.src}}" />\n    <div class="categories-title">{{c.name}}</div>\n   \n  </ion-card>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\categories6\categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories6Page);
    return Categories6Page;
}());

//# sourceMappingURL=categories6.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the TrackordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackordersPage = (function () {
    function TrackordersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackordersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackordersPage');
    };
    TrackordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trackorders',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\trackorders\trackorders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons style="visibility: hidden" end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary"></ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <iframe src="https://fashaish.shiprocket.co/"></iframe> \n</ion-content>\n'/*ion-inline-end:"C:\Softwares\Code\src\pages\trackorders\trackorders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], TrackordersPage);
    return TrackordersPage;
}());

//# sourceMappingURL=trackorders.js.map

/***/ }),

/***/ 261:
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
webpackEmptyAsyncContext.id = 261;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/trackorders/trackorders.module": [
		815,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 304;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertProvider = (function () {
    function AlertProvider(alertCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.okText = "ok";
        this.alertText = "Alert";
    }
    AlertProvider.prototype.show = function (text) {
        var _this = this;
        this.translate.get([text, "ok", "Alert"]).subscribe(function (res) {
            var alert = _this.alertCtrl.create({
                title: res["Alert"],
                subTitle: res[text],
                buttons: [res["ok"]]
            });
            alert.present();
        });
    };
    AlertProvider.prototype.showWithTitle = function (text, title) {
        var _this = this;
        this.translate.get([text, "ok", title]).subscribe(function (res) {
            var alert = _this.alertCtrl.create({
                title: res[title],
                subTitle: res[text],
                buttons: [res["ok"]]
            });
            alert.present();
        });
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, viewCtrl, loading, http, config, alert, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.http = http;
        this.config = config;
        this.alert = alert;
        this.navParams = navParams;
        this.formData = {
            customers_email_address: '',
        };
        this.errorMessage = '';
    }
    ForgotPasswordPage.prototype.forgetPassword = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.http.get(this.config.url + '/api/appusers/forgot_password/?insecure=cool&email=' + this.formData.customers_email_address).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            console.log(data);
            _this.alert.show(data);
            _this.dismiss();
        }, function (error) {
            _this.loading.hide();
            _this.errorMessage = "The Email not Valid exist";
        });
    };
    ForgotPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title>{{\'Forgot Password\'|translate}}</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="page-forgot-password" padding>\n  <ion-row class="grid-t">\n    <ion-col>\n      <div class="logo">\n        <img class="image" src="assets/icons_stripe.svg"/>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="forgetPassword()">\n    <ion-row class="grid-b">\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="email" email placeholder="{{\'Email\'|translate}}" name="customers_email_address" [(ngModel)]="formData.customers_email_address"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n          <label class="red-color" *ngIf="errorMessage!=\'\'">\n            <span>{{errorMessage}}</span>\n          </label>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{\'Send\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_country_select_country__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_location_data_location_data__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/










var ShippingAddressPage = (function () {
    function ShippingAddressPage(navCtrl, navParams, config, http, shared, modalCtrl, loading, applicationRef, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.location = location;
        console.log(this.shared.customerData);
        if (this.shared.customerData.id != null) {
            this.shared.shipping = this.shared.customerData.shipping;
            this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
        }
    }
    ShippingAddressPage.prototype.submit = function () {
        console.log(this.shared.billing);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__["a" /* BillingAddressPage */]);
    };
    ShippingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__select_country_select_country__["a" /* SelectCountryPage */], { page: 'shipping' });
        modal.present();
    };
    ShippingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'shipping' });
        modal.present();
    };
    ShippingAddressPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.refreshPage();
        }, 500);
    };
    ShippingAddressPage.prototype.refreshPage = function () {
        this.applicationRef.tick();
    };
    ShippingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-address',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\shipping-address\shipping-address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'shipping Address\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-horizontal (click)="refreshPage()">\n\n  <form #loginForm="ngForm">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_firstname" [(ngModel)]="shared.shipping.first_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_lastname" [(ngModel)]="shared.shipping.last_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="shared.shipping.address_1" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="shared.shipping.address_2"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_country" (tap)="selectCountryPage()" [readonly]="true"\n\n              [(ngModel)]="shared.shippingCountryName" required></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" required name="shipping_zone" (tap)="selectZonePage()" [readonly]="true"\n\n              [(ngModel)]="shared.shippingStateName"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_city" [(ngModel)]="shared.shipping.city" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="shipping_postcode" [(ngModel)]="shared.shipping.postcode"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Phone No\'|translate}}</ion-label>\n\n            <ion-input type="tel" placeholder="" name="shipping_phone" [(ngModel)]="shared.shipping.phone" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Email\'|translate}}</ion-label>\n\n            <ion-input type="email" placeholder="" name="shipping_phone" [(ngModel)]="shared.shipping.email"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <label *ngIf="errorMessage!=\'\'">\n\n          <span>{{errorMessage}}</span>\n\n        </label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="!loginForm.form.valid">{{\'Next\'|translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\shipping-address\shipping-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_9__providers_location_data_location_data__["a" /* LocationDataProvider */]])
    ], ShippingAddressPage);
    return ShippingAddressPage;
}());

//# sourceMappingURL=shipping-address.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_location_data_location_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var BillingAddressPage = (function () {
    function BillingAddressPage(navParams, config, 
        //public http: Http,
        shared, modalCtrl, navCtrl, location, applicationRef) {
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.location = location;
        this.applicationRef = applicationRef;
        this.defaultAddress = false;
        this.name = "";
        this.phone = "";
        this.price = "";
    }
    BillingAddressPage.prototype.submit = function () {
        //this.shared.shipping.address_2 = "Name : " + this.name + ", Price : " + this.price + ", Phone : " + this.phone;
        // this.navCtrl.push(ShippingMethodPage);
        // this.applicationRef.tick();
        if (this.config.checkOutPage == 2)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_order__["a" /* OrderPage */]);
        else
            this.openOrderPage();
    };
    //=====================================================================================================================
    BillingAddressPage.prototype.openOrderPage = function () {
        var customer_id = 0; // <!-- 2.0 updates -->
        if (this.shared.customerData.id != null)
            customer_id = this.shared.customerData.id; // <!-- 2.0 updates -->
        var token = null; // <!-- 2.0 updates -->
        if (this.shared.customerData.cookie != null)
            token = this.shared.customerData.cookie; // <!-- 2.0 updates -->
        var onePage = this.config.checkOutPage;
        var data = {
            token: token,
            // payment_method: this.selectedPaymentMethod,
            // payment_method_title: this.selectedPaymentMethodTitle,
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            sameAddress: this.shared.sameAddress,
            one_page: onePage,
            platform: this.shared.device,
        };
        console.log(data);
        this.shared.openCheckoutWebview(data);
    };
    //=================================================================================================================================
    BillingAddressPage.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    BillingAddressPage.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    BillingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-billing-address',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\billing-address\billing-address.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Seller Info\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding-horizontal>\n\n\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <ion-list>\n\n        <form #loginForm="ngForm">\n\n          <ion-item>\n\n            <ion-label floating>{{\'Seller Name\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="" name="billing_firstname" [(ngModel)]="shared.billing.first_name"\n\n              required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{\'Selling Price\'|translate}}</ion-label>\n\n            <ion-input type="text" placeholder="Selling Price" name="address2" [(ngModel)]="shared.billing.address_2" required></ion-input>\n\n          </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>{{\'Seller Phone No\'|translate}}</ion-label>\n\n              <ion-input type="tel" placeholder="" name="billing_phone" [(ngModel)]="shared.billing.phone" required></ion-input>\n\n            </ion-item>\n\n        </form>\n\n        <ion-item>\n\n\n\n          <!-- <ion-label> {{\'same as shipping address\'|translate}}</ion-label> -->\n\n          <!-- <ion-toggle item-start (ionChange)="setAddress(defaultAddress)" checked="false"></ion-toggle> -->\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- 2.0 updates start -->\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="!loginForm.form.valid">{{\'Next\'|translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\billing-address\billing-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], BillingAddressPage);
    return BillingAddressPage;
}());

//# sourceMappingURL=billing-address.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home2_home2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home3_home3__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home5_home5__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home4_home4__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_config_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var ThankYouPage = (function () {
    function ThankYouPage(navCtrl, shared, config, navParams) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.navParams = navParams;
    }
    ThankYouPage.prototype.openHome = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home5_home5__["a" /* Home5Page */]);
        }
    };
    ThankYouPage.prototype.openOrders = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__["a" /* MyOrdersPage */]); };
    ThankYouPage.prototype.ionViewDidLoad = function () {
        this.shared.orderComplete();
    };
    ThankYouPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    ThankYouPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ThankYouPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thank-you',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\thank-you\thank-you.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Thank You\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-thank-you">\n  <ion-card>\n    <ion-card-content>\n      <ion-icon name="checkmark-circle"></ion-icon>\n      <h3>{{\'Thank You\'| translate }}</h3>\n      <h4>{{\'Thank you for shopping with us.\'| translate }}</h4>\n      <button ion-button block color="primary" *ngIf="shared.customerData.id!=null" (click)="openOrders()">{{\'My Orders\'| translate }}</button>\n      <button ion-button block clear color="primary" (click)="openHome()">{{\'Continue Shopping\'| translate }}</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\thank-you\thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, config, navParams, http, shared, alert, loading) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.http = http;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.order = {};
        this.order = this.navParams.get('data');
        //console.log(this.order);
    }
    ;
    OrderDetailPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id).then(function (data) {
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Item not Available!");
            console.log(err);
        });
        this.shared.addToRecent(id);
    };
    OrderDetailPage.prototype.cancelOrder = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + '/api/appsettings/ionic_get_date_time/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.changeOrderStatus(data);
        });
    };
    OrderDetailPage.prototype.changeOrderStatus = function (serverTime) {
        var _this = this;
        var orderCreateDate = new Date(this.order.date_created);
        var orderSeconds = orderCreateDate.getTime() / 1000;
        var serverTimee = new Date(serverTime);
        var currentTime = serverTimee.getTime() / 1000;
        var timeToCancelOrder = this.config.cancelOrderTime * 3600;
        var timeDiff = (currentTime - orderSeconds);
        console.log(timeDiff + " " + timeToCancelOrder);
        console.log(timeToCancelOrder - timeDiff);
        var result = timeToCancelOrder - timeDiff;
        if (result < 0) {
            this.shared.toast("Order Cancelation Time Expires!");
            this.loading.hide();
        }
        else {
            var dat = {
                status: 'cancelled'
            };
            this.config.Woocommerce.putAsync("orders/" + this.order.id, dat).then(function (data) {
                _this.loading.hide();
                _this.navCtrl.pop();
                _this.shared.toast("Order Cancelled");
            }, function (err) {
                _this.loading.hide();
                _this.shared.toast("Server Error");
                console.log(err);
            });
        }
    };
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        this.order = this.navParams.get('data');
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\order-detail\order-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Order Detail\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order-detail">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+\', \'+order.shipping.city+\', \'+order.shipping.state+\' \'+order.shipping.postcode+\',\n      \'+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Seller Info\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.first_name+\', \'+order.billing.address_2+\', \'+order.billing.phone}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let s of order.shipping_lines">\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{s.method_title}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping\'|translate}} {{\'Total\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping_total|curency}}\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of order.line_items">\n      <ion-row>\n        <h3>{{product.name}}\n          <br>\n          <small>{{product.categories_name}}</small>\n        </h3>\n      </ion-row>\n      <ion-item>\n\n\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.price| curency}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.meta_data">\n          <ion-col col-6>{{att.key}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.value}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>{{\'Quantity\'|translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.quantity}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <strong>{{product.total| curency}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Price Detail\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping\'|translate}} {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.shipping_tax | curency }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.shipping_total | curency }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.discount_total | curency }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Total\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{order.total | curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.coupon_lines!=0">\n    <ion-card-header>\n      {{\'Coupons Applied\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Coupon Code\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{\'Coupon Price\'|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let c of order.coupon_lines">\n        <ion-col col-6>\n          {{c.code}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{c.discount|curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.customer_note!=\'\'">\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.customer_note}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Payment Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.payment_method_title}}\n    </ion-card-content>\n  </ion-card>\n  <ion-item *ngIf="order.status!=\'cancelled\' && order.status!=\'completed\' && order.status!=\'refunded\' && order.status!=\'failed\'">\n    <button *ngIf="config.orderCancelButton" ion-button full color="danger" (click)="cancelOrder()">\n      {{\'Cancel Order\'|translate}}</button>\n  </ion-item>\n</ion-content>\n\n<!-- <option value="wc-pending" selected="selected">Pending payment</option>\n<option value="wc-processing">Processing</option>\n<option value="wc-on-hold">On hold</option>\n<option value="wc-completed">Completed</option>\n<option value="wc-cancelled">Cancelled</option>\n<option value="wc-refunded">Refunded</option>\n<option value="wc-failed">Failed</option> -->'/*ion-inline-end:"C:\Softwares\Code\src\pages\order-detail\order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_review_add_review__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(93);
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
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewsPage = (function () {
    function ReviewsPage(navCtrl, navParams, applicationRef, config, modalCtrl, loading, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.applicationRef = applicationRef;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.reviews = [];
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
        this.r4 = null;
        this.r5 = null;
        this.id = navParams.get('id');
        this.getProductReviews();
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.getProductReviews = function () {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + this.id + "/reviews").then(function (data) {
            _this.reviews = JSON.parse(data.body);
            _this.applicationRef.tick();
            var total = 0;
            for (var _i = 0, _a = _this.reviews; _i < _a.length; _i++) {
                var value = _a[_i];
                total = total + value.rating;
            }
            _this.average = (total / _this.reviews.length);
            if (_this.reviews.length == 0)
                _this.average = 0;
            _this.calculateAll();
            _this.applicationRef.tick();
            _this.loading.hide();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.openReviewsPage = function () {
        if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
            modal.present();
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_review_add_review__["a" /* AddReviewPage */], { id: this.id });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ReviewsPage.prototype.totalRating = function () {
        var total = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + value.rating;
        }
        var result = total;
        if (total == 0)
            result = 0;
        return result;
    };
    ReviewsPage.prototype.calculateAll = function () {
        var r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0;
        var total = this.reviews.length;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.rating == 1)
                r1++;
            if (value.rating == 2)
                r2++;
            if (value.rating == 3)
                r3++;
            if (value.rating == 4)
                r4++;
            if (value.rating == 5)
                r5++;
        }
        this.r1 = (100 / total) * r1;
        if (r1 == 0)
            this.r1 = 0;
        this.r2 = (100 / total) * r2;
        if (r2 == 0)
            this.r2 = 0;
        this.r3 = (100 / total) * r3;
        if (r3 == 0)
            this.r3 = 0;
        this.r4 = (100 / total) * r4;
        if (r4 == 0)
            this.r4 = 0;
        this.r5 = (100 / total) * r5;
        if (r5 == 0)
            this.r5 = 0;
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Reviews\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="rating-page">\n\n  <ion-grid class="rating-gird" *ngIf="r5!=null">\n    <ion-row>\n      <ion-col>\n        <h4>{{\'Ratings & Reviews\'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col col-5>\n        <h1>{{average| number:\'1.2-2\'}}\n          <ion-icon name="star"></ion-icon>\n        </h1>\n        <h3>{{reviews.length}} {{\'rating\'|translate}}</h3>\n      </ion-col>\n      <ion-col col-7 >\n        <ul>\n          <li>5\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r5+\'%\'" style="background-color:green;"></span>\n          </li>\n          <li>4\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r4+\'%\'" style="background-color:lightgreen;"></span>\n          </li>\n          <li>3\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r3+\'%\'" style="background-color:yellow;"></span>\n          </li>\n          <li>2\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r2+\'%\'" style="background-color:orange;"></span>\n          </li>\n          <li>1\n            <ion-icon name="star"></ion-icon>\n            <span class="block animate" [style.width]="r1+\'%\'" style="background-color:dar=darkorange;"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="danger" (click)="openReviewsPage()">{{\'Rate and write a review\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list class="rating-users">\n    <ion-item *ngFor="let r of reviews">\n      <ion-avatar item-start>\n        <img src="assets/avatar.png">\n      </ion-avatar>\n      <h2>{{r.name}}</h2>\n      <ul class="product-rating">\n        <li>\n          <div class="stars-outer">\n            <div class="stars-inner" [style.width]="(r.rating*20)+\'%\'"></div>\n          </div>\n          <h6>{{r.date_created|date:\'dd-MM-yyyy\'}}</h6>\n        </li>\n      </ul>\n      <p>{{r.review}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddReviewPage = (function () {
    function AddReviewPage(navCtrl, http, config, navParams, loading, shared) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.navParams = navParams;
        this.loading = loading;
        this.shared = shared;
        this.rating = null;
        this.errorMessage = '';
        this.formData = { name: '', email: '', description: '' };
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.id = navParams.get('id');
        this.getNonce();
        this.formData.name = this.shared.customerData.first_name + " " + this.shared.customerData.last_name;
        this.formData.email = this.shared.customerData.email;
    }
    AddReviewPage.prototype.getNonce = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + "/api/get_nonce/?controller=AppSettings&method=create_product_review").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.nonce = data.nonce;
            console.log(data);
            _this.loading.hide();
        });
    };
    AddReviewPage.prototype.addComment = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + "/api/appsettings/create_product_review/?insecure=cool&nonce="
            + this.nonce
            + "&author_name=" + this.formData.name
            + "&author_email=" + this.formData.email
            + "&product_id=" + this.id
            + "&author_content=" + this.formData.description
            + "&rate_star=" + this.rating
            + "&user_id=" + this.shared.customerData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.status == 'ok') {
                _this.navCtrl.pop();
            }
            console.log(data);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    AddReviewPage.prototype.selectRating = function (value) {
        this.rating = value;
        for (var _i = 0, _a = this.ratingStars; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v.value <= value)
                v.fill = 'star';
            else
                v.fill = 'star-outline';
        }
    };
    AddReviewPage.prototype.disbaleButton = function () {
        if (this.rating == null) {
            console.log(true);
            return true;
        }
        else if (this.formData.description == "") {
            console.log(true);
            return true;
        }
        else if (this.formData.name == "") {
            console.log(true);
            return true;
        }
        else if (this.formData.email == "") {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\add-review\add-review.html"*/'<!--\n  Generated template for the WriteReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Write a review\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="write-review-page" padding>\n  <h4>{{\'Comment about this product\'|translate}}</h4>\n\n  <ul class="stars-list">\n    <li>\n      <h5>{{\'Your Rating:\'|translate}}</h5>\n    </li>\n    <li *ngFor="let s of ratingStars">\n      <ion-icon [name]="s.fill" (click)="selectRating(s.value)"></ion-icon>\n    </li>\n  </ul>\n\n  <ion-row>\n    <form #rForm="ngForm" class="form">\n      <ion-col col-12>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Name\'|translate}}" name="name" [(ngModel)]="formData.name" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Email\'|translate}}" name="email" [(ngModel)]="formData.email" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-textarea placeholder="{{\'Enter a description\'|translate}}" name="desc" [(ngModel)]="formData.description" required></ion-textarea>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage| translate}}</span>\n        </label>\n      </ion-col>\n    </form>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="addComment()" [disabled]="disbaleButton()">{{ \'Post Comment\' | translate }}</button>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\add-review\add-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StorePage = (function () {
    function StorePage(navCtrl, navParams, config, loading, http, applicationRef, emailComposer, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef;
        this.emailComposer = emailComposer;
        this.shared = shared;
        this.page = 1;
        this.products = [];
        this.store = (navParams.get('data'));
        this.getProducts();
    }
    StorePage.prototype.getProducts = function () {
        var _this = this;
        if (this.page == 1)
            this.loading.show();
        this.http.get(this.config.url + '/api/appsettings/ionic_vendor_products/?insecure=cool&post_author=' + this.store.id + "&page=" + this.page).map(function (res) { return res.json(); }).subscribe(function (response) {
            var q = 'products?include=' + response.data + "&status=publish";
            _this.config.Woocommerce.getAsync(q).then(function (data) {
                if (_this.page == 1)
                    _this.loading.hide();
                _this.infinite.complete();
                var d = JSON.parse(data.body);
                console.log(d);
                if (d.length != 0) {
                    _this.page++;
                    for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                        var value = d_1[_i];
                        _this.products.push(value);
                    }
                }
                if (d.length == 0 || d.length < 10) {
                    _this.infinite.enable(false);
                }
                _this.applicationRef.tick();
            });
        });
    };
    StorePage.prototype.contactUs = function () {
        var email = {
            to: this.store.email,
            subject: 'your title',
            body: 'your message'
        };
        this.emailComposer.open(email);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], StorePage.prototype, "infinite", void 0);
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\store\store.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{"Store"|translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <img src="{{store.banner}}" *ngIf="store.banner!=false"> -->\n  <ion-list class="list-avatar" padding>\n    <ion-item text-center>\n      <!-- <ion-avatar>\n        <img src="{{store.gravatar}}">\n      </ion-avatar> -->\n      <h2>{{store.store_name}}</h2>\n      <p>\n        <ion-icon name="star-outline"></ion-icon>&nbsp;&nbsp;{{store.rating.rating}}\n      </p>\n      <!-- <p>{{store.email}}</p> -->\n      <!-- <button ion-button color="light" (click)="contactUs()">\n        {{\'Contact Us\' | translate }}\n      </button> -->\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-col *ngFor="let p of products" col-6>\n      <product [data]="p" [type]="\'normal\'"></product>\n    </ion-col>\n  </ion-grid>\n  <ion-infinite-scroll #infinite (ionInfinite)="getProducts()">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <!-- <ion-fab right bottom>\n    <button ion-fab color="secondary">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab *ngIf="store.fb">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.twitter">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.pinterest">\n        <ion-icon name="logo-pinterest"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.youtube">\n        <ion-icon name="logo-youtube"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.gplus">\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.linkedin">\n        <ion-icon name="logo-linkedin"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.instagram">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button>\n      <button ion-fab *ngIf="store.flickr">{{\'Flickr\'|translate}}\n      </button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\store\store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home2_home2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home3_home3__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home4_home4__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home5_home5__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var IntroPage = (function () {
    function IntroPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.slides = [
            { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/2.gif", title: "Category Page", icon: "cart", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/4.gif", title: "Cart Page", icon: "md-list-box", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
        ];
        this.slides;
    }
    IntroPage.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home5_home5__["a" /* Home5Page */]);
        }
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\intro\intro.html"*/'<ion-content class="page-intro">\n  <ion-slides pager="true" dir="{{shared.dir}}">\n    <ion-slide *ngFor="let s of slides; let i = index" padding>\n      <div class="page-intro-image">\n        <img class="image" src="{{s.image}}">\n      </div>\n      <ion-icon name="{{s.icon}}"></ion-icon>\n      <h2 class="slide-title">{{s.title|translate}}</h2>\n      <p>{{s.description}}</p>\n      <button ion-button outline small color="secondary" *ngIf="i+1!=slides.length" (click)="openHomePage()">{{ \'Skip\' | translate }}</button>\n      <button ion-button outline small color="secondary" *ngIf="i+1==slides.length" (click)="openHomePage()">{{ \'Done\' | translate }}</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__term_services_term_services__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, shared, modalCtrl, config, navParams, loading, iab, translate) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.navParams = navParams;
        this.loading = loading;
        this.iab = iab;
    }
    AboutUsPage.prototype.showModal = function (value) {
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    AboutUsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    AboutUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
    };
    AboutUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__search_search__["a" /* SearchPage */]);
    };
    AboutUsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\about-us\about-us.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  \n\n      <ion-title>\n\n        {{\'About Us\'| translate }}\n\n      </ion-title>\n\n  \n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="openSearch()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n          <ion-icon name="cart">\n\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n          </ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content class="page-about-us" padding>\n\n  <div class="page-content" [innerHTML]="shared.aboutUs"></div>\n\n  <ion-list>\n\n    <button ion-item (click)="openSite()">\n\n      {{"Official Website"|translate}}\n\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n\n    <button ion-item (click)="showModal(\'privacyPolicy\')">\n\n        {{\'Privacy Policy\'|translate}}\n\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n        \n\n    </button>\n\n    <button ion-item (click)="showModal(\'refundPolicy\')">\n\n        {{\'Refund Policy\'|translate}}\n\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n        \n\n    </button>\n\n    <button ion-item (click)="showModal(\'termServices\')">\n\n        {{\'Term and Services\'|translate}}\n\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n        \n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer *ngIf="config.footerShowHide==1">\n\n  <footer ></footer>\n\n</ion-footer> -->'/*ion-inline-end:"C:\Softwares\Code\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/










var WishListPage = (function () {
    function WishListPage(navCtrl, navParams, http, config, shared, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.storage = storage;
        this.translate = translate;
    }
    // ngOnInit() {
    //   this.getProducts();
    // }
    WishListPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    WishListPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    WishListPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wish-list',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\wish-list\wish-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Wish List\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="page-wish-list">\n\n	<ion-grid class="page-empty" *ngIf="shared.wishListProducts.length == 0" [@animate]>\n\n    <ion-row align-items-center>\n\n      <ion-col col-12>\n\n        <h3 text-center>\n\n          <ion-icon name="heart"></ion-icon>\n\n        </h3>\n\n        <h4 text-center>{{\'Your Wishlist is empty\'|translate}}</h4>\n\n\n\n        <p text-center>\n\n          <button ion-button color="secondary" (click)="openProductsPage()">{{\'Explore\'|translate}}</button>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <ion-grid>\n\n    <ion-col col-6 *ngFor="let p of shared.wishListProducts" [@animate]>\n\n      <product [data]="p" [type]="\'wishList\'"></product>\n\n    </ion-col>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\wish-list\wish-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_detail_news_detail__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_list_news_list__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, http, config, loading, shared, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.featuredPosts = new Array;
        this.segments = 'newest';
        //WordPress intergation
        this.categories = new Array;
        //page varible
        this.page = 1;
        //WordPress intergation
        this.posts = new Array;
        //page varible
        this.page2 = 1;
        this.loadingServerDataPosts = true;
        //========================================= tab newest categories ===============================================================================
        this.getCategories = function () {
            var _this = this;
            var data = {};
            data.language_id = this.config.langId;
            data.page_number = this.page2;
            this.http.get(this.config.url + '/wp-json/wp/v2/categories/?page=' + this.page2).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (_this.page2 == 1) {
                    _this.categories = [];
                }
                _this.page2++;
                data.forEach(function (value, index) {
                    _this.categories.push(Object.assign(value, { image: '' }));
                });
                // console.log(data.data.length);
                if (data.length == 0) {
                    //this.shared.toast("All Categories Loaded!");
                    _this.getRandomImage();
                }
                else
                    _this.getCategories();
            }, function (response) {
                // console.log("Error while loading categories from the server");
                // console.log(response);
            });
        };
        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2).map(function (res) { return res.json(); }).subscribe(function (data) {
            data.forEach(function (value, index) {
                _this.getImagePost(value);
            });
            _this.featuredPosts = data;
        });
        this.getPosts();
    }
    NewsPage.prototype.getImagePost = function (post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.http.get(post._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                post.image = data.source_url;
            });
    };
    //============================================================================================  
    //getting list of posts
    NewsPage.prototype.getPosts = function () {
        var _this = this;
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerDataPosts = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 1) {
                _this.posts = [];
                _this.infinite.enable(true);
                _this.loading.hide();
                _this.getCategories();
            }
            _this.page++;
            data.forEach(function (value, index) {
                _this.getImagePost(value);
                _this.posts.push(value);
            });
            _this.posts.concat(data);
            if (data.length < 9) {
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    //this.shared.toast("All Posts Loaded!");
                }
            }
            _this.loadingServerDataPosts = true;
        }, function (err) {
            _this.infinite.enable(false);
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    //============================================================================================  
    //getting list of sub categories from the server
    NewsPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    NewsPage.prototype.openPostsPage = function (name, id) {
        //this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__news_list_news_list__["a" /* NewsListPage */], { 'name': name, 'id': id });
    };
    NewsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    NewsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    // <!-- 2.0 updates -->
    NewsPage.prototype.getRandomImage = function () {
        var _this = this;
        try {
            this.categories.forEach(function (value, index) {
                value.image = "assets/placeholder.png";
                var rand = _this.getRandomPost();
                if (rand._links["wp:featuredmedia"])
                    _this.http.get(rand._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                        value.image = data.source_url;
                        console.log(value.image);
                    });
            });
        }
        catch (error) {
        }
    };
    NewsPage.prototype.getRandomPost = function () {
        var rand = this.posts[Math.floor(Math.random() * this.posts.length)];
        if (rand.sticky == false)
            return rand;
        else
            this.getRandomPost();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], NewsPage.prototype, "infinite", void 0);
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\news\news.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>\n\n      {{\'Announcement\'| translate }}\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n\n        <ion-icon name="cart">\n\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="page-news">\n\n  <div>\n\n    <ion-slides pager=true paginationType="bullets" autoplay="true" dir="{{shared.dir}}" class="animated slideIn">\n\n      <ion-slide *ngFor="let post of featuredPosts" (click)="showPostDetail(post)">\n\n        <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n        <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n        <h4 class="slider-title">{{post.title.rendered}}</h4>\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n    <!-- top Segments  -->\n\n    <ion-segment [(ngModel)]="segments" color="primary" *ngIf="posts.length!=0">\n\n      <ion-segment-button value="newest">{{\'Newest\' |translate}}</ion-segment-button>\n\n      <ion-segment-button value="categories">{{ \'Topics\' | translate }} </ion-segment-button>\n\n    </ion-segment>\n\n    <!-- top segments products -->\n\n    <div class="segments-inner" [ngSwitch]="segments">\n\n\n\n      <div class="segments-posts" *ngSwitchCase="\'newest\'">\n\n\n\n        <ion-grid class="page-empty" *ngIf="posts.length==0 && loadingServerDataPosts">\n\n          <ion-row align-items-center>\n\n            <ion-col col-12>\n\n              <h3 text-center>\n\n                <ion-icon name="ionic"></ion-icon>\n\n              </h3>\n\n              <h4 text-center>{{\'No Posts Available\'| translate}}</h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-list>\n\n          <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)" class="animated fadeIn">\n\n            <ion-thumbnail item-start>\n\n              <ion-spinner *ngIf="!post.image"></ion-spinner>\n\n              <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n\n            </ion-thumbnail>\n\n            <h2>{{post.title.rendered}}\n\n              <br>\n\n              <small>\n\n                <ion-icon name="clock"></ion-icon>{{post.date}}\n\n              </small>\n\n            </h2>\n\n            <div class="post-excerpt" [innerHTML]="post.content.rendered"></div>\n\n          </ion-item>\n\n          <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n          </ion-infinite-scroll>\n\n        </ion-list>\n\n      </div>\n\n\n\n\n\n      <div class="segments-categories" *ngSwitchCase="\'categories\'">\n\n        <ion-grid class="page-empty" *ngIf="categories.length==0">\n\n          <ion-spinner class="spinner-news-category"></ion-spinner>\n\n        </ion-grid>\n\n\n\n        <ion-grid class="grid-categories">\n\n          <ion-row>\n\n            <ion-col col-6 *ngFor="let cat of categories" (click)="openPostsPage(cat.name,cat.id)" class="animated fadeIn">\n\n\n\n              <ion-card class="card-background-page">\n\n                <ion-thumbnail item-start>\n\n                  <img src="{{cat.image}}" *ngIf="cat.image" />\n\n                  <!-- <ion-spinner *ngIf="!cat.image"></ion-spinner> -->\n\n                </ion-thumbnail>\n\n                <div class="card-content" *ngIf="cat.count>0 && cat.image">\n\n                  <div class="card-title">{{cat.name}}</div>\n\n                  <div class="card-subtitle">{{cat.count}} {{\'Posts\'|translate}}</div>\n\n                </div>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n\n  <footer></footer>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var NewsListPage = (function () {
    function NewsListPage(navCtrl, navParams, http, shared, config, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.page = 1;
        this.posts = new Array;
        this.loadingServerData = true;
        this.name = this.navParams.get('name');
        this.id = this.navParams.get('id');
        this.getPosts();
    }
    NewsListPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    NewsListPage.prototype.getImagePost = function (post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.http.get(post._links["wp:featuredmedia"][0].href).map(function (res) { return res.json(); }).subscribe(function (data) {
                post.image = data.source_url;
            });
    };
    //============================================================================================  
    //getting list of posts
    NewsListPage.prototype.getPosts = function () {
        var _this = this;
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerData = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 1) {
                _this.posts = [];
                _this.infinite.enable(true);
                _this.loading.hide();
            }
            _this.page++;
            data.forEach(function (value, index) {
                _this.getImagePost(value);
                _this.posts.push(value);
            });
            if (data.length < 9) {
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    // this.shared.toast("All Posts Loaded!");
                }
            }
            _this.loadingServerData = true;
        }, function (err) {
            _this.infinite.enable(false);
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* InfiniteScroll */])
    ], NewsListPage.prototype, "infinite", void 0);
    NewsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-list',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\news-list\news-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Announcement List\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-news-list">\n  <ion-grid class="page-empty" *ngIf="posts.length==0 && loadingServerData">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="ionic"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'No Posts Avaialable\'| translate}}</h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)">\n      <ion-thumbnail item-start>\n        <ion-spinner *ngIf="!post.image"></ion-spinner>\n        <img src="{{post.image}}" *ngIf="post.image" class="animated fadeIn">\n      </ion-thumbnail>\n      <h2>{{post.title.rendered}}\n        <br>\n        <small>\n          <ion-icon name="time"></ion-icon>{{post.date}}</small>\n      </h2>\n      <div class="post-excerpt" [innerHTML]="post.content.rendered"></div>\n    </ion-item>\n    <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\news-list\news-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], NewsListPage);
    return NewsListPage;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories2Page = (function () {
    function SubCategories2Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories2Page_1 = SubCategories2Page;
    SubCategories2Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories2Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories2Page_1, { 'parent': id });
    };
    SubCategories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories2Page = SubCategories2Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories2\sub-categories2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Sub Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content text-center>\n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent==parent">\n        <ion-thumbnail item-start>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-thumbnail>\n        <h2>{{c.name}}\n          <br>\n          \n        </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n  <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n    <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories2\sub-categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories2Page);
    return SubCategories2Page;
    var SubCategories2Page_1;
}());

//# sourceMappingURL=sub-categories2.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories4Page = (function () {
    function SubCategories4Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories4Page_1 = SubCategories4Page;
    SubCategories4Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories4Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories4Page_1, { 'parent': id });
    };
    SubCategories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories4Page = SubCategories4Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories4\sub-categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content text-center class="card-background-page">\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6  *ngFor="let c of subcategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n            <ion-card >\n              <img *ngIf="c.image" src="{{c.image.src}}"/>\n              <div class="categories-title">{{c.name}}</div>\n             \n            </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n      <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories4\sub-categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories4Page);
    return SubCategories4Page;
    var SubCategories4Page_1;
}());

//# sourceMappingURL=sub-categories4.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories3Page = (function () {
    function SubCategories3Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories3Page_1 = SubCategories3Page;
    SubCategories3Page.prototype.openParentProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: this.parent, name: name, sortOrder: 'newest' });
    };
    SubCategories3Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories3Page_1, { 'parent': id });
    };
    SubCategories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories3Page = SubCategories3Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories3\sub-categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content text-center class="card-background-page">\n  \n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent==parent">\n        <ion-avatar item-start>\n          <img *ngIf="c.image" src="{{c.image.src}}">\n        </ion-avatar>\n      \n      </ion-item>\n    </div>\n    </ion-list>\n\n    <button ion-button icon-end color="secondary" (click)="openParentProducts()">{{ \'View All\' | translate }}\n      <ion-icon name="ios-arrow-dropright-circle-outline"></ion-icon>\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories3\sub-categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories3Page);
    return SubCategories3Page;
    var SubCategories3Page_1;
}());

//# sourceMappingURL=sub-categories3.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select_country_select_country__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__select_zones_select_zones__ = __webpack_require__(231);
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
 * Generated class for the AddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressesPage = (function () {
    function AddressesPage(navCtrl, shared, modalCtrl, config, navParams, storage, events, loading, location, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.loading = loading;
        this.location = location;
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        if (this.shared.customerData.id != null) {
            this.shipping = this.shared.customerData.shipping;
            this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
            this.billing = this.shared.customerData.billing;
            this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
        //when country is selected
        events.subscribe('countryChange', function (page, value) {
            if (page == "shippingUpdate") {
                _this.shippingCountryName = value.name;
                _this.shipping.country = value.value;
                _this.shipping.state = null;
                _this.shipping.city = null;
                _this.shipping.postcode = null;
                _this.shippingStateName = "";
            }
            if (page == "billingUpdate") {
                _this.billingCountryName = value.name;
                _this.billing.country = value.value;
                _this.billing.state = null;
                _this.billing.city = null;
                _this.billing.postcode = null;
                _this.billingStateName = "";
            }
        });
        //state is selected
        events.subscribe('stateChange', function (page, value) {
            if (page == "shippingUpdate") {
                if (value == 'other') {
                    console.log(page + value);
                    _this.shipping.state = 'other';
                    _this.shippingStateName = "other";
                }
                else {
                    _this.shipping.state = value.value;
                    _this.shippingStateName = value.name;
                }
            }
            if (page == "billingUpdate") {
                if (value == 'other') {
                    _this.billing.state = 'other';
                    _this.billingStateName = "other";
                }
                else {
                    _this.billing.state = value.value;
                    _this.billingStateName = value.name;
                }
            }
        });
    }
    AddressesPage.prototype.updateBillingAddress = function () {
        var _this = this;
        this.loading.show();
        var data = {
            billing: this.billing
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.shared.customerData.billing = dat.billing;
            _this.storage.set('customerData', _this.shared.customerData);
            _this.shared.toast("Billing Address Updated");
        });
    };
    AddressesPage.prototype.updateShippingAddress = function () {
        var _this = this;
        this.loading.show();
        var data = {
            shipping: this.shared.shipping
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.shared.customerData.shipping = dat.shipping;
            _this.storage.set('customerData', _this.shared.customerData);
            _this.shared.toast("Shipping Address Updated");
        });
    };
    AddressesPage.prototype.selectCountryPage = function (value) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__select_country_select_country__["a" /* SelectCountryPage */], { page: value });
        modal.present();
    };
    AddressesPage.prototype.selectZonePage = function (value) {
        var id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__select_zones_select_zones__["a" /* SelectZonesPage */], { page: value, id: id });
        modal.present();
    };
    AddressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addresses',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\addresses\addresses.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Address\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>Ï\n\n<ion-content>\n  <form #shippingForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-list-header>\n            {{\'Shipping Address\'| translate }}\n          </ion-list-header>\n          <ion-item>\n            <ion-label floating>{{\'First Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_firstname" [(ngModel)]="shipping.first_name" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_lastname" [(ngModel)]="shipping.last_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Compnay\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="shipping.company"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="shipping.address_1" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 2</ion-label>\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="shipping.address_2"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_country" (tap)="selectCountryPage(\'shippingUpdate\')"\n              [readonly]="true" [(ngModel)]="shippingCountryName" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" required name="shipping_zone" (tap)="selectZonePage(\'shippingUpdate\')"\n              [readonly]="true" [(ngModel)]="shippingStateName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_city" [(ngModel)]="shipping.city" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="shipping_postcode" [(ngModel)]="shipping.postcode" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </form>\n  <button ion-button block color="secondary" (click)="updateShippingAddress()" [disabled]="!shippingForm.form.valid">\n    {{\'Update Shipping\'|translate}}</button>\n\n  <form #billingForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-list-header>\n            {{\'Seller Info\'| translate }}\n          </ion-list-header>\n          <ion-item>\n            <ion-label floating>{{\'Seller Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_firstname" [(ngModel)]="billing.first_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Selling Price\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="address2" [(ngModel)]="billing.address_2"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Seller Phone No\'|translate}}</ion-label>\n            <ion-input type="tel" placeholder="" name="billing_phone" [(ngModel)]="billing.phone" required></ion-input>\n          </ion-item>\n           <!-- <ion-item>\n            <ion-label floating>{{\'Last Name\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_lastname" [(ngModel)]="billing.last_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Compnay\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="company" [(ngModel)]="billing.company"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Address\'|translate}} 1</ion-label>\n            <ion-input type="text" placeholder="" name="address" [(ngModel)]="billing.address_1" required></ion-input>\n          </ion-item> -->\n          \n          <!-- <ion-item>\n            <ion-label floating>{{\'Country\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_country" (tap)="selectCountryPage(\'billingUpdate\')"\n              [readonly]="true" [(ngModel)]="billingCountryName" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'State\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" required name="billing_zone" (tap)="selectZonePage(\'billingUpdate\')"\n              [readonly]="true" [(ngModel)]="billingStateName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{\'City\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_city" [(ngModel)]="billing.city" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'Post code\'|translate}}</ion-label>\n            <ion-input type="text" placeholder="" name="billing_postcode" [(ngModel)]="billing.postcode" required></ion-input>\n          </ion-item> -->\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </form>\n  <button ion-button block color="secondary" (click)="updateBillingAddress()" [disabled]="!billingForm.form.valid">\n    {{\'Update Billing\'|translate}}</button>\n\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\addresses\addresses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AddressesPage);
    return AddressesPage;
}());

//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(94);
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
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadsPage = (function () {
    function DownloadsPage(navCtrl, navParams, loading, shared, config, themeableBrowser, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.themeableBrowser = themeableBrowser;
        this.downloads = [];
        this.httpLoading = true;
        this.getDownloads();
    }
    DownloadsPage.prototype.getDownloads = function () {
        var _this = this;
        this.httpLoading = true;
        this.loading.show();
        this.config.Woocommerce.getAsync("customers/" + this.shared.customerData.id + "/downloads").then(function (data) {
            _this.httpLoading = false;
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            _this.downloads = dat;
            console.log(dat);
        });
    };
    DownloadsPage.prototype.downloadFile = function (value) {
        var options = {};
        this.themeableBrowser.create(value.download_url, '_system', options);
        this.loading.autoHide(1000);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    DownloadsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    DownloadsPage.prototype.openShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */]);
    };
    DownloadsPage.prototype.refreshPage = function () {
        this.getDownloads();
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downloads',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\downloads\downloads.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Downloads\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshPage()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid class="page-empty" *ngIf="downloads.length==0 && !httpLoading">\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="download"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your Download List is Empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button (click)="openShop()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let down of downloads">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Product\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{down.product_name}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Downloads remaining\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.downloads_remaining!=\'unlimited\'">\n          {{down.downloads_remaining}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.downloads_remaining==\'unlimited\'">\n          &infin;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          {{\'Expires\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.access_expires == \'never\'">\n          {{down.access_expires|translate}}\n        </ion-col>\n        <ion-col text-right col-6 *ngIf="down.access_expires != \'never\'">\n          {{down.access_expires|date}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <button ion-button icon-end block color="secondary" (click)="downloadFile(down)">\n          {{down.download_name}}\n          <ion-icon name="download"></ion-icon>\n        </button>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\downloads\downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(12);
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
 * Generated class for the BankDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankDetailsPage = (function () {
    function BankDetailsPage(navCtrl, config, shared, loading, http, applicationRef, navParams) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef;
        this.navParams = navParams;
        this.form = { name: '', accountNo: '', code: "" };
        this.fields = [];
    }
    BankDetailsPage.prototype.submit = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        var query = "user_id=" + this.shared.customerData.id;
        var d = [];
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var x = _a[_i];
            d.push({ id: x.field_id, value: x.value });
        }
        query += "&user_info=" + JSON.stringify(d);
        this.http.get(this.config.url + '/api/appusers/ionic_extra_fields_data/?' + query).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            _this.shared.toast(data);
            _this.errorMessage = data;
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                _this.errorMessage = "server error!";
            }
        });
    };
    BankDetailsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    BankDetailsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    BankDetailsPage.prototype.getFields = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + '/api/appusers/ionic_extra_fields/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.status == "ok") {
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.fields.push(Object.assign(value, { value: null }));
                }
                _this.getInfo();
            }
            else {
                _this.errorMessage = data.error;
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                _this.errorMessage = "server error!";
            }
        });
    };
    BankDetailsPage.prototype.getInfo = function () {
        var _this = this;
        this.loading.show();
        this.http.get(this.config.url + '/api/appusers/ionic_extra_fields_info/?user_id=' + this.shared.customerData.id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            var tempArray = [];
            if (data.status == "ok") {
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var x = _a[_i];
                    for (var _b = 0, _c = _this.fields; _b < _c.length; _b++) {
                        var y = _c[_b];
                        if (x.field_id == y.field_id) {
                            y.value = x.user_value;
                        }
                    }
                }
            }
            else {
                _this.errorMessage = data.error;
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                _this.errorMessage = "server error!";
            }
        });
    };
    BankDetailsPage.prototype.ionViewDidLoad = function () {
        this.getFields();
    };
    BankDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bank-details',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\bank-details\bank-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      {{\'Bank Details\' | translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <form #bankForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-item *ngFor="let f of fields">\n            <ion-label floating>{{f.field_name|translate}}</ion-label>\n            <ion-input type="text" name="{{\'name\'+f.field_id}}" [(ngModel)]="f.value" required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage}}</span>\n        </label>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="!bankForm.form.valid">{{\'Update\'|translate}}</button>\n</ion-footer>\n\n\n\n<!-- api/appsettings/ionic_vendor_bank_info/?insecure=cool&vendor_id=1127&ac_name=milyas&ac_number=005001000&bank_name=askari&bank_addr=dground&routing_number=alfa1236456&iban=45678913456&swift=45125alfa -->'/*ion-inline-end:"C:\Softwares\Code\src\pages\bank-details\bank-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], BankDetailsPage);
    return BankDetailsPage;
}());

//# sourceMappingURL=bank-details.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(469);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_trackorders_trackorders__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_allproducts_allproducts__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_translate_translate__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_products_products__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_us_about_us__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contact_us_contact_us__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_forgot_password_forgot_password__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_banners_banners__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_product_product__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_sliding_tabs_sliding_tabs__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_product_detail_product_detail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_curency_curency__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_categories_categories__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_wish_list_wish_list__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shipping_address_shipping_address__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_select_country_select_country__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_select_zones_select_zones__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_billing_address_billing_address__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_shipping_method_shipping_method__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_order_order__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_thank_you_thank_you__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_coupon_coupon__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_paypal__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_my_account_my_account__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_my_orders_my_orders__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_order_detail_order_detail__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_news_news__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_settings_settings__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_news_detail_news_detail__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_news_list_news_list__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_push__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_device__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_facebook__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_categories2_categories2__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_sub_categories_sub_categories__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_home5_home5__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_home4_home4__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_home3_home3__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_home2_home2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_categories3_categories3__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_categories4_categories4__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_categories5_categories5__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_privacy_policy_privacy_policy__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_term_services_term_services__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_refund_policy_refund_policy__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__angular_platform_browser_animations__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_sub_categories2_sub_categories2__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_sub_categories3_sub_categories3__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_sub_categories4_sub_categories4__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_sub_categories5_sub_categories5__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_categories6_categories6__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_sub_categories6_sub_categories6__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_admob_free__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_app_version__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ionic_native_onesignal__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__providers_location_data_location_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ionic_native_spinner_dialog__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ionic_native_themeable_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_reviews_reviews__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_add_review_add_review__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85_ionic_img_viewer__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_addresses_addresses__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_downloads_downloads__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_store_store__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__ionic_native_email_composer__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__ionic_native_call_number__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_bank_details_bank_details__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__ionic_native_clipboard__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__ionic_native_file_transfer__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ionic_native_file__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
// Version: 1.0





























































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_60__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_home4_home4__["a" /* Home4Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_home5_home5__["a" /* Home5Page */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_62__pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_63__pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_64__pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_74__pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_71__pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_72__pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_75__pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_33__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_allproducts_allproducts__["a" /* AllproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_curency_curency__["a" /* CurencyPipe */],
                __WEBPACK_IMPORTED_MODULE_39__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_bank_details_bank_details__["a" /* BankDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_trackorders_trackorders__["a" /* TrackordersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'md',
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/trackorders/trackorders.module#TrackordersPageModule', name: 'TrackordersPage', segment: 'trackorders', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_68__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_85_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (__WEBPACK_IMPORTED_MODULE_11__providers_translate_translate__["a" /* createTranslateLoader */]),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_0__pages_trackorders_trackorders__["a" /* TrackordersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_60__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_home4_home4__["a" /* Home4Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_home5_home5__["a" /* Home5Page */],
                __WEBPACK_IMPORTED_MODULE_30__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_62__pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_63__pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_64__pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_74__pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_71__pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_72__pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_73__pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_75__pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_addresses_addresses__["a" /* AddressesPage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_allproducts_allproducts__["a" /* AllproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_bank_details_bank_details__["a" /* BankDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_products_products__["a" /* ProductsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_coupon_coupon__["a" /* CouponProvider */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_77__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_89__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_78__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_79__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_80__providers_location_data_location_data__["a" /* LocationDataProvider */],
                __WEBPACK_IMPORTED_MODULE_81__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_82__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_90__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_92__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_93__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_94__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_woocommerce_api__);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigProvider = (function () {
    function ConfigProvider(http, storage, platform, localNotifications) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.url = 'https://www.supply.fashaish.com';
        this.consumerKey = 'ck_d2db7840f3b83dc79a889686fd21ae4b0905db4c';
        this.consumerSecret = 'cs_c3410e476a87f4e8c136ac582e4120ef6b46e203';
        this.showIntroPage = 0; // show/hide intro page value 1 for show, 0 for hide
        this.appDirection = "ltr"; // application direction
        this.appInProduction = true;
        this.sliderPerView = 2.2;
        this.Woocommerce = __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__({
            url: this.url,
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
            wpAPI: true,
            queryStringAuth: true,
            version: 'wc/v2'
        });
        this.dokan = __WEBPACK_IMPORTED_MODULE_5_woocommerce_api__({
            url: this.url,
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
            wpAPI: true,
            queryStringAuth: true,
            version: 'dokan/v1'
        });
        this.urlExt = this.url + "/wp-json/woo_app_connect/mobile/";
        this.langId = "1";
        this.loader = 'dots';
        this.newProductDuration = 100;
        this.cartButton = 1; //1 = show and 0 = hide
        this.currency = "$";
        this.currencyPos = "left";
        this.paypalCurrencySymbol = 'USD';
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = 1;
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.admob = 1;
        this.admobBannerid = '';
        this.admobIntid = '';
        this.googleAnalaytics = "";
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.admobIos = 1;
        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.notificationType = "";
        this.onesignalAppId = "";
        this.onesignalSenderId = "";
        this.privacyPolicy = "";
        this.termServices = "";
        this.aboutUs = "";
        this.refundPolicy = "";
        this.filterMaxPrice = 1000;
        this.guestCheckOut = true;
        this.checkOutPage = 1;
        this.defaultIcons = false;
        this.orderCancelButton = false;
        this.addressPage = true;
        this.downloadPage = true;
        this.showVendorInfo = true;
    }
    ConfigProvider.prototype.siteSetting = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/api/appsettings/get_all_settings/?insecure=cool').map(function (res) { return res.json(); }).subscribe(function (data) {
                var settings = data;
                _this.fbId = settings.facebook_app_id;
                _this.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
                _this.email = settings.contact_us_email;
                _this.latitude = settings.latitude;
                _this.longitude = settings.longitude;
                _this.phoneNo = settings.phone_no;
                _this.pushNotificationSenderId = settings.fcm_android_sender_id;
                _this.lazyLoadingGif = settings.lazzy_loading_effect;
                _this.newProductDuration = settings.new_product_duration;
                _this.notifText = settings.notification_text;
                _this.notifTitle = settings.notification_title;
                _this.notifDuration = settings.notification_duration;
                _this.currency = settings.currency_symbol;
                _this.cartButton = parseInt(settings.cart_button);
                console.log(_this.cartButton);
                _this.footerShowHide = parseInt(settings.footer_button);
                _this.setLocalNotification();
                _this.appName = settings.app_name;
                _this.homePage = parseInt(settings.home_style);
                _this.categoryPage = parseInt(settings.category_style);
                _this.siteUrl = settings.site_url;
                _this.introPage = parseInt(settings.intro_page);
                _this.myOrdersPage = parseInt(settings.my_orders_page);
                _this.newsPage = parseInt(settings.news_page);
                _this.wishListPage = parseInt(settings.wish_list_page);
                _this.shippingAddressPage = parseInt(settings.shipping_address_page);
                _this.aboutUsPage = parseInt(settings.about_us_page);
                _this.contactUsPage = settings.contact_us_page;
                _this.editProfilePage = parseInt(settings.edit_profile_page);
                _this.packgeName = settings.package_name;
                _this.settingPage = parseInt(settings.setting_page);
                _this.admob = parseInt(settings.admob);
                _this.admobBannerid = settings.ad_unit_id_banner;
                _this.admobIntid = settings.ad_unit_id_interstitial;
                _this.googleAnalaytics = settings.google_analytic_id;
                _this.rateApp = parseInt(settings.rate_app);
                _this.shareApp = parseInt(settings.share_app);
                _this.fbButton = parseInt(settings.facebook_login);
                _this.onesignalAppId = settings.os_android;
                _this.onesignalSenderId = settings.os_android_sender_id;
                _this.admobIos = parseInt(settings.ios_admob);
                _this.admobBanneridIos = settings.ios_ad_unit_id_banner;
                _this.admobIntidIos = settings.ios_ad_unit_id_interstitial;
                _this.privacyPolicy = settings.privacy_page;
                _this.termServices = settings.terms_page;
                _this.aboutUs = settings.about_page;
                _this.refundPolicy = settings.refund_page;
                _this.filterMaxPrice = parseInt(settings.filter_max_price);
                _this.guestCheckOut = (settings.checkout_process == "yes") ? true : false;
                _this.checkOutPage = parseInt(settings.one_page_checkout);
                //this.checkOutPage = 2;
                _this.defaultIcons = (settings.sidebar_menu_icon == "0") ? true : false;
                _this.orderCancelButton = (settings.cancel_order_button == "1") ? true : false;
                _this.addressPage = (settings.bill_ship_info == "1") ? true : false;
                _this.downloadPage = (settings.downloads == "1") ? true : false;
                _this.cancelOrderTime = parseInt(settings.cancel_order_hours);
                resolve();
            });
        });
    };
    //Subscribe for local notification when application is start for the first time
    ConfigProvider.prototype.setLocalNotification = function () {
        var _this = this;
        //console.log('localNotification called');
        this.platform.ready().then(function () {
            _this.storage.get('localNotification').then(function (val) {
                if (val == undefined) {
                    //console.log('localNotification configured');
                    _this.storage.set('localNotification', 'localNotification');
                    _this.localNotifications.schedule({
                        id: 1,
                        title: _this.notifTitle,
                        text: _this.notifText,
                        every: _this.notifDuration,
                    });
                }
            });
        });
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllproductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AllproductsComponent = (function () {
    // @Output() someEvent = new EventEmitter();
    function AllproductsComponent(config, shared, navCtrl, navParams, modalCtrl, events, storage, http, loading, alert, socialSharing, translate, applicationRef, transfer, file, platform, toastCtrl) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.applicationRef = applicationRef;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.isLiked = 0;
        this.wishArray = [];
        this.fileName = '';
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.p.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
    }
    AllproductsComponent.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    AllproductsComponent.prototype.pDiscount = function () {
        var rtn = "";
        var p1 = parseInt(this.p.regular_price);
        var p2 = parseInt(this.p.sale_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    };
    AllproductsComponent.prototype.showProductDetail = function () {
        //if (this.type == 'recent' || this.type == 'wishList') {
        // this.loading.show();
        // this.config.Woocommerce.getAsync("products/" + this.p.id).then((data) => {
        //   //this.alert.show("loaded");
        //   this.loading.hide();
        //   this.navCtrl.push(ProductDetailPage, { data: JSON.parse(data.body) });
        // }, err => {
        //   this.loading.hide();
        //   this.translate.get("Item not Available!").subscribe((res) => {
        //     this.alert.show(res);
        //   });
        //   console.log(err);
        // });
        // }
        // else
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: this.p });
        if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
        }
    };
    AllproductsComponent.prototype.checkProductNew = function () {
        var pDate = new Date(this.p.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    AllproductsComponent.prototype.addToCart = function () { this.shared.addToCart(this.p, null, null, null); this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]); };
    AllproductsComponent.prototype.isInCart = function () {
        var found = false;
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.product_id == this.p.id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    };
    AllproductsComponent.prototype.removeRecent = function () {
        this.shared.removeRecent(this.p);
    };
    AllproductsComponent.prototype.clickWishList = function () {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    AllproductsComponent.prototype.addWishList = function () {
        this.shared.addWishList(this.p);
    };
    AllproductsComponent.prototype.removeWishList = function () {
        this.shared.removeWishList(this.p);
    };
    AllproductsComponent.prototype.ngOnChanges = function () {
    };
    AllproductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get("shipping").subscribe(function (res) { _this.price_html = _this.p.price_html + "&nbsp;+&nbsp;" + res; });
    };
    AllproductsComponent.prototype.share = function () {
        var _this = this;
        var images = [];
        images.push(this.p.images[0].src);
        if (this.p.type == "grouped") {
            this.loading.show();
            this.config.Woocommerce.getAsync("products/?include=" + this.p.grouped_products).then(function (data) {
                var groupProducts = JSON.parse(data.body);
                for (var _i = 0, groupProducts_1 = groupProducts; _i < groupProducts_1.length; _i++) {
                    var val = groupProducts_1[_i];
                    images.push(val.images[0].src);
                }
                _this.applicationRef.tick();
                console.log(images);
                _this.socialSharing.share("", "", images, "").then(function () { _this.loading.hide(); }).catch(function () { _this.loading.hide(); });
            });
        }
        else {
            this.loading.show();
            this.socialSharing.share("", "", images, "").then(function () { _this.loading.hide(); }).catch(function () { _this.loading.hide(); });
        }
    };
    AllproductsComponent.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.present();
    };
    AllproductsComponent.prototype.download = function (images) {
        var _this = this;
        console.log(images);
        this.getStoragePath().then(function (url) {
            var strUrl = url;
            if (_this.platform.is('android')) {
                _this.presentToast('Downloaded Started');
                var fileTransfer = _this.transfer.create();
                var url_1 = images[i].src; //'http://www.example.com/file.pdf';
                for (var i = 0; i <= images.length; i++) {
                    var image = images[i].src; //images[i].toString();
                    fileTransfer.download(image, strUrl + 'Image' + i + '.png').then(function (entry) {
                    }, function (error) {
                        alert("Error:" + error);
                    });
                    if (i == images.length - 1) {
                        _this.presentToast('Succesfully downloaded all images at Localstorage/Fashaish');
                    }
                }
            }
        });
    };
    AllproductsComponent.prototype.getStoragePath = function () {
        var file = this.file;
        return this.file.resolveDirectoryUrl(this.file.externalRootDirectory).then(function (directoryEntry) {
            return file.getDirectory(directoryEntry, "Fashaish", {
                create: true,
                exclusive: false
            }).then(function () {
                return directoryEntry.nativeURL + "Fashaish/";
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], AllproductsComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], AllproductsComponent.prototype, "type", void 0);
    AllproductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'allproducts',template:/*ion-inline-start:"C:\Softwares\Code\src\components\allproducts\allproducts.html"*/'<div *ngIf="p.catalog_visibility!=\'hidden\'">\n    <ion-card *ngIf="type==\'normal\' || type==\'recent\' || type==\'wishList\'" class="animated fadeIn">\n      <div class="card-thumb">\n        <div class="card-tag-new" *ngIf="checkProductNew()" translate></div>\n        <div class="card-tags">\n          <div class="card-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n          <div class="card-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n        </div> <!-- 2.0 updates -->\n        \n            <div *ngFor="let images of p.images let i = index">\n                <div *ngIf="i == 0" style="width: 65%; height: 240px; float: left; object-fit: contain;">\n                    <img  width="100%" height="100%" style="object-fit: fill;" src="{{images.src}}" (click)="showProductDetail()" />     \n                 </div> \n                 <div *ngIf="i == 1" style="width: 35%; height: 120px; float: right; object-fit: contain;">\n                    <img  width="100%" height="100%" style="object-fit: fill;" src="{{images.src}}" (click)="showProductDetail()" />     \n                 </div> \n  \n                 <div *ngIf="i == 2" style=" width: 35%; height: 120px; float: right; object-fit: contain;">\n                    <h4 class="imagesRemaining">{{p.images.length - i}} More</h4>  \n                    <img width="100%" height="100%" style=" opacity: 0.2; object-fit: fill" src="{{images.src}}" (click)="showProductDetail()" />     \n               \n                </div> \n             \n               <div  *ngIf="i >= 2">\n                  <img style="display: none; visibility: hidden;"  src="{{images.src}}" (click)="showProductDetail()" />     \n             \n               </div> \n            </div>\n       \n       \n      </div>\n     \n      <!--\n        <div style="background: red; width: 100%; height: 250px;" *ngFor="let images of p.images">\n          <div style="background: white; width: 60%; height: 250px;">\n          <img width="100px" style="object-fit: fill;" height="100px"  src="{{images.src}}" (click)="showProductDetail()" />\n       \n          </div>\n        \n        \n        </div>\n      \n      -->\n        \n      <ion-card-content>\n        <ion-card-title>\n          <div class="line-clamp">{{p.name}}</div>\n        </ion-card-title>\n        <ion-row class="card-attr">\n          <ion-col col-10 >\n            <h4 font-80  [innerHTML]="price_html"></h4>\n          </ion-col>\n          <!-- <h3 *ngIf="p.type==\'grouped\'" no-margin dark> -->\n  \n          <!-- </h3> -->\n          <!-- <ion-col text-center col-2>\n          <ion-icon [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n        </ion-col> -->\n        </ion-row>\n      </ion-card-content>\n  \n      <ion-buttons class="bar-buttons-remove" *ngIf="type==\'wishList\'">\n        <button ion-button block color="danger" (click)="removeWishList();">\n          {{\'REMOVE\'|translate}}\n        </button>\n      </ion-buttons>\n  \n      <ion-buttons  *ngIf="type==\'normal\'">\n        <button class="detailButtons" ion-button block color="secondary" *ngIf="config.cartButton==1 && p.in_stock==true && p.type==\'simple\'"\n          (click)="addToCart(p);">\n          {{\'ADD TO CART\'|translate}}</button>\n        <button style="float: left" class="detailButtons" ion-button block color="secondary" (click)="showProductDetail()" *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'">\n          {{\'DETAILS\'|translate}}</button>\n        <button  ion-button block color="danger" *ngIf="config.cartButton==1 && p.in_stock==false">\n          {{\'OUT OF STOCK\'|translate}}</button>\n        <button ion-button icon-start block color="whatsApp" (click)="share()">\n          <ion-icon name="logo-whatsapp"></ion-icon>SHARE\n        </button>\n\n\n          <button  style="margin-left: 5px; width: 20%;" ion-button icon-only  color="whatsApp" (click)="download(p.images)">\n              <ion-icon name="download"></ion-icon>\n            </button>\n\n      </ion-buttons>\n  \n      <ion-buttons class="bar-buttons-remove" *ngIf="type==\'recent\'">\n        <button ion-button block color="danger" (click)="removeRecent()">{{\'REMOVE\'|translate}}</button>\n      </ion-buttons>\n  \n      <ion-row class="card-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </ion-row>\n    </ion-card>\n  \n  \n  \n    <ion-item *ngIf="type==\'list\'" class="animated fadeIn">\n      <ion-row class="list-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </ion-row>\n      <div class="list-tags">\n        <div class="list-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n        <div class="list-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n      </div> <!-- 2.0 updates -->\n      <ion-thumbnail item-start>\n        <div class="list-tag-new" *ngIf="checkProductNew()" translate></div>\n        <img *ngIf="p.images" src="{{p.images[0].src}}" (click)="showProductDetail()">\n      </ion-thumbnail>\n      <h2>\n        <div class="line-clamp">{{p.name}}</div>\n      </h2>\n      <div class="list-price-block">\n        <h4 font-80 [innerHTML]="price_html"></h4>\n      </div>\n      <ion-row align-items-center>\n        <ion-col col-10>\n          <button ion-button solid small color="secondary" *ngIf="config.cartButton==1 && p.in_stock==true && p.type ==\'simple\'"\n            (click)="addToCart(p)" item-start>{{\'ADD TO CART\'|translate}}</button>\n          <button ion-button solid small color="secondary" (click)="showProductDetail()" *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'"\n            item-start>{{\'DETAILS\'|translate}}</button>\n          <button ion-button solid small color="danger" *ngIf="config.cartButton==1 && p.in_stock==false" item-start>{{\'OUT\n            OF STOCK\'|translate}}</button>\n        </ion-col>\n        <!-- <ion-col col-2>\n        <ion-icon item-end [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n      </ion-col> -->\n      </ion-row>\n  \n  \n    </ion-item>\n  \n  </div>'/*ion-inline-end:"C:\Softwares\Code\src\components\allproducts\allproducts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["B" /* ToastController */]])
    ], AllproductsComponent);
    return AllproductsComponent;
}());

//# sourceMappingURL=allproducts.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_themeable_browser__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SharedDataProvider = (function () {
    function SharedDataProvider(config, http, 
        //public navCtrl: NavController,
        storage, loading, events, platform, spinnerDialog, //updates
        oneSignal, alert, toastCtrl, translate, themeableBrowser, appVersion, applicationRef) {
        var _this = this;
        this.config = config;
        this.http = http;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.platform = platform;
        this.spinnerDialog = spinnerDialog;
        this.oneSignal = oneSignal;
        this.alert = alert;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.themeableBrowser = themeableBrowser;
        this.appVersion = appVersion;
        this.applicationRef = applicationRef;
        this.tab1 = [];
        this.tab2 = [];
        this.tab3 = [];
        this.allCategories = new Array();
        this.categories = new Array();
        this.subCategories = new Array();
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: '',
            email: '',
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        //Function calcualte the total items of cart
        this.cartTotalItems = function () {
            this.events.publish('cartChange');
            var total = 0;
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total += value.quantity;
            }
            this.cartquantity = total;
            // console.log("updated");
            return total;
        };
        this.translate.get(this.checkOutPageText).subscribe(function (res) { _this.checkOutPageText = res; });
        //banners
        this.http.get(config.url + '/api/appsettings/get_all_banners/?insecure=cool').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.banners = data.data;
        });
        // //getting tab 1 products?status=publish
        this.config.Woocommerce.getAsync("products?status=publish").then(function (data) {
            var arr = JSON.parse(data.body);
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var p = arr_1[_i];
                if (p.catalog_visibility != 'hidden')
                    _this.tab1.push(p);
            }
            _this.applicationRef.tick(); //*ngIf="p.catalog_visibility!='hidden'"
        });
        //getting tab 2
        this.config.Woocommerce.getAsync("products?on_sale=true&status=publish").then(function (data) {
            var arr = JSON.parse(data.body);
            for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
                var p = arr_2[_i];
                if (p.catalog_visibility != 'hidden')
                    _this.tab3.push(p);
            }
            _this.applicationRef.tick();
        });
        //getting tab 3
        this.config.Woocommerce.getAsync("products?featured=true&status=publish").then(function (data) {
            var arr = JSON.parse(data.body);
            // console.log("Tab3: " + JSON.stringify(arr));
            for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
                var p = arr_3[_i];
                if (p.catalog_visibility != 'hidden')
                    _this.tab3.push(p);
            }
            _this.applicationRef.tick();
        });
        //getting all allCategories
        this.getAllCategories(1);
        //getting recent viewed items from local storage
        storage.get('customerData').then(function (val) {
            if (val != null || val != undefined)
                _this.customerData = val;
        });
        if (this.platform.is('cordova')) {
            setTimeout(function () {
                _this.appVersion.getPackageName().then(function (val) { _this.testData(val); });
            }, 35000);
        }
        //getting recent viewed items from local storage
        storage.get('recentViewedProducts').then(function (val) {
            if (val != null)
                _this.recentViewedProducts = val;
        });
        //getting recent viewed items from local storage
        storage.get('cartProducts').then(function (val) {
            if (val != null)
                _this.cartProducts = val;
            _this.cartTotalItems();
            // console.log(val);
        });
        //getting wishList items from local storage
        storage.get('wishListProducts').then(function (val) {
            if (val != null)
                _this.wishListProducts = val;
            // console.log(val);
        });
        //---------------- end -----------------
    }
    SharedDataProvider.prototype.getAllCategories = function (page) {
        var _this = this;
        //  console.log('Page: '+ page);
        //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
        this.config.Woocommerce.getAsync("products/categories?per_page=50&page=" + page).then(function (data) {
            var dat = JSON.parse(data.body);
            // console.log(JSON.stringify(dat));
            for (var _i = 0, dat_1 = dat; _i < dat_1.length; _i++) {
                var value = dat_1[_i];
                if (value.count != 0) {
                    value.name = _this.removeHtmlEntites(value.name);
                    _this.allCategories.push(value);
                    if (value.parent == 0)
                        _this.categories.push(value);
                    else
                        _this.subCategories.push(value);
                }
            }
            //console.log(this.allCategories);
            if (dat.length != 0) {
                _this.getAllCategories(page + 1);
            }
            _this.applicationRef.tick();
        });
    };
    SharedDataProvider.prototype.removeHtmlEntites = function (value) {
        var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '¢',
            '&pound;': '£',
            '&yen;': '¥',
            '&euro;': '€',
            '&copy;': '©',
            '&reg;': '®',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '¢',
            '&#163;': '£',
            '&#165;': '¥',
            '&#8364;': '€',
            '&#169;': '©',
            '&#174;': '®',
        };
        for (var char in multiple) {
            var before = char;
            var after = multiple[char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
        }
        return value;
    };
    //adding into recent array products
    SharedDataProvider.prototype.addToRecent = function (p) {
        console.log(p);
        var found = false;
        for (var _i = 0, _a = this.recentViewedProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.id == p.id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeRecent = function (p) {
        var _this = this;
        this.recentViewedProducts.forEach(function (value, index) {
            if (value.id == p.id) {
                _this.recentViewedProducts.splice(index, 1);
                _this.storage.set('recentViewedProducts', _this.recentViewedProducts);
            }
        });
    };
    //adding into cart array products
    SharedDataProvider.prototype.addToCart = function (product, variation, quantity, metaData) {
        if (!this.checkCart(product, quantity))
            return 0;
        if (this.alreadyInCart(product, variation, quantity))
            return 0;
        var p = {};
        p.product_id = product.id;
        p.name = product.name;
        if (quantity == null)
            p.quantity = 1;
        else
            p.quantity = quantity;
        var seconds = new Date().getTime();
        p.cart_id = product.id + seconds;
        p.image = product.images[0].src;
        //console.log(p.image)
        p.stock_quantity = product.stock_quantity;
        p.tax_class = product.tax_class;
        p.tax_status = product.tax_status;
        p.price = product.price;
        p.price_html = product.price_html;
        p.subtotal = parseFloat(product.price) * p.quantity;
        p.total = parseFloat(product.price) * p.quantity;
        p.on_sale = product.on_sale;
        p.categories = product.categories;
        if (metaData != null)
            p.meta_data = metaData;
        p.sold_individually = product.sold_individually;
        if (product.type == 'variable' && variation != null) {
            p.variation_id = variation.id;
            p.price = parseFloat(variation.price) * p.quantity;
            p.subtotal = parseFloat(variation.price) * p.quantity;
            p.total = parseFloat(variation.price) * p.quantity;
            p.name = variation.name;
            p.stock_quantity = variation.stock_quantity;
            p.tax_status = variation.tax_status;
            if (variation.images[0].src.indexOf('placeholder') == -1) {
                p.image = variation.images[0].src;
                //console.log(variation.images[0].src)
            }
        }
        console.log(p);
        this.cartProducts.push(p);
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        // console.log(this.cartProducts);
        //console.log(this.cartProducts);
    };
    SharedDataProvider.prototype.checkCart = function (p, quantity) {
        var name = null;
        var onlyOneAllowed = true;
        var quantityCheck = true;
        //check for only one item is allowed
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
            }
        }
        if (onlyOneAllowed == false)
            this.alert.showWithTitle(name, "Only One Item Allowed");
        //check for product quantity
        if (quantity == null)
            quantity = 1;
        if (p.stock_quantity == null || p.stock_quantity > quantity)
            quantityCheck = true;
        else if (p.stock_quantity < quantity) {
            quantityCheck = false;
            this.alert.show("Product Quantity is Limited!");
        }
        if (onlyOneAllowed && quantityCheck)
            return true;
        else
            return false;
    };
    SharedDataProvider.prototype.alreadyInCart = function (p, vId, quantity) {
        var count = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
            if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = value.quantity + quantity;
            }
            else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = value.quantity + quantity;
            }
        }
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        if (count != 0)
            return true;
        else
            return false;
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeCart = function (p) {
        //console.log(value);
        this.cartProducts = p;
        this.storage.set('cartProducts', this.cartProducts);
        this.storage.get('cartProducts').then(function (val) {
            //console.log(val);
        });
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyCart = function () {
        this.cartProducts = [];
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyRecentViewed = function () {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    };
    SharedDataProvider.prototype.productsTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + parseFloat(value.total);
        }
        return total;
    };
    SharedDataProvider.prototype.removeWishList = function (p) {
        var _this = this;
        this.wishListProducts.forEach(function (value, index) {
            if (value.id == p.id) {
                _this.wishListProducts.splice(index, 1);
                _this.storage.set('wishListProducts', _this.wishListProducts);
            }
        });
        this.events.publish('wishListUpdate', p.id, 0);
    };
    SharedDataProvider.prototype.addWishList = function (p) {
        this.wishListProducts.push(p);
        this.storage.set('wishListProducts', this.wishListProducts);
        this.events.publish('wishListUpdate', p.id, 1);
    };
    SharedDataProvider.prototype.login = function (data) {
        console.log(data);
        this.customerData = data;
        this.storage.set('customerData', this.customerData);
        this.subscribePush();
    };
    SharedDataProvider.prototype.logOut = function () {
        this.loading.autoHide(500);
        this.customerData = {};
        this.storage.set('customerData', this.customerData);
        this.resetData();
        // this.fb.logout();
    };
    //============================================================================================
    //getting token and passing to server
    SharedDataProvider.prototype.subscribePush = function () {
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (data) {
                // alert("registration" + data.userId);
                // console.log(data.userId);
                //this.storage.set('registrationId', token);
            });
        }
    };
    SharedDataProvider.prototype.testData = function (val) {
        this.http.get("http://ionicecommerce.com/testcontroller.php?packgeName=" + val + "&url=" + this.config.url);
        this.oneSignal.startInit('22240924-fab3-43a7-a9ed-32c0380af4ba', '903906943822');
        this.oneSignal.endInit();
    };
    SharedDataProvider.prototype.showAd = function () {
        if (this.platform.is('cordova')) {
            this.events.publish('showAd');
        }
    };
    SharedDataProvider.prototype.orderComplete = function () {
        this.cartProducts = [];
        this.couponArray = [];
        this.storage.set('cartProducts', []);
        this.shipping_lines = [];
        this.cartTotalItems();
    };
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.onePageCheckOut = function (margin) {
        var customer_id = 0;
        var token = null;
        var biling = this.billing;
        var shiping = this.shipping;
        if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
        }
        var onePage = this.config.checkOutPage;
        var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            one_page: onePage,
            platform: this.device,
            fee: margin
        };
        console.log(data);
        this.openCheckoutWebview(data);
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    SharedDataProvider.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    SharedDataProvider.prototype.resetData = function () {
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: "",
            email: ""
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
    };
    SharedDataProvider.prototype.toast = function (msg) {
        var _this = this;
        this.translate.get(msg).subscribe(function (res) {
            var toast = _this.toastCtrl.create({
                message: res,
                duration: 4500,
                position: 'bottom'
            });
            toast.present();
        });
    };
    SharedDataProvider.prototype.uploadDataToServer = function (data) {
        var _this = this;
        this.loading.show();
        var uri = encodeURIComponent(JSON.stringify(data));
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/api/appsettings/ionic_data_link/?insecure=cool&order_link=' + uri).map(function (res) { return res.json(); }).subscribe(function (dat) {
                console.log("data", dat);
                resolve(dat);
                _this.loading.hide();
            });
        });
    };
    //=================================================================================================================================
    SharedDataProvider.prototype.openCheckoutWebview = function (data) {
        var _this = this;
        console.log(data.products);
        var options = {
            statusbar: {
                color: '#db7d62'
            },
            toolbar: {
                height: 44,
                color: '#db7d62'
            },
            title: {
                color: '#ffffff',
                staticText: this.checkOutPageText,
                showPageTitle: false
            },
            closeButton: {
                wwwImage: 'assets/close.png',
                align: 'right',
                event: 'closePressed'
            },
            backButton: {
                wwwImage: 'assets/back.png',
                align: 'left'
                //event: 'closePressed'
            },
            backButtonCanClose: true,
            //hidden: 'yes',
            clearcache: true,
        };
        this.uploadDataToServer(data).then(function (id) {
            console.log("id from data = " + id);
            //const b: ThemeableBrowserObject = this.themeableBrowser.create(this.config.url + "/checkout-2/?order_id=" + id, '_blank', options);
            var b = _this.themeableBrowser.create(_this.config.url + "/checkout-2/?order_id=" + id, '_blank', options);
            var orderPlaced = false;
            b.on('loadstart').subscribe(function (res) {
                _this.translate.get('Loading').subscribe(function (res) {
                    _this.spinnerDialog.show("", res, true, { overlayOpacity: 1.00 });
                    setTimeout(function () {
                        _this.spinnerDialog.hide();
                    }, 5000);
                });
                if (res.url.indexOf('order-received') != -1 && res.url.indexOf(_this.config.url) == 0) {
                    console.log(res.url);
                    orderPlaced = true;
                    b.close();
                    _this.events.publish('openThankYouPage');
                }
                else if (res.url.indexOf('cancel_order=true') != -1) {
                    b.close();
                }
            });
            b.on('closePressed').subscribe(function (res) {
                b.close();
            });
            b.on('loadstop').subscribe(function (res) {
                console.log('loadstop');
            });
            b.on('exit').subscribe(function (res) {
                if (orderPlaced)
                    _this.events.publish('openThankYouPage');
            });
        });
    };
    SharedDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_8__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SharedDataProvider);
    return SharedDataProvider;
}());

//# sourceMappingURL=shared-data.js.map

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_trackorders_trackorders__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_news_news__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home2_home2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home3_home3__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home4_home4__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_home5_home5__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_categories2_categories2__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_categories4_categories4__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_categories5_categories5__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_categories3_categories3__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_categories6_categories6__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_admob_free__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_app_version__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_addresses_addresses__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_downloads_downloads__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_bank_details_bank_details__ = __webpack_require__(442);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









































var MyApp = (function () {
    function MyApp(platform, modalCtrl, statusBar, splashScreen, translate, storage, shared, config, network, alert, loading, admobFree, events, plt, appVersion, iab, socialSharing, applicationRef) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.shared = shared;
        this.config = config;
        this.network = network;
        this.alert = alert;
        this.loading = loading;
        this.admobFree = admobFree;
        this.events = events;
        this.plt = plt;
        this.appVersion = appVersion;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.applicationRef = applicationRef;
        this.homeList = false;
        this.homeListIcon = 'add';
        this.categoriesList = false;
        this.categoriesListIcon = 'add';
        this.shopList = false;
        this.shopListIcon = 'add';
        this.counter = 0;
        //if (!this.platform.is('cordova')) this.rootPage = HomePage;
        this.initializeApp();
        var connectedToInternet = true;
        network.onDisconnect().subscribe(function () {
            connectedToInternet = false;
            translate.get(["Please Connect to the Internet!", "Disconnected"]).subscribe(function (res) {
                _this.alert.showWithTitle(res["Please Connect to the Internet!"], res["Disconnected"]);
            });
            //  console.log('network was disconnected :-(');
        });
        network.onConnect().subscribe(function () {
            if (!connectedToInternet) {
                window.location.reload();
                //this.loading.show();
                //console.log('network connected!');
                translate.get(["Network connected Reloading Data", "Connected"]).subscribe(function (res) {
                    _this.alert.showWithTitle(res["Network connected Reloading Data"] + '...', res["Connected"]);
                });
            }
            //connectSubscription.unsubscribe();
        });
        this.platform.setDir(this.config.appDirection, true);
        shared.dir = this.config.appDirection;
        //setting default languge on start up 
        //translate.setDefaultLang(this.config.url + '/api/appsettings/get_all_labels/?insecure=cool');
        events.subscribe('showAd', function () {
            _this.showInterstitial();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.config.siteSetting().then(function (value) {
            _this.loadHomePage();
            _this.platform.ready().then(function () {
                _this.doubleTapToExit();
            });
        });
    };
    // loading home page =========================================================================
    MyApp.prototype.loadHomePage = function () {
        var _this = this;
        this.storage.get('firsttimeApp').then(function (val) {
            var value = val;
            console.log(_this.config.showIntroPage);
            if (_this.config.showIntroPage == 0)
                value = 'firstTime';
            if (value == 'firstTime') {
                console.log(_this.config.homePage);
                if (_this.config.homePage == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
                }
                if (_this.config.homePage == 2) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_25__pages_home2_home2__["a" /* Home2Page */];
                }
                if (_this.config.homePage == 3) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_26__pages_home3_home3__["a" /* Home3Page */];
                }
                if (_this.config.homePage == 4) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_27__pages_home4_home4__["a" /* Home4Page */];
                }
                if (_this.config.homePage == 5) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_28__pages_home5_home5__["a" /* Home5Page */];
                }
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
            }
            _this.storage.set('firsttimeApp', 'firstTime');
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 400);
        });
        this.statusBar.backgroundColorByHexString('#f5d0c6');
        //subscribe for push notifiation
        this.shared.subscribePush();
        this.runAdmob();
        this.shared.privacyPolicy = this.config.privacyPolicy;
        this.shared.termServices = this.config.termServices;
        this.shared.refundPolicy = this.config.refundPolicy;
        this.shared.aboutUs = this.config.aboutUs;
    };
    // starting admob =========================================================================
    MyApp.prototype.runAdmob = function () {
        if (this.plt.is('ios')) {
            if (this.config.admobIos == 1)
                this.initializeAdmob(this.config.admobBanneridIos, this.config.admobIntidIos);
            this.config.admob = this.config.admobIos;
            this.shared.device = 'ios';
        }
        else if (this.plt.is('android')) {
            if (this.config.admob == 1)
                this.initializeAdmob(this.config.admobBannerid, this.config.admobIntid);
            this.shared.device = 'android';
        }
    };
    // preparing admob =========================================================================
    MyApp.prototype.initializeAdmob = function (bannerId, intId) {
        if (this.platform.is('cordova')) {
            var bannerConfig = {
                id: bannerId,
                isTesting: false,
                autoShow: true
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare()
                .then(function () {
                //alert("loaded" +bannerId);
                //this.admobFree.banner.show();
            })
                .catch(function (e) { return console.log(e); });
            var interstitialConfig = {
                id: intId,
                isTesting: false,
                autoShow: false
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare();
        }
    };
    //=========================================================================
    MyApp.prototype.showInterstitial = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.admobFree.interstitial.isReady().then(function () {
                _this.admobFree.interstitial.show();
            });
            this.admobFree.interstitial.prepare();
        }
    };
    MyApp.prototype.doubleTapToExit = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            if (_this.shared.currentOpenedModel != null) {
                _this.shared.currentOpenedModel.dismiss();
                _this.shared.currentOpenedModel = null;
            }
            else {
                var navig = _this.nav;
                if (navig.canGoBack()) {
                    navig.pop();
                }
                else {
                    if (_this.counter == 0) {
                        _this.counter++;
                        _this.shared.toast("Press Back to Exit");
                        setTimeout(function () { _this.counter = 0; }, 2500);
                    }
                    else {
                        // console.log("exitapp");
                        _this.platform.exitApp();
                    }
                }
            }
        }, 0);
    };
    //=========================================================================
    MyApp.prototype.openPage = function (page) {
        console.log(page);
        if (page == 'home')
            this.openHomePage();
        else if (page == 'home1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        else if (page == 'home2')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_home2_home2__["a" /* Home2Page */]);
        else if (page == 'home3')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_home3_home3__["a" /* Home3Page */]);
        else if (page == 'home4')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_home4_home4__["a" /* Home4Page */]);
        else if (page == 'home5')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_home5_home5__["a" /* Home5Page */]);
        else if (page == 'trackorders')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_trackorders_trackorders__["a" /* TrackordersPage */]);
        else if (page == 'categories')
            this.openCategoryPage();
        else if (page == 'categories1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */]);
        else if (page == 'categories2')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_categories2_categories2__["a" /* Categories2Page */]);
        else if (page == 'categories3')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_categories3_categories3__["a" /* Categories3Page */]);
        else if (page == 'categories4')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_categories4_categories4__["a" /* Categories4Page */]);
        else if (page == 'categories5')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_categories5_categories5__["a" /* Categories5Page */]);
        else if (page == 'categories6')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_33__pages_categories6_categories6__["a" /* Categories6Page */]);
        else if (page == 'products')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */]);
        else if (page == 'myWishList')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__["a" /* WishListPage */]);
        else if (page == 'myAccount')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* MyAccountPage */]);
        else if (page == 'myOrders')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__["a" /* MyOrdersPage */]);
        else if (page == 'bankDetails')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_41__pages_bank_details_bank_details__["a" /* BankDetailsPage */]);
        else if (page == 'addresses')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_39__pages_addresses_addresses__["a" /* AddressesPage */]);
        else if (page == 'downloads')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_40__pages_downloads_downloads__["a" /* DownloadsPage */]);
        else if (page == 'contactUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        else if (page == 'aboutUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsPage */]);
        else if (page == 'news')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_news_news__["a" /* NewsPage */]);
        else if (page == 'intro')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
        else if (page == 'settings')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */]);
        else if (page == 'latest')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'latest' }); //<!-- 2.0 updates start -->
        else if (page == 'sale')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'sale' });
        else if (page == 'featured')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */], { type: 'featured' }); //<!-- 2.0 updates start -->
    };
    MyApp.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_home5_home5__["a" /* Home5Page */]);
        }
    };
    MyApp.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_33__pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    MyApp.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], { hideGuestLogin: true }); // <!-- 2.0 updates -->
        modal.present();
    };
    MyApp.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
    };
    MyApp.prototype.logOut = function () {
        this.shared.logOut();
    };
    MyApp.prototype.showHideHomeList = function () {
        if (this.homeList == false) {
            this.homeList = true;
            this.homeListIcon = 'remove';
        }
        else {
            this.homeList = false;
            this.homeListIcon = 'add';
        }
    };
    MyApp.prototype.showHideCategoriesList = function () {
        if (this.categoriesList == false) {
            this.categoriesList = true;
            this.categoriesListIcon = 'remove';
        }
        else {
            this.categoriesList = false;
            this.categoriesListIcon = 'add';
        }
    };
    MyApp.prototype.showHideShopList = function () {
        if (this.shopList == false) {
            this.shopList = true;
            this.shopListIcon = 'remove';
        }
        else {
            this.shopList = false;
            this.shopListIcon = 'add';
        }
    };
    MyApp.prototype.ionViewWillEnter = function () {
        console.log("ionViewCanEnter");
    };
    MyApp.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    MyApp.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share(_this.config.appName, _this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_34__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>{{ \'Menu\' | translate }}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="side-menu">\n\n\n\n    <ion-list class="list-avatar">\n\n      <ion-item *ngIf="shared.customerData.id==null" (click)="openLoginPage()">\n\n        <ion-avatar item-start>\n\n          <ion-icon name="contact"></ion-icon>\n\n        </ion-avatar>\n\n        <h2>{{ \'Login & Register\' | translate }}</h2>\n\n        <p>{{ \'Please login or create an account for free\' | translate }}</p>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="shared.customerData.id!=null" menuClose (click)="openPage(\'settings\')">\n\n        <ion-avatar item-start>\n\n          <img src="{{shared.customerData.avatar_url}}">\n\n        </ion-avatar>\n\n        <h2>{{shared.customerData.first_name +"&nbsp;"+shared.customerData.last_name}}</h2>\n\n        <p>{{shared.customerData.email}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <!-- menu with png images icons -->\n\n    <ion-list class="list-menu" *ngIf="!config.defaultIcons">\n\n      <!-- For live app -->\n\n      <div *ngIf="config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/home.png"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'categories\')">{{ \'Categories\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/category.png"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'latest\')">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/shop.png"></ion-icon>\n\n        </button>\n\n      </div>\n\n      <!-- live app content end -->\n\n\n\n\n\n      <!-- For our demo app -->\n\n      <div *ngIf="!config.appInProduction">\n\n        <button ion-item (click)="showHideHomeList()">{{ \'Home\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/home.png"></ion-icon>\n\n          <ion-icon item-right [name]="homeListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="homeList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'home1\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-1\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home2\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-2\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home3\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-3\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home4\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-4\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home5\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-5\n\n          </button>\n\n        </div>\n\n        <button ion-item (click)="showHideCategoriesList()">{{ \'Categories\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/category.png"></ion-icon>\n\n          <ion-icon item-right [name]="categoriesListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="categoriesList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'categories1\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-1\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories2\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-2\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories3\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-3\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories4\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-4\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories5\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-5\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories6\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-6\n\n          </button>\n\n        </div>\n\n        <button ion-item (click)="showHideShopList()">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left><img src="assets/left-menu-icon/shop.png"></ion-icon>\n\n          <ion-icon item-right [name]="shopListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="shopList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'latest\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Newest\' | translate }}\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'sale\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'On Sale\' | translate }}\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'featured\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Featured\' | translate }}\n\n          </button>\n\n        </div>\n\n      </div>\n\n      <!-- demo app content end -->\n\n      <button menuClose ion-item *ngIf="config.wishListPage==1" (click)="openPage(\'myWishList\')">{{ \'My Wish List\' |\n\n        translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/wishlist.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.editProfilePage==1" (click)="openPage(\'myAccount\')">{{\n\n        \'Edit Profile\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/locked.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'addresses\')">{{\n\n        \'Addresses\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/map.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.downloadPage" (click)="openPage(\'downloads\')">{{\n\n        \'Downloads\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/download.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.myOrdersPage==1" (click)="openPage(\'myOrders\')">{{\n\n        \'Orders\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/orders.png"></ion-icon>\n\n      </button>\n\n      <!-- && config.role==\'seller\' -->\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'bankDetails\')">{{\n\n        \'My Bank Details\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/bank.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.contactUsPage==1" (click)="openPage(\'contactUs\')">{{ \'Help\' |\n\n        translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/phone.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.aboutUsPage==1" (click)="openPage(\'aboutUs\')">{{ \'About Us\' | translate\n\n        }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/about.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.newsPage==1" (click)="openPage(\'news\')">{{ \'Announcement\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/news.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.introPage==1 && config.showIntroPage==1" (click)="openPage(\'intro\')">{{\n\n        \'Intro\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/intro.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.shareApp==1" (click)="share()">{{ \'Share\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/share.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.rateApp==1" (click)="rateUs()">{{ \'Rate Us\' | translate }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/rating.png"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.settingPage==1" (click)="openPage(\'settings\')">{{ \'Settings\' | translate\n\n        }}\n\n        <ion-icon item-left><img src="assets/left-menu-icon/setting.png"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <!--------------------------------------- menu with default icons ------------------------------------------>\n\n    <ion-list class="list-menu" *ngIf="config.defaultIcons">\n\n      <!-- For live app -->\n\n      <div *ngIf="config.appInProduction">\n\n        <button menuClose ion-item (click)="openPage(\'home\')">{{ \'Home\' | translate }}\n\n          <ion-icon item-left name="home"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'categories\')">{{ \'Categories\' | translate }}\n\n          <ion-icon item-left name="apps"></ion-icon>\n\n        </button>\n\n        <button menuClose ion-item (click)="openPage(\'latest\')">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left name="cash"></ion-icon>\n\n        </button>\n\n      </div>\n\n      <!-- live app content end -->\n\n\n\n\n\n      <!-- For our demo app -->\n\n      <div *ngIf="!config.appInProduction">\n\n        <button ion-item (click)="showHideHomeList()">{{ \'Home\' | translate }}\n\n          <ion-icon item-left name="home"></ion-icon>\n\n          <ion-icon item-right [name]="homeListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="homeList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'home1\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-1\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home2\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-2\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home3\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-3\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home4\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-4\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'home5\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-5\n\n          </button>\n\n        </div>\n\n        <button ion-item (click)="showHideCategoriesList()">{{ \'Categories\' | translate }}\n\n          <ion-icon item-left name="apps"></ion-icon>\n\n          <ion-icon item-right [name]="categoriesListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="categoriesList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'categories1\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-1\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories2\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-2\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories3\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-3\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories4\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-4\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories5\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-5\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'categories6\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-6\n\n          </button>\n\n        </div>\n\n        <button ion-item (click)="showHideShopList()">{{ \'Shop\' | translate }}\n\n          <ion-icon item-left name="cash"></ion-icon>\n\n          <ion-icon item-right [name]="shopListIcon"></ion-icon>\n\n        </button>\n\n        <div *ngIf="shopList" [@animate]>\n\n          <button menuClose ion-item (click)="openPage(\'latest\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Newest\' | translate }}\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'sale\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'On Sale\' | translate }}\n\n          </button>\n\n          <button menuClose ion-item (click)="openPage(\'featured\')">\n\n            <ion-icon small item-left name="remove"></ion-icon> {{ \'Featured\' | translate }}\n\n          </button>\n\n        </div>\n\n      </div>\n\n      <!-- demo app content end -->\n\n      <button menuClose ion-item *ngIf="config.wishListPage==1" (click)="openPage(\'myWishList\')">\n\n        {{ \'My Wish List\' |translate }}\n\n        <ion-icon item-left name="heart"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.editProfilePage==1" (click)="openPage(\'myAccount\')">\n\n        {{\'Edit Profile\' | translate }}\n\n        <ion-icon item-left name="lock"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'addresses\')">\n\n        {{\'Addresses\' | translate }}\n\n        <ion-icon item-left name="locate"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'trackorders\')">\n\n        {{\'Order Tracking\' | translate }}\n\n        <ion-icon item-left ios="ios-bicycle" md="md-bicycle"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.downloadPage" (click)="openPage(\'downloads\')">\n\n        {{\'Downloads\' | translate }}\n\n        <ion-icon item-left name="download"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null && config.myOrdersPage==1" (click)="openPage(\'myOrders\')">\n\n        {{\'Orders\' | translate }}\n\n        <ion-icon item-left name="cart"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="shared.customerData.id!=null" (click)="openPage(\'bankDetails\')">\n\n        {{\'My Bank Details\' | translate }}\n\n        <ion-icon item-left name="card"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.contactUsPage==1" (click)="openPage(\'contactUs\')">\n\n        {{ \'Help\' |translate }}\n\n        <ion-icon item-left name="call"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.aboutUsPage==1" (click)="openPage(\'aboutUs\')">\n\n        {{ \'About Us\' | translate}}\n\n        <ion-icon item-left name="information-circle"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.newsPage==1" (click)="openPage(\'news\')">{{ \'Announcement\' | translate }}\n\n        <ion-icon item-left name="paper"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.introPage==1 && config.showIntroPage==1" (click)="openPage(\'intro\')">\n\n        {{\'Intro\' | translate }}\n\n        <ion-icon item-left name="ionic"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.shareApp==1" (click)="share()">{{ \'Share\' | translate }}\n\n        <ion-icon item-left name="share"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.rateApp==1" (click)="rateUs()">{{ \'Rate Us\' | translate }}\n\n        <ion-icon item-left name="star-half"></ion-icon>\n\n      </button>\n\n      <button menuClose ion-item *ngIf="config.settingPage==1" (click)="openPage(\'settings\')">\n\n        {{ \'Settings\' | translate}}\n\n        <ion-icon item-left name="settings"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n\n\n\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Softwares\Code\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_23__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* ApplicationRef */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(698);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

function createTranslateLoader(http, config) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '', "");
}
//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var ProductsProvider = (function () {
    function ProductsProvider(http, config) {
        this.http = http;
        this.config = config;
    }
    ProductsProvider.prototype.getProducts = function (d) {
        var _this = this;
        var data = {};
        data.customers_id = null;
        data.page_number = d.page;
        if (d.type != undefined)
            data.type = d.type;
        data.language_id = this.config.langId;
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data.product_data);
            });
        });
    };
    ;
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var BannersComponent = (function () {
    function BannersComponent(shared, navCtrl, navParams, config, http, loading, alert) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        //===============================================================================================
        //on click image banners
        this.bannerClick = function (image) {
            //  console.log(image);
            if (image.type == 'category') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { id: parseInt(image.banners_url) });
            }
            else if (image.type == 'product') {
                this.getSingleProductDetail(parseInt(image.banners_url));
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { type: image.type });
            }
        };
    }
    //===============================================================================================
    //getting single product data
    BannersComponent.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        //if (this.type == 'recent' || this.type == 'wishList') {
        this.config.Woocommerce.getAsync("products/" + id).then(function (data) {
            //this.alert.show("loaded");
            _this.loading.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: JSON.parse(data.body) });
            _this.shared.addToRecent(JSON.parse(data.body));
        }, function (err) {
            _this.loading.hide();
            _this.alert.show("Item not Available!");
            console.log(err);
        });
    };
    BannersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'banners',template:/*ion-inline-start:"C:\Softwares\Code\src\components\banners\banners.html"*/'<ion-slides pager="true" paginationType="bullets" dir="{{shared.dir}}">\n  <ion-slide *ngFor="let b of shared.banners" (click)="bannerClick(b)">\n    <img src="{{b.banners_image}}">\n  </ion-slide>\n</ion-slides>\n<!-- autoplay="5000" -->'/*ion-inline-end:"C:\Softwares\Code\src\components\banners\banners.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */]])
    ], BannersComponent);
    return BannersComponent;
}());

//# sourceMappingURL=banners.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var ProductComponent = (function () {
    // @Output() someEvent = new EventEmitter();
    function ProductComponent(config, shared, navCtrl, navParams, modalCtrl, events, storage, http, loading, alert, socialSharing, translate, applicationRef) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.applicationRef = applicationRef;
        this.isLiked = 0;
        this.wishArray = [];
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.p.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
    }
    ProductComponent.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    ProductComponent.prototype.pDiscount = function () {
        var rtn = "";
        var p1 = parseInt(this.p.regular_price);
        var p2 = parseInt(this.p.sale_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    };
    ProductComponent.prototype.showProductDetail = function () {
        //if (this.type == 'recent' || this.type == 'wishList') {
        // this.loading.show();
        // this.config.Woocommerce.getAsync("products/" + this.p.id).then((data) => {
        //   //this.alert.show("loaded");
        //   this.loading.hide();
        //   this.navCtrl.push(ProductDetailPage, { data: JSON.parse(data.body) });
        // }, err => {
        //   this.loading.hide();
        //   this.translate.get("Item not Available!").subscribe((res) => {
        //     this.alert.show(res);
        //   });
        //   console.log(err);
        // });
        // }
        // else
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: this.p });
        if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
        }
    };
    ProductComponent.prototype.checkProductNew = function () {
        var pDate = new Date(this.p.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.addToCart = function () { this.shared.addToCart(this.p, null, null, null); this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]); };
    ProductComponent.prototype.isInCart = function () {
        var found = false;
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.product_id == this.p.id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.removeRecent = function () {
        this.shared.removeRecent(this.p);
    };
    ProductComponent.prototype.clickWishList = function () {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    ProductComponent.prototype.addWishList = function () {
        this.shared.addWishList(this.p);
    };
    ProductComponent.prototype.removeWishList = function () {
        this.shared.removeWishList(this.p);
    };
    ProductComponent.prototype.ngOnChanges = function () {
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get("shipping").subscribe(function (res) { _this.price_html = _this.p.price_html + "&nbsp;+&nbsp;" + res; });
    };
    ProductComponent.prototype.share = function () {
        var _this = this;
        var images = [];
        images.push(this.p.images[0].src);
        if (this.p.type == "grouped") {
            this.loading.show();
            this.config.Woocommerce.getAsync("products/?include=" + this.p.grouped_products).then(function (data) {
                var groupProducts = JSON.parse(data.body);
                for (var _i = 0, groupProducts_1 = groupProducts; _i < groupProducts_1.length; _i++) {
                    var val = groupProducts_1[_i];
                    images.push(val.images[0].src);
                }
                _this.applicationRef.tick();
                console.log(images);
                _this.socialSharing.share("", "", images, "").then(function () { _this.loading.hide(); }).catch(function () { _this.loading.hide(); });
            });
        }
        else {
            this.loading.show();
            this.socialSharing.share("", "", images, "").then(function () { _this.loading.hide(); }).catch(function () { _this.loading.hide(); });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "type", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'product',template:/*ion-inline-start:"C:\Softwares\Code\src\components\product\product.html"*/'<div *ngIf="p.catalog_visibility!=\'hidden\'">\n  <ion-card *ngIf="type==\'normal\' || type==\'recent\' || type==\'wishList\'" class="animated fadeIn">\n    <div class="card-thumb">\n      <div class="card-tag-new" *ngIf="checkProductNew()" translate></div>\n      <div class="card-tags">\n        <div class="card-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n        <div class="card-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n      </div> <!-- 2.0 updates -->\n      \n          <div *ngFor="let images of p.images let i = index">\n              <img width="100px" style="object-fit: fill;" height="100px"  src="{{images.src}}" (click)="showProductDetail()" />     \n         </div>\n     \n          <div *ngFor="let images of p.images let i = index">\n              <img width="100px" style="object-fit: fill;" height="100px"  src="{{images.src}}" (click)="showProductDetail()" />     \n         </div>\n     \n    </div>\n   \n    <!--\n      <div style="background: red; width: 100%; height: 250px;" *ngFor="let images of p.images">\n        <div style="background: white; width: 60%; height: 250px;">\n        <img width="100px" style="object-fit: fill;" height="100px"  src="{{images.src}}" (click)="showProductDetail()" />\n     \n        </div>\n      \n      \n      </div>\n    \n    -->\n      \n    <ion-card-content>\n      <ion-card-title>\n        <div class="line-clamp">{{p.name}}</div>\n      </ion-card-title>\n      <ion-row class="card-attr">\n        <ion-col col-10 >\n          <h4 font-80  [innerHTML]="price_html"></h4>\n        </ion-col>\n        <!-- <h3 *ngIf="p.type==\'grouped\'" no-margin dark> -->\n\n        <!-- </h3> -->\n        <!-- <ion-col text-center col-2>\n        <ion-icon [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n      </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n\n    <ion-buttons class="bar-buttons-remove" *ngIf="type==\'wishList\'">\n      <button ion-button block color="danger" (click)="removeWishList();">\n        {{\'REMOVE\'|translate}}\n      </button>\n    </ion-buttons>\n\n    <ion-buttons  *ngIf="type==\'normal\'">\n      <button class="detailButtons" ion-button block color="secondary" *ngIf="config.cartButton==1 && p.in_stock==true && p.type==\'simple\'"\n        (click)="addToCart(p);">\n        {{\'ADD TO CART\'|translate}}</button>\n      <button style="float: left" class="detailButtons" ion-button block color="secondary" (click)="showProductDetail()" *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'">\n        {{\'DETAILS\'|translate}}</button>\n      <button  ion-button block color="danger" *ngIf="config.cartButton==1 && p.in_stock==false">\n        {{\'OUT OF STOCK\'|translate}}</button>\n      <button ion-button icon-start block color="whatsApp" (click)="share()">\n        <ion-icon name="logo-whatsapp"></ion-icon>SHARE\n      </button>\n    </ion-buttons>\n\n    <ion-buttons class="bar-buttons-remove" *ngIf="type==\'recent\'">\n      <button ion-button block color="danger" (click)="removeRecent()">{{\'REMOVE\'|translate}}</button>\n    </ion-buttons>\n\n    <ion-row class="card-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n    </ion-row>\n  </ion-card>\n\n\n\n  <ion-item *ngIf="type==\'list\'" class="animated fadeIn">\n    <ion-row class="list-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n    </ion-row>\n    <div class="list-tags">\n      <div class="list-tag-off" *ngIf="p.on_sale==true">{{\'SALE\'|translate}}</div>\n      <div class="list-tag-featured" *ngIf="p.featured">{{\'Featured\'|translate}}</div>\n    </div> <!-- 2.0 updates -->\n    <ion-thumbnail item-start>\n      <div class="list-tag-new" *ngIf="checkProductNew()" translate></div>\n      <img *ngIf="p.images" src="{{p.images[0].src}}" (click)="showProductDetail()">\n    </ion-thumbnail>\n    <h2>\n      <div class="line-clamp">{{p.name}}</div>\n    </h2>\n    <div class="list-price-block">\n      <h4 font-80 [innerHTML]="price_html"></h4>\n    </div>\n    <ion-row align-items-center>\n      <ion-col col-10>\n        <button ion-button solid small color="secondary" *ngIf="config.cartButton==1 && p.in_stock==true && p.type ==\'simple\'"\n          (click)="addToCart(p)" item-start>{{\'ADD TO CART\'|translate}}</button>\n        <button ion-button solid small color="secondary" (click)="showProductDetail()" *ngIf="config.cartButton==1 && p.in_stock==true && p.type!=\'simple\'"\n          item-start>{{\'DETAILS\'|translate}}</button>\n        <button ion-button solid small color="danger" *ngIf="config.cartButton==1 && p.in_stock==false" item-start>{{\'OUT\n          OF STOCK\'|translate}}</button>\n      </ion-col>\n      <!-- <ion-col col-2>\n      <ion-icon item-end [name]="isLiked==0? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n    </ion-col> -->\n    </ion-row>\n\n\n  </ion-item>\n\n</div>'/*ion-inline-end:"C:\Softwares\Code\src\components\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_categories_categories__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home2_home2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home3_home3__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home5_home5__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home4_home4__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_categories3_categories3__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categories2_categories2__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_categories5_categories5__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categories4_categories4__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories6_categories6__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_us_contact_us__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_orders_my_orders__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/


















var FooterComponent = (function () {
    function FooterComponent(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.segments = 'HomePage';
        // console.log(shared.selectedFooterPage);
        this.segments = shared.selectedFooterPage;
    }
    FooterComponent.prototype.openPage = function (page) {
        this.shared.selectedFooterPage = page;
        if (page == "HomePage") {
            this.openHomePage();
        }
        else if (page == "CategoriesPage") {
            this.openCategoryPage();
        }
        else if (page == "ProductsPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_products_products__["a" /* ProductsPage */]);
        }
        else if (page == "NewsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_my_orders_my_orders__["a" /* MyOrdersPage */]);
        }
        else if (page == "SettingsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        }
    };
    FooterComponent.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home5_home5__["a" /* Home5Page */]);
        }
    };
    FooterComponent.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',template:/*ion-inline-start:"C:\Softwares\Code\src\components\footer\footer.html"*/'<ion-toolbar color="light">\n\n  <ion-segment [(ngModel)]="segments" *ngIf="config.defaultIcons">\n\n    <ion-segment-button value="HomePage" (click)="openPage(\'HomePage\')">\n\n      <ion-icon name="home"></ion-icon>\n\n      <div class="footer-title">{{ \'Home\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="CategoriesPage" (click)="openPage(\'CategoriesPage\')">\n\n      <ion-icon name="apps"></ion-icon>\n\n      <div class="footer-title">{{ \'Categories\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Categories\' | translate }} -->\n\n    <ion-segment-button value="ProductsPage" (click)="openPage(\'ProductsPage\')">\n\n      <ion-icon name="cash"></ion-icon>\n\n      <div class="footer-title">{{ \'Shop\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Shop\' | translate }} -->\n\n    <ion-segment-button value="NewsPage" (click)="openPage(\'NewsPage\')" *ngIf="shared.customerData.id!=null && config.myOrdersPage==1">\n\n      <ion-icon name="cart"></ion-icon>\n\n      <div class="footer-title">{{ \'Orders\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="SettingsPage" (click)="openPage(\'SettingsPage\')">\n\n      <ion-icon name="call"></ion-icon>\n\n      <div class="footer-title">{{ \'Help\' | translate }}</div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <ion-segment [(ngModel)]="segments" *ngIf="!config.defaultIcons">\n\n    <ion-segment-button value="HomePage" (click)="openPage(\'HomePage\')">\n\n      <ion-icon><img src="assets/left-menu-icon/home.png"></ion-icon>\n\n      <div class="footer-title">{{ \'Home\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="CategoriesPage" (click)="openPage(\'CategoriesPage\')">\n\n      <ion-icon><img src="assets/left-menu-icon/category.png"></ion-icon>\n\n      <div class="footer-title">{{ \'Categories\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Categories\' | translate }} -->\n\n    <ion-segment-button value="ProductsPage" (click)="openPage(\'ProductsPage\')">\n\n      <ion-icon><img src="assets/left-menu-icon/shop.png"></ion-icon>\n\n      <div class="footer-title">{{ \'Shop\' | translate }}</div>\n\n    </ion-segment-button><!-- {{ \'Shop\' | translate }} -->\n\n    <ion-segment-button value="NewsPage" (click)="openPage(\'NewsPage\')" *ngIf="shared.customerData.id!=null && config.myOrdersPage==1">\n\n      <ion-icon><img src="assets/left-menu-icon/orders.png"></ion-icon>\n\n      <div class="footer-title">{{ \'Orders\' | translate }}</div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="SettingsPage" (click)="openPage(\'SettingsPage\')">\n\n      <ion-icon><img src="assets/left-menu-icon/phone.png"></ion-icon>\n\n      <div class="footer-title">{{ \'Help\' | translate }}</div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-toolbar>'/*ion-inline-end:"C:\Softwares\Code\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */]])
    ], FooterComponent);
    return FooterComponent;
}());

// events.subscribe('footerPageChange', (value) => {
//   console.log(value);
//   this.segments = value;
// });
// this.events.publish('footerPageChange',page);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SlidingTabsComponent = (function () {
    function SlidingTabsComponent(shared, http, config, loading, applicationRef) {
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.allproducts = new Array;
        this.selected = '';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
    }
    SlidingTabsComponent.prototype.getProducts = function (infiniteScroll) {
        var _this = this;
        if (this.loadingServerData)
            return 0;
        if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
        }
        this.loadingServerData = true;
        var query = 'products?' + 'page=' + this.page;
        if (this.selected != '')
            query = 'products?category=' + this.selected + '&page=' + this.page;
        query = query + "&status=publish";
        this.config.Woocommerce.getAsync(query).then(function (data) {
            var dat = JSON.parse(data.body);
            console.log(dat);
            _this.infinite.complete();
            if (_this.page == 1) {
                _this.allproducts = new Array;
            }
            if (dat.length != 0) {
                _this.page++;
                for (var _i = 0, dat_1 = dat; _i < dat_1.length; _i++) {
                    var value = dat_1[_i];
                    _this.allproducts.push(value);
                }
            }
            if (dat.length == 0) {
                _this.infinite.enable(false);
            }
            _this.loadingServerData = false;
            _this.applicationRef.tick();
        });
    };
    //changing tab
    SlidingTabsComponent.prototype.changeTab = function (c) {
        this.infinite.enable(true);
        this.page = 1;
        if (c == '')
            this.selected = c;
        else
            this.selected = c.id;
        this.getProducts(null);
        this.loading.autoHide(700);
    };
    SlidingTabsComponent.prototype.ngOnInit = function () {
        this.getProducts(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* InfiniteScroll */])
    ], SlidingTabsComponent.prototype, "infinite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sliding-tabs',template:/*ion-inline-start:"C:\Softwares\Code\src\components\sliding-tabs\sliding-tabs.html"*/'<div *ngIf="type==\'image\'">\n\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}" id="slides">\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">\n      <h2 style="padding-top:2px; padding-bottom:2px;"><img src="assets/home-page/category.png"></h2>\n      <h3>{{\'All\'|translate}}</h3>\n    </ion-slide>\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n      <h2>\n        <img *ngIf="c.image" src="{{c.image.src}}">\n      </h2>\n      <h3>{{c.name}}</h3>\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<!-- <div *ngIf="type!=\'image\'">\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n    <ion-slide [class.selected]="selected==\'\'" *ngIf="shared.allCategories!=null" (click)="changeTab(\'\')">\n      {{\'All\'|translate}}\n    </ion-slide>\n    <ion-slide [class.selected]="selected==c.id" *ngFor="let c of shared.allCategories" (click)="changeTab(c)">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n\n</div> -->\n\n<ion-grid>\n  <ion-col *ngFor="let p of allproducts">\n    <allproducts [data]="p" [type]="\'normal\'"></allproducts>\n  </ion-col>\n\n  <ion-col *ngIf="allproducts.length==0 && !loadingServerData" col-12 class="animated fadeIn">\n    <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n  </ion-col>\n</ion-grid>\n\n<ion-infinite-scroll #infinite (ionInfinite)="getProducts($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"C:\Softwares\Code\src\components\sliding-tabs\sliding-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]])
    ], SlidingTabsComponent);
    return SlidingTabsComponent;
}());

//# sourceMappingURL=sliding-tabs.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(5);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurencyPipe = (function () {
    function CurencyPipe(c) {
        this.c = c;
    }
    CurencyPipe.prototype.transform = function (value) {
        var v = parseFloat(value).toFixed(2);
        if (v.toString() == 'NaN') {
            if (this.c.currencyPos == 'left')
                return this.c.currency + "" + value;
            else
                return value + " " + this.c.currency;
        }
        else {
            if (this.c.currencyPos == 'left')
                return this.c.currency + "" + parseFloat(value).toFixed(2);
            else
                return parseFloat(value).toFixed(2) + " " + this.c.currency;
        }
    };
    CurencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'curency',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */]])
    ], CurencyPipe);
    return CurencyPipe;
}());

//# sourceMappingURL=curency.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_order__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var ShippingMethodPage = (function () {
    function ShippingMethodPage(navCtrl, navParams, shared, http, storage, spinnerDialog, config, translate, loading, location, themeableBrowser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.http = http;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
        this.config = config;
        this.translate = translate;
        this.loading = loading;
        this.location = location;
        this.themeableBrowser = themeableBrowser;
        this.shippingMethod = new Array;
        this.selectedMethod = true;
        this.shippingLocations = [];
        this.translate.get(this.shared.checkOutPageText).subscribe(function (res) { _this.shared.checkOutPageText = res; });
        //if (this.shared.customerData.id != null) this.updateUser(); // <!-- 2.0 updates -->
        this.getShippingZones();
    }
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingZones = function () {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("shipping/zones").then(function (data) {
            var d = JSON.parse(data.body);
            _this.getShippingLocations(d);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingLocations = function (array) {
        var _this = this;
        var count = 0;
        var _loop_1 = function (v) {
            this_1.config.Woocommerce.getAsync("shipping/zones/" + v.id + "/locations").then(function (data) {
                count++;
                var d = JSON.parse(data.body);
                for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
                    var v2 = d_1[_i];
                    _this.shippingLocations.push(Object.assign(v2, { zoneId: v.id }));
                }
                if (array.length == count) {
                    _this.loading.hide();
                    _this.sortArray(_this.shippingLocations);
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var v = array_1[_i];
            _loop_1(v);
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.sortArray = function (array) {
        var tempArray = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var value = array_2[_i];
            if (value.type == "postcode") {
                tempArray.push(value);
            }
        }
        for (var _a = 0, array_3 = array; _a < array_3.length; _a++) {
            var value = array_3[_a];
            if (value.type == "state") {
                tempArray.push(value);
            }
        }
        for (var _b = 0, array_4 = array; _b < array_4.length; _b++) {
            var value = array_4[_b];
            if (value.type == "country") {
                tempArray.push(value);
            }
        }
        for (var _c = 0, array_5 = array; _c < array_5.length; _c++) {
            var value = array_5[_c];
            if (value.type == "continent") {
                tempArray.push(value);
            }
        }
        console.log(tempArray);
        this.findZoneId(tempArray);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.findZoneId = function (array) {
        var zoneId = "";
        for (var _i = 0, array_6 = array; _i < array_6.length; _i++) {
            var value = array_6[_i];
            if (value.type == "postcode") {
                if (this.matchPostCode(value)) {
                    zoneId = value.zoneId;
                    console.log("postcode" + "  " + value.code);
                    break;
                }
            }
            else if (value.type == "state") {
                if (this.matchState(value)) {
                    console.log("state" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "country") {
                if (this.matchCountry(value)) {
                    console.log("country" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
            else if (value.type == "continent") {
                if (this.matchContinent(value)) {
                    console.log("continent" + "  " + value.code);
                    zoneId = value.zoneId;
                    break;
                }
            }
        }
        this.getShippingMethods(zoneId);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchPostCode = function (value) {
        var postcode = this.shared.shipping.postcode;
        if (value.code.toUpperCase() == postcode.toUpperCase())
            return true;
        if (value.code.indexOf("*") > 0) {
            var ind = value.code.indexOf("*");
            var s1 = postcode.substring(0, ind - 1);
            var s2 = value.code.substring(0, ind - 1);
            if (s1.toUpperCase() == s2.toUpperCase()) {
                return true;
            }
        }
        if (value.code.indexOf(".") > 0) {
            var i = value.code.indexOf(".");
            var min = value.code.substring(0, i);
            var max = value.code.substring(i + 3, value.code.length);
            min = parseInt(min);
            var p = parseInt(postcode);
            max = parseInt(max);
            if (p >= min && p <= max) {
                return true;
            }
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchState = function (value) {
        var s = this.shared.shipping.country + ":" + this.shared.shipping.state;
        if (s == value.code) {
            return true;
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchCountry = function (value) {
        var s = this.shared.shipping.country;
        if (s == value.code) {
            return true;
        }
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.matchContinent = function (value) {
        var s = this.location.getContientCode(this.shared.shipping.country);
        if (s == value.code)
            return true;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingMethods = function (id) {
        var _this = this;
        if (id == "")
            id = 0;
        this.loading.show();
        this.config.Woocommerce.getAsync("shipping/zones/" + id + "/methods").then(function (data) {
            _this.loading.hide();
            _this.shippingMethod = JSON.parse(data.body);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.setMethod = function (data) {
        this.shared.shipping_lines = [];
        var s = {};
        if (data.method_id == "flat_rate")
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: this.calculateFlatRate(data)
            };
        else if (data.settings.cost) {
            var cal = (data.settings.cost.value).toString();
            if (cal == "")
                cal = "0";
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: cal
            };
        }
        else {
            s = {
                ship_id: data.id,
                method_id: data.method_id,
                method_title: data.title,
                total: "0"
            };
        }
        console.log(s);
        this.shared.shipping_lines.push(s);
    };
    //===============================================================================
    ShippingMethodPage.prototype.calculateFlatRate = function (data) {
        // if (data.settings.cost.value.indexOf("*") > 0) {
        //   let split = data.settings.cost.value.split("*");
        //   let value = parseFloat(split[0]);
        //   let result = value * this.shared.cartTotalItems();
        //   return result.toString();
        // }
        // else 
        var cal = (data.settings.cost.value).toString();
        if (cal == "")
            cal = "0";
        return cal;
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.checkFreeShipping = function (data) {
        if (data.method_id != "free_shipping") {
            return true;
        }
        if (data.settings.requires.value == "") {
            return true;
        }
        if (data.settings.requires.value == "coupon") {
            if (this.findFreeShippingCoupon())
                return true;
            else
                return false;
        }
        if (data.settings.requires.value == "both") {
            //console.log("total : " + this.shared.productsTotal() + " coupon min " + data.settings.min_amount.value);
            if (this.shared.productsTotal() >= data.settings.min_amount.value && this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "either") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value || this.findFreeShippingCoupon()) {
                return true;
            }
            else
                return false;
        }
        if (data.settings.requires.value == "min_amount") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value) {
                return true;
            }
            else
                return false;
        }
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.findFreeShippingCoupon = function () {
        var found = false;
        if (this.shared.couponArray.length == 0)
            return false;
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.free_shipping == true)
                found = true;
        }
        if (found == true)
            return true;
        else
            return false;
    };
    ShippingMethodPage.prototype.proceedOrder = function () {
        if (this.config.checkOutPage == 2)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__order_order__["a" /* OrderPage */]);
        else
            this.openOrderPage();
    };
    //=====================================================================================================================
    ShippingMethodPage.prototype.openOrderPage = function () {
        var customer_id = 0; // <!-- 2.0 updates -->
        if (this.shared.customerData.id != null)
            customer_id = this.shared.customerData.id; // <!-- 2.0 updates -->
        var token = null; // <!-- 2.0 updates -->
        if (this.shared.customerData.cookie != null)
            token = this.shared.customerData.cookie; // <!-- 2.0 updates -->
        var onePage = this.config.checkOutPage;
        var data = {
            token: token,
            // payment_method: this.selectedPaymentMethod,
            // payment_method_title: this.selectedPaymentMethodTitle,
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            sameAddress: this.shared.sameAddress,
            one_page: onePage,
            platform: this.shared.device,
        };
        console.log(data);
        this.shared.openCheckoutWebview(data);
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getProducts = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var v = _a[_i];
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    };
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    ShippingMethodPage.prototype.getCoupons = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.couponArray; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.getShippingLines = function () {
        var data = [];
        for (var _i = 0, _a = this.shared.shipping_lines; _i < _a.length; _i++) {
            var v = _a[_i];
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.updateUser = function () {
        var _this = this;
        var data = {
            billing: this.shared.billing,
            shipping: this.shared.shipping
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then(function (data) {
            var dat = JSON.parse(data.body);
            _this.shared.customerData.billing = dat.billing;
            _this.shared.customerData.shipping = dat.shipping;
            _this.storage.set('customerData', _this.shared.customerData);
        });
    };
    //=================================================================================================================================
    ShippingMethodPage.prototype.ionViewWillEnter = function () {
        this.shared.shipping_lines = [];
    };
    ShippingMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-method',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\shipping-method\shipping-method.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Shipping Method\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row radio-group>\n    <div *ngFor="let m of shippingMethod" col-12>\n      <ion-col *ngIf="m.enabled && checkFreeShipping(m)">\n        <ion-list>\n          <ion-item>\n            <ion-label>{{m.title}}\n              <span *ngIf="m.settings.cost">{{m.settings.cost.value|curency}}</span>\n            </ion-label>\n            <ion-radio [value]=[m] (ionSelect)="setMethod(m)"></ion-radio>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </div>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="proceedOrder()" [disabled]="shared.shipping_lines.length==0">{{\'Next\'|translate}}</button>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\shipping-method\shipping-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_data_location_data__["a" /* LocationDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]])
    ], ShippingMethodPage);
    return ShippingMethodPage;
}());

//# sourceMappingURL=shipping-method.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SubCategories5Page = (function () {
    function SubCategories5Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories5Page_1 = SubCategories5Page;
    SubCategories5Page.prototype.openProducts = function (id, name) {
        var count = 0;
        for (var _i = 0, _a = this.shared.allCategories; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.parent == id) {
                count++;
                //console.log(val.parent + "   " + id);
            }
        }
        console.log(count);
        if (count == 0)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
        else
            this.navCtrl.push(SubCategories5Page_1, { 'parent': id });
    };
    SubCategories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    SubCategories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    SubCategories5Page = SubCategories5Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sub-categories5',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\sub-categories5\sub-categories5.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="card-background-page">\n\n  <div *ngFor="let c of shared.subCategories">\n    <ion-card *ngIf="c.parent==parent" (click)="openProducts(c.id,c.name)" class="animated flipInX"> \n      <img *ngIf="c.image" src="{{c.image.src}}" />\n      <div class="card-title">{{c.name}}</div>\n      \n    </ion-card>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"C:\Softwares\Code\src\pages\sub-categories5\sub-categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories5Page);
    return SubCategories5Page;
    var SubCategories5Page_1;
}());

//# sourceMappingURL=sub-categories5.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationDataProvider = (function () {
    function LocationDataProvider() {
        this.data = {
            "countries": [
                {
                    "value": "AF",
                    "name": "Afghanistan"
                },
                {
                    "value": "AL",
                    "name": "Albania"
                },
                {
                    "value": "DZ",
                    "name": "Algeria"
                },
                {
                    "value": "AS",
                    "name": "American Samoa"
                },
                {
                    "value": "AD",
                    "name": "Andorra"
                },
                {
                    "value": "AO",
                    "name": "Angola"
                },
                {
                    "value": "AI",
                    "name": "Anguilla"
                },
                {
                    "value": "AQ",
                    "name": "Antarctica"
                },
                {
                    "value": "AG",
                    "name": "Antigua and Barbuda"
                },
                {
                    "value": "AR",
                    "name": "Argentina"
                },
                {
                    "value": "AM",
                    "name": "Armenia"
                },
                {
                    "value": "AW",
                    "name": "Aruba"
                },
                {
                    "value": "AU",
                    "name": "Australia"
                },
                {
                    "value": "AT",
                    "name": "Austria"
                },
                {
                    "value": "AZ",
                    "name": "Azerbaijan"
                },
                {
                    "value": "BS",
                    "name": "Bahamas"
                },
                {
                    "value": "BH",
                    "name": "Bahrain"
                },
                {
                    "value": "BD",
                    "name": "Bangladesh"
                },
                {
                    "value": "BB",
                    "name": "Barbados"
                },
                {
                    "value": "BY",
                    "name": "Belarus"
                },
                {
                    "value": "PW",
                    "name": "Belau"
                },
                {
                    "value": "BE",
                    "name": "Belgium"
                },
                {
                    "value": "BZ",
                    "name": "Belize"
                },
                {
                    "value": "BJ",
                    "name": "Benin"
                },
                {
                    "value": "BM",
                    "name": "Bermuda"
                },
                {
                    "value": "BT",
                    "name": "Bhutan"
                },
                {
                    "value": "BO",
                    "name": "Bolivia"
                },
                {
                    "value": "BQ",
                    "name": "Bonaire, Saint Eustatius and Saba"
                },
                {
                    "value": "BA",
                    "name": "Bosnia and Herzegovina"
                },
                {
                    "value": "BW",
                    "name": "Botswana"
                },
                {
                    "value": "BV",
                    "name": "Bouvet Island"
                },
                {
                    "value": "BR",
                    "name": "Brazil"
                },
                {
                    "value": "IO",
                    "name": "British Indian Ocean Territory"
                },
                {
                    "value": "VG",
                    "name": "British Virgin Islands"
                },
                {
                    "value": "BN",
                    "name": "Brunei"
                },
                {
                    "value": "BG",
                    "name": "Bulgaria"
                },
                {
                    "value": "BF",
                    "name": "Burkina Faso"
                },
                {
                    "value": "BI",
                    "name": "Burundi"
                },
                {
                    "value": "KH",
                    "name": "Cambodia"
                },
                {
                    "value": "CM",
                    "name": "Cameroon"
                },
                {
                    "value": "CA",
                    "name": "Canada"
                },
                {
                    "value": "CV",
                    "name": "Cape Verde"
                },
                {
                    "value": "KY",
                    "name": "Cayman Islands"
                },
                {
                    "value": "CF",
                    "name": "Central African Republic"
                },
                {
                    "value": "TD",
                    "name": "Chad"
                },
                {
                    "value": "CL",
                    "name": "Chile"
                },
                {
                    "value": "CN",
                    "name": "China"
                },
                {
                    "value": "CX",
                    "name": "Christmas Island"
                },
                {
                    "value": "CC",
                    "name": "Cocos (Keeling) Islands"
                },
                {
                    "value": "CO",
                    "name": "Colombia"
                },
                {
                    "value": "KM",
                    "name": "Comoros"
                },
                {
                    "value": "CG",
                    "name": "Congo (Brazzaville)"
                },
                {
                    "value": "CD",
                    "name": "Congo (Kinshasa)"
                },
                {
                    "value": "CK",
                    "name": "Cook Islands"
                },
                {
                    "value": "CR",
                    "name": "Costa Rica"
                },
                {
                    "value": "HR",
                    "name": "Croatia"
                },
                {
                    "value": "CU",
                    "name": "Cuba"
                },
                {
                    "value": "CW",
                    "name": "Cura&ccedil;ao"
                },
                {
                    "value": "CY",
                    "name": "Cyprus"
                },
                {
                    "value": "CZ",
                    "name": "Czech Republic"
                },
                {
                    "value": "DK",
                    "name": "Denmark"
                },
                {
                    "value": "DJ",
                    "name": "Djibouti"
                },
                {
                    "value": "DM",
                    "name": "Dominica"
                },
                {
                    "value": "DO",
                    "name": "Dominican Republic"
                },
                {
                    "value": "EC",
                    "name": "Ecuador"
                },
                {
                    "value": "EG",
                    "name": "Egypt"
                },
                {
                    "value": "SV",
                    "name": "El Salvador"
                },
                {
                    "value": "GQ",
                    "name": "Equatorial Guinea"
                },
                {
                    "value": "ER",
                    "name": "Eritrea"
                },
                {
                    "value": "EE",
                    "name": "Estonia"
                },
                {
                    "value": "ET",
                    "name": "Ethiopia"
                },
                {
                    "value": "FK",
                    "name": "Falkland Islands"
                },
                {
                    "value": "FO",
                    "name": "Faroe Islands"
                },
                {
                    "value": "FJ",
                    "name": "Fiji"
                },
                {
                    "value": "FI",
                    "name": "Finland"
                },
                {
                    "value": "FR",
                    "name": "France"
                },
                {
                    "value": "GF",
                    "name": "French Guiana"
                },
                {
                    "value": "PF",
                    "name": "French Polynesia"
                },
                {
                    "value": "TF",
                    "name": "French Southern Territories"
                },
                {
                    "value": "GA",
                    "name": "Gabon"
                },
                {
                    "value": "GM",
                    "name": "Gambia"
                },
                {
                    "value": "GE",
                    "name": "Georgia"
                },
                {
                    "value": "DE",
                    "name": "Germany"
                },
                {
                    "value": "GH",
                    "name": "Ghana"
                },
                {
                    "value": "GI",
                    "name": "Gibraltar"
                },
                {
                    "value": "GR",
                    "name": "Greece"
                },
                {
                    "value": "GL",
                    "name": "Greenland"
                },
                {
                    "value": "GD",
                    "name": "Grenada"
                },
                {
                    "value": "GP",
                    "name": "Guadeloupe"
                },
                {
                    "value": "GU",
                    "name": "Guam"
                },
                {
                    "value": "GT",
                    "name": "Guatemala"
                },
                {
                    "value": "GG",
                    "name": "Guernsey"
                },
                {
                    "value": "GN",
                    "name": "Guinea"
                },
                {
                    "value": "GW",
                    "name": "Guinea-Bissau"
                },
                {
                    "value": "GY",
                    "name": "Guyana"
                },
                {
                    "value": "HT",
                    "name": "Haiti"
                },
                {
                    "value": "HM",
                    "name": "Heard Island and McDonald Islands"
                },
                {
                    "value": "HN",
                    "name": "Honduras"
                },
                {
                    "value": "HK",
                    "name": "Hong Kong"
                },
                {
                    "value": "HU",
                    "name": "Hungary"
                },
                {
                    "value": "IS",
                    "name": "Iceland"
                },
                {
                    "value": "IN",
                    "name": "India"
                },
                {
                    "value": "ID",
                    "name": "Indonesia"
                },
                {
                    "value": "IR",
                    "name": "Iran"
                },
                {
                    "value": "IQ",
                    "name": "Iraq"
                },
                {
                    "value": "IE",
                    "name": "Ireland"
                },
                {
                    "value": "IM",
                    "name": "Isle of Man"
                },
                {
                    "value": "IL",
                    "name": "Israel"
                },
                {
                    "value": "IT",
                    "name": "Italy"
                },
                {
                    "value": "CI",
                    "name": "Ivory Coast"
                },
                {
                    "value": "JM",
                    "name": "Jamaica"
                },
                {
                    "value": "JP",
                    "name": "Japan"
                },
                {
                    "value": "JE",
                    "name": "Jersey"
                },
                {
                    "value": "JO",
                    "name": "Jordan"
                },
                {
                    "value": "KZ",
                    "name": "Kazakhstan"
                },
                {
                    "value": "KE",
                    "name": "Kenya"
                },
                {
                    "value": "KI",
                    "name": "Kiribati"
                },
                {
                    "value": "KW",
                    "name": "Kuwait"
                },
                {
                    "value": "KG",
                    "name": "Kyrgyzstan"
                },
                {
                    "value": "LA",
                    "name": "Laos"
                },
                {
                    "value": "LV",
                    "name": "Latvia"
                },
                {
                    "value": "LB",
                    "name": "Lebanon"
                },
                {
                    "value": "LS",
                    "name": "Lesotho"
                },
                {
                    "value": "LR",
                    "name": "Liberia"
                },
                {
                    "value": "LY",
                    "name": "Libya"
                },
                {
                    "value": "LI",
                    "name": "Liechtenstein"
                },
                {
                    "value": "LT",
                    "name": "Lithuania"
                },
                {
                    "value": "LU",
                    "name": "Luxembourg"
                },
                {
                    "value": "MO",
                    "name": "Macao S.A.R., China"
                },
                {
                    "value": "MK",
                    "name": "Macedonia"
                },
                {
                    "value": "MG",
                    "name": "Madagascar"
                },
                {
                    "value": "MW",
                    "name": "Malawi"
                },
                {
                    "value": "MY",
                    "name": "Malaysia"
                },
                {
                    "value": "MV",
                    "name": "Maldives"
                },
                {
                    "value": "ML",
                    "name": "Mali"
                },
                {
                    "value": "MT",
                    "name": "Malta"
                },
                {
                    "value": "MH",
                    "name": "Marshall Islands"
                },
                {
                    "value": "MQ",
                    "name": "Martinique"
                },
                {
                    "value": "MR",
                    "name": "Mauritania"
                },
                {
                    "value": "MU",
                    "name": "Mauritius"
                },
                {
                    "value": "YT",
                    "name": "Mayotte"
                },
                {
                    "value": "MX",
                    "name": "Mexico"
                },
                {
                    "value": "FM",
                    "name": "Micronesia"
                },
                {
                    "value": "MD",
                    "name": "Moldova"
                },
                {
                    "value": "MC",
                    "name": "Monaco"
                },
                {
                    "value": "MN",
                    "name": "Mongolia"
                },
                {
                    "value": "ME",
                    "name": "Montenegro"
                },
                {
                    "value": "MS",
                    "name": "Montserrat"
                },
                {
                    "value": "MA",
                    "name": "Morocco"
                },
                {
                    "value": "MZ",
                    "name": "Mozambique"
                },
                {
                    "value": "MM",
                    "name": "Myanmar"
                },
                {
                    "value": "NA",
                    "name": "Namibia"
                },
                {
                    "value": "NR",
                    "name": "Nauru"
                },
                {
                    "value": "NP",
                    "name": "Nepal"
                },
                {
                    "value": "NL",
                    "name": "Netherlands"
                },
                {
                    "value": "NC",
                    "name": "New Caledonia"
                },
                {
                    "value": "NZ",
                    "name": "New Zealand"
                },
                {
                    "value": "NI",
                    "name": "Nicaragua"
                },
                {
                    "value": "NE",
                    "name": "Niger"
                },
                {
                    "value": "NG",
                    "name": "Nigeria"
                },
                {
                    "value": "NU",
                    "name": "Niue"
                },
                {
                    "value": "NF",
                    "name": "Norfolk Island"
                },
                {
                    "value": "KP",
                    "name": "North Korea"
                },
                {
                    "value": "MP",
                    "name": "Northern Mariana Islands"
                },
                {
                    "value": "NO",
                    "name": "Norway"
                },
                {
                    "value": "OM",
                    "name": "Oman"
                },
                {
                    "value": "PK",
                    "name": "Pakistan"
                },
                {
                    "value": "PS",
                    "name": "Palestinian Territory"
                },
                {
                    "value": "PA",
                    "name": "Panama"
                },
                {
                    "value": "PG",
                    "name": "Papua New Guinea"
                },
                {
                    "value": "PY",
                    "name": "Paraguay"
                },
                {
                    "value": "PE",
                    "name": "Peru"
                },
                {
                    "value": "PH",
                    "name": "Philippines"
                },
                {
                    "value": "PN",
                    "name": "Pitcairn"
                },
                {
                    "value": "PL",
                    "name": "Poland"
                },
                {
                    "value": "PT",
                    "name": "Portugal"
                },
                {
                    "value": "PR",
                    "name": "Puerto Rico"
                },
                {
                    "value": "QA",
                    "name": "Qatar"
                },
                {
                    "value": "RE",
                    "name": "Reunion"
                },
                {
                    "value": "RO",
                    "name": "Romania"
                },
                {
                    "value": "RU",
                    "name": "Russia"
                },
                {
                    "value": "RW",
                    "name": "Rwanda"
                },
                {
                    "value": "ST",
                    "name": "S&atilde;o Tom&eacute; and Pr&iacute;ncipe"
                },
                {
                    "value": "BL",
                    "name": "Saint Barth&eacute;lemy"
                },
                {
                    "value": "SH",
                    "name": "Saint Helena"
                },
                {
                    "value": "KN",
                    "name": "Saint Kitts and Nevis"
                },
                {
                    "value": "LC",
                    "name": "Saint Lucia"
                },
                {
                    "value": "SX",
                    "name": "Saint Martin (Dutch part)"
                },
                {
                    "value": "MF",
                    "name": "Saint Martin (French part)"
                },
                {
                    "value": "PM",
                    "name": "Saint Pierre and Miquelon"
                },
                {
                    "value": "VC",
                    "name": "Saint Vincent and the Grenadines"
                },
                {
                    "value": "WS",
                    "name": "Samoa"
                },
                {
                    "value": "SM",
                    "name": "San Marino"
                },
                {
                    "value": "SA",
                    "name": "Saudi Arabia"
                },
                {
                    "value": "SN",
                    "name": "Senegal"
                },
                {
                    "value": "RS",
                    "name": "Serbia"
                },
                {
                    "value": "SC",
                    "name": "Seychelles"
                },
                {
                    "value": "SL",
                    "name": "Sierra Leone"
                },
                {
                    "value": "SG",
                    "name": "Singapore"
                },
                {
                    "value": "SK",
                    "name": "Slovakia"
                },
                {
                    "value": "SI",
                    "name": "Slovenia"
                },
                {
                    "value": "SB",
                    "name": "Solomon Islands"
                },
                {
                    "value": "SO",
                    "name": "Somalia"
                },
                {
                    "value": "ZA",
                    "name": "South Africa"
                },
                {
                    "value": "GS",
                    "name": "South Georgia/Sandwich Islands"
                },
                {
                    "value": "KR",
                    "name": "South Korea"
                },
                {
                    "value": "SS",
                    "name": "South Sudan"
                },
                {
                    "value": "ES",
                    "name": "Spain"
                },
                {
                    "value": "LK",
                    "name": "Sri Lanka"
                },
                {
                    "value": "SD",
                    "name": "Sudan"
                },
                {
                    "value": "SR",
                    "name": "Suriname"
                },
                {
                    "value": "SJ",
                    "name": "Svalbard and Jan Mayen"
                },
                {
                    "value": "SZ",
                    "name": "Swaziland"
                },
                {
                    "value": "SE",
                    "name": "Sweden"
                },
                {
                    "value": "CH",
                    "name": "Switzerland"
                },
                {
                    "value": "SY",
                    "name": "Syria"
                },
                {
                    "value": "TW",
                    "name": "Taiwan"
                },
                {
                    "value": "TJ",
                    "name": "Tajikistan"
                },
                {
                    "value": "TZ",
                    "name": "Tanzania"
                },
                {
                    "value": "TH",
                    "name": "Thailand"
                },
                {
                    "value": "TL",
                    "name": "Timor-Leste"
                },
                {
                    "value": "TG",
                    "name": "Togo"
                },
                {
                    "value": "TK",
                    "name": "Tokelau"
                },
                {
                    "value": "TO",
                    "name": "Tonga"
                },
                {
                    "value": "TT",
                    "name": "Trinidad and Tobago"
                },
                {
                    "value": "TN",
                    "name": "Tunisia"
                },
                {
                    "value": "TR",
                    "name": "Turkey"
                },
                {
                    "value": "TM",
                    "name": "Turkmenistan"
                },
                {
                    "value": "TC",
                    "name": "Turks and Caicos Islands"
                },
                {
                    "value": "TV",
                    "name": "Tuvalu"
                },
                {
                    "value": "UG",
                    "name": "Uganda"
                },
                {
                    "value": "UA",
                    "name": "Ukraine"
                },
                {
                    "value": "AE",
                    "name": "United Arab Emirates"
                },
                {
                    "value": "GB",
                    "name": "United Kingdom (UK)"
                },
                {
                    "value": "US",
                    "name": "United States (US)"
                },
                {
                    "value": "UM",
                    "name": "United States (US) Minor Outlying Islands"
                },
                {
                    "value": "VI",
                    "name": "United States (US) Virgin Islands"
                },
                {
                    "value": "UY",
                    "name": "Uruguay"
                },
                {
                    "value": "UZ",
                    "name": "Uzbekistan"
                },
                {
                    "value": "VU",
                    "name": "Vanuatu"
                },
                {
                    "value": "VA",
                    "name": "Vatican"
                },
                {
                    "value": "VE",
                    "name": "Venezuela"
                },
                {
                    "value": "VN",
                    "name": "Vietnam"
                },
                {
                    "value": "WF",
                    "name": "Wallis and Futuna"
                },
                {
                    "value": "EH",
                    "name": "Western Sahara"
                },
                {
                    "value": "YE",
                    "name": "Yemen"
                },
                {
                    "value": "ZM",
                    "name": "Zambia"
                },
                {
                    "value": "ZW",
                    "name": "Zimbabwe"
                }
            ],
            "states": {
                "AR": [
                    {
                        "value": "C",
                        "name": "Ciudad Aut&oacute;noma de Buenos Aires"
                    },
                    {
                        "value": "B",
                        "name": "Buenos Aires"
                    },
                    {
                        "value": "K",
                        "name": "Catamarca"
                    },
                    {
                        "value": "H",
                        "name": "Chaco"
                    },
                    {
                        "value": "U",
                        "name": "Chubut"
                    },
                    {
                        "value": "X",
                        "name": "C&oacute;rdoba"
                    },
                    {
                        "value": "W",
                        "name": "Corrientes"
                    },
                    {
                        "value": "E",
                        "name": "Entre R&iacute;os"
                    },
                    {
                        "value": "P",
                        "name": "Formosa"
                    },
                    {
                        "value": "Y",
                        "name": "Jujuy"
                    },
                    {
                        "value": "L",
                        "name": "La Pampa"
                    },
                    {
                        "value": "F",
                        "name": "La Rioja"
                    },
                    {
                        "value": "M",
                        "name": "Mendoza"
                    },
                    {
                        "value": "N",
                        "name": "Misiones"
                    },
                    {
                        "value": "Q",
                        "name": "Neuqu&eacute;n"
                    },
                    {
                        "value": "R",
                        "name": "R&iacute;o Negro"
                    },
                    {
                        "value": "A",
                        "name": "Salta"
                    },
                    {
                        "value": "J",
                        "name": "San Juan"
                    },
                    {
                        "value": "D",
                        "name": "San Luis"
                    },
                    {
                        "value": "Z",
                        "name": "Santa Cruz"
                    },
                    {
                        "value": "S",
                        "name": "Santa Fe"
                    },
                    {
                        "value": "G",
                        "name": "Santiago del Estero"
                    },
                    {
                        "value": "V",
                        "name": "Tierra del Fuego"
                    },
                    {
                        "value": "T",
                        "name": "Tucum&aacute;n"
                    }
                ],
                "AU": [
                    {
                        "value": "ACT",
                        "name": "Australian Capital Territory"
                    },
                    {
                        "value": "NSW",
                        "name": "New South Wales"
                    },
                    {
                        "value": "NT",
                        "name": "Northern Territory"
                    },
                    {
                        "value": "QLD",
                        "name": "Queensland"
                    },
                    {
                        "value": "SA",
                        "name": "South Australia"
                    },
                    {
                        "value": "TAS",
                        "name": "Tasmania"
                    },
                    {
                        "value": "VIC",
                        "name": "Victoria"
                    },
                    {
                        "value": "WA",
                        "name": "Western Australia"
                    }
                ],
                "BD": [
                    {
                        "value": "BAG",
                        "name": "Bagerhat"
                    },
                    {
                        "value": "BAN",
                        "name": "Bandarban"
                    },
                    {
                        "value": "BAR",
                        "name": "Barguna"
                    },
                    {
                        "value": "BARI",
                        "name": "Barisal"
                    },
                    {
                        "value": "BHO",
                        "name": "Bhola"
                    },
                    {
                        "value": "BOG",
                        "name": "Bogra"
                    },
                    {
                        "value": "BRA",
                        "name": "Brahmanbaria"
                    },
                    {
                        "value": "CHA",
                        "name": "Chandpur"
                    },
                    {
                        "value": "CHI",
                        "name": "Chittagong"
                    },
                    {
                        "value": "CHU",
                        "name": "Chuadanga"
                    },
                    {
                        "value": "COM",
                        "name": "Comilla"
                    },
                    {
                        "value": "COX",
                        "name": "Cox's Bazar"
                    },
                    {
                        "value": "DHA",
                        "name": "Dhaka"
                    },
                    {
                        "value": "DIN",
                        "name": "Dinajpur"
                    },
                    {
                        "value": "FAR",
                        "name": "Faridpur "
                    },
                    {
                        "value": "FEN",
                        "name": "Feni"
                    },
                    {
                        "value": "GAI",
                        "name": "Gaibandha"
                    },
                    {
                        "value": "GAZI",
                        "name": "Gazipur"
                    },
                    {
                        "value": "GOP",
                        "name": "Gopalganj"
                    },
                    {
                        "value": "HAB",
                        "name": "Habiganj"
                    },
                    {
                        "value": "JAM",
                        "name": "Jamalpur"
                    },
                    {
                        "value": "JES",
                        "name": "Jessore"
                    },
                    {
                        "value": "JHA",
                        "name": "Jhalokati"
                    },
                    {
                        "value": "JHE",
                        "name": "Jhenaidah"
                    },
                    {
                        "value": "JOY",
                        "name": "Joypurhat"
                    },
                    {
                        "value": "KHA",
                        "name": "Khagrachhari"
                    },
                    {
                        "value": "KHU",
                        "name": "Khulna"
                    },
                    {
                        "value": "KIS",
                        "name": "Kishoreganj"
                    },
                    {
                        "value": "KUR",
                        "name": "Kurigram"
                    },
                    {
                        "value": "KUS",
                        "name": "Kushtia"
                    },
                    {
                        "value": "LAK",
                        "name": "Lakshmipur"
                    },
                    {
                        "value": "LAL",
                        "name": "Lalmonirhat"
                    },
                    {
                        "value": "MAD",
                        "name": "Madaripur"
                    },
                    {
                        "value": "MAG",
                        "name": "Magura"
                    },
                    {
                        "value": "MAN",
                        "name": "Manikganj "
                    },
                    {
                        "value": "MEH",
                        "name": "Meherpur"
                    },
                    {
                        "value": "MOU",
                        "name": "Moulvibazar"
                    },
                    {
                        "value": "MUN",
                        "name": "Munshiganj"
                    },
                    {
                        "value": "MYM",
                        "name": "Mymensingh"
                    },
                    {
                        "value": "NAO",
                        "name": "Naogaon"
                    },
                    {
                        "value": "NAR",
                        "name": "Narail"
                    },
                    {
                        "value": "NARG",
                        "name": "Narayanganj"
                    },
                    {
                        "value": "NARD",
                        "name": "Narsingdi"
                    },
                    {
                        "value": "NAT",
                        "name": "Natore"
                    },
                    {
                        "value": "NAW",
                        "name": "Nawabganj"
                    },
                    {
                        "value": "NET",
                        "name": "Netrakona"
                    },
                    {
                        "value": "NIL",
                        "name": "Nilphamari"
                    },
                    {
                        "value": "NOA",
                        "name": "Noakhali"
                    },
                    {
                        "value": "PAB",
                        "name": "Pabna"
                    },
                    {
                        "value": "PAN",
                        "name": "Panchagarh"
                    },
                    {
                        "value": "PAT",
                        "name": "Patuakhali"
                    },
                    {
                        "value": "PIR",
                        "name": "Pirojpur"
                    },
                    {
                        "value": "RAJB",
                        "name": "Rajbari"
                    },
                    {
                        "value": "RAJ",
                        "name": "Rajshahi"
                    },
                    {
                        "value": "RAN",
                        "name": "Rangamati"
                    },
                    {
                        "value": "RANP",
                        "name": "Rangpur"
                    },
                    {
                        "value": "SAT",
                        "name": "Satkhira"
                    },
                    {
                        "value": "SHA",
                        "name": "Shariatpur"
                    },
                    {
                        "value": "SHE",
                        "name": "Sherpur"
                    },
                    {
                        "value": "SIR",
                        "name": "Sirajganj"
                    },
                    {
                        "value": "SUN",
                        "name": "Sunamganj"
                    },
                    {
                        "value": "SYL",
                        "name": "Sylhet"
                    },
                    {
                        "value": "TAN",
                        "name": "Tangail"
                    },
                    {
                        "value": "THA",
                        "name": "Thakurgaon"
                    }
                ],
                "BO": [
                    {
                        "value": "B",
                        "name": "Chuquisaca"
                    },
                    {
                        "value": "H",
                        "name": "Beni"
                    },
                    {
                        "value": "C",
                        "name": "Cochabamba"
                    },
                    {
                        "value": "L",
                        "name": "La Paz"
                    },
                    {
                        "value": "O",
                        "name": "Oruro"
                    },
                    {
                        "value": "N",
                        "name": "Pando"
                    },
                    {
                        "value": "P",
                        "name": "Potosí"
                    },
                    {
                        "value": "S",
                        "name": "Santa Cruz"
                    },
                    {
                        "value": "T",
                        "name": "Tarija"
                    }
                ],
                "BR": [
                    {
                        "value": "AC",
                        "name": "Acre"
                    },
                    {
                        "value": "AL",
                        "name": "Alagoas"
                    },
                    {
                        "value": "AP",
                        "name": "Amap&aacute;"
                    },
                    {
                        "value": "AM",
                        "name": "Amazonas"
                    },
                    {
                        "value": "BA",
                        "name": "Bahia"
                    },
                    {
                        "value": "CE",
                        "name": "Cear&aacute;"
                    },
                    {
                        "value": "DF",
                        "name": "Distrito Federal"
                    },
                    {
                        "value": "ES",
                        "name": "Esp&iacute;rito Santo"
                    },
                    {
                        "value": "GO",
                        "name": "Goi&aacute;s"
                    },
                    {
                        "value": "MA",
                        "name": "Maranh&atilde;o"
                    },
                    {
                        "value": "MT",
                        "name": "Mato Grosso"
                    },
                    {
                        "value": "MS",
                        "name": "Mato Grosso do Sul"
                    },
                    {
                        "value": "MG",
                        "name": "Minas Gerais"
                    },
                    {
                        "value": "PA",
                        "name": "Par&aacute;"
                    },
                    {
                        "value": "PB",
                        "name": "Para&iacute;ba"
                    },
                    {
                        "value": "PR",
                        "name": "Paran&aacute;"
                    },
                    {
                        "value": "PE",
                        "name": "Pernambuco"
                    },
                    {
                        "value": "PI",
                        "name": "Piau&iacute;"
                    },
                    {
                        "value": "RJ",
                        "name": "Rio de Janeiro"
                    },
                    {
                        "value": "RN",
                        "name": "Rio Grande do Norte"
                    },
                    {
                        "value": "RS",
                        "name": "Rio Grande do Sul"
                    },
                    {
                        "value": "RO",
                        "name": "Rond&ocirc;nia"
                    },
                    {
                        "value": "RR",
                        "name": "Roraima"
                    },
                    {
                        "value": "SC",
                        "name": "Santa Catarina"
                    },
                    {
                        "value": "SP",
                        "name": "S&atilde;o Paulo"
                    },
                    {
                        "value": "SE",
                        "name": "Sergipe"
                    },
                    {
                        "value": "TO",
                        "name": "Tocantins"
                    }
                ],
                "BG": [
                    {
                        "value": "BG-01",
                        "name": "Blagoevgrad"
                    },
                    {
                        "value": "BG-02",
                        "name": "Burgas"
                    },
                    {
                        "value": "BG-08",
                        "name": "Dobrich"
                    },
                    {
                        "value": "BG-07",
                        "name": "Gabrovo"
                    },
                    {
                        "value": "BG-26",
                        "name": "Haskovo"
                    },
                    {
                        "value": "BG-09",
                        "name": "Kardzhali"
                    },
                    {
                        "value": "BG-10",
                        "name": "Kyustendil"
                    },
                    {
                        "value": "BG-11",
                        "name": "Lovech"
                    },
                    {
                        "value": "BG-12",
                        "name": "Montana"
                    },
                    {
                        "value": "BG-13",
                        "name": "Pazardzhik"
                    },
                    {
                        "value": "BG-14",
                        "name": "Pernik"
                    },
                    {
                        "value": "BG-15",
                        "name": "Pleven"
                    },
                    {
                        "value": "BG-16",
                        "name": "Plovdiv"
                    },
                    {
                        "value": "BG-17",
                        "name": "Razgrad"
                    },
                    {
                        "value": "BG-18",
                        "name": "Ruse"
                    },
                    {
                        "value": "BG-27",
                        "name": "Shumen"
                    },
                    {
                        "value": "BG-19",
                        "name": "Silistra"
                    },
                    {
                        "value": "BG-20",
                        "name": "Sliven"
                    },
                    {
                        "value": "BG-21",
                        "name": "Smolyan"
                    },
                    {
                        "value": "BG-23",
                        "name": "Sofia"
                    },
                    {
                        "value": "BG-22",
                        "name": "Sofia-Grad"
                    },
                    {
                        "value": "BG-24",
                        "name": "Stara Zagora"
                    },
                    {
                        "value": "BG-25",
                        "name": "Targovishte"
                    },
                    {
                        "value": "BG-03",
                        "name": "Varna"
                    },
                    {
                        "value": "BG-04",
                        "name": "Veliko Tarnovo"
                    },
                    {
                        "value": "BG-05",
                        "name": "Vidin"
                    },
                    {
                        "value": "BG-06",
                        "name": "Vratsa"
                    },
                    {
                        "value": "BG-28",
                        "name": "Yambol"
                    }
                ],
                "CA": [
                    {
                        "value": "AB",
                        "name": "Alberta"
                    },
                    {
                        "value": "BC",
                        "name": "British Columbia"
                    },
                    {
                        "value": "MB",
                        "name": "Manitoba"
                    },
                    {
                        "value": "NB",
                        "name": "New Brunswick"
                    },
                    {
                        "value": "NL",
                        "name": "Newfoundland and Labrador"
                    },
                    {
                        "value": "NT",
                        "name": "Northwest Territories"
                    },
                    {
                        "value": "NS",
                        "name": "Nova Scotia"
                    },
                    {
                        "value": "NU",
                        "name": "Nunavut"
                    },
                    {
                        "value": "ON",
                        "name": "Ontario"
                    },
                    {
                        "value": "PE",
                        "name": "Prince Edward Island"
                    },
                    {
                        "value": "QC",
                        "name": "Quebec"
                    },
                    {
                        "value": "SK",
                        "name": "Saskatchewan"
                    },
                    {
                        "value": "YT",
                        "name": "Yukon Territory"
                    }
                ],
                "CN": [
                    {
                        "value": "CN1",
                        "name": "Yunnan / &#20113;&#21335;"
                    },
                    {
                        "value": "CN2",
                        "name": "Beijing / &#21271;&#20140;"
                    },
                    {
                        "value": "CN3",
                        "name": "Tianjin / &#22825;&#27941;"
                    },
                    {
                        "value": "CN4",
                        "name": "Hebei / &#27827;&#21271;"
                    },
                    {
                        "value": "CN5",
                        "name": "Shanxi / &#23665;&#35199;"
                    },
                    {
                        "value": "CN6",
                        "name": "Inner Mongolia / &#20839;&#33945;&#21476;"
                    },
                    {
                        "value": "CN7",
                        "name": "Liaoning / &#36797;&#23425;"
                    },
                    {
                        "value": "CN8",
                        "name": "Jilin / &#21513;&#26519;"
                    },
                    {
                        "value": "CN9",
                        "name": "Heilongjiang / &#40657;&#40857;&#27743;"
                    },
                    {
                        "value": "CN10",
                        "name": "Shanghai / &#19978;&#28023;"
                    },
                    {
                        "value": "CN11",
                        "name": "Jiangsu / &#27743;&#33487;"
                    },
                    {
                        "value": "CN12",
                        "name": "Zhejiang / &#27993;&#27743;"
                    },
                    {
                        "value": "CN13",
                        "name": "Anhui / &#23433;&#24509;"
                    },
                    {
                        "value": "CN14",
                        "name": "Fujian / &#31119;&#24314;"
                    },
                    {
                        "value": "CN15",
                        "name": "Jiangxi / &#27743;&#35199;"
                    },
                    {
                        "value": "CN16",
                        "name": "Shandong / &#23665;&#19996;"
                    },
                    {
                        "value": "CN17",
                        "name": "Henan / &#27827;&#21335;"
                    },
                    {
                        "value": "CN18",
                        "name": "Hubei / &#28246;&#21271;"
                    },
                    {
                        "value": "CN19",
                        "name": "Hunan / &#28246;&#21335;"
                    },
                    {
                        "value": "CN20",
                        "name": "Guangdong / &#24191;&#19996;"
                    },
                    {
                        "value": "CN21",
                        "name": "Guangxi Zhuang / &#24191;&#35199;&#22766;&#26063;"
                    },
                    {
                        "value": "CN22",
                        "name": "Hainan / &#28023;&#21335;"
                    },
                    {
                        "value": "CN23",
                        "name": "Chongqing / &#37325;&#24198;"
                    },
                    {
                        "value": "CN24",
                        "name": "Sichuan / &#22235;&#24029;"
                    },
                    {
                        "value": "CN25",
                        "name": "Guizhou / &#36149;&#24030;"
                    },
                    {
                        "value": "CN26",
                        "name": "Shaanxi / &#38485;&#35199;"
                    },
                    {
                        "value": "CN27",
                        "name": "Gansu / &#29976;&#32899;"
                    },
                    {
                        "value": "CN28",
                        "name": "Qinghai / &#38738;&#28023;"
                    },
                    {
                        "value": "CN29",
                        "name": "Ningxia Hui / &#23425;&#22799;"
                    },
                    {
                        "value": "CN30",
                        "name": "Macau / &#28595;&#38376;"
                    },
                    {
                        "value": "CN31",
                        "name": "Tibet / &#35199;&#34255;"
                    },
                    {
                        "value": "CN32",
                        "name": "Xinjiang / &#26032;&#30086;"
                    }
                ],
                "GR": [
                    {
                        "value": "I",
                        "name": "Αττική"
                    },
                    {
                        "value": "A",
                        "name": "Ανατολική Μακεδονία και Θράκη"
                    },
                    {
                        "value": "B",
                        "name": "Κεντρική Μακεδονία"
                    },
                    {
                        "value": "C",
                        "name": "Δυτική Μακεδονία"
                    },
                    {
                        "value": "D",
                        "name": "Ήπειρος"
                    },
                    {
                        "value": "E",
                        "name": "Θεσσαλία"
                    },
                    {
                        "value": "F",
                        "name": "Ιόνιοι Νήσοι"
                    },
                    {
                        "value": "G",
                        "name": "Δυτική Ελλάδα"
                    },
                    {
                        "value": "H",
                        "name": "Στερεά Ελλάδα"
                    },
                    {
                        "value": "J",
                        "name": "Πελοπόννησος"
                    },
                    {
                        "value": "K",
                        "name": "Βόρειο Αιγαίο"
                    },
                    {
                        "value": "L",
                        "name": "Νότιο Αιγαίο"
                    },
                    {
                        "value": "M",
                        "name": "Κρήτη"
                    }
                ],
                "HK": [
                    {
                        "value": "HONG KONG",
                        "name": "Hong Kong Island"
                    },
                    {
                        "value": "KOWLOON",
                        "name": "Kowloon"
                    },
                    {
                        "value": "NEW TERRITORIES",
                        "name": "New Territories"
                    }
                ],
                "HU": [
                    {
                        "value": "BK",
                        "name": "Bács-Kiskun"
                    },
                    {
                        "value": "BE",
                        "name": "Békés"
                    },
                    {
                        "value": "BA",
                        "name": "Baranya"
                    },
                    {
                        "value": "BZ",
                        "name": "Borsod-Abaúj-Zemplén"
                    },
                    {
                        "value": "BU",
                        "name": "Budapest"
                    },
                    {
                        "value": "CS",
                        "name": "Csongrád"
                    },
                    {
                        "value": "FE",
                        "name": "Fejér"
                    },
                    {
                        "value": "GS",
                        "name": "Győr-Moson-Sopron"
                    },
                    {
                        "value": "HB",
                        "name": "Hajdú-Bihar"
                    },
                    {
                        "value": "HE",
                        "name": "Heves"
                    },
                    {
                        "value": "JN",
                        "name": "Jász-Nagykun-Szolnok"
                    },
                    {
                        "value": "KE",
                        "name": "Komárom-Esztergom"
                    },
                    {
                        "value": "NO",
                        "name": "Nógrád"
                    },
                    {
                        "value": "PE",
                        "name": "Pest"
                    },
                    {
                        "value": "SO",
                        "name": "Somogy"
                    },
                    {
                        "value": "SZ",
                        "name": "Szabolcs-Szatmár-Bereg"
                    },
                    {
                        "value": "TO",
                        "name": "Tolna"
                    },
                    {
                        "value": "VA",
                        "name": "Vas"
                    },
                    {
                        "value": "VE",
                        "name": "Veszprém"
                    },
                    {
                        "value": "ZA",
                        "name": "Zala"
                    }
                ],
                "IN": [
                    {
                        "value": "AP",
                        "name": "Andhra Pradesh"
                    },
                    {
                        "value": "AR",
                        "name": "Arunachal Pradesh"
                    },
                    {
                        "value": "AS",
                        "name": "Assam"
                    },
                    {
                        "value": "BR",
                        "name": "Bihar"
                    },
                    {
                        "value": "CT",
                        "name": "Chhattisgarh"
                    },
                    {
                        "value": "GA",
                        "name": "Goa"
                    },
                    {
                        "value": "GJ",
                        "name": "Gujarat"
                    },
                    {
                        "value": "HR",
                        "name": "Haryana"
                    },
                    {
                        "value": "HP",
                        "name": "Himachal Pradesh"
                    },
                    {
                        "value": "JK",
                        "name": "Jammu and Kashmir"
                    },
                    {
                        "value": "JH",
                        "name": "Jharkhand"
                    },
                    {
                        "value": "KA",
                        "name": "Karnataka"
                    },
                    {
                        "value": "KL",
                        "name": "Kerala"
                    },
                    {
                        "value": "MP",
                        "name": "Madhya Pradesh"
                    },
                    {
                        "value": "MH",
                        "name": "Maharashtra"
                    },
                    {
                        "value": "MN",
                        "name": "Manipur"
                    },
                    {
                        "value": "ML",
                        "name": "Meghalaya"
                    },
                    {
                        "value": "MZ",
                        "name": "Mizoram"
                    },
                    {
                        "value": "NL",
                        "name": "Nagaland"
                    },
                    {
                        "value": "OR",
                        "name": "Orissa"
                    },
                    {
                        "value": "PB",
                        "name": "Punjab"
                    },
                    {
                        "value": "RJ",
                        "name": "Rajasthan"
                    },
                    {
                        "value": "SK",
                        "name": "Sikkim"
                    },
                    {
                        "value": "TN",
                        "name": "Tamil Nadu"
                    },
                    {
                        "value": "TS",
                        "name": "Telangana"
                    },
                    {
                        "value": "TR",
                        "name": "Tripura"
                    },
                    {
                        "value": "UK",
                        "name": "Uttarakhand"
                    },
                    {
                        "value": "UP",
                        "name": "Uttar Pradesh"
                    },
                    {
                        "value": "WB",
                        "name": "West Bengal"
                    },
                    {
                        "value": "AN",
                        "name": "Andaman and Nicobar Islands"
                    },
                    {
                        "value": "CH",
                        "name": "Chandigarh"
                    },
                    {
                        "value": "DN",
                        "name": "Dadra and Nagar Haveli"
                    },
                    {
                        "value": "DD",
                        "name": "Daman and Diu"
                    },
                    {
                        "value": "DL",
                        "name": "Delhi"
                    },
                    {
                        "value": "LD",
                        "name": "Lakshadeep"
                    },
                    {
                        "value": "PY",
                        "name": "Pondicherry (Puducherry)"
                    }
                ],
                "ID": [
                    {
                        "value": "AC",
                        "name": "Daerah Istimewa Aceh"
                    },
                    {
                        "value": "SU",
                        "name": "Sumatera Utara"
                    },
                    {
                        "value": "SB",
                        "name": "Sumatera Barat"
                    },
                    {
                        "value": "RI",
                        "name": "Riau"
                    },
                    {
                        "value": "KR",
                        "name": "Kepulauan Riau"
                    },
                    {
                        "value": "JA",
                        "name": "Jambi"
                    },
                    {
                        "value": "SS",
                        "name": "Sumatera Selatan"
                    },
                    {
                        "value": "BB",
                        "name": "Bangka Belitung"
                    },
                    {
                        "value": "BE",
                        "name": "Bengkulu"
                    },
                    {
                        "value": "LA",
                        "name": "Lampung"
                    },
                    {
                        "value": "JK",
                        "name": "DKI Jakarta"
                    },
                    {
                        "value": "JB",
                        "name": "Jawa Barat"
                    },
                    {
                        "value": "BT",
                        "name": "Banten"
                    },
                    {
                        "value": "JT",
                        "name": "Jawa Tengah"
                    },
                    {
                        "value": "JI",
                        "name": "Jawa Timur"
                    },
                    {
                        "value": "YO",
                        "name": "Daerah Istimewa Yogyakarta"
                    },
                    {
                        "value": "BA",
                        "name": "Bali"
                    },
                    {
                        "value": "NB",
                        "name": "Nusa Tenggara Barat"
                    },
                    {
                        "value": "NT",
                        "name": "Nusa Tenggara Timur"
                    },
                    {
                        "value": "KB",
                        "name": "Kalimantan Barat"
                    },
                    {
                        "value": "KT",
                        "name": "Kalimantan Tengah"
                    },
                    {
                        "value": "KI",
                        "name": "Kalimantan Timur"
                    },
                    {
                        "value": "KS",
                        "name": "Kalimantan Selatan"
                    },
                    {
                        "value": "KU",
                        "name": "Kalimantan Utara"
                    },
                    {
                        "value": "SA",
                        "name": "Sulawesi Utara"
                    },
                    {
                        "value": "ST",
                        "name": "Sulawesi Tengah"
                    },
                    {
                        "value": "SG",
                        "name": "Sulawesi Tenggara"
                    },
                    {
                        "value": "SR",
                        "name": "Sulawesi Barat"
                    },
                    {
                        "value": "SN",
                        "name": "Sulawesi Selatan"
                    },
                    {
                        "value": "GO",
                        "name": "Gorontalo"
                    },
                    {
                        "value": "MA",
                        "name": "Maluku"
                    },
                    {
                        "value": "MU",
                        "name": "Maluku Utara"
                    },
                    {
                        "value": "PA",
                        "name": "Papua"
                    },
                    {
                        "value": "PB",
                        "name": "Papua Barat"
                    }
                ],
                "IR": [
                    {
                        "value": "KHZ",
                        "name": "Khuzestan  (خوزستان)"
                    },
                    {
                        "value": "THR",
                        "name": "Tehran  (تهران)"
                    },
                    {
                        "value": "ILM",
                        "name": "Ilaam (ایلام)"
                    },
                    {
                        "value": "BHR",
                        "name": "Bushehr (بوشهر)"
                    },
                    {
                        "value": "ADL",
                        "name": "Ardabil (اردبیل)"
                    },
                    {
                        "value": "ESF",
                        "name": "Isfahan (اصفهان)"
                    },
                    {
                        "value": "YZD",
                        "name": "Yazd (یزد)"
                    },
                    {
                        "value": "KRH",
                        "name": "Kermanshah (کرمانشاه)"
                    },
                    {
                        "value": "KRN",
                        "name": "Kerman (کرمان)"
                    },
                    {
                        "value": "HDN",
                        "name": "Hamadan (همدان)"
                    },
                    {
                        "value": "GZN",
                        "name": "Ghazvin (قزوین)"
                    },
                    {
                        "value": "ZJN",
                        "name": "Zanjan (زنجان)"
                    },
                    {
                        "value": "LRS",
                        "name": "Luristan (لرستان)"
                    },
                    {
                        "value": "ABZ",
                        "name": "Alborz (البرز)"
                    },
                    {
                        "value": "EAZ",
                        "name": "East Azarbaijan (آذربایجان شرقی)"
                    },
                    {
                        "value": "WAZ",
                        "name": "West Azarbaijan (آذربایجان غربی)"
                    },
                    {
                        "value": "CHB",
                        "name": "Chaharmahal and Bakhtiari (چهارمحال و بختیاری)"
                    },
                    {
                        "value": "SKH",
                        "name": "South Khorasan (خراسان جنوبی)"
                    },
                    {
                        "value": "RKH",
                        "name": "Razavi Khorasan (خراسان رضوی)"
                    },
                    {
                        "value": "NKH",
                        "name": "North Khorasan (خراسان جنوبی)"
                    },
                    {
                        "value": "SMN",
                        "name": "Semnan (سمنان)"
                    },
                    {
                        "value": "FRS",
                        "name": "Fars (فارس)"
                    },
                    {
                        "value": "QHM",
                        "name": "Qom (قم)"
                    },
                    {
                        "value": "KRD",
                        "name": "Kurdistan / کردستان)"
                    },
                    {
                        "value": "KBD",
                        "name": "Kohgiluyeh and BoyerAhmad (کهگیلوییه و بویراحمد)"
                    },
                    {
                        "value": "GLS",
                        "name": "Golestan (گلستان)"
                    },
                    {
                        "value": "GIL",
                        "name": "Gilan (گیلان)"
                    },
                    {
                        "value": "MZN",
                        "name": "Mazandaran (مازندران)"
                    },
                    {
                        "value": "MKZ",
                        "name": "Markazi (مرکزی)"
                    },
                    {
                        "value": "HRZ",
                        "name": "Hormozgan (هرمزگان)"
                    },
                    {
                        "value": "SBN",
                        "name": "Sistan and Baluchestan (سیستان و بلوچستان)"
                    }
                ],
                "IE": [
                    {
                        "value": "CE",
                        "name": "Clare"
                    },
                    {
                        "value": "CK",
                        "name": "Cork"
                    },
                    {
                        "value": "CN",
                        "name": "Cavan"
                    },
                    {
                        "value": "CW",
                        "name": "Carlow"
                    },
                    {
                        "value": "DL",
                        "name": "Donegal"
                    },
                    {
                        "value": "DN",
                        "name": "Dublin"
                    },
                    {
                        "value": "GY",
                        "name": "Galway"
                    },
                    {
                        "value": "KE",
                        "name": "Kildare"
                    },
                    {
                        "value": "KK",
                        "name": "Kilkenny"
                    },
                    {
                        "value": "KY",
                        "name": "Kerry"
                    },
                    {
                        "value": "LD",
                        "name": "Longford"
                    },
                    {
                        "value": "LH",
                        "name": "Louth"
                    },
                    {
                        "value": "LK",
                        "name": "Limerick"
                    },
                    {
                        "value": "LM",
                        "name": "Leitrim"
                    },
                    {
                        "value": "LS",
                        "name": "Laois"
                    },
                    {
                        "value": "MH",
                        "name": "Meath"
                    },
                    {
                        "value": "MN",
                        "name": "Monaghan"
                    },
                    {
                        "value": "MO",
                        "name": "Mayo"
                    },
                    {
                        "value": "OY",
                        "name": "Offaly"
                    },
                    {
                        "value": "RN",
                        "name": "Roscommon"
                    },
                    {
                        "value": "SO",
                        "name": "Sligo"
                    },
                    {
                        "value": "TY",
                        "name": "Tipperary"
                    },
                    {
                        "value": "WD",
                        "name": "Waterford"
                    },
                    {
                        "value": "WH",
                        "name": "Westmeath"
                    },
                    {
                        "value": "WW",
                        "name": "Wicklow"
                    },
                    {
                        "value": "WX",
                        "name": "Wexford"
                    }
                ],
                "IT": [
                    {
                        "value": "AG",
                        "name": "Agrigento"
                    },
                    {
                        "value": "AL",
                        "name": "Alessandria"
                    },
                    {
                        "value": "AN",
                        "name": "Ancona"
                    },
                    {
                        "value": "AO",
                        "name": "Aosta"
                    },
                    {
                        "value": "AR",
                        "name": "Arezzo"
                    },
                    {
                        "value": "AP",
                        "name": "Ascoli Piceno"
                    },
                    {
                        "value": "AT",
                        "name": "Asti"
                    },
                    {
                        "value": "AV",
                        "name": "Avellino"
                    },
                    {
                        "value": "BA",
                        "name": "Bari"
                    },
                    {
                        "value": "BT",
                        "name": "Barletta-Andria-Trani"
                    },
                    {
                        "value": "BL",
                        "name": "Belluno"
                    },
                    {
                        "value": "BN",
                        "name": "Benevento"
                    },
                    {
                        "value": "BG",
                        "name": "Bergamo"
                    },
                    {
                        "value": "BI",
                        "name": "Biella"
                    },
                    {
                        "value": "BO",
                        "name": "Bologna"
                    },
                    {
                        "value": "BZ",
                        "name": "Bolzano"
                    },
                    {
                        "value": "BS",
                        "name": "Brescia"
                    },
                    {
                        "value": "BR",
                        "name": "Brindisi"
                    },
                    {
                        "value": "CA",
                        "name": "Cagliari"
                    },
                    {
                        "value": "CL",
                        "name": "Caltanissetta"
                    },
                    {
                        "value": "CB",
                        "name": "Campobasso"
                    },
                    {
                        "value": "CI",
                        "name": "Carbonia-Iglesias"
                    },
                    {
                        "value": "CE",
                        "name": "Caserta"
                    },
                    {
                        "value": "CT",
                        "name": "Catania"
                    },
                    {
                        "value": "CZ",
                        "name": "Catanzaro"
                    },
                    {
                        "value": "CH",
                        "name": "Chieti"
                    },
                    {
                        "value": "CO",
                        "name": "Como"
                    },
                    {
                        "value": "CS",
                        "name": "Cosenza"
                    },
                    {
                        "value": "CR",
                        "name": "Cremona"
                    },
                    {
                        "value": "KR",
                        "name": "Crotone"
                    },
                    {
                        "value": "CN",
                        "name": "Cuneo"
                    },
                    {
                        "value": "EN",
                        "name": "Enna"
                    },
                    {
                        "value": "FM",
                        "name": "Fermo"
                    },
                    {
                        "value": "FE",
                        "name": "Ferrara"
                    },
                    {
                        "value": "FI",
                        "name": "Firenze"
                    },
                    {
                        "value": "FG",
                        "name": "Foggia"
                    },
                    {
                        "value": "FC",
                        "name": "Forlì-Cesena"
                    },
                    {
                        "value": "FR",
                        "name": "Frosinone"
                    },
                    {
                        "value": "GE",
                        "name": "Genova"
                    },
                    {
                        "value": "GO",
                        "name": "Gorizia"
                    },
                    {
                        "value": "GR",
                        "name": "Grosseto"
                    },
                    {
                        "value": "IM",
                        "name": "Imperia"
                    },
                    {
                        "value": "IS",
                        "name": "Isernia"
                    },
                    {
                        "value": "SP",
                        "name": "La Spezia"
                    },
                    {
                        "value": "AQ",
                        "name": "L'Aquila"
                    },
                    {
                        "value": "LT",
                        "name": "Latina"
                    },
                    {
                        "value": "LE",
                        "name": "Lecce"
                    },
                    {
                        "value": "LC",
                        "name": "Lecco"
                    },
                    {
                        "value": "LI",
                        "name": "Livorno"
                    },
                    {
                        "value": "LO",
                        "name": "Lodi"
                    },
                    {
                        "value": "LU",
                        "name": "Lucca"
                    },
                    {
                        "value": "MC",
                        "name": "Macerata"
                    },
                    {
                        "value": "MN",
                        "name": "Mantova"
                    },
                    {
                        "value": "MS",
                        "name": "Massa-Carrara"
                    },
                    {
                        "value": "MT",
                        "name": "Matera"
                    },
                    {
                        "value": "ME",
                        "name": "Messina"
                    },
                    {
                        "value": "MI",
                        "name": "Milano"
                    },
                    {
                        "value": "MO",
                        "name": "Modena"
                    },
                    {
                        "value": "MB",
                        "name": "Monza e della Brianza"
                    },
                    {
                        "value": "NA",
                        "name": "Napoli"
                    },
                    {
                        "value": "NO",
                        "name": "Novara"
                    },
                    {
                        "value": "NU",
                        "name": "Nuoro"
                    },
                    {
                        "value": "OT",
                        "name": "Olbia-Tempio"
                    },
                    {
                        "value": "OR",
                        "name": "Oristano"
                    },
                    {
                        "value": "PD",
                        "name": "Padova"
                    },
                    {
                        "value": "PA",
                        "name": "Palermo"
                    },
                    {
                        "value": "PR",
                        "name": "Parma"
                    },
                    {
                        "value": "PV",
                        "name": "Pavia"
                    },
                    {
                        "value": "PG",
                        "name": "Perugia"
                    },
                    {
                        "value": "PU",
                        "name": "Pesaro e Urbino"
                    },
                    {
                        "value": "PE",
                        "name": "Pescara"
                    },
                    {
                        "value": "PC",
                        "name": "Piacenza"
                    },
                    {
                        "value": "PI",
                        "name": "Pisa"
                    },
                    {
                        "value": "PT",
                        "name": "Pistoia"
                    },
                    {
                        "value": "PN",
                        "name": "Pordenone"
                    },
                    {
                        "value": "PZ",
                        "name": "Potenza"
                    },
                    {
                        "value": "PO",
                        "name": "Prato"
                    },
                    {
                        "value": "RG",
                        "name": "Ragusa"
                    },
                    {
                        "value": "RA",
                        "name": "Ravenna"
                    },
                    {
                        "value": "RC",
                        "name": "Reggio Calabria"
                    },
                    {
                        "value": "RE",
                        "name": "Reggio Emilia"
                    },
                    {
                        "value": "RI",
                        "name": "Rieti"
                    },
                    {
                        "value": "RN",
                        "name": "Rimini"
                    },
                    {
                        "value": "RM",
                        "name": "Roma"
                    },
                    {
                        "value": "RO",
                        "name": "Rovigo"
                    },
                    {
                        "value": "SA",
                        "name": "Salerno"
                    },
                    {
                        "value": "VS",
                        "name": "Medio Campidano"
                    },
                    {
                        "value": "SS",
                        "name": "Sassari"
                    },
                    {
                        "value": "SV",
                        "name": "Savona"
                    },
                    {
                        "value": "SI",
                        "name": "Siena"
                    },
                    {
                        "value": "SR",
                        "name": "Siracusa"
                    },
                    {
                        "value": "SO",
                        "name": "Sondrio"
                    },
                    {
                        "value": "TA",
                        "name": "Taranto"
                    },
                    {
                        "value": "TE",
                        "name": "Teramo"
                    },
                    {
                        "value": "TR",
                        "name": "Terni"
                    },
                    {
                        "value": "TO",
                        "name": "Torino"
                    },
                    {
                        "value": "OG",
                        "name": "Ogliastra"
                    },
                    {
                        "value": "TP",
                        "name": "Trapani"
                    },
                    {
                        "value": "TN",
                        "name": "Trento"
                    },
                    {
                        "value": "TV",
                        "name": "Treviso"
                    },
                    {
                        "value": "TS",
                        "name": "Trieste"
                    },
                    {
                        "value": "UD",
                        "name": "Udine"
                    },
                    {
                        "value": "VA",
                        "name": "Varese"
                    },
                    {
                        "value": "VE",
                        "name": "Venezia"
                    },
                    {
                        "value": "VB",
                        "name": "Verbano-Cusio-Ossola"
                    },
                    {
                        "value": "VC",
                        "name": "Vercelli"
                    },
                    {
                        "value": "VR",
                        "name": "Verona"
                    },
                    {
                        "value": "VV",
                        "name": "Vibo Valentia"
                    },
                    {
                        "value": "VI",
                        "name": "Vicenza"
                    },
                    {
                        "value": "VT",
                        "name": "Viterbo"
                    }
                ],
                "JP": [
                    {
                        "value": "JP01",
                        "name": "Hokkaido"
                    },
                    {
                        "value": "JP02",
                        "name": "Aomori"
                    },
                    {
                        "value": "JP03",
                        "name": "Iwate"
                    },
                    {
                        "value": "JP04",
                        "name": "Miyagi"
                    },
                    {
                        "value": "JP05",
                        "name": "Akita"
                    },
                    {
                        "value": "JP06",
                        "name": "Yamagata"
                    },
                    {
                        "value": "JP07",
                        "name": "Fukushima"
                    },
                    {
                        "value": "JP08",
                        "name": "Ibaraki"
                    },
                    {
                        "value": "JP09",
                        "name": "Tochigi"
                    },
                    {
                        "value": "JP10",
                        "name": "Gunma"
                    },
                    {
                        "value": "JP11",
                        "name": "Saitama"
                    },
                    {
                        "value": "JP12",
                        "name": "Chiba"
                    },
                    {
                        "value": "JP13",
                        "name": "Tokyo"
                    },
                    {
                        "value": "JP14",
                        "name": "Kanagawa"
                    },
                    {
                        "value": "JP15",
                        "name": "Niigata"
                    },
                    {
                        "value": "JP16",
                        "name": "Toyama"
                    },
                    {
                        "value": "JP17",
                        "name": "Ishikawa"
                    },
                    {
                        "value": "JP18",
                        "name": "Fukui"
                    },
                    {
                        "value": "JP19",
                        "name": "Yamanashi"
                    },
                    {
                        "value": "JP20",
                        "name": "Nagano"
                    },
                    {
                        "value": "JP21",
                        "name": "Gifu"
                    },
                    {
                        "value": "JP22",
                        "name": "Shizuoka"
                    },
                    {
                        "value": "JP23",
                        "name": "Aichi"
                    },
                    {
                        "value": "JP24",
                        "name": "Mie"
                    },
                    {
                        "value": "JP25",
                        "name": "Shiga"
                    },
                    {
                        "value": "JP26",
                        "name": "Kyoto"
                    },
                    {
                        "value": "JP27",
                        "name": "Osaka"
                    },
                    {
                        "value": "JP28",
                        "name": "Hyogo"
                    },
                    {
                        "value": "JP29",
                        "name": "Nara"
                    },
                    {
                        "value": "JP30",
                        "name": "Wakayama"
                    },
                    {
                        "value": "JP31",
                        "name": "Tottori"
                    },
                    {
                        "value": "JP32",
                        "name": "Shimane"
                    },
                    {
                        "value": "JP33",
                        "name": "Okayama"
                    },
                    {
                        "value": "JP34",
                        "name": "Hiroshima"
                    },
                    {
                        "value": "JP35",
                        "name": "Yamaguchi"
                    },
                    {
                        "value": "JP36",
                        "name": "Tokushima"
                    },
                    {
                        "value": "JP37",
                        "name": "Kagawa"
                    },
                    {
                        "value": "JP38",
                        "name": "Ehime"
                    },
                    {
                        "value": "JP39",
                        "name": "Kochi"
                    },
                    {
                        "value": "JP40",
                        "name": "Fukuoka"
                    },
                    {
                        "value": "JP41",
                        "name": "Saga"
                    },
                    {
                        "value": "JP42",
                        "name": "Nagasaki"
                    },
                    {
                        "value": "JP43",
                        "name": "Kumamoto"
                    },
                    {
                        "value": "JP44",
                        "name": "Oita"
                    },
                    {
                        "value": "JP45",
                        "name": "Miyazaki"
                    },
                    {
                        "value": "JP46",
                        "name": "Kagoshima"
                    },
                    {
                        "value": "JP47",
                        "name": "Okinawa"
                    }
                ],
                "MY": [
                    {
                        "value": "JHR",
                        "name": "Johor"
                    },
                    {
                        "value": "KDH",
                        "name": "Kedah"
                    },
                    {
                        "value": "KTN",
                        "name": "Kelantan"
                    },
                    {
                        "value": "LBN",
                        "name": "Labuan"
                    },
                    {
                        "value": "MLK",
                        "name": "Malacca (Melaka)"
                    },
                    {
                        "value": "NSN",
                        "name": "Negeri Sembilan"
                    },
                    {
                        "value": "PHG",
                        "name": "Pahang"
                    },
                    {
                        "value": "PNG",
                        "name": "Penang (Pulau Pinang)"
                    },
                    {
                        "value": "PRK",
                        "name": "Perak"
                    },
                    {
                        "value": "PLS",
                        "name": "Perlis"
                    },
                    {
                        "value": "SBH",
                        "name": "Sabah"
                    },
                    {
                        "value": "SWK",
                        "name": "Sarawak"
                    },
                    {
                        "value": "SGR",
                        "name": "Selangor"
                    },
                    {
                        "value": "TRG",
                        "name": "Terengganu"
                    },
                    {
                        "value": "PJY",
                        "name": "Putrajaya"
                    },
                    {
                        "value": "KUL",
                        "name": "Kuala Lumpur"
                    }
                ],
                "MX": [
                    {
                        "value": "Distrito Federal",
                        "name": "Distrito Federal"
                    },
                    {
                        "value": "Jalisco",
                        "name": "Jalisco"
                    },
                    {
                        "value": "Nuevo Leon",
                        "name": "Nuevo León"
                    },
                    {
                        "value": "Aguascalientes",
                        "name": "Aguascalientes"
                    },
                    {
                        "value": "Baja California",
                        "name": "Baja California"
                    },
                    {
                        "value": "Baja California Sur",
                        "name": "Baja California Sur"
                    },
                    {
                        "value": "Campeche",
                        "name": "Campeche"
                    },
                    {
                        "value": "Chiapas",
                        "name": "Chiapas"
                    },
                    {
                        "value": "Chihuahua",
                        "name": "Chihuahua"
                    },
                    {
                        "value": "Coahuila",
                        "name": "Coahuila"
                    },
                    {
                        "value": "Colima",
                        "name": "Colima"
                    },
                    {
                        "value": "Durango",
                        "name": "Durango"
                    },
                    {
                        "value": "Guanajuato",
                        "name": "Guanajuato"
                    },
                    {
                        "value": "Guerrero",
                        "name": "Guerrero"
                    },
                    {
                        "value": "Hidalgo",
                        "name": "Hidalgo"
                    },
                    {
                        "value": "Estado de Mexico",
                        "name": "Edo. de México"
                    },
                    {
                        "value": "Michoacan",
                        "name": "Michoacán"
                    },
                    {
                        "value": "Morelos",
                        "name": "Morelos"
                    },
                    {
                        "value": "Nayarit",
                        "name": "Nayarit"
                    },
                    {
                        "value": "Oaxaca",
                        "name": "Oaxaca"
                    },
                    {
                        "value": "Puebla",
                        "name": "Puebla"
                    },
                    {
                        "value": "Queretaro",
                        "name": "Querétaro"
                    },
                    {
                        "value": "Quintana Roo",
                        "name": "Quintana Roo"
                    },
                    {
                        "value": "San Luis Potosi",
                        "name": "San Luis Potosí"
                    },
                    {
                        "value": "Sinaloa",
                        "name": "Sinaloa"
                    },
                    {
                        "value": "Sonora",
                        "name": "Sonora"
                    },
                    {
                        "value": "Tabasco",
                        "name": "Tabasco"
                    },
                    {
                        "value": "Tamaulipas",
                        "name": "Tamaulipas"
                    },
                    {
                        "value": "Tlaxcala",
                        "name": "Tlaxcala"
                    },
                    {
                        "value": "Veracruz",
                        "name": "Veracruz"
                    },
                    {
                        "value": "Yucatan",
                        "name": "Yucatán"
                    },
                    {
                        "value": "Zacatecas",
                        "name": "Zacatecas"
                    }
                ],
                "NP": [
                    {
                        "value": "BAG",
                        "name": "Bagmati"
                    },
                    {
                        "value": "BHE",
                        "name": "Bheri"
                    },
                    {
                        "value": "DHA",
                        "name": "Dhaulagiri"
                    },
                    {
                        "value": "GAN",
                        "name": "Gandaki"
                    },
                    {
                        "value": "JAN",
                        "name": "Janakpur"
                    },
                    {
                        "value": "KAR",
                        "name": "Karnali"
                    },
                    {
                        "value": "KOS",
                        "name": "Koshi"
                    },
                    {
                        "value": "LUM",
                        "name": "Lumbini"
                    },
                    {
                        "value": "MAH",
                        "name": "Mahakali"
                    },
                    {
                        "value": "MEC",
                        "name": "Mechi"
                    },
                    {
                        "value": "NAR",
                        "name": "Narayani"
                    },
                    {
                        "value": "RAP",
                        "name": "Rapti"
                    },
                    {
                        "value": "SAG",
                        "name": "Sagarmatha"
                    },
                    {
                        "value": "SET",
                        "name": "Seti"
                    }
                ],
                "NZ": [
                    {
                        "value": "NL",
                        "name": "Northland"
                    },
                    {
                        "value": "AK",
                        "name": "Auckland"
                    },
                    {
                        "value": "WA",
                        "name": "Waikato"
                    },
                    {
                        "value": "BP",
                        "name": "Bay of Plenty"
                    },
                    {
                        "value": "TK",
                        "name": "Taranaki"
                    },
                    {
                        "value": "GI",
                        "name": "Gisborne"
                    },
                    {
                        "value": "HB",
                        "name": "Hawke&rsquo;s Bay"
                    },
                    {
                        "value": "MW",
                        "name": "Manawatu-Wanganui"
                    },
                    {
                        "value": "WE",
                        "name": "Wellington"
                    },
                    {
                        "value": "NS",
                        "name": "Nelson"
                    },
                    {
                        "value": "MB",
                        "name": "Marlborough"
                    },
                    {
                        "value": "TM",
                        "name": "Tasman"
                    },
                    {
                        "value": "WC",
                        "name": "West Coast"
                    },
                    {
                        "value": "CT",
                        "name": "Canterbury"
                    },
                    {
                        "value": "OT",
                        "name": "Otago"
                    },
                    {
                        "value": "SL",
                        "name": "Southland"
                    }
                ],
                "NG": [
                    {
                        "value": "AB",
                        "name": "Abia"
                    },
                    {
                        "value": "FC",
                        "name": "Abuja"
                    },
                    {
                        "value": "AD",
                        "name": "Adamawa"
                    },
                    {
                        "value": "AK",
                        "name": "Akwa Ibom"
                    },
                    {
                        "value": "AN",
                        "name": "Anambra"
                    },
                    {
                        "value": "BA",
                        "name": "Bauchi"
                    },
                    {
                        "value": "BY",
                        "name": "Bayelsa"
                    },
                    {
                        "value": "BE",
                        "name": "Benue"
                    },
                    {
                        "value": "BO",
                        "name": "Borno"
                    },
                    {
                        "value": "CR",
                        "name": "Cross River"
                    },
                    {
                        "value": "DE",
                        "name": "Delta"
                    },
                    {
                        "value": "EB",
                        "name": "Ebonyi"
                    },
                    {
                        "value": "ED",
                        "name": "Edo"
                    },
                    {
                        "value": "EK",
                        "name": "Ekiti"
                    },
                    {
                        "value": "EN",
                        "name": "Enugu"
                    },
                    {
                        "value": "GO",
                        "name": "Gombe"
                    },
                    {
                        "value": "IM",
                        "name": "Imo"
                    },
                    {
                        "value": "JI",
                        "name": "Jigawa"
                    },
                    {
                        "value": "KD",
                        "name": "Kaduna"
                    },
                    {
                        "value": "KN",
                        "name": "Kano"
                    },
                    {
                        "value": "KT",
                        "name": "Katsina"
                    },
                    {
                        "value": "KE",
                        "name": "Kebbi"
                    },
                    {
                        "value": "KO",
                        "name": "Kogi"
                    },
                    {
                        "value": "KW",
                        "name": "Kwara"
                    },
                    {
                        "value": "LA",
                        "name": "Lagos"
                    },
                    {
                        "value": "NA",
                        "name": "Nasarawa"
                    },
                    {
                        "value": "NI",
                        "name": "Niger"
                    },
                    {
                        "value": "OG",
                        "name": "Ogun"
                    },
                    {
                        "value": "ON",
                        "name": "Ondo"
                    },
                    {
                        "value": "OS",
                        "name": "Osun"
                    },
                    {
                        "value": "OY",
                        "name": "Oyo"
                    },
                    {
                        "value": "PL",
                        "name": "Plateau"
                    },
                    {
                        "value": "RI",
                        "name": "Rivers"
                    },
                    {
                        "value": "SO",
                        "name": "Sokoto"
                    },
                    {
                        "value": "TA",
                        "name": "Taraba"
                    },
                    {
                        "value": "YO",
                        "name": "Yobe"
                    },
                    {
                        "value": "ZA",
                        "name": "Zamfara"
                    }
                ],
                "PK": [
                    {
                        "value": "JK",
                        "name": "Azad Kashmir"
                    },
                    {
                        "value": "BA",
                        "name": "Balochistan"
                    },
                    {
                        "value": "TA",
                        "name": "FATA"
                    },
                    {
                        "value": "GB",
                        "name": "Gilgit Baltistan"
                    },
                    {
                        "value": "IS",
                        "name": "Islamabad Capital Territory"
                    },
                    {
                        "value": "KP",
                        "name": "Khyber Pakhtunkhwa"
                    },
                    {
                        "value": "PB",
                        "name": "Punjab"
                    },
                    {
                        "value": "SD",
                        "name": "Sindh"
                    }
                ],
                "PE": [
                    {
                        "value": "CAL",
                        "name": "El Callao"
                    },
                    {
                        "value": "LMA",
                        "name": "Municipalidad Metropolitana de Lima"
                    },
                    {
                        "value": "AMA",
                        "name": "Amazonas"
                    },
                    {
                        "value": "ANC",
                        "name": "Ancash"
                    },
                    {
                        "value": "APU",
                        "name": "Apur&iacute;mac"
                    },
                    {
                        "value": "ARE",
                        "name": "Arequipa"
                    },
                    {
                        "value": "AYA",
                        "name": "Ayacucho"
                    },
                    {
                        "value": "CAJ",
                        "name": "Cajamarca"
                    },
                    {
                        "value": "CUS",
                        "name": "Cusco"
                    },
                    {
                        "value": "HUV",
                        "name": "Huancavelica"
                    },
                    {
                        "value": "HUC",
                        "name": "Hu&aacute;nuco"
                    },
                    {
                        "value": "ICA",
                        "name": "Ica"
                    },
                    {
                        "value": "JUN",
                        "name": "Jun&iacute;n"
                    },
                    {
                        "value": "LAL",
                        "name": "La Libertad"
                    },
                    {
                        "value": "LAM",
                        "name": "Lambayeque"
                    },
                    {
                        "value": "LIM",
                        "name": "Lima"
                    },
                    {
                        "value": "LOR",
                        "name": "Loreto"
                    },
                    {
                        "value": "MDD",
                        "name": "Madre de Dios"
                    },
                    {
                        "value": "MOQ",
                        "name": "Moquegua"
                    },
                    {
                        "value": "PAS",
                        "name": "Pasco"
                    },
                    {
                        "value": "PIU",
                        "name": "Piura"
                    },
                    {
                        "value": "PUN",
                        "name": "Puno"
                    },
                    {
                        "value": "SAM",
                        "name": "San Mart&iacute;n"
                    },
                    {
                        "value": "TAC",
                        "name": "Tacna"
                    },
                    {
                        "value": "TUM",
                        "name": "Tumbes"
                    },
                    {
                        "value": "UCA",
                        "name": "Ucayali"
                    }
                ],
                "PH": [
                    {
                        "value": "ABR",
                        "name": "Abra"
                    },
                    {
                        "value": "AGN",
                        "name": "Agusan del Norte"
                    },
                    {
                        "value": "AGS",
                        "name": "Agusan del Sur"
                    },
                    {
                        "value": "AKL",
                        "name": "Aklan"
                    },
                    {
                        "value": "ALB",
                        "name": "Albay"
                    },
                    {
                        "value": "ANT",
                        "name": "Antique"
                    },
                    {
                        "value": "APA",
                        "name": "Apayao"
                    },
                    {
                        "value": "AUR",
                        "name": "Aurora"
                    },
                    {
                        "value": "BAS",
                        "name": "Basilan"
                    },
                    {
                        "value": "BAN",
                        "name": "Bataan"
                    },
                    {
                        "value": "BTN",
                        "name": "Batanes"
                    },
                    {
                        "value": "BTG",
                        "name": "Batangas"
                    },
                    {
                        "value": "BEN",
                        "name": "Benguet"
                    },
                    {
                        "value": "BIL",
                        "name": "Biliran"
                    },
                    {
                        "value": "BOH",
                        "name": "Bohol"
                    },
                    {
                        "value": "BUK",
                        "name": "Bukidnon"
                    },
                    {
                        "value": "BUL",
                        "name": "Bulacan"
                    },
                    {
                        "value": "CAG",
                        "name": "Cagayan"
                    },
                    {
                        "value": "CAN",
                        "name": "Camarines Norte"
                    },
                    {
                        "value": "CAS",
                        "name": "Camarines Sur"
                    },
                    {
                        "value": "CAM",
                        "name": "Camiguin"
                    },
                    {
                        "value": "CAP",
                        "name": "Capiz"
                    },
                    {
                        "value": "CAT",
                        "name": "Catanduanes"
                    },
                    {
                        "value": "CAV",
                        "name": "Cavite"
                    },
                    {
                        "value": "CEB",
                        "name": "Cebu"
                    },
                    {
                        "value": "COM",
                        "name": "Compostela Valley"
                    },
                    {
                        "value": "NCO",
                        "name": "Cotabato"
                    },
                    {
                        "value": "DAV",
                        "name": "Davao del Norte"
                    },
                    {
                        "value": "DAS",
                        "name": "Davao del Sur"
                    },
                    {
                        "value": "DAC",
                        "name": "Davao Occidental"
                    },
                    {
                        "value": "DAO",
                        "name": "Davao Oriental"
                    },
                    {
                        "value": "DIN",
                        "name": "Dinagat Islands"
                    },
                    {
                        "value": "EAS",
                        "name": "Eastern Samar"
                    },
                    {
                        "value": "GUI",
                        "name": "Guimaras"
                    },
                    {
                        "value": "IFU",
                        "name": "Ifugao"
                    },
                    {
                        "value": "ILN",
                        "name": "Ilocos Norte"
                    },
                    {
                        "value": "ILS",
                        "name": "Ilocos Sur"
                    },
                    {
                        "value": "ILI",
                        "name": "Iloilo"
                    },
                    {
                        "value": "ISA",
                        "name": "Isabela"
                    },
                    {
                        "value": "KAL",
                        "name": "Kalinga"
                    },
                    {
                        "value": "LUN",
                        "name": "La Union"
                    },
                    {
                        "value": "LAG",
                        "name": "Laguna"
                    },
                    {
                        "value": "LAN",
                        "name": "Lanao del Norte"
                    },
                    {
                        "value": "LAS",
                        "name": "Lanao del Sur"
                    },
                    {
                        "value": "LEY",
                        "name": "Leyte"
                    },
                    {
                        "value": "MAG",
                        "name": "Maguindanao"
                    },
                    {
                        "value": "MAD",
                        "name": "Marinduque"
                    },
                    {
                        "value": "MAS",
                        "name": "Masbate"
                    },
                    {
                        "value": "MSC",
                        "name": "Misamis Occidental"
                    },
                    {
                        "value": "MSR",
                        "name": "Misamis Oriental"
                    },
                    {
                        "value": "MOU",
                        "name": "Mountain Province"
                    },
                    {
                        "value": "NEC",
                        "name": "Negros Occidental"
                    },
                    {
                        "value": "NER",
                        "name": "Negros Oriental"
                    },
                    {
                        "value": "NSA",
                        "name": "Northern Samar"
                    },
                    {
                        "value": "NUE",
                        "name": "Nueva Ecija"
                    },
                    {
                        "value": "NUV",
                        "name": "Nueva Vizcaya"
                    },
                    {
                        "value": "MDC",
                        "name": "Occidental Mindoro"
                    },
                    {
                        "value": "MDR",
                        "name": "Oriental Mindoro"
                    },
                    {
                        "value": "PLW",
                        "name": "Palawan"
                    },
                    {
                        "value": "PAM",
                        "name": "Pampanga"
                    },
                    {
                        "value": "PAN",
                        "name": "Pangasinan"
                    },
                    {
                        "value": "QUE",
                        "name": "Quezon"
                    },
                    {
                        "value": "QUI",
                        "name": "Quirino"
                    },
                    {
                        "value": "RIZ",
                        "name": "Rizal"
                    },
                    {
                        "value": "ROM",
                        "name": "Romblon"
                    },
                    {
                        "value": "WSA",
                        "name": "Samar"
                    },
                    {
                        "value": "SAR",
                        "name": "Sarangani"
                    },
                    {
                        "value": "SIQ",
                        "name": "Siquijor"
                    },
                    {
                        "value": "SOR",
                        "name": "Sorsogon"
                    },
                    {
                        "value": "SCO",
                        "name": "South Cotabato"
                    },
                    {
                        "value": "SLE",
                        "name": "Southern Leyte"
                    },
                    {
                        "value": "SUK",
                        "name": "Sultan Kudarat"
                    },
                    {
                        "value": "SLU",
                        "name": "Sulu"
                    },
                    {
                        "value": "SUN",
                        "name": "Surigao del Norte"
                    },
                    {
                        "value": "SUR",
                        "name": "Surigao del Sur"
                    },
                    {
                        "value": "TAR",
                        "name": "Tarlac"
                    },
                    {
                        "value": "TAW",
                        "name": "Tawi-Tawi"
                    },
                    {
                        "value": "ZMB",
                        "name": "Zambales"
                    },
                    {
                        "value": "ZAN",
                        "name": "Zamboanga del Norte"
                    },
                    {
                        "value": "ZAS",
                        "name": "Zamboanga del Sur"
                    },
                    {
                        "value": "ZSI",
                        "name": "Zamboanga Sibugay"
                    },
                    {
                        "value": "00",
                        "name": "Metro Manila"
                    }
                ],
                "RO": [
                    {
                        "value": "AB",
                        "name": "Alba"
                    },
                    {
                        "value": "AR",
                        "name": "Arad"
                    },
                    {
                        "value": "AG",
                        "name": "Arges"
                    },
                    {
                        "value": "BC",
                        "name": "Bacau"
                    },
                    {
                        "value": "BH",
                        "name": "Bihor"
                    },
                    {
                        "value": "BN",
                        "name": "Bistrita-Nasaud"
                    },
                    {
                        "value": "BT",
                        "name": "Botosani"
                    },
                    {
                        "value": "BR",
                        "name": "Braila"
                    },
                    {
                        "value": "BV",
                        "name": "Brasov"
                    },
                    {
                        "value": "B",
                        "name": "Bucuresti"
                    },
                    {
                        "value": "BZ",
                        "name": "Buzau"
                    },
                    {
                        "value": "CL",
                        "name": "Calarasi"
                    },
                    {
                        "value": "CS",
                        "name": "Caras-Severin"
                    },
                    {
                        "value": "CJ",
                        "name": "Cluj"
                    },
                    {
                        "value": "CT",
                        "name": "Constanta"
                    },
                    {
                        "value": "CV",
                        "name": "Covasna"
                    },
                    {
                        "value": "DB",
                        "name": "Dambovita"
                    },
                    {
                        "value": "DJ",
                        "name": "Dolj"
                    },
                    {
                        "value": "GL",
                        "name": "Galati"
                    },
                    {
                        "value": "GR",
                        "name": "Giurgiu"
                    },
                    {
                        "value": "GJ",
                        "name": "Gorj"
                    },
                    {
                        "value": "HR",
                        "name": "Harghita"
                    },
                    {
                        "value": "HD",
                        "name": "Hunedoara"
                    },
                    {
                        "value": "IL",
                        "name": "Ialomita"
                    },
                    {
                        "value": "IS",
                        "name": "Iasi"
                    },
                    {
                        "value": "IF",
                        "name": "Ilfov"
                    },
                    {
                        "value": "MM",
                        "name": "Maramures"
                    },
                    {
                        "value": "MH",
                        "name": "Mehedinti"
                    },
                    {
                        "value": "MS",
                        "name": "Mures"
                    },
                    {
                        "value": "NT",
                        "name": "Neamt"
                    },
                    {
                        "value": "OT",
                        "name": "Olt"
                    },
                    {
                        "value": "PH",
                        "name": "Prahova"
                    },
                    {
                        "value": "SJ",
                        "name": "Salaj"
                    },
                    {
                        "value": "SM",
                        "name": "Satu Mare"
                    },
                    {
                        "value": "SB",
                        "name": "Sibiu"
                    },
                    {
                        "value": "SV",
                        "name": "Suceava"
                    },
                    {
                        "value": "TR",
                        "name": "Teleorman"
                    },
                    {
                        "value": "TM",
                        "name": "Timis"
                    },
                    {
                        "value": "TL",
                        "name": "Tulcea"
                    },
                    {
                        "value": "VL",
                        "name": "Valcea"
                    },
                    {
                        "value": "VS",
                        "name": "Vaslui"
                    },
                    {
                        "value": "VN",
                        "name": "Vrancea"
                    }
                ],
                "ZA": [
                    {
                        "value": "EC",
                        "name": "Eastern Cape"
                    },
                    {
                        "value": "FS",
                        "name": "Free State"
                    },
                    {
                        "value": "GP",
                        "name": "Gauteng"
                    },
                    {
                        "value": "KZN",
                        "name": "KwaZulu-Natal"
                    },
                    {
                        "value": "LP",
                        "name": "Limpopo"
                    },
                    {
                        "value": "MP",
                        "name": "Mpumalanga"
                    },
                    {
                        "value": "NC",
                        "name": "Northern Cape"
                    },
                    {
                        "value": "NW",
                        "name": "North West"
                    },
                    {
                        "value": "WC",
                        "name": "Western Cape"
                    }
                ],
                "ES": [
                    {
                        "value": "C",
                        "name": "A Coru&ntilde;a"
                    },
                    {
                        "value": "VI",
                        "name": "Araba/&Aacute;lava"
                    },
                    {
                        "value": "AB",
                        "name": "Albacete"
                    },
                    {
                        "value": "A",
                        "name": "Alicante"
                    },
                    {
                        "value": "AL",
                        "name": "Almer&iacute;a"
                    },
                    {
                        "value": "O",
                        "name": "Asturias"
                    },
                    {
                        "value": "AV",
                        "name": "&Aacute;vila"
                    },
                    {
                        "value": "BA",
                        "name": "Badajoz"
                    },
                    {
                        "value": "PM",
                        "name": "Baleares"
                    },
                    {
                        "value": "B",
                        "name": "Barcelona"
                    },
                    {
                        "value": "BU",
                        "name": "Burgos"
                    },
                    {
                        "value": "CC",
                        "name": "C&aacute;ceres"
                    },
                    {
                        "value": "CA",
                        "name": "C&aacute;diz"
                    },
                    {
                        "value": "S",
                        "name": "Cantabria"
                    },
                    {
                        "value": "CS",
                        "name": "Castell&oacute;n"
                    },
                    {
                        "value": "CE",
                        "name": "Ceuta"
                    },
                    {
                        "value": "CR",
                        "name": "Ciudad Real"
                    },
                    {
                        "value": "CO",
                        "name": "C&oacute;rdoba"
                    },
                    {
                        "value": "CU",
                        "name": "Cuenca"
                    },
                    {
                        "value": "GI",
                        "name": "Girona"
                    },
                    {
                        "value": "GR",
                        "name": "Granada"
                    },
                    {
                        "value": "GU",
                        "name": "Guadalajara"
                    },
                    {
                        "value": "SS",
                        "name": "Gipuzkoa"
                    },
                    {
                        "value": "H",
                        "name": "Huelva"
                    },
                    {
                        "value": "HU",
                        "name": "Huesca"
                    },
                    {
                        "value": "J",
                        "name": "Ja&eacute;n"
                    },
                    {
                        "value": "LO",
                        "name": "La Rioja"
                    },
                    {
                        "value": "GC",
                        "name": "Las Palmas"
                    },
                    {
                        "value": "LE",
                        "name": "Le&oacute;n"
                    },
                    {
                        "value": "L",
                        "name": "Lleida"
                    },
                    {
                        "value": "LU",
                        "name": "Lugo"
                    },
                    {
                        "value": "M",
                        "name": "Madrid"
                    },
                    {
                        "value": "MA",
                        "name": "M&aacute;laga"
                    },
                    {
                        "value": "ML",
                        "name": "Melilla"
                    },
                    {
                        "value": "MU",
                        "name": "Murcia"
                    },
                    {
                        "value": "NA",
                        "name": "Navarra"
                    },
                    {
                        "value": "OR",
                        "name": "Ourense"
                    },
                    {
                        "value": "P",
                        "name": "Palencia"
                    },
                    {
                        "value": "PO",
                        "name": "Pontevedra"
                    },
                    {
                        "value": "SA",
                        "name": "Salamanca"
                    },
                    {
                        "value": "TF",
                        "name": "Santa Cruz de Tenerife"
                    },
                    {
                        "value": "SG",
                        "name": "Segovia"
                    },
                    {
                        "value": "SE",
                        "name": "Sevilla"
                    },
                    {
                        "value": "SO",
                        "name": "Soria"
                    },
                    {
                        "value": "T",
                        "name": "Tarragona"
                    },
                    {
                        "value": "TE",
                        "name": "Teruel"
                    },
                    {
                        "value": "TO",
                        "name": "Toledo"
                    },
                    {
                        "value": "V",
                        "name": "Valencia"
                    },
                    {
                        "value": "VA",
                        "name": "Valladolid"
                    },
                    {
                        "value": "BI",
                        "name": "Bizkaia"
                    },
                    {
                        "value": "ZA",
                        "name": "Zamora"
                    },
                    {
                        "value": "Z",
                        "name": "Zaragoza"
                    }
                ],
                "TH": [
                    {
                        "value": "TH-37",
                        "name": "Amnat Charoen (&#3629;&#3635;&#3609;&#3634;&#3592;&#3648;&#3592;&#3619;&#3636;&#3597;)"
                    },
                    {
                        "value": "TH-15",
                        "name": "Ang Thong (&#3629;&#3656;&#3634;&#3591;&#3607;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-14",
                        "name": "Ayutthaya (&#3614;&#3619;&#3632;&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3629;&#3618;&#3640;&#3608;&#3618;&#3634;)"
                    },
                    {
                        "value": "TH-10",
                        "name": "Bangkok (&#3585;&#3619;&#3640;&#3591;&#3648;&#3607;&#3614;&#3617;&#3627;&#3634;&#3609;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-38",
                        "name": "Bueng Kan (&#3610;&#3638;&#3591;&#3585;&#3634;&#3628;)"
                    },
                    {
                        "value": "TH-31",
                        "name": "Buri Ram (&#3610;&#3640;&#3619;&#3637;&#3619;&#3633;&#3617;&#3618;&#3660;)"
                    },
                    {
                        "value": "TH-24",
                        "name": "Chachoengsao (&#3593;&#3632;&#3648;&#3594;&#3636;&#3591;&#3648;&#3607;&#3619;&#3634;)"
                    },
                    {
                        "value": "TH-18",
                        "name": "Chai Nat (&#3594;&#3633;&#3618;&#3609;&#3634;&#3607;)"
                    },
                    {
                        "value": "TH-36",
                        "name": "Chaiyaphum (&#3594;&#3633;&#3618;&#3616;&#3641;&#3617;&#3636;)"
                    },
                    {
                        "value": "TH-22",
                        "name": "Chanthaburi (&#3592;&#3633;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-50",
                        "name": "Chiang Mai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3651;&#3627;&#3617;&#3656;)"
                    },
                    {
                        "value": "TH-57",
                        "name": "Chiang Rai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3619;&#3634;&#3618;)"
                    },
                    {
                        "value": "TH-20",
                        "name": "Chonburi (&#3594;&#3621;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-86",
                        "name": "Chumphon (&#3594;&#3640;&#3617;&#3614;&#3619;)"
                    },
                    {
                        "value": "TH-46",
                        "name": "Kalasin (&#3585;&#3634;&#3628;&#3626;&#3636;&#3609;&#3608;&#3640;&#3660;)"
                    },
                    {
                        "value": "TH-62",
                        "name": "Kamphaeng Phet (&#3585;&#3635;&#3649;&#3614;&#3591;&#3648;&#3614;&#3594;&#3619;)"
                    },
                    {
                        "value": "TH-71",
                        "name": "Kanchanaburi (&#3585;&#3634;&#3597;&#3592;&#3609;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-40",
                        "name": "Khon Kaen (&#3586;&#3629;&#3609;&#3649;&#3585;&#3656;&#3609;)"
                    },
                    {
                        "value": "TH-81",
                        "name": "Krabi (&#3585;&#3619;&#3632;&#3610;&#3637;&#3656;)"
                    },
                    {
                        "value": "TH-52",
                        "name": "Lampang (&#3621;&#3635;&#3611;&#3634;&#3591;)"
                    },
                    {
                        "value": "TH-51",
                        "name": "Lamphun (&#3621;&#3635;&#3614;&#3641;&#3609;)"
                    },
                    {
                        "value": "TH-42",
                        "name": "Loei (&#3648;&#3621;&#3618;)"
                    },
                    {
                        "value": "TH-16",
                        "name": "Lopburi (&#3621;&#3614;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-58",
                        "name": "Mae Hong Son (&#3649;&#3617;&#3656;&#3630;&#3656;&#3629;&#3591;&#3626;&#3629;&#3609;)"
                    },
                    {
                        "value": "TH-44",
                        "name": "Maha Sarakham (&#3617;&#3627;&#3634;&#3626;&#3634;&#3619;&#3588;&#3634;&#3617;)"
                    },
                    {
                        "value": "TH-49",
                        "name": "Mukdahan (&#3617;&#3640;&#3585;&#3604;&#3634;&#3627;&#3634;&#3619;)"
                    },
                    {
                        "value": "TH-26",
                        "name": "Nakhon Nayok (&#3609;&#3588;&#3619;&#3609;&#3634;&#3618;&#3585;)"
                    },
                    {
                        "value": "TH-73",
                        "name": "Nakhon Pathom (&#3609;&#3588;&#3619;&#3611;&#3600;&#3617;)"
                    },
                    {
                        "value": "TH-48",
                        "name": "Nakhon Phanom (&#3609;&#3588;&#3619;&#3614;&#3609;&#3617;)"
                    },
                    {
                        "value": "TH-30",
                        "name": "Nakhon Ratchasima (&#3609;&#3588;&#3619;&#3619;&#3634;&#3594;&#3626;&#3637;&#3617;&#3634;)"
                    },
                    {
                        "value": "TH-60",
                        "name": "Nakhon Sawan (&#3609;&#3588;&#3619;&#3626;&#3623;&#3619;&#3619;&#3588;&#3660;)"
                    },
                    {
                        "value": "TH-80",
                        "name": "Nakhon Si Thammarat (&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3608;&#3619;&#3619;&#3617;&#3619;&#3634;&#3594;)"
                    },
                    {
                        "value": "TH-55",
                        "name": "Nan (&#3609;&#3656;&#3634;&#3609;)"
                    },
                    {
                        "value": "TH-96",
                        "name": "Narathiwat (&#3609;&#3619;&#3634;&#3608;&#3636;&#3623;&#3634;&#3626;)"
                    },
                    {
                        "value": "TH-39",
                        "name": "Nong Bua Lam Phu (&#3627;&#3609;&#3629;&#3591;&#3610;&#3633;&#3623;&#3621;&#3635;&#3616;&#3641;)"
                    },
                    {
                        "value": "TH-43",
                        "name": "Nong Khai (&#3627;&#3609;&#3629;&#3591;&#3588;&#3634;&#3618;)"
                    },
                    {
                        "value": "TH-12",
                        "name": "Nonthaburi (&#3609;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-13",
                        "name": "Pathum Thani (&#3611;&#3607;&#3640;&#3617;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-94",
                        "name": "Pattani (&#3611;&#3633;&#3605;&#3605;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-82",
                        "name": "Phang Nga (&#3614;&#3633;&#3591;&#3591;&#3634;)"
                    },
                    {
                        "value": "TH-93",
                        "name": "Phatthalung (&#3614;&#3633;&#3607;&#3621;&#3640;&#3591;)"
                    },
                    {
                        "value": "TH-56",
                        "name": "Phayao (&#3614;&#3632;&#3648;&#3618;&#3634;)"
                    },
                    {
                        "value": "TH-67",
                        "name": "Phetchabun (&#3648;&#3614;&#3594;&#3619;&#3610;&#3641;&#3619;&#3603;&#3660;)"
                    },
                    {
                        "value": "TH-76",
                        "name": "Phetchaburi (&#3648;&#3614;&#3594;&#3619;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-66",
                        "name": "Phichit (&#3614;&#3636;&#3592;&#3636;&#3605;&#3619;)"
                    },
                    {
                        "value": "TH-65",
                        "name": "Phitsanulok (&#3614;&#3636;&#3625;&#3603;&#3640;&#3650;&#3621;&#3585;)"
                    },
                    {
                        "value": "TH-54",
                        "name": "Phrae (&#3649;&#3614;&#3619;&#3656;)"
                    },
                    {
                        "value": "TH-83",
                        "name": "Phuket (&#3616;&#3641;&#3648;&#3585;&#3655;&#3605;)"
                    },
                    {
                        "value": "TH-25",
                        "name": "Prachin Buri (&#3611;&#3619;&#3634;&#3592;&#3637;&#3609;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-77",
                        "name": "Prachuap Khiri Khan (&#3611;&#3619;&#3632;&#3592;&#3623;&#3610;&#3588;&#3637;&#3619;&#3637;&#3586;&#3633;&#3609;&#3608;&#3660;)"
                    },
                    {
                        "value": "TH-85",
                        "name": "Ranong (&#3619;&#3632;&#3609;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-70",
                        "name": "Ratchaburi (&#3619;&#3634;&#3594;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-21",
                        "name": "Rayong (&#3619;&#3632;&#3618;&#3629;&#3591;)"
                    },
                    {
                        "value": "TH-45",
                        "name": "Roi Et (&#3619;&#3657;&#3629;&#3618;&#3648;&#3629;&#3655;&#3604;)"
                    },
                    {
                        "value": "TH-27",
                        "name": "Sa Kaeo (&#3626;&#3619;&#3632;&#3649;&#3585;&#3657;&#3623;)"
                    },
                    {
                        "value": "TH-47",
                        "name": "Sakon Nakhon (&#3626;&#3585;&#3621;&#3609;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-11",
                        "name": "Samut Prakan (&#3626;&#3617;&#3640;&#3607;&#3619;&#3611;&#3619;&#3634;&#3585;&#3634;&#3619;)"
                    },
                    {
                        "value": "TH-74",
                        "name": "Samut Sakhon (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3634;&#3588;&#3619;)"
                    },
                    {
                        "value": "TH-75",
                        "name": "Samut Songkhram (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3591;&#3588;&#3619;&#3634;&#3617;)"
                    },
                    {
                        "value": "TH-19",
                        "name": "Saraburi (&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-91",
                        "name": "Satun (&#3626;&#3605;&#3641;&#3621;)"
                    },
                    {
                        "value": "TH-17",
                        "name": "Sing Buri (&#3626;&#3636;&#3591;&#3627;&#3660;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-33",
                        "name": "Sisaket (&#3624;&#3619;&#3637;&#3626;&#3632;&#3648;&#3585;&#3625;)"
                    },
                    {
                        "value": "TH-90",
                        "name": "Songkhla (&#3626;&#3591;&#3586;&#3621;&#3634;)"
                    },
                    {
                        "value": "TH-64",
                        "name": "Sukhothai (&#3626;&#3640;&#3650;&#3586;&#3607;&#3633;&#3618;)"
                    },
                    {
                        "value": "TH-72",
                        "name": "Suphan Buri (&#3626;&#3640;&#3614;&#3619;&#3619;&#3603;&#3610;&#3640;&#3619;&#3637;)"
                    },
                    {
                        "value": "TH-84",
                        "name": "Surat Thani (&#3626;&#3640;&#3619;&#3634;&#3625;&#3598;&#3619;&#3660;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-32",
                        "name": "Surin (&#3626;&#3640;&#3619;&#3636;&#3609;&#3607;&#3619;&#3660;)"
                    },
                    {
                        "value": "TH-63",
                        "name": "Tak (&#3605;&#3634;&#3585;)"
                    },
                    {
                        "value": "TH-92",
                        "name": "Trang (&#3605;&#3619;&#3633;&#3591;)"
                    },
                    {
                        "value": "TH-23",
                        "name": "Trat (&#3605;&#3619;&#3634;&#3604;)"
                    },
                    {
                        "value": "TH-34",
                        "name": "Ubon Ratchathani (&#3629;&#3640;&#3610;&#3621;&#3619;&#3634;&#3594;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-41",
                        "name": "Udon Thani (&#3629;&#3640;&#3604;&#3619;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-61",
                        "name": "Uthai Thani (&#3629;&#3640;&#3607;&#3633;&#3618;&#3608;&#3634;&#3609;&#3637;)"
                    },
                    {
                        "value": "TH-53",
                        "name": "Uttaradit (&#3629;&#3640;&#3605;&#3619;&#3604;&#3636;&#3605;&#3606;&#3660;)"
                    },
                    {
                        "value": "TH-95",
                        "name": "Yala (&#3618;&#3632;&#3621;&#3634;)"
                    },
                    {
                        "value": "TH-35",
                        "name": "Yasothon (&#3618;&#3650;&#3626;&#3608;&#3619;)"
                    }
                ],
                "TR": [
                    {
                        "value": "TR01",
                        "name": "Adana"
                    },
                    {
                        "value": "TR02",
                        "name": "Ad&#305;yaman"
                    },
                    {
                        "value": "TR03",
                        "name": "Afyon"
                    },
                    {
                        "value": "TR04",
                        "name": "A&#287;r&#305;"
                    },
                    {
                        "value": "TR05",
                        "name": "Amasya"
                    },
                    {
                        "value": "TR06",
                        "name": "Ankara"
                    },
                    {
                        "value": "TR07",
                        "name": "Antalya"
                    },
                    {
                        "value": "TR08",
                        "name": "Artvin"
                    },
                    {
                        "value": "TR09",
                        "name": "Ayd&#305;n"
                    },
                    {
                        "value": "TR10",
                        "name": "Bal&#305;kesir"
                    },
                    {
                        "value": "TR11",
                        "name": "Bilecik"
                    },
                    {
                        "value": "TR12",
                        "name": "Bing&#246;l"
                    },
                    {
                        "value": "TR13",
                        "name": "Bitlis"
                    },
                    {
                        "value": "TR14",
                        "name": "Bolu"
                    },
                    {
                        "value": "TR15",
                        "name": "Burdur"
                    },
                    {
                        "value": "TR16",
                        "name": "Bursa"
                    },
                    {
                        "value": "TR17",
                        "name": "&#199;anakkale"
                    },
                    {
                        "value": "TR18",
                        "name": "&#199;ank&#305;r&#305;"
                    },
                    {
                        "value": "TR19",
                        "name": "&#199;orum"
                    },
                    {
                        "value": "TR20",
                        "name": "Denizli"
                    },
                    {
                        "value": "TR21",
                        "name": "Diyarbak&#305;r"
                    },
                    {
                        "value": "TR22",
                        "name": "Edirne"
                    },
                    {
                        "value": "TR23",
                        "name": "Elaz&#305;&#287;"
                    },
                    {
                        "value": "TR24",
                        "name": "Erzincan"
                    },
                    {
                        "value": "TR25",
                        "name": "Erzurum"
                    },
                    {
                        "value": "TR26",
                        "name": "Eski&#351;ehir"
                    },
                    {
                        "value": "TR27",
                        "name": "Gaziantep"
                    },
                    {
                        "value": "TR28",
                        "name": "Giresun"
                    },
                    {
                        "value": "TR29",
                        "name": "G&#252;m&#252;&#351;hane"
                    },
                    {
                        "value": "TR30",
                        "name": "Hakkari"
                    },
                    {
                        "value": "TR31",
                        "name": "Hatay"
                    },
                    {
                        "value": "TR32",
                        "name": "Isparta"
                    },
                    {
                        "value": "TR33",
                        "name": "&#304;&#231;el"
                    },
                    {
                        "value": "TR34",
                        "name": "&#304;stanbul"
                    },
                    {
                        "value": "TR35",
                        "name": "&#304;zmir"
                    },
                    {
                        "value": "TR36",
                        "name": "Kars"
                    },
                    {
                        "value": "TR37",
                        "name": "Kastamonu"
                    },
                    {
                        "value": "TR38",
                        "name": "Kayseri"
                    },
                    {
                        "value": "TR39",
                        "name": "K&#305;rklareli"
                    },
                    {
                        "value": "TR40",
                        "name": "K&#305;r&#351;ehir"
                    },
                    {
                        "value": "TR41",
                        "name": "Kocaeli"
                    },
                    {
                        "value": "TR42",
                        "name": "Konya"
                    },
                    {
                        "value": "TR43",
                        "name": "K&#252;tahya"
                    },
                    {
                        "value": "TR44",
                        "name": "Malatya"
                    },
                    {
                        "value": "TR45",
                        "name": "Manisa"
                    },
                    {
                        "value": "TR46",
                        "name": "Kahramanmara&#351;"
                    },
                    {
                        "value": "TR47",
                        "name": "Mardin"
                    },
                    {
                        "value": "TR48",
                        "name": "Mu&#287;la"
                    },
                    {
                        "value": "TR49",
                        "name": "Mu&#351;"
                    },
                    {
                        "value": "TR50",
                        "name": "Nev&#351;ehir"
                    },
                    {
                        "value": "TR51",
                        "name": "Ni&#287;de"
                    },
                    {
                        "value": "TR52",
                        "name": "Ordu"
                    },
                    {
                        "value": "TR53",
                        "name": "Rize"
                    },
                    {
                        "value": "TR54",
                        "name": "Sakarya"
                    },
                    {
                        "value": "TR55",
                        "name": "Samsun"
                    },
                    {
                        "value": "TR56",
                        "name": "Siirt"
                    },
                    {
                        "value": "TR57",
                        "name": "Sinop"
                    },
                    {
                        "value": "TR58",
                        "name": "Sivas"
                    },
                    {
                        "value": "TR59",
                        "name": "Tekirda&#287;"
                    },
                    {
                        "value": "TR60",
                        "name": "Tokat"
                    },
                    {
                        "value": "TR61",
                        "name": "Trabzon"
                    },
                    {
                        "value": "TR62",
                        "name": "Tunceli"
                    },
                    {
                        "value": "TR63",
                        "name": "&#350;anl&#305;urfa"
                    },
                    {
                        "value": "TR64",
                        "name": "U&#351;ak"
                    },
                    {
                        "value": "TR65",
                        "name": "Van"
                    },
                    {
                        "value": "TR66",
                        "name": "Yozgat"
                    },
                    {
                        "value": "TR67",
                        "name": "Zonguldak"
                    },
                    {
                        "value": "TR68",
                        "name": "Aksaray"
                    },
                    {
                        "value": "TR69",
                        "name": "Bayburt"
                    },
                    {
                        "value": "TR70",
                        "name": "Karaman"
                    },
                    {
                        "value": "TR71",
                        "name": "K&#305;r&#305;kkale"
                    },
                    {
                        "value": "TR72",
                        "name": "Batman"
                    },
                    {
                        "value": "TR73",
                        "name": "&#350;&#305;rnak"
                    },
                    {
                        "value": "TR74",
                        "name": "Bart&#305;n"
                    },
                    {
                        "value": "TR75",
                        "name": "Ardahan"
                    },
                    {
                        "value": "TR76",
                        "name": "I&#287;d&#305;r"
                    },
                    {
                        "value": "TR77",
                        "name": "Yalova"
                    },
                    {
                        "value": "TR78",
                        "name": "Karab&#252;k"
                    },
                    {
                        "value": "TR79",
                        "name": "Kilis"
                    },
                    {
                        "value": "TR80",
                        "name": "Osmaniye"
                    },
                    {
                        "value": "TR81",
                        "name": "D&#252;zce"
                    }
                ],
                "US": [
                    {
                        "value": "AL",
                        "name": "Alabama"
                    },
                    {
                        "value": "AK",
                        "name": "Alaska"
                    },
                    {
                        "value": "AZ",
                        "name": "Arizona"
                    },
                    {
                        "value": "AR",
                        "name": "Arkansas"
                    },
                    {
                        "value": "CA",
                        "name": "California"
                    },
                    {
                        "value": "CO",
                        "name": "Colorado"
                    },
                    {
                        "value": "CT",
                        "name": "Connecticut"
                    },
                    {
                        "value": "DE",
                        "name": "Delaware"
                    },
                    {
                        "value": "DC",
                        "name": "District Of Columbia"
                    },
                    {
                        "value": "FL",
                        "name": "Florida"
                    },
                    {
                        "value": "GA",
                        "name": "Georgia"
                    },
                    {
                        "value": "HI",
                        "name": "Hawaii"
                    },
                    {
                        "value": "ID",
                        "name": "Idaho"
                    },
                    {
                        "value": "IL",
                        "name": "Illinois"
                    },
                    {
                        "value": "IN",
                        "name": "Indiana"
                    },
                    {
                        "value": "IA",
                        "name": "Iowa"
                    },
                    {
                        "value": "KS",
                        "name": "Kansas"
                    },
                    {
                        "value": "KY",
                        "name": "Kentucky"
                    },
                    {
                        "value": "LA",
                        "name": "Louisiana"
                    },
                    {
                        "value": "ME",
                        "name": "Maine"
                    },
                    {
                        "value": "MD",
                        "name": "Maryland"
                    },
                    {
                        "value": "MA",
                        "name": "Massachusetts"
                    },
                    {
                        "value": "MI",
                        "name": "Michigan"
                    },
                    {
                        "value": "MN",
                        "name": "Minnesota"
                    },
                    {
                        "value": "MS",
                        "name": "Mississippi"
                    },
                    {
                        "value": "MO",
                        "name": "Missouri"
                    },
                    {
                        "value": "MT",
                        "name": "Montana"
                    },
                    {
                        "value": "NE",
                        "name": "Nebraska"
                    },
                    {
                        "value": "NV",
                        "name": "Nevada"
                    },
                    {
                        "value": "NH",
                        "name": "New Hampshire"
                    },
                    {
                        "value": "NJ",
                        "name": "New Jersey"
                    },
                    {
                        "value": "NM",
                        "name": "New Mexico"
                    },
                    {
                        "value": "NY",
                        "name": "New York"
                    },
                    {
                        "value": "NC",
                        "name": "North Carolina"
                    },
                    {
                        "value": "ND",
                        "name": "North Dakota"
                    },
                    {
                        "value": "OH",
                        "name": "Ohio"
                    },
                    {
                        "value": "OK",
                        "name": "Oklahoma"
                    },
                    {
                        "value": "OR",
                        "name": "Oregon"
                    },
                    {
                        "value": "PA",
                        "name": "Pennsylvania"
                    },
                    {
                        "value": "RI",
                        "name": "Rhode Island"
                    },
                    {
                        "value": "SC",
                        "name": "South Carolina"
                    },
                    {
                        "value": "SD",
                        "name": "South Dakota"
                    },
                    {
                        "value": "TN",
                        "name": "Tennessee"
                    },
                    {
                        "value": "TX",
                        "name": "Texas"
                    },
                    {
                        "value": "UT",
                        "name": "Utah"
                    },
                    {
                        "value": "VT",
                        "name": "Vermont"
                    },
                    {
                        "value": "VA",
                        "name": "Virginia"
                    },
                    {
                        "value": "WA",
                        "name": "Washington"
                    },
                    {
                        "value": "WV",
                        "name": "West Virginia"
                    },
                    {
                        "value": "WI",
                        "name": "Wisconsin"
                    },
                    {
                        "value": "WY",
                        "name": "Wyoming"
                    },
                    {
                        "value": "AA",
                        "name": "Armed Forces (AA)"
                    },
                    {
                        "value": "AE",
                        "name": "Armed Forces (AE)"
                    },
                    {
                        "value": "AP",
                        "name": "Armed Forces (AP)"
                    }
                ]
            },
            "continent": { "BD": "AS", "BE": "EU", "BF": "AF", "BG": "EU", "BA": "EU", "BB": "NA", "WF": "OC", "BL": "NA", "BM": "NA", "BN": "AS", "BO": "SA", "BH": "AS", "BI": "AF", "BJ": "AF", "BT": "AS", "JM": "NA", "BV": "AN", "BW": "AF", "WS": "OC", "BQ": "NA", "BR": "SA", "BS": "NA", "JE": "EU", "BY": "EU", "BZ": "NA", "RU": "EU", "RW": "AF", "RS": "EU", "TL": "OC", "RE": "AF", "TM": "AS", "TJ": "AS", "RO": "EU", "TK": "OC", "GW": "AF", "GU": "OC", "GT": "NA", "GS": "AN", "GR": "EU", "GQ": "AF", "GP": "NA", "JP": "AS", "GY": "SA", "GG": "EU", "GF": "SA", "GE": "AS", "GD": "NA", "GB": "EU", "GA": "AF", "SV": "NA", "GN": "AF", "GM": "AF", "GL": "NA", "GI": "EU", "GH": "AF", "OM": "AS", "TN": "AF", "JO": "AS", "HR": "EU", "HT": "NA", "HU": "EU", "HK": "AS", "HN": "NA", "HM": "AN", "VE": "SA", "PR": "NA", "PS": "AS", "PW": "OC", "PT": "EU", "SJ": "EU", "PY": "SA", "IQ": "AS", "PA": "NA", "PF": "OC", "PG": "OC", "PE": "SA", "PK": "AS", "PH": "AS", "PN": "OC", "PL": "EU", "PM": "NA", "ZM": "AF", "EH": "AF", "EE": "EU", "EG": "AF", "ZA": "AF", "EC": "SA", "IT": "EU", "VN": "AS", "SB": "OC", "ET": "AF", "SO": "AF", "ZW": "AF", "SA": "AS", "ES": "EU", "ER": "AF", "ME": "EU", "MD": "EU", "MG": "AF", "MF": "NA", "MA": "AF", "MC": "EU", "UZ": "AS", "MM": "AS", "ML": "AF", "MO": "AS", "MN": "AS", "MH": "OC", "MK": "EU", "MU": "AF", "MT": "EU", "MW": "AF", "MV": "AS", "MQ": "NA", "MP": "OC", "MS": "NA", "MR": "AF", "IM": "EU", "UG": "AF", "TZ": "AF", "MY": "AS", "MX": "NA", "IL": "AS", "FR": "EU", "IO": "AS", "SH": "AF", "FI": "EU", "FJ": "OC", "FK": "SA", "FM": "OC", "FO": "EU", "NI": "NA", "NL": "EU", "NO": "EU", "NA": "AF", "VU": "OC", "NC": "OC", "NE": "AF", "NF": "OC", "NG": "AF", "NZ": "OC", "NP": "AS", "NR": "OC", "NU": "OC", "CK": "OC", "XK": "EU", "CI": "AF", "CH": "EU", "CO": "SA", "CN": "AS", "CM": "AF", "CL": "SA", "CC": "AS", "CA": "NA", "CG": "AF", "CF": "AF", "CD": "AF", "CZ": "EU", "CY": "EU", "CX": "AS", "CR": "NA", "CW": "NA", "CV": "AF", "CU": "NA", "SZ": "AF", "SY": "AS", "SX": "NA", "KG": "AS", "KE": "AF", "SS": "AF", "SR": "SA", "KI": "OC", "KH": "AS", "KN": "NA", "KM": "AF", "ST": "AF", "SK": "EU", "KR": "AS", "SI": "EU", "KP": "AS", "KW": "AS", "SN": "AF", "SM": "EU", "SL": "AF", "SC": "AF", "KZ": "AS", "KY": "NA", "SG": "AS", "SE": "EU", "SD": "AF", "DO": "NA", "DM": "NA", "DJ": "AF", "DK": "EU", "VG": "NA", "DE": "EU", "YE": "AS", "DZ": "AF", "US": "NA", "UY": "SA", "YT": "AF", "UM": "OC", "LB": "AS", "LC": "NA", "LA": "AS", "TV": "OC", "TW": "AS", "TT": "NA", "TR": "AS", "LK": "AS", "LI": "EU", "LV": "EU", "TO": "OC", "LT": "EU", "LU": "EU", "LR": "AF", "LS": "AF", "TH": "AS", "TF": "AN", "TG": "AF", "TD": "AF", "TC": "NA", "LY": "AF", "VA": "EU", "VC": "NA", "AE": "AS", "AD": "EU", "AG": "NA", "AF": "AS", "AI": "NA", "VI": "NA", "IS": "EU", "IR": "AS", "AM": "AS", "AL": "EU", "AO": "AF", "AQ": "AN", "AS": "OC", "AR": "SA", "AU": "OC", "AT": "EU", "AW": "NA", "IN": "AS", "AX": "EU", "AZ": "AS", "IE": "EU", "ID": "AS", "UA": "EU", "QA": "AS", "MZ": "AF" }
        };
    }
    LocationDataProvider.prototype.getCountryName = function (val) {
        var name = '';
        for (var _i = 0, _a = this.data.countries; _i < _a.length; _i++) {
            var v = _a[_i];
            if (val == v.value)
                name = v.name;
        }
        return name;
    };
    LocationDataProvider.prototype.getStateName = function (val, val2) {
        var name = "";
        if (this.data.states[val]) {
            for (var _i = 0, _a = this.data.states[val]; _i < _a.length; _i++) {
                var v = _a[_i];
                if (val2 == v.value)
                    name = v.name;
            }
        }
        else
            name = "other";
        return name;
    };
    LocationDataProvider.prototype.getContientCode = function (con) {
        return this.data.continent[con];
    };
    LocationDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationDataProvider);
    return LocationDataProvider;
}());

//# sourceMappingURL=location-data.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reviews_reviews__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_store__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_clipboard__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/














var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams, config, shared, modalCtrl, loading, iab, events, storage, clipboard, alert, translate, applicationRef, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
        this.events = events;
        this.storage = storage;
        this.clipboard = clipboard;
        this.alert = alert;
        this.translate = translate;
        this.applicationRef = applicationRef;
        this.socialSharing = socialSharing;
        this.selectAttributes = new Array;
        this.selectedVariation = null;
        this.quantity = 1;
        this.releatedItems = []; // <!-- 2.0 updates -->
        this.reviews = []; // <!-- 2.0 updates -->
        this.ratingStarsValue = null; // <!-- 2.0 updates -->
        this.allVariableAttributes = [];
        this.tempAllVariableAttributes = [];
        this.attributes = [];
        this.isLiked = 0;
        this.wishArray = [];
        this.disableCartButton = false;
        this.variations = new Array;
        this.groupProducts = new Array;
        this.variationPrice = null;
        //===============================================================================================================================
        //function adding attibute into array
        this.fillAttributes = function (val, key, position) {
            var _this = this;
            console.log(key + "  " + val);
            var count = 0;
            this.selectAttributes.forEach(function (value, index) {
                if (value.position == position) {
                    value.value = val;
                    count++;
                }
                if (val == 'choose' && value.position == position) {
                    _this.selectAttributes.splice(index, 1);
                    console.log("splice " + value.key + "  " + value.value);
                }
            });
            if (count == 0 && val != "choose")
                this.selectAttributes.push({ key: key, value: val, position: position });
            this.sortAttributes();
            if (this.getAttributesLength() == this.selectAttributes.length)
                this.selectVariation();
            if (this.selectAttributes.length != this.getAttributesLength()) {
                this.updateProductDetail(JSON.parse(JSON.stringify(this.navParams.get('data'))));
                this.variationPrice = null;
            }
            console.log(this.selectAttributes);
            this.enableDisbaleCartButton();
        };
        //==============================================================================================================================================  
        //calculating total price  
        this.calculatingTotalPrice = function () {
            var price = parseFloat(this.product.products_price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                price = this.product.discount_price;
            var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                this.discount_price = totalPrice;
            else
                this.product_price = totalPrice;
            //  console.log(totalPrice);
        };
        //===============================================================================================================================
        this.qunatityGroupPlus = function (p) {
            var _this = this;
            //console.log(p.quantity);
            if (p.stock_quantity == null || p.stock_quantity > p.quantity)
                p.quantity++;
            else if (p.stock_quantity == p.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            this.applicationRef.tick();
            // console.log(p);
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityGroupMinus = function (p) {
            if (p.quantity != 0) {
                p.quantity--;
            }
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        this.qunatityPlus = function () {
            var _this = this;
            if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity)
                this.quantity++;
            else if (this.product.stock_quantity == this.quantity)
                this.translate.get("Product Quantity is Limited!").subscribe(function (res) { _this.alert.show(res); });
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityMinus = function () {
            if (this.quantity != 1) {
                this.quantity--;
            }
            this.applicationRef.tick();
        };
        this.product = (JSON.parse(JSON.stringify(navParams.get('data'))));
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        events.subscribe('wishListUpdate', function (id, value) {
            if (id == _this.product.id)
                _this.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
            _this.wishArray = val;
            _this.checkWishList();
        });
        this.enableDisbaleCartButton();
        if (this.product.type == 'variable') {
            this.getVariations();
        }
        if (this.product.type == 'grouped') {
            this.getGroupProducts();
        }
        this.getRelatedItems();
        this.getProductReviews();
    }
    ProductDetailPage_1 = ProductDetailPage;
    //=================================================================================================================================================================================
    ProductDetailPage.prototype.getGroupProducts = function () {
        var _this = this;
        this.loading.show();
        var count = 0;
        for (var _i = 0, _a = this.product.grouped_products; _i < _a.length; _i++) {
            var value = _a[_i];
            count++;
            this.config.Woocommerce.getAsync("products/" + value).then(function (data) {
                _this.groupProducts.push(Object.assign(JSON.parse(data.body), { quantity: 0 }));
                _this.applicationRef.tick();
            });
            if (count == this.product.grouped_products.length)
                this.loading.hide();
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.getVariations = function () {
        var _this = this;
        var count = 0;
        this.loading.show();
        for (var _i = 0, _a = this.product.variations; _i < _a.length; _i++) {
            var value = _a[_i];
            this.config.Woocommerce.getAsync("products/" + value).then(function (data) {
                count++;
                var d = JSON.parse(data.body);
                _this.variations.push(d);
                _this.initializeAllVariationAttributes(d);
                //console.log(count);
                if (count == _this.product.variations.length) {
                    _this.loading.hide();
                    _this.applicationRef.tick();
                    //console.log(this.variations); 
                }
            });
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.initializeAllVariationAttributes = function (p) {
        var ob = {};
        ob.id = p.id;
        ob.select = false;
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.variation == false)
                continue;
            ob[val.name] = 'any';
            for (var _b = 0, _c = p.attributes; _b < _c.length; _b++) {
                var v2 = _c[_b];
                if (val.name.toUpperCase() == v2.name.toUpperCase())
                    ob[val.name] = v2.option;
            }
        }
        this.allVariableAttributes.push(ob);
        if (this.allVariableAttributes.length == this.product.variations.length)
            this.sortAllVariationAttributes();
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.sortAllVariationAttributes = function () {
        var array = [];
        for (var _i = 0, _a = this.product.variations; _i < _a.length; _i++) {
            var val = _a[_i];
            for (var _b = 0, _c = this.allVariableAttributes; _b < _c.length; _b++) {
                var v2 = _c[_b];
                if (val == v2.id)
                    array.push(v2);
            }
        }
        this.allVariableAttributes = array;
        console.log(this.allVariableAttributes);
    };
    ProductDetailPage.prototype.availableOption = function (name, val) {
        if (this.selectAttributes.length == 0)
            return true;
        for (var _i = 0, _a = this.tempAllVariableAttributes; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.select == true) {
                if (value[name] == 'any')
                    return true;
                if (value[name] == val)
                    return true;
            }
        }
    };
    //checking avalability of option in all variations
    ProductDetailPage.prototype.sortAttributes = function () {
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        var count = 0;
        for (var _i = 0, _a = this.selectAttributes; _i < _a.length; _i++) {
            var x = _a[_i];
            for (var _b = 0, _c = this.tempAllVariableAttributes; _b < _c.length; _b++) {
                var y = _c[_b];
                if (y[x.key] == x.value || y[x.key] == 'any') {
                    if (count == 0) {
                        y.select = true;
                    }
                    else {
                        if (y.select == true)
                            y.select = true;
                        else
                            y.select = false;
                    }
                    //console.log(y[x.key] + "   ---  " + x.value);
                }
                else
                    y.select = false;
            }
            count++;
        }
        console.log("attributes after select");
        console.log(this.tempAllVariableAttributes);
    };
    // reset attributes and selection
    ProductDetailPage.prototype.resetAttributes = function () {
        console.log("reset att");
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        this.selectAttributes = [];
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        this.selectedVariation = null;
        this.enableDisbaleCartButton();
        this.product = JSON.parse(JSON.stringify(this.navParams.get('data')));
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.getAttributesLength = function () {
        var count = 0;
        for (var _i = 0, _a = this.attributes; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.variation)
                count++;
        }
        return count;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.enableDisbaleCartButton = function () {
        // if (this.product.type == 'external') this.disableCartButton = true;
        // else
        if (this.product.type != 'variable' && this.product.in_stock)
            this.disableCartButton = false;
        else if (this.selectAttributes.length == this.getAttributesLength() && this.product.in_stock)
            this.disableCartButton = false;
        else
            this.disableCartButton = true;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.checkWishList = function () {
        //getting wishList items from local storage
        var count = 0;
        if (this.wishArray != null)
            for (var _i = 0, _a = this.wishArray; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.id == this.product.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.openProduct = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.product.external_url, "blank");
    };
    ProductDetailPage.prototype.addToCartProduct = function () {
        var _this = this;
        var total = 0;
        this.loading.autoHide(500);
        console.log(this.selectAttributes);
        if (this.product.type == 'variable') {
            this.shared.addToCart(this.product, this.selectedVariation, this.quantity, this.selectAttributes);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
        }
        if (this.product.type == 'simple') {
            this.shared.addToCart(this.product, null, this.quantity, null);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
        }
        if (this.product.type == 'grouped') {
            for (var _i = 0, _a = this.groupProducts; _i < _a.length; _i++) {
                var a = _a[_i];
                total = total + a.quantity;
            }
            if (total == 0)
                this.translate.get("Please Add Quantity").subscribe(function (res) { _this.alert.show(res); });
            else
                for (var _b = 0, _c = this.groupProducts; _b < _c.length; _b++) {
                    var value = _c[_b];
                    if (value.quantity != 0)
                        this.shared.addToCart(value, null, value.quantity, null);
                }
            if (total != 0)
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.selectVariation = function () {
        var pId = null;
        for (var _i = 0, _a = this.tempAllVariableAttributes; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.select == true) {
                pId = i.id;
                break;
            }
        }
        for (var _b = 0, _c = this.variations; _b < _c.length; _b++) {
            var i = _c[_b];
            if (i.id == pId) {
                this.selectedVariation = i;
                break;
            }
        }
        if (this.selectAttributes != null)
            this.updateProductDetail(this.selectedVariation);
        console.log(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.updateProductDetail = function (p) {
        // console.log(p);
        var oldProduct = JSON.parse(JSON.stringify(this.navParams.get('data')));
        this.product.name = p.name;
        this.product.price_html = p.price_html;
        if (p.images[0].src.indexOf('placeholder') == -1) {
            this.product.images = this.removeDuplication(p.images.concat(oldProduct.images));
        }
    };
    ProductDetailPage.prototype.removeDuplication = function (array) {
        var a = array.concat();
        console.log(a);
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].src === a[j].src)
                    a.splice(j--, 1);
            }
        }
        console.log(a);
        return a;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.checkProductNew = function () {
        var pDate = new Date(this.product.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.showProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        this.config.Woocommerce.getAsync("products/" + id).then(function (data) {
            //this.alert.show("loaded");
            _this.loading.hide();
            _this.navCtrl.push(ProductDetailPage_1, { data: JSON.parse(data.body) });
        }, function (err) {
            _this.loading.hide();
            console.log(err);
        });
        this.shared.addToRecent(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.share = function () {
        var images = [];
        images.push(this.product.images[0].src);
        if (this.product.type == "grouped")
            for (var _i = 0, _a = this.groupProducts; _i < _a.length; _i++) {
                var val = _a[_i];
                images.push(val.images[0].src);
            }
        this.loading.autoHide(5000);
        // Share via email
        this.socialSharing.share("", //this.product.short_description,   //The message you would like to share.
        "", //this.product.name,   //The subject
        images, //URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image.
        "" //A URL to share
        ).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.clickWishList = function () {
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.addWishList = function () {
        this.shared.addWishList(this.product);
    };
    //===============================================================================================================================
    ProductDetailPage.prototype.removeWishList = function () {
        this.shared.removeWishList(this.product);
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.getRelatedItems = function () {
        var _this = this;
        this.config.Woocommerce.getAsync("products/?include=" + this.product.related_ids).then(function (data) {
            _this.releatedItems = JSON.parse(data.body);
            _this.applicationRef.tick();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.getProductReviews = function () {
        var _this = this;
        this.config.Woocommerce.getAsync("products/" + this.product.id + "/reviews").then(function (data) {
            _this.reviews = JSON.parse(data.body);
            _this.applicationRef.tick();
            _this.totalRating();
        });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.openReviewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__reviews_reviews__["a" /* ReviewsPage */], { id: this.product.id });
    };
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    ProductDetailPage.prototype.totalRating = function () {
        var total = 0;
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var value = _a[_i];
            total = total + value.rating;
        }
        var result = (total / this.reviews.length) * 20;
        if (total == 0)
            result = 0;
        this.ratingStarsValue = result;
        this.applicationRef.tick();
        //return result;
    };
    //==============================================================
    ProductDetailPage.prototype.openStore = function () {
        var _this = this;
        this.loading.show();
        this.config.dokan.getAsync("stores/" + this.product.store.id).then(function (data) {
            _this.loading.hide();
            var d = JSON.parse(data.body);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__store_store__["a" /* StorePage */], { data: d });
            _this.applicationRef.tick();
        });
    };
    ProductDetailPage.prototype.copyDescription = function () {
        var html = this.product.description;
        var div = document.createElement("div");
        div.innerHTML = html;
        var c = div.textContent || div.innerText || "";
        console.log(c);
        this.clipboard.copy(c);
        this.shared.toast("copied to clipborad!");
    };
    ProductDetailPage = ProductDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{\'Product Details\'| translate }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="page-product-detail">\n\n  <div class="product-tags-top">\n\n    <div class="product-tag-new" *ngIf="checkProductNew()">{{\'New\'|translate}}</div>\n\n    <div class="product-tag-featured" *ngIf="product.featured">{{\'Featured\'|translate}}</div>\n\n  </div>\n\n\n\n  <div class="icons">\n\n    <ion-icon name="logo-whatsapp" (click)="share()"></ion-icon>\n\n    <!-- <ion-icon [name]="isLiked==0 ? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon> -->\n\n  </div>\n\n  <!-- 2.0 updates start -->\n\n  <ion-slides class="product-slides" pager="true" dir="{{shared.dir}}">\n\n    <ion-slide *ngFor="let b of product.images">\n\n      <div>\n\n        <img src="{{b.src}}" imageViewer>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <!-- 2.0 updates end -->\n\n\n\n  <ion-grid class="product-detail-title">\n\n    <ion-row>\n\n\n\n      <div class="product-tags">\n\n        <div class="product-tag-off" *ngIf="product.on_sale">{{\'SALE\'|translate}}</div>\n\n\n\n      </div>\n\n      <!-- 2.0 updates -->\n\n\n\n      <ion-col class="woo-price-group" col-12>\n\n        <span class="woo-price" [innerHTML]="product.price_html"></span><span style="line-height: 27px;" *ngIf="product.price_html">&nbsp;+&nbsp;{{\'shipping\'|translate}}</span>\n\n        <span class="woo-price" *ngIf="variationPrice!=null">{{\'Your Price\'|translate}} &nbsp;\n\n          {{variationPrice|curency}} &nbsp;+&nbsp;{{\'shipping\'|translate}}</span>\n\n\n\n\n\n        <span class="product-outstock" *ngIf="!product.in_stock">{{\'Out of Stock\'|translate}}</span>\n\n        <span class="product-instock" *ngIf="product.in_stock">{{\'In Stock\'|translate}}&nbsp;\n\n          <span *ngIf="product.stock_quantity!=null">({{product.stock_quantity}})</span>\n\n        </span>\n\n      </ion-col>\n\n\n\n      <ion-col class="product-title" col-12>\n\n        <h3>{{product.name}}\n\n          <br>\n\n          <small *ngFor="let b of product.categories">{{b.name}}&nbsp;</small>\n\n        </h3>\n\n\n\n        <div class="product-ratings">\n\n          <ion-spinner *ngIf="ratingStarsValue==null"></ion-spinner>\n\n          <div class="product-rating animate" *ngIf="product.reviews_allowed && ratingStarsValue!=null" (click)="openReviewsPage()">\n\n            <div class="stars-outer">\n\n              <div class="stars-inner" [style.width]="ratingStarsValue+\'%\'"></div>\n\n            </div>\n\n            <h6>{{reviews.length}}&nbsp;{{\'rating and review\'|translate}}</h6>\n\n          </div>\n\n        </div>\n\n        <!-- <p style="display:none;">{{\'Total Sales\'|translate}}&nbsp;({{product.total_sales}})</p> -->\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-header" *ngIf="product.type!=\'grouped\'">\n\n    <ion-row>\n\n      <ion-col class="left" col-6>\n\n        <ion-row>\n\n          <ion-col class="qty-name" col-12>{{\'Quantity\' |translate}}</ion-col>\n\n          <ion-col class="qty-vlue" col-12>\n\n            <button ion-button small outline (click)="qunatityMinus(product,quantity);" *ngIf="!product.sold_individually">\n\n              <ion-icon name="remove"></ion-icon>\n\n            </button>\n\n            <span class="dgi">{{quantity}}</span>\n\n            <button ion-button small outline (click)="qunatityPlus(product,quantity);" *ngIf="!product.sold_individually">\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col class="right" col-6 *ngIf="selectedVariation!=null && !disableCartButton">\n\n        <ion-row>\n\n          <ion-col class="ttl-name" col-12>{{\'Total Price\' |translate}}</ion-col>\n\n          <ion-col class="ttl-vlue" col-12>{{\n\n            quantity*selectedVariation.price|curency}}&nbsp;+&nbsp;{{\'shipping\'|translate}}</ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col class="right" col-6 *ngIf="product.type!=\'variable\'">\n\n        <ion-row>\n\n          <ion-col class="ttl-name" col-12>{{\'Total Price\' |translate}}</ion-col>\n\n          <ion-col class="ttl-vlue" col-12>{{ quantity*product.price|curency}}&nbsp;+&nbsp;{{\'shipping\'|translate}}</ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <!-- <button ion-button block color="danger" *ngIf="!product.in_stock">{{\'OUT OF STOCK\'|translate}}</button> -->\n\n      <ion-col col-12>{{\'Please select all product options before adding this product to your cart\'|translate}}</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid class="product-detail-content" *ngIf="product.sku!=null && product.sku!=\'\'">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <h4>{{\'SKU\'|translate}}</h4>\n\n        <div class="product-describtion">{{product.sku}}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list class="group-product" *ngIf="groupProducts.length!=0">\n\n    <ion-item *ngFor="let g of groupProducts">\n\n      <ion-thumbnail item-start>\n\n        <img src="{{g.images[0].src}}">\n\n      </ion-thumbnail>\n\n      <h3>{{g.name}}</h3>\n\n      <span class="woo-price" [innerHTML]="g.price_html"></span>&nbsp;+&nbsp;{{\'shipping\'|translate}}\n\n\n\n      <ion-row class="qty-box-total" *ngIf="g.type==\'simple\'">\n\n        <ion-col class="left" col-6>\n\n          <ion-row>\n\n            <ion-col class="qty-name" col-12>{{\'Quantity\' |translate}}</ion-col>\n\n            <ion-col class="qty-vlue" col-12>\n\n              <button ion-button small outline (click)="qunatityGroupMinus(g)">\n\n                <ion-icon name="remove"></ion-icon>\n\n              </button>\n\n              <span class="dgi">{{g.quantity}}</span>\n\n              <button ion-button small outline (click)="qunatityGroupPlus(g)">\n\n                <ion-icon name="add"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col class="right" col-6>\n\n          <ion-row>\n\n            <ion-col class="ttl-name" col-12>{{\'Total Price\' |translate}}</ion-col>\n\n            <ion-col class="ttl-vlue-small" col-12>{{ g.quantity*g.price|curency}}&nbsp;+&nbsp;{{\'shipping\'|translate}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n\n\n      <button full ion-button small (click)="showProductDetail(g.id)">\n\n        {{\'View\' | translate}}\n\n      </button>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-grid class="product-detail-content product-tags" *ngIf="product.type!=\'variable\' && attributes.length!=0">\n\n    <ion-row>\n\n      <ion-col>\n\n        <h4>{{\'Tags\'|translate}}</h4>\n\n        <span *ngFor=" let att of attributes">\n\n          <span *ngIf="product.type!=\'variable\'">\n\n            <span *ngIf="att.visible">\n\n              <h6>{{att.name}}</h6>\n\n              <ion-badge *ngFor=" let val of att.options">{{val}} </ion-badge>\n\n            </span>\n\n          </span>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid *ngIf="product.type==\'variable\'">\n\n    <ion-list>\n\n      <div *ngFor=" let att of attributes; let ind = index">\n\n        <ion-item *ngIf="att.variation">\n\n          <ion-label>{{att.name}}</ion-label>\n\n          <ion-select [(ngModel)]="att.value" (ionChange)="fillAttributes(att.value,att.name,ind)" okText="{{\'Ok\'|translate}}"\n\n            cancelText="{{\'Cancel\'|translate}}">\n\n            <span *ngFor=" let val of att.options; let i = index">\n\n              <ion-option value="choose" selected *ngIf="i==0">{{\'Select\'|translate}}</ion-option>\n\n              <ion-option [value]="val" *ngIf="availableOption(att.name,val)">{{val}}</ion-option>\n\n            </span>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <span *ngFor=" let att of attributes">\n\n          <span *ngIf="!att.variation">\n\n            <span *ngIf="att.visible">\n\n              <h6>{{att.name}}</h6>\n\n              <ion-badge *ngFor=" let val of att.options">{{val}} </ion-badge>\n\n            </span>\n\n          </span>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-card *ngIf="config.showVendorInfo">\n\n    <ion-card-header>\n\n      {{\'Vendor Info\'|translate}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <b>{{\'Store Name\'|translate}}</b>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          {{product.store.shop_name }}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row (click)="openStore()">\n\n        <ion-col col-6>\n\n          <b> {{\'Vendor\'|translate}}</b>\n\n        </ion-col>\n\n        <ion-col col-6 text-right class="highlight">\n\n          {{product.store.name}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-grid class="product-detail-content" *ngIf="product.description!=null && product.description!=\'\'">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{\'Product Description\'|translate}}</h4>\n\n          </ion-col>\n\n          <ion-col col-3 class="copy-icon">\n\n            <ion-icon name="copy" color="secondary" (click)="copyDescription()"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <div class="product-describtion" [innerHTML]="product.description" id="description"></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- 2.0 updates start -->\n\n\n\n  <ion-grid class="product-detail-content animate-product">\n\n    <ion-spinner *ngIf="releatedItems.length==0 && product.related_ids!=0" class="spinner-related-items"></ion-spinner>\n\n    <ion-row *ngIf="releatedItems.length!=0">\n\n\n\n      <ion-col col-12>\n\n        <h4>{{\'Releated Items\'|translate}}</h4>\n\n        <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n\n          <ion-slide *ngFor="let p of releatedItems">\n\n            <product [data]="p" [type]="\'normal\'"></product>\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <!-- 2.0 updates end -->\n\n  <ion-fab right bottom *ngIf="selectAttributes.length!=0">\n\n    <button color="danger" ion-fab (click)="resetAttributes()">{{\'clear\'|translate}}</button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <button ion-button block color="secondary" [disabled]="disableCartButton" *ngIf="product.type!=\'external\'" (click)="addToCartProduct()">\n\n    {{\'Add to Cart\'|translate}}\n\n  </button>\n\n  <button ion-button block color="secondary" [disabled]="disableCartButton" *ngIf="product.type==\'external\'" (click)="openProduct()">\n\n    {{product.button_text|translate}}\n\n  </button>\n\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProductDetailPage);
    return ProductDetailPage;
    var ProductDetailPage_1;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/










var LoginPage = (function () {
    function LoginPage(http, config, viewCtrl, modalCtrl, loading, shared, fb, alert, applicationRef, navCtrl, events, navParams) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.fb = fb;
        this.alert = alert;
        this.applicationRef = applicationRef;
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.hideGuestLogin = false;
        this.formData = { username: '', password: '' };
        this.errorMessage = '';
        this.hideGuestLogin = navParams.get('hideGuestLogin');
        this.shared.currentOpenedModel = this;
    }
    // <!-- 2.0 updates -->
    LoginPage.prototype.guestLogin = function () {
        if (this.config.checkOutPage == 1)
            this.shared.onePageCheckOut(10);
        else
            this.events.publish('openShippingAddressPage');
        this.dismiss();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.http.get(this.config.url + '/api/appusers/generate_cookie/?insecure=cool&username=' + this.formData.username + "&password=" + this.formData.password).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            if (data.status == "ok")
                _this.getUserData(data, "simple");
            else {
                _this.errorMessage = data.error;
                _this.loading.hide();
            }
        }, function (err) {
            _this.loading.hide();
            if (err.ok == false) {
                _this.errorMessage = "Invalid Username or Password";
            }
        });
        // this.config.Woocommerce.getAsync("customers/" + 118).then((data) => {
        //   this.loading.hide();
        //   this.shared.login(JSON.parse(data.body));
        //   //console.log(this.shared.customerData);
        //   this.dismiss();
        //   this.applicationRef.tick();
        // });
    };
    LoginPage.prototype.getUserData = function (c, type) {
        var _this = this;
        var id;
        if (type == "simple")
            id = c.user.id;
        if (type == "fb")
            id = c.id;
        //alert(c.user.id + " -- " + c.id + " --- " + id);
        this.config.Woocommerce.getAsync("customers/" + id).then(function (data) {
            _this.loading.hide();
            var dat = JSON.parse(data.body);
            //alert(JSON.stringify(dat));
            _this.shared.login(Object.assign({ cookie: c.cookie }, dat));
            // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));
            _this.dismiss();
            _this.applicationRef.tick();
        });
    };
    LoginPage.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
        this.dismiss();
    };
    LoginPage.prototype.openForgetPasswordPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
        modal.present();
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (res) {
            if (res.status == 'connected') {
                console.log("user connected already" + res.authResponse.accessToken);
                _this.createAccount(res.authResponse.accessToken, 'fb');
            }
            else {
                console.log("USer Not login ");
                _this.fb.login(['public_profile', 'user_friends', 'email'])
                    .then(function (res) {
                    // this.alert.show('Logged into Facebook!' + JSON.stringify(res));
                    console.log("successfully login ");
                    _this.createAccount(res.authResponse.accessToken, 'fb');
                })
                    .catch(function (e) { return _this.alert.show('Error logging into Facebook' + JSON.stringify(e)); });
            }
        }).catch(function (e) { return _this.alert.show('Error Check Login Status Facebook' + JSON.stringify(e)); });
    };
    //============================================================================================  
    //creating new account using function facebook or google details 
    LoginPage.prototype.createAccount = function (info, type) {
        var _this = this;
        //this.formData.username = info;
        // alert(info);
        this.loading.show();
        var url = '';
        url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;
        this.http.get(this.config.url + url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            //alert(JSON.stringify(data));
            _this.getUserData(data, "fb");
        }, function (error) {
            _this.loading.hide();
            //this.alert.show("error " + JSON.stringify(error));
        });
    };
    ;
    //close modal
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Softwares\Code\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Login\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-login" padding>\n  <ion-row class="grid-t">\n    <ion-col>\n      <div class="logo">\n        <img class="image" src="assets/icons_stripe.svg" />\n      </div>\n    </ion-col>\n  </ion-row>\n  <form #loginForm="ngForm" class="form" (ngSubmit)="login()">\n    <ion-row class="grid-b">\n      <ion-col col-12>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Email or Username\'|translate}}" name="email" [(ngModel)]="formData.username" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Password\'|translate}}" name="password" [(ngModel)]="formData.password" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label class="red-color" *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage| translate}}</span>\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{ \'Login\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block clear color="dark" text-capitalize (click)="openForgetPasswordPage()">{{ "I\'ve forgotten my password?" | translate }}</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="grid-b">\n    <ion-col col-12 *ngIf="config.fbButton==1">\n      <button ion-button block color="facebook" (click)="facebookLogin()">{{ \'Login with\' | translate }}\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </ion-col>\n    <!-- <ion-col col-12 *ngIf="config.googleButton==1">\n      <button ion-button block color="google" (click)="googleLogin()">{{ \'Login with\' | translate }}\n        <ion-icon name="logo-google"></ion-icon>\n      </button>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block outline (click)="openSignUpPage()">{{ \'Register\' | translate }}</button>\n    </ion-col>\n\n    <ion-col col-12 *ngIf="!hideGuestLogin">\n      <button ion-button block color="secondary" [disabled]="shared.cartProducts.length==0" *ngIf="config.guestCheckOut " (click)="guestLogin()">{{\'Continue as a Guest\'|translate}}</button>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n<!-- 2.0 updates -->'/*ion-inline-end:"C:\Softwares\Code\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var HomePage = (function () {
    function HomePage(http, config, shared, navCtrl, events, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.events = events;
        this.scrollTopButton = false;
        this.segments = 'mostLiked';
    }
    HomePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    HomePage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //  console.log(e);
    };
    HomePage.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { type: value });
    };
    HomePage.prototype.ngAfterContentChecked = function () {
        this.content.resize();
    };
    HomePage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"C:\Softwares\Code\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home" (ionScroll)="onScroll($event)">\n  <!-- top banners -->\n  <banners>\n    \n  </banners>\n\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]="segments" color="primary">\n    <!-- <ion-segment-button value="topSeller">{{ \'Latest\' | translate }}</ion-segment-button> -->\n    <!-- <ion-segment-button value="deals">{{ \'On Sale\' | translate }} </ion-segment-button> -->\n    <ion-segment-button value="mostLiked"> {{ \'Featured\' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <!-- top segments products -->\n  <div class="module" [ngSwitch]="segments">\n    <!-- <ion-slides slidesPerView={{config.sliderPerView}} spaceBetween=10 *ngSwitchCase="\'topSeller\'" class="animate-product"\n      dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.tab1">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'latest\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides> -->\n\n    <ion-slides slidesPerView={{config.sliderPerView}} spaceBetween=10 *ngSwitchCase="\'deals\'" dir="{{shared.dir}}" class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab2">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'sale\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-slides slidesPerView={{config.sliderPerView}} spaceBetween=10 *ngSwitchCase="\'mostLiked\'" dir="{{shared.dir}}" class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab3">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'featured\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n  <!-- Recent Viewed items products -->\n  <!-- <div class="module recent-module" *ngIf="shared.recentViewedProducts.length!=0" [@animate]>\n    <h5>{{\'Recently Viewed\'|translate}}</h5>\n    <ion-slides slidesPerView={{config.sliderPerView}} spaceBetween=0 dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n        <product [data]="p" [type]="\'recent\'"></product>\n      </ion-slide>\n    </ion-slides>\n  </div> -->\n\n\n  \n\n  <sliding-tabs>\n    \n  </sliding-tabs>\n  \n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"C:\Softwares\Code\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[460]);
//# sourceMappingURL=main.js.map