import { Layout } from "./Layout";
import Head from "next/head";
import ssgConfig from "../mdxx-ssg.json";
import { AmpIncludeAmpAnalytics, AmpIncludeAmpSocialShare } from "./amp";
export function ItemLayout(props: {
  title: string;
  authorLink: string;
  author: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          {props.title} - {ssgConfig.siteName}
        </title>
        <AmpIncludeAmpSocialShare />
        <AmpIncludeAmpAnalytics />
      </Head>
      <Analytics />
      <Layout>
        <div className="markdown-body">
          <h1>{props.title}</h1>
          <p>
            by <a href={props.authorLink}>{props.author}</a>
          </p>
          {props.children}
        </div>

        <div style={{ paddingTop: 15 }}>
          <TwitterShare />
          <HatenaBookmarkShare />
          <FacebookShare />
          {/* <LineShare /> */}
        </div>
      </Layout>
    </>
  );
}

function TwitterShare() {
  // @ts-ignore
  return <amp-social-share type="twitter"></amp-social-share>;
}

function FacebookShare() {
  // @ts-ignore
  return <amp-social-share type="facebook"></amp-social-share>;
}

function HatenaBookmarkShare() {
  return (
    // @ts-ignore
    // prettier-ignore
    // <amp-social-share type="hatena_bookmark" layout="container" data-share-endpoint="http://b.hatena.ne.jp/entry/CANONICAL_URL">B!</amp-social-share>
    <amp-social-share type="hatena_bookmark" layout="container" data-share-endpoint="http://b.hatena.ne.jp/entry/CANONICAL_URL" />
  );
}

function LineShare() {
  // @ts-ignore
  return <amp-social-share type="line"></amp-social-share>;
}

function Analytics() {
  const json = JSON.stringify({
    vars: {
      gtag_id: "UA-165420141-1",
      config: {
        "UA-165420141-1": { groups: "default" },
      },
    },
  });
  return (
    // @ts-ignore
    // prettier-ignore
    <amp-analytics type="gtag" data-credentials="include"><script type="application/json" dangerouslySetInnerHTML={{ __html: json }} /></amp-analytics>
  );
}
