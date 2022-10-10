import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Create = () => {
  const router = useRouter();
  const { id, productName } = router.query;

  // const headeTest = productName && (
  //   <Head>
  //     <title>
  //       product {id} and{productName}
  //     </title>
  //     <meta name="description" content="Generated by create next app" />
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>
  // );
  return (
    <div>
      {/* {headeTest} */}
      <div>
        hello from product {id} {productName}
      </div>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Create;