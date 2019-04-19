import React from 'react';
import { string } from 'prop-types';
import ReactGA from 'react-ga';

const Contact = ({ productName }) => {
  const text = `Saya mau pesan ${productName}`;
  const whatsAppLink = productName
    ? `https://wa.me/6281703807256?text=${encodeURIComponent(text)}`
    : 'https://wa.me/6281703807256';
  const handleClickWA = () => {
    ReactGA.event({
      category: 'contact',
      action: 'click whatsapp contact',
      label: productName,
    });
  };
  const handleClickLine = () => {
    ReactGA.event({
      category: 'contact',
      action: 'click line contact',
      label: productName,
    });
  };
  const handleClickIG = () => {
    ReactGA.event({
      category: 'contact',
      action: 'click instagram contact',
      label: productName,
    });
  };

  return (
    <span role="img" aria-label="contact">
      Order sekarang juga..! . .<br />
      📲 WA :{' '}
      <a href={whatsAppLink} rel="nofollow" onClick={handleClickWA}>
        081703807256
      </a>
      <br />
      📲 Line :{' '}
      <a href="http://line.me/ti/p/~@solfagaming" rel="nofollow" onClick={handleClickLine}>
        @solfagaming
      </a>{' '}
      pakai @
      <br />
      📸 Instagram :{' '}
      <a href="https://www.instagram.com/id.ingame/" rel="nofollow" onClick={handleClickIG}>
        @id.ingame
      </a>
      <br />
    </span>
  );
};

Contact.propTypes = {
  productName: string,
};

Contact.defaultProps = {
  productName: '',
};

export default Contact;
