import React, { useState } from 'react';
import { TextField, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>Create a Feed</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator} />
      </form>
    </Paper>
  );
};

export default Form;
