import React, { Component } from 'react';
import Nev from './components/Nev';
import Headinfo from './components/Headinfo';
import Image from 'next/image';
import photosStyles from '../styles/Photos.module.css';
import Link from 'next/link';

const Photos = ({ photos }) => {
  return (
    <div>
      <Headinfo title="Phots.. "></Headinfo>
      <h2>Photos</h2>
      <ul className={photosStyles.photos}>
        {photos.map((photo) => (
          <Link href={`/photos/${photo.id}`}>
            <a>
              <li key={photo.id}>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span>{photo.title}</span>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=20`
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
    revalidate: 20,
  };
};

export default Photos;
