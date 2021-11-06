import axios from 'axios';
import log from 'log';
import * as matter from 'gray-matter';

export const plac = 1;

export const assign = (filename) => (
  async (dispatch) => {
    const { data, status } = await axios.get(filename);
    if (status < 200 || status > 299) {
      
    }
  }
);
