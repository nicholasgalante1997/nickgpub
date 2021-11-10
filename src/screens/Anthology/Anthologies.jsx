import React from 'react';
import useGetCollections from '../../query-hooks/collection';
import Layout from '../../components/common/Layout';
import AnthologyHeader from './components/AnthologyHeader';
import './styles/anthology.scss';

const Anthologies = () => {
  const {
    data, isError, error, isLoading,
  } = useGetCollections();

  if (isLoading) {
    // handle loading state
  }

  if (isError) {
    // handle error state
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <Layout>
      <AnthologyHeader />
    </Layout>
  );
};

export default Anthologies;
