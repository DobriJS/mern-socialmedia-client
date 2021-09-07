import React from 'react';
import { Card } from '@material-ui/core/';
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>POST</h1>
    </Card>
  );
};

export default Post;
