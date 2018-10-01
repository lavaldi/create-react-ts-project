#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
var inquirer = require("inquirer");
var configTargets_1 = require("./configTargets");
var createApp_1 = require("./createApp");
commander
    .version("0.0.1")
    .description("Generate a React application with TypeScript, webpack, Jest and Storybook")
    .parse(process.argv);
if (process.argv.slice(2).length) {
    showConfig();
}
function showConfig() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "target",
            message: "What config?",
            choices: [
                configTargets_1.configTargets["react"].message,
            ]
        }
    ])
        .then(function (response) {
        response["name"] = process.argv.slice(2)[0];
        if (configTargets_1.configTargets["react"].message === response["target"]) {
            response["target"] = "react";
        }
        if (configTargets_1.configTargets["storybook"].message === response["target"]) {
            response["target"] = "storybook";
        }
        createApp_1.createApp(response);
    });
}
