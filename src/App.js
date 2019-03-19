import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter/Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Counter />
        </main>
        <Footer
          copyrightYear={new Date().getFullYear()}
          copyrightHolder="Alex Albright"
        />
      </div>
    );
  }
}
