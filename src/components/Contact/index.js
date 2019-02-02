import React from 'react';
import { string } from 'prop-types';

const Contact = ({ productName }) => {
  const text = `Saya mau pesan ${productName}`;
  const whatsAppLink = productName
    ? `https://wa.me/6281703807256?text=${encodeURIComponent(text)}`
    : 'https://wa.me/6281703807256';

  return (
    <span role="img" aria-label="contact">
      Order sekarang juga..! . .<br />
      📲 WA :{' '}
      <a href={whatsAppLink} rel="nofollow">
        081703807256
      </a>
      <br />
      📲 Line :{' '}
      <a href="http://line.me/ti/p/~@solfagaming" rel="nofollow">
        @solfagaming
      </a>{' '}
      pakai @
      <br />
      📸 Instagram : <a href="https://www.instagram.com/id.ingame/">@id.ingame</a>
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
