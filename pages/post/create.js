import Head from "next/head";
import Link from "next/link";
const Create = () => {
  return (
    <div>
      <Head>
        <title>Home Create</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>hello from Create</div>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Create;