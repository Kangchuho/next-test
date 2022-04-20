import React, { Component } from 'react';
import Head from 'next/head';

const Headinfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  );
};

Headinfo.defaultProps = {
  title: 'My Home',
  keyword: 'My Home pages',
  contents: 'My Home page ..',
};

export default Headinfo;
