import Sources from "./components/sections/sources";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import PrivatePage from "./components/layout/PrivatePage";
import Login from "./components/layout/Login";
import Home from "./components/sections/home";
import { auth } from "./config/firebase";
function App() {
  console.log(auth.currentUser);
  return (
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
      <Router>
        <Switch>
          <Route path="/sources">
            <PrivatePage>
              <Sources />
            </PrivatePage>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <PrivatePage>
              <Home />
            </PrivatePage>
          </Route>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
