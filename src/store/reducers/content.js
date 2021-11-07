import ContentActionTypes from '../actions/content/types';

const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case ContentActionTypes.ASSIGN:
      return action.content;
    default:
      return state;
  }
};

export default contentReducer;
