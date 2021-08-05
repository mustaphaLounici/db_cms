import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const isHome = location.pathname === "/";
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {!isHome && (
            <Button onClick={() => history.push("/")} color="inherit">
              HOME
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
