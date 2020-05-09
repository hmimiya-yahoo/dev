import Document, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import css from "!!raw-loader!mdxx-ssg-components/css/github-markdown.css";
// @ts-ignore
import prismCss from "!!raw-loader!mdxx-ssg-components/css/prism.css";
// @ts-ignore
import custom from "!!raw-loader!mdxx-ssg-components/css/styles.css";

import { ServerStyleSheet } from "styled-components";
import ssgConfig from "../mdxx-ssg.json";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    try {
      const page = ctx.renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />)
      );
      const initialProps: any = await Document.getInitialProps(ctx);
      const styles = [
        ...initialProps.styles,
        <style
          key="custom"
          dangerouslySetInnerHTML={{
            __html: `${css}\n${prismCss}\n${custom}`,
          }}
        />,
        ...sheet.getStyleElement(),
      ];
      return {
        ...page,
        styles,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={ssgConfig.lang || "en-US"}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title={ssgConfig.siteName}
            href="/rss.xml"
          />
          {/* <link
            rel="alternate"
            type="application/rss+xml"
            title={ssgConfig.siteName}
            href="/sitemap.xml"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
