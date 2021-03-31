"use strict";
let mongoDBPath = "mongodb://localhost/webd6201";
let sessionSecret = "someSecret";
function myFunction() {
    console.log("This doesn't do anything");
}
module.exports = {
    Path: mongoDBPath,
    Secret: sessionSecret,
    Nothing: myFunction
};
//# sourceMappingURL=db.js.map