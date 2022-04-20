import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';

const index = ({ photo }) => {
  const router = useRouter();
  //console.log(router);
  const { id, title, url } = photo;
  return (
    <div>
      <Image src={url} width={500} height={500} alt={title} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo,
    },
    revalidate: 20,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export default index;
