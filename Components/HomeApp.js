import React from "react";
import Header from "../Pages/Header";
import Menu from "../Pages/Menu";
import Article from "./Article";

function HomeApp() {
  return (
    <main>
      <header className="home">
        <Header />
        <Menu />
      </header>
      <article>
        <Article />
      </article>
    </main>
  );
}

export default HomeApp;
