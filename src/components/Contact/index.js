/** @jsx jsx */
import { jsx } from '@emotion/core';
import { string } from 'prop-types';
import ReactGA from 'react-ga';
import { CONTACT_NUMBER, CONTACT_NUMBER_WA } from '../../constants';
import { contactWrapper } from './styles';

const Contact = ({ productName }) => {
  const text = `Saya mau pesan ${productName}`;
  const whatsAppLink = productName
    ? `https://wa.me/${CONTACT_NUMBER_WA}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${CONTACT_NUMBER_WA}`;
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
  const handleClickShopee = () => {
    ReactGA.event({
      category: 'contact',
      action: 'click shopee link',
      label: productName,
    });
  };

  return (
    <div css={contactWrapper}>
      Order sekarang juga..! . .<br />
      <p>
        <span role="img" aria-label="contact">
          📲 WA :{' '}
          <a
            href={whatsAppLink}
            rel="noopener noreferrer"
            onClick={handleClickWA}
            target="_blank"
          >
            {CONTACT_NUMBER}
          </a>
        </span>
      </p>
      <p>
        <span role="img" aria-label="contact">
          📲 Line :{' '}
          <a
            href="http://line.me/ti/p/~@solfagaming"
            rel="noopener noreferrer"
            onClick={handleClickLine}
            target="_blank"
          >
            @solfagaming
          </a>{' '}
          pakai @
        </span>
      </p>
      <p>
        <span role="img" aria-label="contact">
          📸 Instagram :{' '}
          <a
            href="https://www.instagram.com/id.ingame/"
            rel="noopener noreferrer"
            onClick={handleClickIG}
            target="_blank"
          >
            @id.ingame
          </a>
        </span>
      </p>
      <p>
        <span role="img" aria-label="contact">
          🛍️ Shopee :{' '}
          <a
            href="https://shopee.co.id/solfagaming?smtt=0.0.9"
            rel="noopener noreferrer"
            onClick={handleClickShopee}
            target="_blank"
          >
            SolfaGaming
          </a>
        </span>
      </p>
    </div>
  );
};

Contact.propTypes = {
  productName: string,
};

Contact.defaultProps = {
  productName: '',
};

export default Contact;
