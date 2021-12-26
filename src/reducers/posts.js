import {
  LOADING_START,
  LOADING_END,
  COMMENT,
  FETCH_BY_SEARCH,
  FETCH_ALL,
  FETCH_POST,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
  case LOADING_START:
    return {
      ...state,
      isLoading: true,
    };
  case LOADING_END:
    return {
      ...state,
      isLoading: false,
    };
  case FETCH_POST:
    return {
      ...state,
      post: action.payload,
    };
  case FETCH_ALL:
    return {
      ...state,
      posts: action.payload.data,
      numberOfPages: action.payload.numberOfPages,
    };
  case FETCH_BY_SEARCH:
    return {
      ...state,
      posts: action.payload,
    };
  case UPDATE:
  case LIKE:
    return {
      ...state,
      posts: state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ),
    };
  case COMMENT:
    return {
      ...state,
      posts: state.posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload;
        }
        return post;
      }),
    };
  case CREATE:
    return {
      ...state,
      posts: [...state.posts, action.payload],
    };

  case DELETE:
    return {
      ...state,
      posts: state.posts.filter((post) => post._id !== action.payload),
    };
  default:
    return state;
  }
};
