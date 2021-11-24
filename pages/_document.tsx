import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html prefix="og: https://ogp.me/ns#">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            type="image/png"
            href="apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" href="icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
