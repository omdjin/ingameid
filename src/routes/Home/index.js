import { Link } from 'react-router-dom';
import Helmet from 'react-helmet-async';
import { chunk } from 'lodash';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getProducts } from '../../helpers/product';
import { flexGrow } from '../../styles/misc';
import {
  mainContent,
  tabHeader,
  tabLabel,
  gridContainer,
  gridRow,
  gridItem,
  itemWrapper,
  itemContainer,
  itemImage,
  itemClear,
} from './styles';

const Home = () => {
  const allProducst = getProducts();
  const chunkProducts = chunk(allProducst, 3);

  return (
    <div css={mainContent}>
      <Helmet>
        <title>Home - Ingame.id</title>
        <meta
          name="description"
          content="Jual voucher game online termurah dengan proses yang cepat dan mudah. Main game jadi tambah seru dengan skin keren dan fitur premium. Yuk beli voucher game di Ingame.id sekarang."
        />
      </Helmet>
      <div css={tabHeader}>
        <Link to="/">
          <span css={tabLabel}>PRODUCTS</span>
        </Link>
      </div>
      <div>
        <article css={flexGrow}>
          <div>
            <div css={gridContainer}>
              {chunkProducts.map((producst, index) => (
                <div key={index} css={gridRow}>
                  {producst.map(detail => (
                    <div key={detail.slug} css={gridItem}>
                      <Link to={`/${detail.slug}`}>
                        <div css={itemWrapper}>
                          <div css={itemContainer}>
                            <img src={detail.imageUrl} alt={detail.title} css={itemImage} sizes="293px" />
                          </div>
                          <div css={itemClear} />
                        </div>
                        <div className="item-overlay">
                          <h2>{detail.title}</h2>
                        </div>
                      </Link>
                    </div>
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
