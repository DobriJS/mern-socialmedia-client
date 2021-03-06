/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  Chip,
} from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import { getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();

  const [currentId, setCurrentId] = useState(null);
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');

  const [onChangeTag, setOnChangeTag] = useState('');
  const [tags, setTags] = useState([]);
  const tagRef = useRef(null);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
      );
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchPost();
    }
  };

  const handleDelete = () => setTags([]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Posts"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <TextField
                name="Search Tags"
                label="Search Tags"
                variant="outlined"
                fullWidth
                style={{
                  margin: '10px 0 0',
                }}
                inputRef={tagRef}
                InputProps={{
                  startAdornment:
                    tags.length !== 0 &&
                    tags.map((tag) => (
                      <Chip
                        key={tag}
                        style={{ margin: '10px 0' }}
                        onDelete={() => handleDelete(tag)}
                        label={tag}
                        variant="outlined"
                      />
                    )),
                  onChange: (e) => {
                    setOnChangeTag(e.target.value);
                  },
                  onKeyPress: (e) => {
                    if (e.key === 'Enter') {
                      setTags([...tags, onChangeTag]);
                      setOnChangeTag('');
                      tagRef.current.value = '';
                    }
                  },
                }}
              />
              <Button
                className={classes.searchButton}
                variant="contained"
                onClick={searchPost}
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
