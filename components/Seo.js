import Head from "next/head";

export default function Seo({ title, desc, keywords, path }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content={desc}></meta>
      <meta name="author" content="Eugene Zhang"></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link rel="canonical" href={`https://eugenezhang.me/${path}`}></link>
      <meta property="og:title" content="Eugene Zhang"></meta>
      <meta property="og:description" content={desc}></meta>
      <meta property="og:url" content={`https://eugenezhang.me/${path}`}></meta>
      <meta
        property="twitter:image"
        content="https://eugenezhang.me/personal-web-cover.jpeg"
      ></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:title" content={title}></meta>
      <meta property="twitter:description" content={desc}></meta>
      <meta
        property="og:image"
        content="https://eugenezhang.me/personal-web-cover.jpeg"
      ></meta>
      <meta
        name="google-site-verification"
        content="HBSMZoTt-uWgp8sqvEk-uxzQ7MuKscE_E69q-3ZDdUU"
      />
    </Head>
  );
}
