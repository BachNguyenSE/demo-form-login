"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_mock_server_ts";
exports.ids = ["_ssr_src_mock_server_ts"];
exports.modules = {

/***/ "(ssr)/./src/mock/handlers/auth/auth-handler.ts":
/*!************************************************!*\
  !*** ./src/mock/handlers/auth/auth-handler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authHandlers: () => (/* binding */ authHandlers)\n/* harmony export */ });\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw */ \"(ssr)/./node_modules/msw/lib/core/http.mjs\");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw */ \"(ssr)/./node_modules/msw/lib/core/HttpResponse.mjs\");\n\nconst authHandlers = [\n    msw__WEBPACK_IMPORTED_MODULE_0__.http.post(\"http://localhost:3000/api/login\", async ({ request })=>{\n        const data = await request.json();\n        if (data.username === \"bach\" && data.password === \"12345\") {\n            return new msw__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTQyOTQ5NDcsImV4cCI6MTc0NTgzMDk0NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.qTHAjMMkz5lmYkBgHZhjT94-obUrTVzNSqyUGgSR-f8\", {\n                status: 200\n            });\n        }\n        return new msw__WEBPACK_IMPORTED_MODULE_1__.HttpResponse(\"Login failed\", {\n            status: 401\n        });\n    })\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbW9jay9oYW5kbGVycy9hdXRoL2F1dGgtaGFuZGxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFbEMsTUFBTUUsZUFBZTtJQUMxQkYscUNBQUlBLENBQUNHLElBQUksQ0FBQyxtQ0FBbUMsT0FBTyxFQUFFQyxPQUFPLEVBQUM7UUFDNUQsTUFBTUMsT0FBUSxNQUFNRCxRQUFRRSxJQUFJO1FBS2hDLElBQUdELEtBQUtFLFFBQVEsS0FBSyxVQUFVRixLQUFLRyxRQUFRLEtBQUksU0FBUztZQUNyRCxPQUFPLElBQUlQLDZDQUFZQSxDQUFDLG9ZQUFvWTtnQkFBQ1EsUUFBUTtZQUFHO1FBQzVhO1FBQ0EsT0FBTyxJQUFJUiw2Q0FBWUEsQ0FBQyxnQkFBZ0I7WUFBQ1EsUUFBUTtRQUFHO0lBQ3REO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW8tbG9naW4vLi9zcmMvbW9jay9oYW5kbGVycy9hdXRoL2F1dGgtaGFuZGxlci50cz83MGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHAsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJtc3dcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoSGFuZGxlcnMgPSBbXHJcbiAgaHR0cC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpblwiLCBhc3luYyAoeyByZXF1ZXN0fSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCByZXF1ZXN0Lmpzb24oKSkgYXMge1xyXG4gICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZihkYXRhLnVzZXJuYW1lID09PSBcImJhY2hcIiAmJiBkYXRhLnBhc3N3b3JkID09PVwiMTIzNDVcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKUGJteHBibVVnU2xkVUlFSjFhV3hrWlhJaUxDSnBZWFFpT2pFM01UUXlPVFE1TkRjc0ltVjRjQ0k2TVRjME5UZ3pNRGswTnl3aVlYVmtJam9pZDNkM0xtVjRZVzF3YkdVdVkyOXRJaXdpYzNWaUlqb2lhbkp2WTJ0bGRFQmxlR0Z0Y0d4bExtTnZiU0lzSWtkcGRtVnVUbUZ0WlNJNklrcHZhRzV1ZVNJc0lsTjFjbTVoYldVaU9pSlNiMk5yWlhRaUxDSkZiV0ZwYkNJNkltcHliMk5yWlhSQVpYaGhiWEJzWlM1amIyMGlMQ0pTYjJ4bElqcGJJazFoYm1GblpYSWlMQ0pRY205cVpXTjBJRUZrYldsdWFYTjBjbUYwYjNJaVhYMC5xVEhBak1Na3o1bG1Za0JnSFpoalQ5NC1vYlVyVFZ6TlNxeVVHZ1NSLWY4XCIsIHtzdGF0dXM6IDIwMH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2UoXCJMb2dpbiBmYWlsZWRcIiwge3N0YXR1czogNDAxfSk7XHJcbiAgfSksXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJodHRwIiwiSHR0cFJlc3BvbnNlIiwiYXV0aEhhbmRsZXJzIiwicG9zdCIsInJlcXVlc3QiLCJkYXRhIiwianNvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/mock/handlers/auth/auth-handler.ts\n");

/***/ }),

/***/ "(ssr)/./src/mock/handlers/index.ts":
/*!************************************!*\
  !*** ./src/mock/handlers/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlers: () => (/* binding */ handlers)\n/* harmony export */ });\n/* harmony import */ var _auth_auth_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-handler */ \"(ssr)/./src/mock/handlers/auth/auth-handler.ts\");\n\nconst handlers = [\n    ..._auth_auth_handler__WEBPACK_IMPORTED_MODULE_0__.authHandlers\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbW9jay9oYW5kbGVycy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUU1QyxNQUFNQyxXQUFXO09BQ2pCRCw0REFBWUE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWxvZ2luLy4vc3JjL21vY2svaGFuZGxlcnMvaW5kZXgudHM/ZDY4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoSGFuZGxlcnMgfSBmcm9tICcuL2F1dGgvYXV0aC1oYW5kbGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVycyA9IFtcclxuICAgIC4uLmF1dGhIYW5kbGVyc1xyXG5dIl0sIm5hbWVzIjpbImF1dGhIYW5kbGVycyIsImhhbmRsZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/mock/handlers/index.ts\n");

/***/ }),

/***/ "(ssr)/./src/mock/server.ts":
/*!****************************!*\
  !*** ./src/mock/server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   server: () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw/node */ \"(ssr)/./node_modules/msw/lib/node/index.mjs\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"(ssr)/./src/mock/handlers/index.ts\");\n\n\nconst server = (0,msw_node__WEBPACK_IMPORTED_MODULE_1__.setupServer)(..._handlers__WEBPACK_IMPORTED_MODULE_0__.handlers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbW9jay9zZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBQ0Q7QUFFL0IsTUFBTUUsU0FBU0YscURBQVdBLElBQUlDLCtDQUFRQSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtby1sb2dpbi8uL3NyYy9tb2NrL3NlcnZlci50cz80Yzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwU2VydmVyIH0gZnJvbSAnbXN3L25vZGUnO1xyXG5pbXBvcnQgeyBoYW5kbGVycyB9IGZyb20gJy4vaGFuZGxlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTtcclxuIl0sIm5hbWVzIjpbInNldHVwU2VydmVyIiwiaGFuZGxlcnMiLCJzZXJ2ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/mock/server.ts\n");

/***/ })

};
;