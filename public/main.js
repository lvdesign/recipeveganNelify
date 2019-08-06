(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- premier bandeau-->\n          <div class=\"row\">\n                <div class=\"card-panel green lighten-1 \">\n\n                        <div class=\"row valign-wrapper\">\n                                <div class=\"col s3 \">\n                                  <img src=\"assets/images/tianCourgettes.png\" alt=\"VOS ENFANTS APPRENENT À CODER\" class=\"circle responsive-img z-depth-3\"> <!-- notice the \"circle\" class -->\n                                </div>\n                                <div class=\"col s9\">\n                                  <span class=\"white-text\">\n                                        <h4>ET SI POUR LES VACANCES, <br/>VOS ENFANTS APPRENAIENT À CODER ?</h4>\n                                        <p>Avec Magic Makers les vacances sont funs et créatives ! Découverte des nouvelles technologies et langages, inventions en tout genres, les enfants et ados deviennent acteurs du monde de demain.\n\n                                        <br /><b>test</b>\n                                    </p>\n                                  </span>\n                                  <a class=\"waves-effect waves-light btn-large deep-purple accent-2\">Et encore d'autres stages…</a>\n                                </div>\n                        </div>\n                </div>\n          </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n        <h3>Admin</h3>\n        <hr>\n    </div>\n\n  </div>\n\n\n    <div fxFlex>\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n\n            <div fxFlex=\"50\"  class=\"form-size\">\n\n                <div class=\"example-container\">\n                   \n                        <h3>Send us your Recipe </h3>\n                        <p>{{ recipeForm.value | json }} {{ recipeForm.status | json }}</p>\n                   \n                    \n                      <form novalidate [formGroup]=\"recipeForm\" #adminform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                                                       \n                        <mat-form-field class=\"half-width\">\n                                  <input matInput formControlName=\"title\" placeholder=\"Title\" type=\"text\" required>\n                                  <mat-error *ngIf=\"formErrors.title\">{{formErrors.title}}</mat-error>\n                                </mat-form-field>\n                         \n                        <mat-form-field class=\"half-width\">\n                                <mat-select placeholder=\"Category\" formControlName=\"category\">\n                                <mat-option *ngFor=\"let ctype of categoriesTypes\" [value]=\"ctype\">\n                                        {{ ctype }}\n                                      </mat-option>\n                                    </mat-select>\n                                     </mat-form-field>\n                            \n\n                              \n                                <mat-form-field class=\"full-width\">\n                                  <textarea matInput formControlName=\"summary\" placeholder=\"Summary\" rows=5 required></textarea>\n                                   <mat-error *ngIf=\"formErrors.title\">{{formErrors.summary}}</mat-error>\n\n                                </mat-form-field>\n                              \n\n                            \n                                <mat-form-field class=\"full-width\">\n                                  <textarea matInput formControlName=\"ingredients\" placeholder=\"Ingredients\" rows=5 required></textarea>\n\n                                </mat-form-field>\n                             \n\n                            \n                                <mat-form-field class=\"full-width\">\n                                  <input matInput type=\"number\" formControlName=\"preparationTime\" placeholder=\"Preparation Time\" required>\n\n                                </mat-form-field>\n                             \n\n                             \n                                <mat-form-field class=\"full-width\">\n                                  <input matInput type=\"number\" formControlName=\"cookingTime\" placeholder=\"Cooking Time\" required>\n                                </mat-form-field>\n                             \n\n                             \n                                <mat-form-field class=\"full-width\">\n                                  <textarea matInput formControlName=\"method\" placeholder=\"Method\" rows=5 required></textarea>\n                                </mat-form-field>\n                             \n                                                           \n\n                           \n\n                              <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\n                              [disabled]=\"recipeForm.invalid\">Submit</button>\n\n                            </form>\n                \n                \n            </div>\n\n\n            <div fxFlex=\"40\" fxFlexOffset=\"20px\" *ngIf=\"recipes\">\n              <mat-list-item *ngFor=\"let recipe of recipes\">\n                    <h2  matLine >{{ recipe.title}}   </h2>\n                    <p  matLine >{{ recipe.category }}</p>\n                    <p  matLine >-- {{ recipe.summary }} </p>\n                    <button (click)=\"onUpdateRecipe(this.recipe.id)\">Update</button>\n                    <button (click)=\"onRemoveRecipe(this.recipe.id)\">Delete</button>\n              </mat-list-item>\n              </div>\n            </div>\n    </div>\n  <!-- def Recipe\n\n  https://material.angular.io/components/form-field/overview\n     id: string; // _id string with Mongo\n    author: string; // USER\n    title: string;\n    image: string;\n    category: string;\n    summary: string;\n    method: string;\n    ingredients: string;\n    preparationTime: string;\n    cookingTime: string;\n    tips: string;\n    featured: boolean;\n    date: string;\n    comments: Comment[];\n  -->\n    <div fxFlex [hidden]=\"recipes || errMess\">\n        <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n      </div>\n\n      <div fxFlex *ngIf=\"errMess\">\n        <h2>Error</h2>\n        <h4>{{errMess}}</h4>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyZW50dmlnbmF1eC9Eb2N1bWVudHMvYml0YnV0VmVnYW4vTmV3UmVjaXBlQW5ndWxhci9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFDRixFQUFBOztBQUVBO0VBQ0UsVUFDRixFQUFBOztBQUVBO0VBQ0UsVUFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSVcbn1cblxuLmhhbGYtd2lkdGgge1xuICB3aWR0aDogNDUlXG59XG5cbi5mb3JtLXNpemUge1xuICB3aWR0aDogNzUlXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/recipe */ "./src/app/shared/recipe.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AdminComponent = /** @class */ (function () {
    /*
       id: string; // _id string with Mongo
          author: string; // USER
          title: string;
          image: string;
          category: string;
          summary: string;
          method: string;
          ingredients: string;
          preparationTime: string;
          cookingTime: string;
          tips: string;
          featured: boolean;
          date: string;
          comments: Comment[];
     */
    function AdminComponent(recipeService, fb, BaseURL) {
        this.recipeService = recipeService;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.categoriesTypes = _shared_recipe__WEBPACK_IMPORTED_MODULE_2__["Categories"];
        this.formErrors = {
            title: '',
            category: 'none',
            summary: '',
            method: '',
            ingredients: '',
            preparationTime: '',
            cookingTime: '',
            featured: ''
        };
        this.validationMessages = {
            title: {
                required: 'Title Name is required.',
                minlength: 'Title Name must be at least 2 characters long.',
                maxlength: 'Title cannot be more than 25 characters long.',
            },
            summary: {
                required: 'Summary is required.',
                minlength: 'Title Name must be at least 2 characters long.',
                maxlength: 'Title cannot be more than 25 characters long.',
            }
        };
        this.createForm();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; }, function (errmess) { return _this.errMess = errmess; });
    };
    AdminComponent.prototype.onRemoveRecipe = function (id) {
        var _this = this;
        console.log(id);
        this.recipeService.deleteRecipe(id).subscribe(function (res) { console.log('Deleted'); }, function (errmess) { return _this.errMess = errmess; });
    };
    AdminComponent.prototype.onUpdateRecipe = function (id) {
        console.log(id);
    };
    // FORM
    AdminComponent.prototype.createForm = function () {
        var _this = this;
        this.recipeForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)]],
            image: '',
            category: ['none', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            preparationTime: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            cookingTime: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            ingredients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            method: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            featured: false,
            comments: this.fb.array([]),
        });
        this.recipeForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    // controle validation form
    AdminComponent.prototype.onValueChanged = function (data) {
        if (!this.recipeForm) {
            return;
        }
        var form = this.recipeForm;
        // general
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.recipe = this.recipeFormDirective.value;
        this.recipe.date = new Date().toISOString();
        this.recipeService.addRecipe(this.recipe)
            .subscribe(function (recipe) { _this.recipe = recipe; }, function (errmess) { _this.recipe = null; _this.errMess = errmess; });
        this.recipeFormDirective.resetForm();
        this.recipeForm.reset({
            // author: string; // USER
            title: '',
            image: '',
            category: '',
            summary: '',
            method: '',
            ingredients: '',
            preparationTime: '',
            cookingTime: '',
            tips: '',
            featured: false,
            comments: []
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('adminform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminComponent.prototype, "recipeFormDirective", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], Object])
    ], AdminComponent);
    return AdminComponent;
}()); // endClass



