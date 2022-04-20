import Head from 'next/head';
import Link from 'next/link';
import Nev from './components/Nev';

export default function Home({ posts }) {
  //console.log(posts);
  return (
    <div>
      <h1>My HomePage</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

//https://jsonplaceholder.typicode.com/posts?_start=0&_end=10

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
