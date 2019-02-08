import { css } from '@emotion/core';
import { flex, itemsCenter, justifyCenter, whiteBg, width100 } from '../../styles/misc';
import { blackPrimary, borderBlack } from '../../styles/colors';
import logoImg from './assets/logo.webp';

export const headerClass = css`
  ${flex};
  ${itemsCenter};
  ${justifyCenter};
  ${whiteBg};
  ${width100};
  order: 0;
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  margin: 0;
  padding: 0;
`;

export const headerWrapper = css`
  ${justifyCenter};
  ${itemsCenter};
  ${width100};
  height: 52px;
  padding: 0 20px;
  flex-direction: row;
  max-width: 1010px;

  .header_logo-container {
    flex: 1 9999 0%;
    min-width: 40px;

    .header_logo {
      flex: 0 0 auto;
      justify-content: flex-start;
      flex-direction: row;

      .header_brand-logo {
        background-image: url(${logoImg});
        background-repeat: no-repeat;
        background-size: cover;
        height: 24px;
        width: 24px;
        margin-top: 2px;
      }
      .header_sparator {
        height: 28px;
        margin: 0 4px;
        width: 1px;
        @media (min-width: 736px) {
          background-color: ${borderBlack};
          margin: 0 16px;
        }
      }

      .header_brand-label {
        margin-top: 3px;
        font-weight: 600;
        color: ${blackPrimary};
      }
    }
  }
`;
