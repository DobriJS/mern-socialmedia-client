import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer}>
      <Post />
    </Grid>
  );
};

export default Posts;
