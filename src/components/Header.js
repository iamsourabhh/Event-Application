import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = ({ refresh }) => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            Calendar Events
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
