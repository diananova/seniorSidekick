import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { blue, grey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
  },
 
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === blue[200],
  },
}));

function Copyright() {
  return (
    <p style={{ color: grey[800] }}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/soniprajna/spectra-SeniorSideKick">
        SeniorSideKick
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}


export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Find your sidekick!</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}