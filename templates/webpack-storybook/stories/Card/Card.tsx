import * as React from "react";
import { withDocs } from "storybook-readme";
import { Card } from "../../src/Components/Card";
import { WithPropTypes } from "../../.storybook/Containers/WithPropTypes";
import * as readme from "./Card.md";

const Wrapper = () => (
  <div>
    <Card name="front" age={200} profesion="FrontEnd" />
  </div>
);

export default () => {
  return withDocs(
    readme,
    WithPropTypes({
      Component: Card,
      RenderComponent: Wrapper
    })
  );
};
