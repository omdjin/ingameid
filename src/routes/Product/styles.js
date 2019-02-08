import { css } from '@emotion/core';
import { block, flexGrow, itemsCenter, justifyCenter, pAbsolute, whiteBg, width100 } from '../../styles/misc';
import { grey, whiteSecondary } from '../../styles/colors';

export const mainContent = css`
  ${flexGrow};
  ${width100};
  margin: 0 auto 16px;
  max-width: 935px;
  @media (min-width: 736px) {
    box-sizing: content-box;
    ${justifyCenter};
    padding: 40px 20px;
    width: calc(100% - 40px);
  }
`;

export const ltEKP = css`
  @media (min-width: 736px) {
    ${itemsCenter};
    ${width100};
    margin: 0 auto;
  }
`;

export const articleStyle = css`
  @media (min-width: 736px) {
    ${whiteBg};
    border: 1px solid #e6e6e6;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  ${width100};
  padding: 0;
`;

export const headerStyle = css`
  @media (min-width: 736px) {
    ${pAbsolute};
    border-bottom: 1px solid ${grey};
    padding: 20px 0;
    max-height: 78px;
    margin-right: 0;
    right: 24px;
    top: 0;
    width: 287px;
  }
  ${itemsCenter};
  border-bottom-width: 0.5px;
  padding: 16px;
  padding-right: 40px;

  h1 {
    font-size: 16px;
    margin: 0;
  }
`;

export const imageHolder = css`
  @media (min-width: 736px) {
    ${justifyCenter};
    margin-right: 335px;
    min-height: 450px;
    background-color: ${whiteSecondary};
  }
`;

export const imageContainer = css`
  ${block};
  ${width100};
  background-color: ${grey};
`;

export const imageOverflow = css`
  ${block};
  overflow: hidden;
  padding-bottom: 100%;
`;

export const imageStyle = css`
  ${pAbsolute};
  ${width100};
  object-fit: cover;
  height: 100%;
  user-select: none;
  left: 0;
  top: 0;
`;

export const contentWrap = css`
  @media (min-width: 736px) {
    ${pAbsolute};
    bottom: 0;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    right: 0;
    top: 78px;
    width: 335px;
    padding: 0 16px 16px;
    word-wrap: break-word;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #999;
      border-radius: 4px;
    }
  }
  padding: 0 16px;
  h3 {
    margin-bottom: 0;
  }
  ul {
    padding-left: 22px;
  }
`;
