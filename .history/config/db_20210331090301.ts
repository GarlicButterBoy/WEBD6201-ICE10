let mongoDBPath = "mongodb://localhost/webd6201";
let sessionSecret = "someSecret";

function myFunction()
{
    console.log("This doesn't do anything");
}

// module.exports = {
//     DB: mongoDBPath,
//     Secret: sessionSecret,
//     Nothing: myFunction
// }

module.exports.DB = mongoDBPath;
module.exports.Secret = sessionSecret;
module.exports.