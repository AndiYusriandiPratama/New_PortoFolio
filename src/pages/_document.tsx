import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true" as "anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Oswald:wght@200..700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-gradient-to-b from-pink-200 via-white to-blue-200 dark:from-dark-500 bg-dark-700 h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
