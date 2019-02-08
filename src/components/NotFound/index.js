/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { mainContent } from './styles';

const NotFound = () => {
  const handleToHome = () => {
    ReactGA.event({
      category: 'notFoundPage',
      action: 'click kembali ke beranda',
      label: 'Kembali Ke Beranda',
    });
  };

  return (
    <div css={mainContent}>
      <h2>Maaf, halaman ini tidak tersedia.</h2>
      <p>
        Tautan yang anda ikuti mungkin salah, atau halaman ini sudah dihapus. Silakan{' '}
        <Link to="/" onClick={handleToHome}>
          Kembali Ke Beranda
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
