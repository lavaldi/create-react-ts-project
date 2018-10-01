import { resolve, basename, join } from "path";
import {
  readdirSync,
  lstatSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  readFileSync
} from "fs";
import { spawn, SpawnOptions } from "child_process";
import chalk from "chalk";
import { configTargets } from "./configTargets";
import { errorApp } from "./errorApp";

export function createApp({ name, target }): void {
  if (!name) {
    errorApp(name);
  }
  const root = resolve(name);
  const appName = basename(root);
  validationAppName(appName);
  let { templateDir, dependencies } = configTargets[target];
  mkdir(root);
  process.chdir(root);
  copyDir(templateDir, root);
  copyPackage(appName, templateDir, root);
  installPackages(name, dependencies);
}

const validationAppName = (appName: string): void => {
  const validateProjectName = require("validate-npm-package-name");
  let results = validateProjectName(appName);
  let dependency = ["webpack", "webpack-dev-server"];
  if (!results.validForNewPackages) {
    console.error(`Could not create project named: ${chalk.red(appName)}`);
    console.log("please correct:");
    results.errors.forEach(error => {
      console.log(`    ${chalk.red("*")} ${error}`);
    });
    process.exit(1);
  }
  if (dependency.indexOf(appName) !== -1) {
    console.error(`Could not create project named ${chalk.red(appName)}.`);
    console.error(
      "Please change the name of the application, a dependency has the same name."
    );
    process.exit(1);
  }
};

const mkdir = dir => {
  try {
    mkdirSync(dir, 0o755);
  } catch (e) {}
};

const copyDir = (src, dest) => {
  mkdir(dest);
  var files = readdirSync(src);
  for (var i = 0; i < files.length; i++) {
    var current = lstatSync(join(src, files[i]));
    if (current.isDirectory()) {
      copyDir(join(src, files[i]), join(dest, files[i]));
    } else {
      copyFileSync(join(src, files[i]), join(dest, files[i]));
    }
  }
};

const copyPackage = (name, templateDir, root) => {
  const templatepackage = join(templateDir, "package.json");
  let packageJson = JSON.parse(readFileSync(templatepackage, "utf-8"));
  packageJson.name = name;
  writeFileSync(
    join(root, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
};

const installPackages = (name: string, dependency: string[]): void => {
  const command: string = "npm";
  const args: string[] = ["install", "--save-dev"].concat(dependency);

  const config: SpawnOptions = {
    stdio: "inherit",
    shell: true
  };

  console.log("");
  console.log("Installing packages for your application");
  const child = spawn(command, args, config);
  child.on("close", () => {
    console.log("");
    console.log(`Project ${chalk.green(name)} created!`);
    console.log(`use: cd ${chalk.green(name)} and ${chalk.green("npm start")}`);
    console.log("");
  });
};
