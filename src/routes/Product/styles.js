import { css } from '@emotion/core';
import { flexGrow } from '../../styles/misc';

export const mainContent = css`
  ${flexGrow};
  margin: 0 auto 16px;
  max-width: 935px;
  width: 100%;
  @media (min-width: 736px) {
    box-sizing: content-box;
    justify-content: center;
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
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  width: 100%;
  padding: 0;
`;

export const headerStyle = css`
  border-bottom: 1px solid #efefef;
  max-height: 78px;
  margin-right: 0;
  padding: 20px 0;
  position: absolute;
  right: 24px;
  top: 0;
  width: 287px;
  h1 {
    font-size: 16px;
    margin: 0;
  }
`;

export const imageHolder = css`
  justify-content: center;
  margin-right: 335px;
  min-height: 450px;
  background-color: #fafafa;
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
      background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #999;
      border-radius: 4px;
  }
`;