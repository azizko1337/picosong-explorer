import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Wrapper from "../components/Wrapper";
import MaxWidth from "../components/MaxWidth";
import Footer from "../components/Footer";
import Link from "../components/Text/Link";

function App(props) {
  const { Component, pageProps } = props;
  return (
    <Wrapper>
      <Head>
        <title>Picosong search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <GlobalStyle />
      <MaxWidth>
        <Component {...pageProps} />
      </MaxWidth>
      <Footer>
        <Link target="_blank" href="https://github.com/ogohogo/picosong">
          SPECIAL THANKS TO OGOHOGO FOR FORMATTING PICOSONG DATA!
        </Link>
      </Footer>
    </Wrapper>
  );
}

export default App;
