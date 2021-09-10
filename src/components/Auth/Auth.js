import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          { isSignup ? 'Sign Up' : 'Sign In' }
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Button>
              { isSignup ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign Up' }
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
