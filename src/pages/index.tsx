import { type NextPage } from "next";
import Head from "next/head";
import PhotoGrid from "~/Components/PhotoGrid";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Deren Showcase Photo Album</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#0ABAB5] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center px-4 py-16">
          <h1 className="pb-6 text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Deren <span className="text-[#006666]">Photo</span> Album
          </h1>
          <PhotoGrid />
        </div>
      </main>
    </>
  );
};

export default Home;
