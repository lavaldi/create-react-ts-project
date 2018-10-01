import { join } from "path";

const commonDependencies = [
  "@types/jest",
  "@types/prop-types",
  "@types/react",
  "@types/react-dom",
  "@types/react-router-config",
  "@types/react-router-dom",
  "awesome-typescript-loader@4.0.0",
  "enzyme",
  "enzyme-adapter-react-16",
  "enzyme-to-json",
  "jest",
  "react-router-config",
  "react-router-dom",
  "html-webpack-plugin",
  "react",
  "react-dom",
  "styled-components",
  "styled-normalize",
  "stylelint",
  "stylelint-custom-processor-loader",
  "stylelint-processor-styled-components",
  "tslint",
  "tslint-loader",
  "ts-jest",
  "typescript",
  "webpack@3.12.0",
  "webpack-dev-server@2.11.2"
];

export const configTargets = {
  react: {
    message: "React + TypeScript + Jest + Webpack",
    templateDir: join(__dirname, "/../templates/webpack-react-ts"),
    dependencies: [...commonDependencies]
  },
  storybook: {
    message: "React + TypeScript + Jest + Webpack + Storybook",
    templateDir: join(__dirname, "/../templates/webpack-storybook"),
    dependencies: [
      "@storybook/addon-options",
      "@storybook/react",
      "storybook-readme",
      ...commonDependencies
    ]
  }
};
