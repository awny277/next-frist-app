import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const Show = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Home post {id} title:</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>hello from post ID : {id} title:</div>
      <div>PathName : {router.pathname}</div>
      <div>PathName : {router.asPath}</div>
      <Link href={"/"}>
        <a>home</a>
      </Link>
    </div>
  );
};

export default Show;
