import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    Home Component <br />
    <Link to="/steam-wallet-idr">Steam Wallet IDR</Link>
    <br />
    <Link to="/asdads">404 Link</Link>
  </div>
);

export default Home;
