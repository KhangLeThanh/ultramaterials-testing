/*
 * ParticipantPage Messages
 *
 * This contains all the text for the ParticipantPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ParticipantPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ParticipantPage container!',
  },
  quotes: [
    {
      text: `"Ultrahack gave us a lot of confidence and the experience how it feels <a>link</a> to exceed your own expectations. But the best part was the sense of community and shared accomplishments. People had come to create their own projects and pursue their goals together. That’s what it was all about – a community."`,
      source: `- Matias Koskinen, CTO at Rehaboo, Ultrahack Health Track Winner 2015 & Ultrahack Health Track Prize 2016`,
    },
    {
      text: `"The feedback and counseling we received at Ultrahack from judges and mentors from early on was invaluable to us. Seeing others to work hard and code intensively made a difference and we wanted to perfect our pitch throughout the night."`,
      source: `- Natalia Rincón, CEO at Chaosarchitects, Ultrahack Smart City / Civic Tech Track Winner 2015`,
    },
    {
      text: `"Ultrahack was great, dynamic, intensive, and very exciting. I even met a new team member in Ultrahack matchmaking. Aleksei became a part of our hackathon team and has continued to work with Better Day ever since. Overall it was super inspiring and fun experience and we would like to join next time as well."`,
      source: `- Yina Ye, CEO and Founder at Better Day, Ultrahack Health Track Winner 2016`,
    },
    {
      text: `"The atmosphere at Ultrahack was fantastic. I found the discussions with different experts especially valuable. You will definitely meet people you wouldn't meet anywhere else."`,
      source: `- Simo Kekäläinen, Team CoSeGa Member and Ultrahack Medical Track Finalist 2016`,
    },
  ],
  cards: [
    {
      header: `Fast track to success`,
      text: `If you want to make it big, our startup coaches, world-class mentors combined with funding opportunities help you to get there. Our accelerator partners offer investments to promising Ultrahack teams. Are you one of them?`,
    },
    {
      header: `Win valuable prizes`,
      text: `It’s not all about money, but it doesn’t hurt to have some. So far, Ultrahack teams have earned + 200,000 euros as prize money. And we aim to keep up the good work!`,
    },
    {
      header: `Get found`,
      text: `Ultrahack is buzzing with action. You never know who’ll you meet. Your potential customer, employee or co-founder might be sitting just behind the corner!`,
    },
    {
      header: `Step into limelight`,
      text: `Pitch your project to investors and industry partners and receive feedback from experienced mentors and fellow hackers. And the Media will write about you!`,
    },
    {
      header: `Perfect your skills`,
      text: `Whether it’s your coding skills or you strive to sharpen your business instinct Ultrahack helps to take your skills to a new level. Join our pre-events and workshops to get ahead in the competition.`,
    },
    {
      header: `Take up challenges that really matter`,
      text: `We create challenges in collaboration with leading industries and organizations. Your solution could help to pave way for better future.`,
    },
    {
      header: `Get your hands on the latest tech and APIs`,
      text: `Ultrahack partners open up their technology reserves and APIs for your use. As a tech savvy developer, this is something you really can not miss!`,
    },
    {
      header: `Go global`,
      text: `Ultrahack community stretches beyond one region and location. Consider online participation or applying for our travel grants.`,
    },
    {
      header: `Retain your IPR rights`,
      text: `Your IPR rights will always belong to you and you are free to discuss about commercializing those to our challenges partners if they are worth it!`,
    },
    {
      header: `Earn study credits`,
      text: `Several universities offer ECTS credits for your participation in Ultrahack! Progress in your studies and earn credits by following the instructions given by your university or contact your teacher for additional info.`,
    },
  ],
});
