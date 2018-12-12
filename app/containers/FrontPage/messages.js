/*
 * FrontPage Messages
 *
 * This contains all the text for the FrontPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.FrontPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FrontPage container!',
  },
});
