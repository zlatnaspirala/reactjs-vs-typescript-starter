import * as React from "react";
import * as ReactDOM from "react-dom";

import { ProjectName } from "./components/project-name";

ReactDOM.render(
    <>
    <h1>Page title</h1>
    <ProjectName compiler="TypeScript" framework="React" />
    </>,
    document.getElementById("root")
);
