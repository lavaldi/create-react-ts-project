# Create React Application

Create a React application with TypeScript, webpack and Storybook.

## Getting Started

### Installation

Install globally

```bash
npm install -g create-react-ts-project
```

### Create app

```bash
create-react-ts-project my-project
```

Create a directory called my-project with the initial structure of the project.

Will also install its dependencies.

```
my-project
├── config
│   ├── jest
│   ├── theme
│   ├── globalStyle.ts
│   └── routes.tsx
├── node_modules
├── public
│   └── index.html
├── src
│   ├── Components
│   ├── Containers
│   ├── App.tsx
│   └── index.tsx
├── .stylelintrc
├── jest.config.js
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### Scripts

```bash
npm start
```

Transpile and watch. Then open http://localhost:8080/ to see your app.

```bash
npm build
```

Transpile to folder `dist`

```bash
npm test
```

Run test
