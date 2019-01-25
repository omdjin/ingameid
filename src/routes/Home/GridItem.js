/** @jsx jsx */
import { jsx } from '@emotion/core';
import { object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import { gridItem, itemWrapper, itemContainer, itemImage, itemClear } from './styles';

const GridItem = ({ detail }) => {
  const handleClick = () => {
    ReactGA.event({
      category: 'homepage',
      action: 'click product item',
      label: `${detail.title} - /${detail.slug}`,
    });

    console.log({
      category: 'homepage',
      action: 'click product item',
      label: `${detail.title} - /${detail.slug}`,
    });
  };

  return (
    <div css={gridItem}>
      <Link to={`/${detail.slug}`} onClick={handleClick}>
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
  );
};

GridItem.propType = {
  detail: object.isRequired,
  source: string,
};

GridItem.defaultProp = {
  source: 'homepage',
};

export default GridItem;
