import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Here are the tabs using search params, click on the link below to see demo.</p>
        <Link className="App-link" to={"/tabs"}>
          Tabs
        </Link>
      </header>
    </div>
  );
};

export default Home;
