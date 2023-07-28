import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GlobalStyle from "../styles/GlobalStyle";
import Wrapper from "../components/Wrapper";
import MaxWidth from "../components/MaxWidth";
import Footer from "../components/Footer";
import Href from "../components/Text/Link";
import NavBar from "../components/NavBar";

function App(props) {
  const { Component, pageProps } = props;
  return (
    <Wrapper>
      <Head>
        <title>Picosong search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <NavBar>
        <Link href="/">
          <Image
            title="Homepage"
            src="/icons/house.svg"
            width="40px"
            height="40px"
          />
        </Link>
        <Link href="/starred">
          <Image
            title="Starred songs"
            src="/icons/star.svg"
            width="40px"
            height="40px"
          />
        </Link>
        <Link href="/hidden">
          <Image
            title="Hidden songs"
            src="/icons/slashed-eye.svg"
            width="40px"
            height="40px"
          />
        </Link>
      </NavBar>
      <MaxWidth>
        <Component {...pageProps} />
      </MaxWidth>
      <Footer>
        <Href target="_blank" href="https://github.com/ogohogo/picosong">
          SPECIAL THANKS TO OGOHOGO FOR FORMATTING PICOSONG DATA!
        </Href>
      </Footer>
    </Wrapper>
  );
}

export default App;
