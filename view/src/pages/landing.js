import React, { Component } from 'react';
import Header from '../components/header';

import Link from '@material-ui/core/Link';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';


function landing() {
  return (
    <div>
        <Header></Header>
        <h1>Landing Page!</h1>
        <Link href="questionnaire" variant="body2">
									{"I need help!"}
								</Link>
        <Link href="login" variant="body2">
									{"I want to help!"}
								</Link>
    </div>
    
  );
}
export default landing;