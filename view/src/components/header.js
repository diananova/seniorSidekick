import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Link from '@material-ui/core/Link';


const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        SeniorSidekick
      </Typography>
      <Link href="/" variant="body2">{"Home"}</Link>
    </Toolbar>
  </AppBar>
);

export default Header;