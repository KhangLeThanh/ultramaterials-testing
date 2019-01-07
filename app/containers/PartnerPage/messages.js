/*
 * PartnerPage Messages
 *
 * This contains all the text for the PartnerPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PartnerPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the PartnerPage container!',
  },
  stats: {
    community: 6000,
    participants: 1800,
    challenges: 50,
    solutions: 200,
    partners: 100,
    mentors: 200,
    volunteers: 50,
    organizers: 20,
  },
});
