(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/employee/employee.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/employee/employee.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:200px\">\n\n  <div class='row'>\n    <div class='col s12'>\n      <table>\n        <thead>\n          <tr>\n            <th></th>\n            <th></th>\n            <th>Codice</th>\n            <th>Nome</th>\n            <th>Sesso</th>\n            <th>Salario Annuale</th>\n            <th>Anno di nascita</th>\n          </tr>\n        </thead>\n\n        <tbody>\n\n          <tr *ngFor=\"let item of employeService.employes\">\n            <td><button type='button' (click)='getTargetItem(item)' class=\"waves-effect waves-light btn  red darken-4 \">\n                Elimina</button></td>\n            <td>\n              <button class=\"waves-effect waves-light btn  orange darken-4 \" (click)='seleziona(item)'>\n                Modifica</button>\n            </td>\n            <td>{{item.code}}</td>\n            <td>{{item.name}}</td>\n            <td>{{item.gender}}</td>\n            <td>{{item.salarioAnnuale}}</td>\n            <td>{{item.annoDiNascita}}</td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n  <div class=\"row\" style=\"margin-top:100px\">\n    <form class=\"col s12\" #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input placeholder=\"Placeholder\" id=\"code\" type=\"text\" #code=\"ngModel\" name='code' class=\"validate\"\n            [(ngModel)]=\"selectedEmploye.code\">\n          <label for=\"code\">Codice</label>\n        </div>\n        <div class=\"input-field col s6\">\n          <input id=\"last_name\" type=\"text\" class=\"validate\" #name=\"ngModel\" name='name'\n            [(ngModel)]=\"selectedEmploye.name\">\n          <label for=\"last_name\">Nome</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s6\">\n          <label>\n            <input type=\"radio\" #gender='ngModel' value='female' name='gender' [(ngModel)]=\"selectedEmploye.gender\" />\n            <span>Femmina</span>\n          </label>\n        </div>\n        <div class=\"col s6\">\n          <label>\n            <input type=\"radio\" #gender='ngModel' name='gender' value='male' [(ngModel)]=\"selectedEmploye.gender\" />\n            <span>Maschio</span>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"salarioAnnuale\" type=\"number\" class=\"validate\" #salarioAnnuale=\"ngModel\" name='salarioAnnuale'\n            [(ngModel)]=\"selectedEmploye.salarioAnnuale\">\n          <label for=\"salarioAnnuale\">Salario Annulae</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input id=\"annoDiNascita\" type=\"date\" class=\"validate\" #annoDiNascita=\"ngModel\" name='annoDiNascita'\n            [(ngModel)]=\"selectedEmploye.annoDiNascita\">\n          <label for=\"annoDiNascita\">Anno di Nascita</label>\n        </div>\n      </div>\n      <button class='waves-effect waves-light btn' [ngClass]=\"{mostraCrea: !activeChange}\">Crea</button>\n      <button class='waves-effect waves-light btn' type='button' style='margin-left: 10px;' (click)='changeElement(f)'\n        [ngClass]=\"{activeChange: activeChange}\">Modifica</button>\n      <button class='waves-effect waves-light btn green' type='button' style='margin-left: 10px;'\n        [ngClass]=\"{activeChange: activeChange}\" (click)='refreshForm(f)'>Annulla</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Applicazione Angular / Express JS </a>\n\n  </div>\n</nav>\n<app-employee (getDataFrom)='getElement($event)'></app-employee>\n\n<div class=\"container\" *ngIf=\"item\">\n  <div class=\"row\">\n    <div class=\"col s12 m6\">\n      <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n          <span class=\"card-title\">{{item.name}}</span>\n\n        </div>\n        <div class=\"card-action\">\n          <a href=\"#\">{{item.annoDiNascita}}</a>\n          <a href=\"#\">{{item.salarioAnnuale}}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activeChange {\r\n\r\n  display: none;\r\n}\r\n\r\n.mostraCrea {\r\n  display: none\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlQ2hhbmdlIHtcclxuXHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vc3RyYUNyZWEge1xyXG4gIGRpc3BsYXk6IG5vbmVcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_employe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/employe.service */ "./src/app/service/employe.service.ts");
/* harmony import */ var src_app_model_employe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/employe-model */ "./src/app/model/employe-model.ts");




