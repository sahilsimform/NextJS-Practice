import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Web News</title>
      </Head>
      <h1>Welcome to Next app</h1>
      {articles.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
