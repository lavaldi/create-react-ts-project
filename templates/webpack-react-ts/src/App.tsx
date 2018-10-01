import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Wrapper } from "./Components/Wrapper";

interface IAppProps {
  route?: any;
}

export const App: React.SFC<IAppProps> = props => {
  return (
    <Wrapper>{renderRoutes(props.route.routes, { debugger: true })}</Wrapper>
  );
};
