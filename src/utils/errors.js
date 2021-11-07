"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FatalError = void 0;
// eslint-disable-next-line import/prefer-default-export
var FatalError = /** @class */ (function (_super) {
    __extends(FatalError, _super);
    function FatalError(message) {
        return _super.call(this, "Fatal error: " + message) || this;
    }
    return FatalError;
}(Error));
exports.FatalError = FatalError;
