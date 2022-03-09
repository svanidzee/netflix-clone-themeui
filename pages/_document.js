import Document, { Head, Html, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
// we use class over func because we need to extend document
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
              rel="stylesheet"
            />
          </Head>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// _app vs _document
// _app adds stuff to body, not responsible for html and head
