import { css } from '@emotion/core';
import { block, flex, flexGrow, itemsCenter, justifyCenter, pAbsolute, width100 } from '../../styles/misc';
import { blackPrimary, borderBlack, grey, white } from '../../styles/colors';

export const mainContent = css`
  ${flexGrow};
  ${width100};
  margin: 0 auto 30px;
  max-width: 935px;
  @media (min-width: 736px) {
    box-sizing: content-box;
    padding: 60px 20px 0;
    width: calc(100% - 40px);
  }
`;

export const tabHeader = css`
  ${justifyCenter};
  ${itemsCenter};
  border-top: 1px solid ${grey};
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;

  a {
    ${flex};
    ${justifyCenter};
    border-top: 1px solid ${borderBlack};
    color: ${blackPrimary};
    flex-direction: row;
    height: 52px;
    text-transform: uppercase;
  }
`;

export const tabLabel = css`
  ${flex};
  ${itemsCenter};
`;

export const gridContainer = css`
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;

export const gridRow = css`
  flex-direction: row;
  @media (min-width: 736px) {
    margin-bottom: 28px;
  }
`;

export const gridItem = css`
  ${block};
  ${width100};
  flex: 1 0 0%;
  position: relative;
  @media (min-width: 736px) {
    margin-right: 28px;
  }
  @media (max-width: 735px) {
    margin-right: 3px;
    margin-bottom: 3px;
  }

  .item-overlay {
    ${justifyCenter};
    ${pAbsolute};
    display: none;
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    h2 {
      ${flex};
      ${justifyCenter};
      ${itemsCenter};
      ${width100};
      text-align: center;
      color: ${white};
      font-weight: 600;
      height: 100%;
    }
  }
  :hover .item-overlay {
    ${flex};
  }
`;

export const itemWrapper = css`
  ${block};
  ${width100};
  background-color: ${grey};
`;

const pullLeft = css`
  ${pAbsolute};
  left: 0;
  top: 0;
`;

export const itemContainer = css`
  ${block};
  overflow: hidden;
  padding-bottom: 100%;
`;

export const itemClear = css`
  bottom: 0;
  right: 0;
  ${pullLeft};
`;

export const itemImage = css`
  ${width100};
  ${pullLeft};
  object-fit: cover;
  height: 100%;
  user-select: none;
`;
