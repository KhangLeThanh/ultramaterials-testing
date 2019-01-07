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
  textContent: {
    whatIsUltrahack: [
      `Ultrahack combines hackathons, an innovation platform and accelerator in a 
      unique manner.Our mission is to build a community where the best talent and 
      leading industry partners could meet and collaborate in building future 
      innovations by leveraging latest technologies, tools and API's. \r\n`,
      `We have collaborated with leading industries, public organizations, and NGOs. Thank you for your support and engagement. Without you, there wouldn't be us.`,
    ],
  },
});
