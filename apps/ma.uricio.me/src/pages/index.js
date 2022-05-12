import React from "react";
import { Helmet } from "react-helmet";
import Crawl from "react-star-wars-crawl";

import "react-star-wars-crawl/lib/index.css";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <Helmet>
        <title>A long time ago, in a galaxy far far away</title>
      </Helmet>
      <audio autoPlay>
        <source src="/audio/theme.mp3" type="audio/mp3" />
        Your web browser is outdated or don't support OGG and MP3 codecs.
      </audio>
      <div className="stars" />
      <Crawl title="Portfólio do Maurício" subTitle="Uma nova esperança">
        <p>Esta página está em construção.</p>
        <p>Muito obrigado e volte mais tarde :)</p>
      </Crawl>
    </main>
  );
}

export default Index;
