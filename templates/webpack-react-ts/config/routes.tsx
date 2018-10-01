import * as React from "react";
import { App } from "../src/App";
import { CreatePost } from "../src/Containers/CreatePost";

const NotFound: React.SFC<{}> = () => <div>Not found</div>;

const Routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: CreatePost
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export { Routes };
