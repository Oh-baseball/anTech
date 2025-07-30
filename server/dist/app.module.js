"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_config_1 = require("./config/database.config");
const user_controller_1 = require("./controllers/user.controller");
const pay_history_controller_1 = require("./controllers/pay-history.controller");
const company_controller_1 = require("./controllers/company.controller");
const store_controller_1 = require("./controllers/store.controller");
const payment_controller_1 = require("./controllers/payment.controller");
const user_service_1 = require("./services/user.service");
const pay_history_service_1 = require("./services/pay-history.service");
const store_service_1 = require("./services/store.service");
const company_service_1 = require("./services/company.service");
const payment_service_1 = require("./services/payment.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            user_controller_1.UserController,
            pay_history_controller_1.PayHistoryController,
            store_controller_1.StoreController,
            store_controller_1.CategoryController,
            company_controller_1.CompanyController,
            payment_controller_1.LogoController,
            payment_controller_1.PaymentMethodController,
            payment_controller_1.AccountController,
            payment_controller_1.CardController,
            payment_controller_1.TossController,
        ],
        providers: [
            app_service_1.AppService,
            database_config_1.DatabaseConfig,
            user_service_1.UserService,
            pay_history_service_1.PayHistoryService,
            store_service_1.StoreService,
            company_service_1.CompanyService,
            payment_service_1.PaymentService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map