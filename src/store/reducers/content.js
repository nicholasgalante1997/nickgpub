import ContentActionTypes from '../actions/content/types';

const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case ContentActionTypes.ASSIGN:
      return action.target;
    default:
      return state;
  }
};

export default contentReducer;
