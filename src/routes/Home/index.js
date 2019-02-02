import { Link } from 'react-router-dom';
import Helmet from 'react-helmet-async';
import { chunk } from 'lodash';
import ReactGA from 'react-ga';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import GridItem from './GridItem';
import { getProducts } from '../../helpers/product';
import { flexGrow } from '../../styles/misc';
import { mainContent, tabHeader, tabLabel, gridContainer, gridRow } from './styles';

const Home = () => {
  const allProducst = getProducts();
  const chunkProducts = chunk(allProducst, 3);
  const handleClickProductsHeader = () => {
    ReactGA.event({
      category: 'homepage',
      action: 'click products header',
      label: 'PRODUCTS',
    });
  };
  const hideTab = true;

  return (
    <div css={mainContent}>
      <Helmet>
        <title>Beli voucher game online termurah, cepat dan mudah - Ingame.id</title>
        <meta
          name="description"
          content="Jual voucher game online termurah dengan proses yang cepat dan mudah. Main game jadi tambah seru dengan skin keren dan fitur premium. Yuk beli voucher game di Ingame.id sekarang."
        />
      </Helmet>
      {!hideTab && (
        <div css={tabHeader}>
          <Link to="/" onClick={handleClickProductsHeader}>
            <span css={tabLabel}>PRODUCTS</span>
          </Link>
        </div>
      )}
      <div>
        <article css={flexGrow}>
          <div>
            <div css={gridContainer}>
              {chunkProducts.reverse().map((producst, index) => (
                <div key={index} css={gridRow}>
                  {producst.map(detail => (
                    <GridItem key={detail.slug} detail={detail} source="homepage" />
                  ))}
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