/***/ }),

/***/ "./src/app/animations/app.animation.ts":
/*!*********************************************!*\
  !*** ./src/app/animations/app.animation.ts ***!
  \*********************************************/
/*! exports provided: visibility, flyInOut, expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function visibility() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["routes"])
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipedetail/recipedetail.component */ "./src/app/recipedetail/recipedetail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _instag_instag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../instag/instag.component */ "./src/app/instag/instag.component.ts");
/* harmony import */ var _recipestore_recipestore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recipestore/recipestore.component */ "./src/app/recipestore/recipestore.component.ts");








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'recipe', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_0__["RecipeComponent"] },
    { path: 'recipedetail/:id', component: _recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_1__["RecipedetailComponent"] },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'instag', component: _instag_instag_component__WEBPACK_IMPORTED_MODULE_6__["InstagComponent"] },
    { path: 'recipestore', component: _recipestore_recipestore_component__WEBPACK_IMPORTED_MODULE_7__["RecipestoreComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'vegan-recipes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./recipedetail/recipedetail.component */ "./src/app/recipedetail/recipedetail.component.ts");
/* harmony import */ var _instag_instag_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./instag/instag.component */ "./src/app/instag/instag.component.ts");
/* harmony import */ var _recipestore_recipestore_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./recipestore/recipestore.component */ "./src/app/recipestore/recipestore.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");













