/** @jsx jsx */
import { jsx } from '@emotion/core';
import { footerStyle, contentStyle } from './styles';

const Footer = () =>
  <footer css={footerStyle}>
    <div css={contentStyle}>
      <span>
        Copyright &copy; {new Date().getFullYear()} Ingame.id
      </span>
    </div>
  </footer>;

export default Footer;
