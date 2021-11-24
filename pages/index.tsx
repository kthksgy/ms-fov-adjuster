import type { NextPage } from "next";
import Head from "next/head";
import Adjuster from "../components/adjuster";

const Home: NextPage = () => {
  const title = "マウス感度／視野角調整アプリ";
  const description =
    "モニターディスタンスを用いてマウス感度と視野角を調整するWebアプリケーションです。視野角を指定したマウス感度の調整、マウス感度を指定した視野角の調整が出来ます。";
  const twitterId = "kthksgy";
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="icon-192x192.png" />

        <meta name="author" content="kthksgy" />
        <meta name="description" content={description} />
        <meta name="keywords" content="マウス感度,視野角,FPS,Webアプリ" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kthksgy.github.io/ms-fov-adjuster/"
        />
        <meta
          property="og:image"
          content="https://kthksgy.github.io/ms-fov-adjuster/featured-image-1200x630.png"
        />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content="kthksgy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kthksgy" />
        <meta name="twitter:creator" content="@kthksgy" />

        <meta property="fb:app_id" content="582586216303936" />
      </Head>
      <Adjuster />
    </>
  );
};

export default Home;
