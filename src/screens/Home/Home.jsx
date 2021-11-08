import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assign } from '../../store/actions/content/service';
import { useGetCollection } from '../../query-hooks/index';
import Layout from '../../components/common/Layout';
import HeroSection from './components/HeroSection';
import HomeParagraph from './components/HomeParagraph';
import './styles/Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const markdown = useSelector((state) => state.content);
  const { data, isLoading, isError } = useGetCollection();

  if (isLoading) {
    console.log('query hook is loading');
  }

  if (isError) {
    console.log('An error occurred in the call');
  }

  if (data) {
    console.log('query hook data *****************************');
    console.log(data);
  }
  useEffect(() => {
    dispatch(assign('markdown/sample/Lorem.md'));
  }, []);
  useEffect(() => console.log(markdown), [markdown]);
  return (
    <Layout>
      <HeroSection />
      <HomeParagraph />
    </Layout>
  );
};

export default Home;
