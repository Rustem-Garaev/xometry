import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Page from "components/Page/Page";
import RegistrationCard from "components/RegistrationCard/RegistrationCard";
import { PAGE_MODES } from "components/Page/types";
import { parseQueryStringToObject } from "utils/parseQueryStringToObject";

ReactDOM.render(
  <React.StrictMode>
    <Page mode={PAGE_MODES.top}>
      <RegistrationCard />
    </Page>
  </React.StrictMode>,
  document.getElementById("root")
);

console.log(parseQueryStringToObject("?p1=123&p2[]=12&p2[]=45&p3=a%20d"));
