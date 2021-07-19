/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Layout, Divider } from 'antd';
import './styles/Article.scss';

const { Content } = Layout;

const Article = () => {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('# Loading');

  const [contentHeight, setContentHeight] = useState({ height: 0 });

  useEffect(() => {
    (async () => {
      await fetch('markdown/Sample/Lorem.md')
        .then((response) => response.text())
        .then((text) => {
          setContent(text);
        });
    })();
  }, []);

  useEffect(() => {
    const parent = document.querySelector('.layout-col-right');
    const height = parent.clientHeight;
    setContentHeight({ height });
  }, []);

  useEffect(() => {
    function handleResize() {
      if (
        window.innerHeight > (contentHeight.height + 100)
        || window.innerHeight < (contentHeight.height - 100)) {
        setContentHeight({ height: window.innerHeight });
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className="article-container" style={contentHeight.height ? { height: contentHeight.height * 0.45 } : {}}>
      <Content>
        <ReactMarkdown components={{ hr: () => <Divider className="article-divider" /> }}>
          {content}
        </ReactMarkdown>
      </Content>
    </Layout>
  );
};

export default Article;
