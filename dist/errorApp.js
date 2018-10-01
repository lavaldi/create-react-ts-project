"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
function errorApp(name) {
    console.error("Please specify the project directory:");
    console.log("  " + chalk_1.default.cyan(name) + " " + chalk_1.default.green("<project-directory>") + " -t <target:react|react-ts>");
    console.log("");
    console.log("For example:");
    console.log("  " + chalk_1.default.cyan(name) + " " + chalk_1.default.green("my-react-app"));
    process.exit(1);
}
exports.errorApp = errorApp;
