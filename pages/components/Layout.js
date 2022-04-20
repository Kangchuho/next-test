import Nav from './Nev';
import Head from 'next/head';
import Headinfo from './Headinfo';

const Layout = ({ children }) => {
  return (
    <>
      <Headinfo title="My Home"></Headinfo>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