// Form



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_29__["RecipeComponent"],
                _recipedetail_recipedetail_component__WEBPACK_IMPORTED_MODULE_30__["RecipedetailComponent"],
                _instag_instag_component__WEBPACK_IMPORTED_MODULE_31__["InstagComponent"],
                _recipestore_recipestore_component__WEBPACK_IMPORTED_MODULE_32__["RecipestoreComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_43__["FavoritesComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_44__["HighlightDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_41__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_45__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyABZXnDwcH8m6OMo37xyVIvIVGR7ai7_rs'
                })
            ],
            providers: [
                _services_recipe_service__WEBPACK_IMPORTED_MODULE_35__["RecipeService"],
                _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_34__["ProcessHTTPMsgService"],
                { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_42__["baseURL"] },
                _services_feedback_service__WEBPACK_IMPORTED_MODULE_36__["FeedbackService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_37__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_40__["AuthGuardService"],
                _services_favorite_service__WEBPACK_IMPORTED_MODULE_39__["FavoriteService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["UnauthorizedInterceptor"],
                    multi: true
                }
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n        <h3>Contact Us</h3>\n        <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road<br>\n          Clear Water Bay, Kowloon<br>\n          HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n                <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n        <p></p>\n        <div>\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n        </div>\n\n      <div fxFlex=\"40\" *ngIf=\"feedbacks\">\n        <h4>Feedback</h4>\n        <mat-list-item *ngFor=\"let feed of feedbacks\">\n          <p  matLine >{{ feed.firstname}} {{ feed.lastname}}  </p>\n          <p  matLine >{{ feed.message }}</p>\n          <p  matLine >-- {{ feed.email }}, </p>\n        </mat-list-item>\n\n<!--\n  firstname: string;\n  lastname: string;\n  telnum: number;\n  email: string;\n  agree: boolean;\n  contacttype: string;\n  message: string;\n-->\n      </div>\n      <div fxFlex [hidden]=\"feedbacks || errMess\">\n        <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n      </div>\n      <div fxFlex *ngIf=\"errMess\">\n        <h2>Error Feedback </h2>\n        <h4>{{errMess}}</h4>\n      </div>\n\n\n\n\n    </div>\n  </div>\n\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <h3>Send us your Feedback</h3>\n\n    <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\n\n    <form novalidate [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n        </mat-form-field>\n      </p>\n\n      <table class=\"form-size\">\n        <td>\n          <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n        </td>\n        <td>\n          <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n              {{ ctype }}\n            </mat-option>\n          </mat-select>\n        </td>\n      </table>\n\n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-form-field>\n      </p>\n\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\n      [disabled]=\"feedbackForm.invalid\">Submit</button>\n\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyZW50dmlnbmF1eC9Eb2N1bWVudHMvYml0YnV0VmVnYW4vTmV3UmVjaXBlQW5ndWxhci9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQ0YsRUFBQTs7QUFFQTtFQUNFLFVBQ0YsRUFBQTs7QUFFQTtFQUNFLFVBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDk1JVxufVxuXG4uaGFsZi13aWR0aCB7XG4gIHdpZHRoOiA0NSVcbn1cblxuLmZvcm0tc2l6ZSB7XG4gIHdpZHRoOiA3NSVcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, feedbackService, BaseURL) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.BaseURL = BaseURL;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_3__["ContactType"];
        this.formErrors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        this.validationMessages = {
            firstname: {
                required: 'First Name is required.',
                minlength: 'First Name must be at least 2 characters long.',
                maxlength: 'FirstName cannot be more than 25 characters long.'
            },
            lastname: {
                required: 'Last Name is required.',
                minlength: 'Last Name must be at least 2 characters long.',
                maxlength: 'Last Name cannot be more than 25 characters long.'
            },
            telnum: {
                required: 'Tel. number is required.',
                pattern: 'Tel. number must contain only numbers.'
            },
            email: {
                required: 'Email is required.',
                email: 'Email not in valid format.'
            },
        };
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackService.getFeedbacks()
            .subscribe(function (feedbacks) { return _this.feedbacks = feedbacks; }, function (errmess) { return _this.errMess = errmess; });
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            telnum: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    // controle validation form
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        // general
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackService.addFeedback(this.feedback)
            .subscribe(function (feedback) { _this.feedback = feedback; _this.feedbackCopy = feedback; }, function (errmess) { _this.feedback = null; _this.feedbackCopy = null; _this.errMess = errmess; });
        this.feedbackFormDirective.resetForm();
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"], Object])
    ], ContactComponent);
    return ContactComponent;
}()); // endC



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\nfxLayout=\"column\"\nfxLayoutGap=\"10px\">\n\n<div fxFlex>\n<div fxLayout=\"row\" fxLayoutAlign=\"none center\">\n <h3 fxFlex=\"80%\">My Favorites</h3>\n <span class=\"flex-spacer\"></span>\n <mat-slide-toggle fxFlex\n [(ngModel)]=\"delete\"\n [color]=\" \">\n Delete!\n </mat-slide-toggle>\n</div>\n<hr>\n</div>\n\n<div *ngIf=\"favorites || errMess; else loading\">\n<div fxFlex *ngIf=\"favorites\" [@expand]>\n<mat-grid-list cols=\"2\" rowHeight=\"200px\">\n <mat-grid-tile *ngFor=\"let recipe of favorites.recipes\">\n   <div [routerLink]=\"['/recipedetail', recipe._id]\" appHighlight>\n   <img height=\"200px\" src=\"{{baseURL + recipe.image}}\" alt={{recipe.title}}>\n   </div>\n   <mat-grid-tile-footer>\n     <h1 mat-line>{{recipe.name | uppercase}}</h1>\n     <span class=\"flex-spacer\"></span>\n     <button mat-icon-button *ngIf=\"delete\" (click)=\"deleteFavorite(recipe._id)\">\n       <span style=\"color: red;\" class=\"fa fa-times fa-lg\"></span>\n     </button>\n   </mat-grid-tile-footer>\n </mat-grid-tile>\n</mat-grid-list>\n</div>\n<div *ngIf=\"errMess\">\n<h2>Error</h2>\n<h4>{{errMess}}</h4>\n</div>\n</div>\n<ng-template #loading>\n  <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n</ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/favorites/favorites.component.scss":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteService, baseURL) {
        this.favoriteService = favoriteService;
        this.baseURL = baseURL;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteService.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        console.log('Deleting Recipeh ' + id);
        this.favoriteService.deleteFavorite(id)
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
        this.delete = false;
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
            ],
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/favorites/favorites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('baseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"], Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\"\n    fxLayout=\"row wrap\"\n    fxLayout.lt-md=\"column\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"10px\">\n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n        <div fxLayout=\"row\">       \n            <ul>\n                <li routerLink=\"/home\"><a mat-button><span class=\"fa fa-home fa-lg\"></span> Home</a></li>\n                <li routerLink=\"/recipe\"><a mat-button><span class=\"fa fa-list fa-lg\"></span> Recipe</a></li>\n                 <li routerLink=\"/recipe\"><a mat-button><span class=\"fa fa-home fa-lg\"></span> Stores</a></li>\n                <li routerLink=\"/aboutus\"><a mat-button><span class=\"fa fa-info fa-lg\"></span> About</a></li>\n            </ul>\n        </div>\n    </div>\n\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n        <div style=\"text-align:center\">\n          <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n          <a mat-icon-button class=\"btn-instagram\" href=\"http://instagram.com/\"><i class=\"fa fa-instagram fa-lg\"></i></a>\n          <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n        </div>\n    </div>\n\n    <div>\n        <p>© Copyright LVdesign</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyZW50dmlnbmF1eC9Eb2N1bWVudHMvYml0YnV0VmVnYW4vTmV3UmVjaXBlQW5ndWxhci9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGl7IGRpc3BsYXk6IGlubGluZTt9Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/iconvegan.png\" class=\"imgLogo\"></span>\n  <a mat-button routerLink='/home' routerLinkActive='active'><span class=\"fa fa-home fa-lg\"></span> Home</a>\n\n  <a mat-button routerLink='/recipe' routerLinkActive='active'><span class=\"fa fa-list fa-lg\"></span> Recipe</a>\n  <a mat-button routerLink='/recipestore' routerLinkActive='active'><span class=\"fa fa-home fa-lg\"></span> Stores</a>\n  <a mat-button routerLink='/instag' routerLinkActive='active'><span class=\"fa fa-instagram fa-lg\"></span> Insta Mood</a>\n\n  <a mat-button routerLink='/admin' routerLinkActive='active'><span class=\"fa fa-user fa-lg\"></span> Admin</a>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgLogo {\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYXVyZW50dmlnbmF1eC9Eb2N1bWVudHMvYml0YnV0VmVnYW4vTmV3UmVjaXBlQW5ndWxhci9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0xvZ297XG4gICAgd2lkdGg6ODAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], { width: '500px', height: '450px' });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n\n<mat-card *ngIf=\"recipe\" fxFlex>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>\n      <h3>{{recipe.title | uppercase}}</h3>\n      <p>{{recipe.author}} <span>{{recipe.date | date }}</span></p>\n    </mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{BaseURL + recipe.image}}\" alt={{recipe.title}}>\n  <mat-card-content>\n    <p>{{recipe.summary}}</p>\n  </mat-card-content>\n</mat-card>\n<div fxFlex [hidden]=\"recipe || recipeErrMess\">\n  <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n</div>\n<div fxFlex *ngIf=\"recipeErrMess\">\n  <h2>Error Recipe</h2>\n  <h4>{{recipeErrMess}}</h4>\n</div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(recipeservice, BaseURL) {
        this.recipeservice = recipeservice;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeservice.getFeaturedRecipe()
            .subscribe(function (recipe) { return _this.recipe = recipe; }, function (errmess) { return _this.recipeErrMess = errmess; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/instag/instag.component.html":
/*!**********************************************!*\
  !*** ./src/app/instag/instag.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  instag works!\n</p>\n"

/***/ }),

/***/ "./src/app/instag/instag.component.scss":
/*!**********************************************!*\
  !*** ./src/app/instag/instag.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhZy9pbnN0YWcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/instag/instag.component.ts":
/*!********************************************!*\
  !*** ./src/app/instag/instag.component.ts ***!
  \********************************************/
/*! exports provided: InstagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagComponent", function() { return InstagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstagComponent = /** @class */ (function () {
    function InstagComponent() {
    }
    InstagComponent.prototype.ngOnInit = function () {
    };
    InstagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instag',
            template: __webpack_require__(/*! ./instag.component.html */ "./src/app/instag/instag.component.html"),
            styles: [__webpack_require__(/*! ./instag.component.scss */ "./src/app/instag/instag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstagComponent);
    return InstagComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    Login\n  <span class=\"flex-spacer\"></span>\n  <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<p>{{ user | json }}</p>\n\n<div *ngIf=\"errMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n\n\n<form novalidate  #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" name=\"username\"\n        [(ngModel)]=\"user.username\" #username=\"ngModel\" required>\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" name=\"password\"\n        [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n      </mat-form-field>\n\n      <mat-checkbox  name=\"remember\"   [(ngModel)]=\"user.remember\" >Remember Me\n      </mat-checkbox>\n    </p>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button class=\"background-primary text-floral-white\" type=\"submit\"\n    [disabled]=\"loginForm.form.invalid\" >Login</button>\n  </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, authService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // action form login
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('User: ', this.user);
        this.authService.logIn(this.user)
            .subscribe(function (res) {
            if (res.success) {
                _this.dialogRef.close(res.success);
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n     <div fxFlex>\n       <div>\n         <h3>Recipe</h3>\n         <hr>\n       </div>\n     </div>\n\n    <div fxFlex  *ngIf=\"recipes\">\n\n<div fxLayout=\"row wrap\"  fxLayout.xs=\"column\" fxLayoutGap=\"2%\" fxLayoutAlign=\"left\">\n\n  <mat-card class=\"card-picture\" *ngFor=\"let recipe of recipes\" [routerLink]= \"['/recipedetail', recipe._id]\" appHighlight>\n\n      <img height=\"200px\" src=\"{{BaseURL + recipe.image}}\" alt={{recipe.title}}>\n      \n      <h1 matLine> {{ recipe.title | uppercase }} </h1>\n      <p>{{ recipe.category}}</p>\n\n</mat-card>\n</div>\n\n    </div>\n\n        <div fxFlex [hidden]=\"recipes || errMess\">\n          <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n        </div>\n\n        <div fxFlex *ngIf=\"errMess\">\n          <h2>Error</h2>\n          <h4>{{errMess}}</h4>\n        </div>\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/recipe/recipe.component.scss":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(recipeService, BaseURL) {
        this.recipeService = recipeService;
        this.BaseURL = BaseURL;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; }, function (errmess) { return _this.errMess = errmess; });
    };
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.scss */ "./src/app/recipe/recipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], Object])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipedetail/recipedetail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/recipedetail/recipedetail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\"\n  fxLayout=\"row\"\n  fxLayout.sm=\"column\"\n  fxLayout.xs=\"column\"\n  fxLayoutAlign.gt-md=\"space-around center\"\n  fxLayoutGap=\"10px\"\n  fxLayoutGap.xs=\"0\">\n\n    <div fxFlex=\"40\" *ngIf=\"recipe\">\n          <mat-card>\n\n            <mat-card-header>\n            <p>{{recipe.category}}</p>\n                <mat-card-title>\n                  <h3>{{recipe.title | uppercase}} </h3>\n                </mat-card-title>\n             <p>{{recipe.author}},  {{ recipe.date | date }}</p>\n            </mat-card-header>\n\n            <img mat-card-image src=\"{{BaseURL + recipe.image}}\" alt={{recipe.title}} />\n\n            <mat-card-content>\n            <p>{{recipe.summary}}</p>\n            <p>{{recipe.preparationTime}} .mn</p> <p>{{recipe.cookingTime}} .mn</p>\n            <p>{{recipe.ingredients}}</p>\n              <p>{{recipe.method}}</p>\n              <p>{{recipe.tips}}</p>\n            </mat-card-content>\n\n            <mat-card-actions>\n              <button mat-button [routerLink]=\"['/recipedetail', prev]\">\n                  <span class=\"fa fa-chevron-left fa-lg\"></span>\n              </button>\n                  <button mat-button (click)=\"goBack()\">Back</button>\n                  <button mat-button>LIKE</button>\n                  <button mat-button>SHARE</button>\n                  <span class=\"flex-spacer\"></span>\n              <button mat-button [routerLink]=\"['/recipedetail', next]\">\n                <span class=\"fa fa-chevron-right fa-lg\"></span>\n              </button>\n            </mat-card-actions>\n          </mat-card>\n    </div>\n\n    <div fxFlex=\"40\"  *ngIf=\"recipe\">\n\n      <mat-list class=\"comment-recipe\">\n          <h2>Comments </h2>\n        <mat-list-item *ngFor=\"let comment of recipe.comments\">\n          <p  matLine >{{ comment.rating}} Star</p>\n          <p  matLine >{{ comment.comment }}</p>\n          <p  matLine >-- {{ comment.author }},  <span>{{ comment.date | date }}</span></p>\n        </mat-list-item>\n      </mat-list>\n\n\n      <mat-list-item *ngIf=\"!(commentForm.invalid)\">\n          <p matLine>\n            <span>{{commentForm.value.comment}}</span>\n          </p>\n          <p matLine>\n            <span>{{commentForm.value.rating}} Stars</span>\n          </p>\n          <p matLine>\n            <span>-- {{commentForm.value.author}}</span>\n          </p>\n    </mat-list-item>\n\n\n\n      <form novalidate class=\"form-recipe\" [formGroup]=\"commentForm\" #cform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n       <p>\n          <mat-form-field class=\"half-width\">\n              <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required>\n              <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\n            </mat-form-field>\n       </p>\n        <p>\n            <mat-slider thumbLabel tickInterval='1' min='0' max='5' formControlName='rating'></mat-slider>\n        </p>\n       <p>\n          <mat-form-field class=\"half-width\">\n            <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=6 required></textarea>\n            <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\n          </mat-form-field>\n        </p>\n\n          <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\n          [disabled]=\"commentForm.invalid\">Submit</button>\n      </form>\n\n    </div>\n\n    <div fxFlex [hidden]=\"recipe || errMess\">\n      <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n    </div>\n\n    <div fxFlex *ngIf=\"errMess\">\n      <h2>Error</h2>\n      <h4>{{errMess}}</h4>\n    </div>\n\n</div>\n\n\n<!--\nrating: 4,\ncomment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',\nauthor: 'Paul McVites',\ndate: '2014-09-05T17:57:28.556094Z'\n-->\n"

/***/ }),

/***/ "./src/app/recipedetail/recipedetail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/recipedetail/recipedetail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZWRldGFpbC9yZWNpcGVkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipedetail/recipedetail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recipedetail/recipedetail.component.ts ***!
  \********************************************************/
/*! exports provided: RecipedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipedetailComponent", function() { return RecipedetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RecipedetailComponent = /** @class */ (function () {
    function RecipedetailComponent(recipeService, route, location, fb, BaseURL) {
        this.recipeService = recipeService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.formErrors = {
            author: '',
            comment: '',
        };
        this.validationMessages = {
            author: {
                required: 'Author Name is required.',
                minlength: 'Author Name must be at least 2 characters long.',
            },
            comment: {
                required: 'Comment is required.',
            },
        };
        this.createForm();
    }
    RecipedetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // dishdetail/0
        this.recipeService.getRecipeIds().subscribe(function (recipeIds) { return _this.recipeIds = recipeIds; });
        // avec Observable recuper le dish id   params['id']
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) { return _this.recipeService.getRecipe(params['id']); }))
            .subscribe(function (recipe) { _this.recipe = recipe; _this.recipeCopy = recipe; _this.setPrevNext(recipe._id); }, function (errmess) { return _this.errMess = errmess; });
    };
    RecipedetailComponent.prototype.setPrevNext = function (recipeId) {
        var index = this.recipeIds.indexOf(recipeId); // index ==  2
        this.prev = this.recipeIds[(this.recipeIds.length + index - 1) % this.recipeIds.length]; // 4 + 2 -1 = 5 % 4  => 1
        this.next = this.recipeIds[(this.recipeIds.length + index + 1) % this.recipeIds.length]; // 4 + 2 +1 = 7 % 4  => 3
    };
    RecipedetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // form Comment
    RecipedetailComponent.prototype.createForm = function () {
        var _this = this;
        //
        this.commentForm = this.fb.group({
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            rating: '',
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.commentForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    // controle validation form
    RecipedetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        // general
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    //
    RecipedetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment = this.commentForm.value;
        this.comment.date = new Date().toISOString();
        console.log(this.comment);
        // add comment si existe ou pas
        this.recipeCopy.comments.push(this.comment); // car Post sur server une copy
        this.recipeService.putRecipe(this.recipeCopy)
            .subscribe(function (recipe) { _this.recipe = recipe, _this.recipeCopy = recipe; }, function (errmess) { _this.recipe = null; _this.recipeCopy = null; _this.errMess = errmess; });
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
            author: '',
            rating: 0,
            comment: ''
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipedetailComponent.prototype, "commentFormDirective", void 0);
    RecipedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipedetail',
            template: __webpack_require__(/*! ./recipedetail.component.html */ "./src/app/recipedetail/recipedetail.component.html"),
            styles: [__webpack_require__(/*! ./recipedetail.component.scss */ "./src/app/recipedetail/recipedetail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], Object])
    ], RecipedetailComponent);
    return RecipedetailComponent;
}());



/***/ }),

