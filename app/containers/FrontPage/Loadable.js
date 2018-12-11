/**
 *
 * Asynchronously loads the component for FrontPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
