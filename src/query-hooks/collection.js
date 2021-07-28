import axios from 'axios';
import { useQuery } from 'react-query';

const getCollections = async () => {
  const target = `${process.env.DEV_API}/collections`;
  const { data } = await axios.get(target);
  return data;
};

export default function useGetCollections() {
  return useQuery('collections', getCollections);
}