let EmployeeComponent = class EmployeeComponent {
    constructor(employeService) {
        this.employeService = employeService;
    }
    ngOnInit() {
        this.selectedEmploye = new src_app_model_employe_model__WEBPACK_IMPORTED_MODULE_3__["EmployeModel"]();
        this.activeChange = true;
        this.getAllEmployes();
    }
    onSubmit(f) {
        this.employeService.postEmploye(f.value).subscribe(data => {
            console.log(f.value);
            this.getAllEmployes();
            f.form.reset();
        });
    }
    ngOnChanges() {
        this.getAllEmployes();
    }
    getAllEmployes() {
        this.employeService.getEmployes().subscribe(data => {
            this.employeService.employes = data;
            this.employeService.employes.sort(this._comparaElemetn);
        });
    }
    _comparaElemetn(a, b) {
        if (a.code < b.code)
            return -1;
        if (a.code > b.code)
            return 1;
        else
            return 0;
    }
    _helperElement(item, form) {
        for (let value in item) {
            if (value != "_id" && value != "__v") {
                form.controls[value].setValue(item[value]);
                console.log(value);
            }
        }
    }
    changeElement(form) {
        this.employeService.putEmploye(form.value).subscribe(data => {
            console.log(data);
            this.getAllEmployes();
        });
    }
    seleziona(item) {
        // this.form.controls["name"].setValue(item.name);
        this.activeChange = false;
        this._helperElement(item, this.form);
    }
    getTargetItem(item) {
        console.log(item.code);
        // this.form.controls["name"].setValue(item.code);
        if (confirm(`sicuro di voler eliminare ${item.name} ?`)) {
            this.employeService.deleteEmploye(item.code).subscribe(data => {
                console.log(data);
                this.getAllEmployes();
            });
        }
    }
    refreshForm(f) {
        this.activeChange = true;
        f.form.reset();
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _service_employe_service__WEBPACK_IMPORTED_MODULE_2__["EmployeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f", { static: true })
], EmployeeComponent.prototype, "form", void 0);
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-employee",
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/employee/employee.component.html"),
        providers: [_service_employe_service__WEBPACK_IMPORTED_MODULE_2__["EmployeService"]],
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/Components/employee/employee.component.css")]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "frontend";
    }
    getElement(items) {
        this.item = items;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/employee/employee.component */ "./src/app/Components/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Components_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/model/employe-model.ts":
/*!****************************************!*\
  !*** ./src/app/model/employe-model.ts ***!
  \****************************************/
/*! exports provided: EmployeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeModel", function() { return EmployeModel; });
class EmployeModel {
    constructor(code = "", name = "", gender = "", salarioAnnuale = 0, annoDiNascita = "") {
        this.code = code;
        this.name = name;
        this.salarioAnnuale = salarioAnnuale;
        this.annoDiNascita = annoDiNascita;
    }
}
EmployeModel.ctorParameters = () => [
    null,
    null,
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/service/employe.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/employe.service.ts ***!
  \********************************************/
/*! exports provided: EmployeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeService", function() { return EmployeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EmployeService = class EmployeService {
    constructor(http) {
        this.http = http;
        this.URL_API = "api/Employe";
    }
    getEmployes() {
        return this.http.get(this.URL_API);
    }
    postEmploye(employe) {
        return this.http.post(this.URL_API, employe);
    }
    getEmploye(code) {
        return this.http.get(this.URL_API + `/${code}`);
    }
    putEmploye(employe) {
        return this.http.put(this.URL_API + `/${employe.code}`, employe);
    }
    deleteEmploye(code) {
        return this.http.delete(this.URL_API + `/${code}`);
    }
};
EmployeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmployeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], EmployeService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Utente\Desktop\mean-tutorial\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map