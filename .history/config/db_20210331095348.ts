export const mongoDBPath = "mongodb://localhost/webd6201";
export const sessionSecret = "someSecret";

function myFunction()
{
    console.log("This doesn't do anything");
}

 module.exports = {
     Path: mongoDBPath,
     Secret: sessionSecret,
     Nothing: myFunction
 }

//We need at least one module.exports set up
///module.exports.DB = mongoDBPath;
//module.exports.Secret = sessionSecret;
//module.exports.Nothing = myFunction;