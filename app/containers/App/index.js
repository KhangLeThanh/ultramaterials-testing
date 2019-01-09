/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import Footer from 'components/Footer';
import Content from 'components/Content';

export default function App() {
  return (
    <div>
      <Content />
      <Footer />
    </div>
  );
}
