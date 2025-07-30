"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('포인트 적립/사용 시스템 API')
        .setDescription('Supabase를 백엔드로 사용하는 NestJS 기반의 포인트 적립 및 사용 시스템')
        .setVersion('1.0')
        .addTag('users', '사용자 관리')
        .addTag('stores', '매장 관리')
        .addTag('categories', '카테고리 관리')
        .addTag('pay-history', '포인트 관리')
        .addServer('http://localhost:3000', '개발 서버')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            displayRequestDuration: true,
        },
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🚀 Application is running on: http://localhost:${port}`);
    console.log(`📚 Swagger API Docs: http://localhost:${port}/api-docs`);
    console.log(`📋 Postman Collection: http://localhost:${port}/api-docs-json`);
}
bootstrap();
//# sourceMappingURL=main.js.map