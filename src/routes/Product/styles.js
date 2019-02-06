import { css } from '@emotion/core';
import { flexGrow, justifyCenter, whiteBg } from '../../styles/misc';

export const mainContent = css`
  ${flexGrow};
  margin: 0 auto 16px;
  max-width: 935px;
  width: 100%;
  @media (min-width: 736px) {
    box-sizing: content-box;
    ${justifyCenter};
    padding: 40px 20px;
    width: calc(100% - 40px);
  }
`;

export const ltEKP = css`
  @media (min-width: 736px) {
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
`;

export const articleStyle = css`
  @media (min-width: 736px) {
    ${whiteBg};
    border: 1px solid #e6e6e6;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  width: 100%;
  padding: 0;
`;

export const headerStyle = css`
  @media (min-width: 736px) {
    border-bottom: 1px solid #efefef;
    padding: 20px 0;
    max-height: 78px;
    margin-right: 0;
    position: absolute;
    right: 24px;
    top: 0;
    width: 287px;
  }
  border-bottom-width: 0.5px;
  padding: 16px;
  padding-right: 40px;
  align-items: center;

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
    background-color: #fafafa;
  }
`;

export const imageContainer = css`
  background-color: #efefef;
  display: block;
  width: 100%;
`;

export const imageOverflow = css`
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
`;

export const imageStyle = css`
  object-fit: cover;
  height: 100%;
  user-select: none;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
`;

export const contentWrap = css`
  @media (min-width: 736px) {
    bottom: 0;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    position: absolute;
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
