import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getProducts } from '../../helpers/product';
import { flexGrow } from '../../styles/misc';
import { mainContent, tabHeader, tabLabel } from './styles';

const Home = () => {
  const producst = getProducts();

  return (
    <div css={mainContent}>
      <div css={tabHeader}>
        <Link to="/">
          <span css={tabLabel}>PRODUCTS</span>
        </Link>
      </div>
      <div>
        <article css={flexGrow}>
          <div>
            <div className="gridContainer">
              {producst &&
                producst.map(detail => (
                  <div key={detail.slug} className="gridItem">
                    <Link to={`/${detail.slug}`}>
                      <img src={detail.imageUrl} alt={detail.title} width="200" height="200" />
                      <span style={{ display: 'none' }}>{detail.title}</span>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Home;
