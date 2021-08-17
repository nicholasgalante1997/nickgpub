import React from 'react';
import Layout from '../../components/common/Layout';
// import useGetCollections from '../../query-hooks/collection';
import AnthologyHeader from './components/AnthHeader';

// eslint-disable-next-line arrow-body-style
const Anthologies = () => {
  // const collections = useGetCollections();

  // useEffect(() => {
  //   console.log(collections);
  // }, [collections]);

  return (
    <Layout>
      <AnthologyHeader />
    </Layout>
  );
};

export default Anthologies;
