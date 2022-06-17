"use strict";
exports.__esModule = true;
exports.universityName = exports.College = void 0;
var College = /** @class */ (function () {
    function College() {
    }
    return College;
}());
exports.College = College;
exports.universityName = "Shivaji University";
function setUniversity(univ) {
    exports.universityName = univ;
}
exports["default"] = setUniversity;
// in one module u may have multiple export statements but only one export default statement
// atleast one property from module can be exported as default
// at the time of import u can use any name to refer a property. {} not used in import
// once we add export keyword in any file, that will bcm a module
// MyCollege.ts  : MyCollege
