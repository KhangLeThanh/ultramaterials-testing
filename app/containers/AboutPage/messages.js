/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutPage container!',
  },
  aboutUs: [
    `Ultrahack combines hackathons, an innovation platform and accelerators in a 
    unique manner. Our mission is to build a community where the best talent and 
    leading industry partners could meet and collaborate towards future 
    innovations.`,
    `Ultrahack started in 2015 as a joint operation of Digital Forum Finland 
    Association (before Teleforum ry), Futuretournaments Oy and TKO-äly ry 
    (The Student Union of the Department of Computer Science in the University 
      of Helsinki.) Nowadays Ultrahack is operated by Futuretournaments Oy in 
      co-operation with TKO-äly ry and Digital Forum Finland.`,
  ],
});
