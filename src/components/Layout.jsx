import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Layout({ title, children, id }) {
  return (
    <section css={layoutStyle} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );  
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

const layoutStyle = css`
  width: 100%;
  padding-top: var(--header-height);
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin: 24px 0;
  }
`;