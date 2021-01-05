import React, { ReactElement } from "react";
import { Router } from "react-router-dom";
import history from "./history";
import {PageEditor} from "./components/admin/PageEditor";

function App(): ReactElement {
  React.useEffect(() => {});
  return (
    <Router history={history}>
      <div>
        <PageEditor />
      </div>
    </Router>
  );
}

export default App;
