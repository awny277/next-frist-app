import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
export default function SSR({ post }) {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(post);
  return (
    <div>
      <Head>
        <title>ssr {post.id}</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>hello from post ID : {id} title:</div>
      <div>PathName : {router.pathname}</div>
      <div>PathName : {router.asPath}</div> */}
      <div>############################################</div>
      <div>hello from post ID : {post.id} :</div>
      <div>hello from post title : {post.title}</div>

      <Link href={"/"}>home</Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await data.json();
  // console.log(post);

  return {
    props: {
      post,
    },
  };
}