/***/ "./src/app/recipestore/recipestore.component.html":
/*!********************************************************!*\
  !*** ./src/app/recipestore/recipestore.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipestore works!\n</p>\n\n<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/recipestore/recipestore.component.scss":
/*!********************************************************!*\
  !*** ./src/app/recipestore/recipestore.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXN0b3JlL3JlY2lwZXN0b3JlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipestore/recipestore.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipestore/recipestore.component.ts ***!
  \******************************************************/
/*! exports provided: RecipestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipestoreComponent", function() { return RecipestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipestoreComponent = /** @class */ (function () {
    function RecipestoreComponent() {
        // https://angular-maps.com/guides/getting-started/
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    RecipestoreComponent.prototype.ngOnInit = function () {
    };
    RecipestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipestore',
            template: __webpack_require__(/*! ./recipestore.component.html */ "./src/app/recipestore/recipestore.component.html"),
            styles: [__webpack_require__(/*! ./recipestore.component.scss */ "./src/app/recipestore/recipestore.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipestoreComponent);
    return RecipestoreComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(inj) {
        this.inj = inj;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        // Get the auth header from the service.
        var authToken = authService.getToken();
        // console.log("Interceptor: " + authToken);
        // Clone the request to add the new header.
        var authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + authToken) });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(inj) {
        this.inj = inj;
    }
    UnauthorizedInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]);
        var authToken = authService.getToken();
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            // do nothing
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401 && authToken) {
                    console.log('Unauthorized Interceptor: ', err);
                    authService.checkJWTtoken();
                }
            }
        }));
    };
    UnauthorizedInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], UnauthorizedInterceptor);
    return UnauthorizedInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.tokenKey = 'JWT';
        // tslint:disable-next-line:ban-types
        this.isAuthenticated = false;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authToken = undefined;
    }
    AuthService.prototype.checkJWTtoken = function () {
        var _this = this;
        this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'users/checkJWTtoken')
            .subscribe(function (res) {
            console.log('JWT Token Valid: ', res);
            _this.sendUsername(res.user.username);
        }, function (err) {
            console.log('JWT Token invalid: ', err);
            _this.destroyUserCredentials();
        });
    };
    AuthService.prototype.sendUsername = function (name) {
        this.username.next(name);
    };
    AuthService.prototype.clearUsername = function () {
        this.username.next(undefined);
    };
    AuthService.prototype.loadUserCredentials = function () {
        var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
        console.log('loadUserCredentials ', credentials);
        if (credentials && credentials.username !== undefined) {
            this.useCredentials(credentials);
            if (this.authToken) {
                this.checkJWTtoken();
            }
        }
    };
    AuthService.prototype.storeUserCredentials = function (credentials) {
        console.log('storeUserCredentials ', credentials);
        localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
        this.useCredentials(credentials);
    };
    AuthService.prototype.useCredentials = function (credentials) {
        this.isAuthenticated = true;
        this.sendUsername(credentials.username);
        this.authToken = credentials.token;
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.clearUsername();
        this.isAuthenticated = false;
        localStorage.removeItem(this.tokenKey);
    };
    AuthService.prototype.signUp = function () {
    };
    AuthService.prototype.logIn = function (user) {
        var _this = this;
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'users/login', { username: user.username, password: user.password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.storeUserCredentials({ username: user.username, token: res.token });
            return { success: true, username: user.username };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    AuthService.prototype.logOut = function () {
        this.destroyUserCredentials();
    };
    // tslint:disable-next-line:ban-types
    AuthService.prototype.isLoggedIn = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUsername = function () {
        return this.username.asObservable();
    };
    AuthService.prototype.getToken = function () {
        return this.authToken;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/favorite.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");








var FavoriteService = /** @class */ (function () {
    function FavoriteService(http, auth, processHTTPMsgService) {
        this.http = http;
        this.auth = auth;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        if (!this.auth.isLoggedIn()) {
            return null;
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'favorites')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    FavoriteService.prototype.postFavorites = function (recipeids) {
        var _this = this;
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'favorites/', recipeids)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    FavoriteService.prototype.isFavorite = function (id) {
        var _this = this;
        if (!this.auth.isLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ exists: false, favorites: null });
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'favorites/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    FavoriteService.prototype.postFavorite = function (id) {
        var _this = this;
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'favorites/' + id, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var _this = this;
        return this.http.delete(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'favorites/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    FeedbackService.prototype.getFeedbacks = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    // post Feedback
    FeedbackService.prototype.addFeedback = function (feedback) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback/', feedback, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/process-httpmsg.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.error;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg);
    };
    ProcessHTTPMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






var RecipeService = /** @class */ (function () {
    function RecipeService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    // all dishes
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'recipes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    //  get ID string ???
    RecipeService.prototype.getRecipe = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'recipes/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    // get query specifique featured
    RecipeService.prototype.getFeaturedRecipe = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'recipes?featured=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (recipes) { return recipes[0]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    RecipeService.prototype.getRecipeIds = function () {
        return this.getRecipes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (recipes) { return recipes.map(function (recipe) { return recipe._id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    // return map of dish id
    // POST method
    RecipeService.prototype.putRecipe = function (recipe) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'recipes/' + recipe._id, recipe, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    //
    RecipeService.prototype.addRecipe = function (recipe) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'recipes', recipe, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var url = _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + "recipes/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return console.log("deleted recipe id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])
    ], RecipeService);
    return RecipeService;
}()); // endC



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
//export const baseURL = 'http://localhost:3000/';
var baseURL = 'https://localhost:3443/';


/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

;
var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "./src/app/shared/recipe.ts":
/*!**********************************!*\
  !*** ./src/app/shared/recipe.ts ***!
  \**********************************/
/*! exports provided: Recipe, Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());

// categories
var Categories = ['appetizer', 'mains', 'dessert', 'drinks', 'none'];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/laurentvignaux/Documents/bitbutVegan/NewRecipeAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map