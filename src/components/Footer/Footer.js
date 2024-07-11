import React from 'react';
import './Footer.css';

function Footer() {
  return React.createElement(
    'div',
    { className: 'footer' },
    React.createElement('div', { className: 'footer-line' }),

    // Social Media Icons
    React.createElement(
      'div',
      { className: 'social-media-icons' },
      React.createElement(
        'a',
        { href: 'https://www.facebook.com/NetflixSouthAfrica', target: '_blank', rel: 'noopener noreferrer', className: 'icon' },
        React.createElement('i', { className: 'fab fa-facebook-f' })
      ),
      React.createElement(
        'a',
        { href: 'https://www.instagram.com/netflixuk', target: '_blank', rel: 'noopener noreferrer', className: 'icon' },
        React.createElement('i', { className: 'fab fa-instagram' })
      ),
      React.createElement(
        'a',
        { href: 'https://x.com/netflixuk?lang=en', target: '_blank', rel: 'noopener noreferrer', className: 'icon' },
        React.createElement('i', { className: 'fab fa-twitter' })
      ),
      React.createElement(
        'a',
        { href: 'https://www.youtube.com/@Netflix', target: '_blank', rel: 'noopener noreferrer', className: 'icon' },
        React.createElement('i', { className: 'fab fa-youtube' })
      )
    ),

    // Footer Lists
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'p-0 col-lg-3 col-md-6' },
        React.createElement(
          'div',
          { className: 'footer-ul' },
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, 'Audio Description'),
            React.createElement('li', null, 'Investor Relations'),
            React.createElement('li', null, 'Privacy'),
            React.createElement('li', null, 'Contact Us')
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'p-0 col-lg-3 col-md-6' },
        React.createElement(
          'div',
          { className: 'footer-ul' },
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, 'Help Centre'),
            React.createElement('li', null, 'Jobs'),
            React.createElement('li', null, 'Legal Notices'),
            React.createElement('li', null, 'Ad Choices')
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'p-0 col-lg-3 col-md-6' },
        React.createElement(
          'div',
          { className: 'footer-ul' },
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, 'Gift Cards'),
            React.createElement('li', null, 'Netflix Shop'),
            React.createElement('li', null, 'Cookie Preferences')
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'p-0 col-lg-3 col-md-6' },
        React.createElement(
          'div',
          { className: 'footer-ul' },
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, 'Media Center'),
            React.createElement('li', null, 'Terms of Use'),
            React.createElement('li', null, 'Corporate Information')
          )
        )
      )
    ),

    // Service Code Button and Copyright Notice
    React.createElement(
      'div',
      { className: 'footer-buttons' },
      React.createElement('button', { className: 'service-code-button' }, 'Service Code'),
      React.createElement(
        'div',
        { className: 'copyright' },
        React.createElement('span', null, '\u00A9'),
        ' 1997-2024 Mike, Inc'
      )
    )
  );
}

export default Footer;
