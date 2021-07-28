import axios from 'axios';
import { useQuery } from 'react-query';

const getAdmin = async (username) => {
  const target = `${process.env.DEV_API}/admin/${username}`;
  const { data } = await axios.get(target);
  return data;
};

export default function useGetCollections() {
  return useQuery('collections', getAdmin);
}