/* eslint-disable consistent-return */
/* eslint-disable func-names */
import axios from 'axios';
import * as matter from 'gray-matter';
import Actions from './types';

export const plac = 1;

export const assign = (filename) => async function (dispatch) {
  const { data, status } = await axios.get(filename);
  if (status < 200 || status > 299) {
    return {};
  }
  console.log(data);
  console.log(matter(data));
  dispatch({
    type: Actions.ASSIGN,
    content: data,
  });
};
