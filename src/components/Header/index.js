import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { headerClass, headerWrapper } from './styles';

const Header = () => {
  const handleClickHome = () => {
    ReactGA.event({
      category: 'header',
      action: 'click home header',
      label: 'Ingame.id',
    });
  };

  return (
    <header css={headerClass}>
      <div css={headerWrapper}>
        <div className="header_logo-container">
          <Link to="/" onClick={handleClickHome}>
            <div className="header_logo">
              <span className="header_brand-logo" aria-label="Ingame.id" />
              <div className="header_sparator" />
              <span className="header_brand-label" aria-label="Ingame.id">
                INGAME : Voucher &amp; Topup Game
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
