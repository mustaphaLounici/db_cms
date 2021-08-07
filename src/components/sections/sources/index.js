import React from "react";
import { Route, Switch } from "react-router-dom";
import SourcesList from "./SourcesList";
import AddSource from "./AddSource";
import EditSource from "./EditSource";
import MainLayout from "../../layout/MainLayout";

function index() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/sources/add">
          <AddSource />
        </Route>
        <Route exact path="/sources">
          <SourcesList />
        </Route>

        <Route exact path="/sources/:id">
          <EditSource />
        </Route>
      </Switch>
    </MainLayout>
  );
}

export default index;
