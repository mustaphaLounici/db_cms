import "./style.css";

import Header from "./components/Header";
import SourcesTable from "./components/SourcesTable";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <SourcesTable />
        </Route>
        <Route exact path="/:sourceID">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
