import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { blue, grey } from '@material-ui/core/colors';

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

export default function Footer() {
  return (
    <div style={{ backgroundColor: blue[200]}}>
      <footer>
        <Container maxWidth="sm">
          <p>SeniorSideKick. Let's revive the connection!</p>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}