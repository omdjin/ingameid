import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => (
  <div className="main_content">
    <div className="home_tab-header">
      <Link to="/">
        <span className="home_tab-label">PRODUCTS</span>
      </Link>
    </div>
    <div>
      <article className="flexGrow">
        <div>
          <div className="gridContainer">
            <div className="gridItem">asdasd</div>
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default Home;
