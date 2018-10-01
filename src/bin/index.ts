#!/usr/bin/env node
import * as commander from "commander";
import * as inquirer from "inquirer";
import { configTargets } from "./configTargets";
import { createApp } from "./createApp";

commander
  .version("0.0.1")
  .description(
    "Generate a React application with TypeScript, webpack, Jest and Storybook"
  )
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
          configTargets["react"].message,
          // configTargets["storybook"].message
        ]
      }
    ])
    .then(response => {
      response["name"] = process.argv.slice(2)[0];
      if (configTargets["react"].message === response["target"]) {
        response["target"] = "react";
      }
      if (configTargets["storybook"].message === response["target"]) {
        response["target"] = "storybook";
      }
      createApp(response);
    });
}
