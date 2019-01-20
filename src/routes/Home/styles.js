import { css } from '@emotion/core';
import { flex, flexGrow } from '../../styles/misc';

export const mainContent = css`
  ${flexGrow};
  margin: 0 auto 30px;
  max-width: 935px;
  width: 100%;
  @media (min-width: 736px) {
    box-sizing: content-box;
    padding: 60px 20px 0;
    width: calc(100% - 40px);
  }
`;

export const tabHeader = css`
  border-top: 1px solid #efefef;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;

  a {
    border-top: 1px solid #262626;
    color: #14171a;
    ${flex};
    flex-direction: row;
    height: 52px;
    justify-content: center;
    text-transform: uppercase;
  }
`;

export const tabLabel = css`
  ${flex};
  align-items: center;
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
  flex: 1 0 0%;
  display: block;
  position: relative;
  width: 100%;
  @media (min-width: 736px) {
    margin-right: 28px;
  }

  .item-overlay {
    display: none;
    flex-direction: column;
    justify-content: center;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    h2 {
      align-items: center;
      color: #fff;
      justify-content: center;
      width: 100%;
      display: flex;
      font-weight: 600;
      height: 100%;
    }
  }
  :hover .item-overlay{
    display: flex;
  }
`;

export const itemWrapper = css`
  background-color: #efefef;
  display: block;
  width: 100%;
`;

const pullLeft = css`
  left: 0;
  position: absolute;
  top: 0;
`;

export const itemContainer = css`
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
`;

export const itemClear = css`
  bottom: 0;
  right: 0;
  ${pullLeft};
`;

export const itemImage = css`
  object-fit: cover;
  height: 100%;
  user-select: none;
  width: 100%;
  ${pullLeft};
`;
