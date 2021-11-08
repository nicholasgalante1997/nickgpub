/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import axios from 'axios';
import * as matter from 'gray-matter';
import Actions from './types';

export const assign = (filename) => async function (dispatch) {
  const { data, status } = await axios.get(filename);
  if (status < 200 || status > 299) {
    return { error: 'A network error occurred' };
  }

  dispatch({
    type: Actions.ASSIGN,
    content: matter(data),
  });
};
