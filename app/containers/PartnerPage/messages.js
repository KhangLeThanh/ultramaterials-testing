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
  stats: [
    { text: 'community members', amount: '6000' },
    { text: 'selected participants', amount: '1800' },
    { text: 'challenges', amount: '50' },
    { text: 'solutions', amount: '200' },
    { text: 'industry partners', amount: '100' },
    { text: 'mentors', amount: '200' },
    { text: 'volunteers', amount: '50' },
    { text: 'organizers', amount: '20' },
  ],
  contacts: [
    {
      fullName: 'Mikko Järvilehto',
      position: 'CEO, Co-founder',
      image: 'https://ultrahack.org/images/mikko-jarvilehto2.jpg',
      email: 'mikko.jarvilehto@ultrahack.org',
      phone: '+358 40 508 6265',
      description: 'General inquiries, developer & community support',
    },
    {
      fullName: 'Miikka Nevasalo',
      position: 'COO, Partner',
      image: 'https://ultrahack.org/images/miikka-nevasalo.png',
      email: 'miikka.nevasalo@ultrahack.org',
      phone: '+358 40 803 2162',
      description: 'Sales, partners, media',
    },
  ],
  tileData: [
    {
      img: 'https://ultrahack.org/images/logo-op-216x168.png',
      title: 'OP',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-rteco-216x168.png',
      title: 'RTECO',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-vtt2-216x168.png',
      title: 'VTT',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-tkoaly-216x168.png',
      title: 'TKO Äly',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-fmi-216x168.png',
      title: 'FMI',
      cols: 2,
    },
    {
      img: 'https://ultrahack.org/images/logo-helsinkithinkcompany-216x168.png',
      title: 'Helsinki Think Company',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-cams-216x168.png',
      title: 'Copernicus Atmosphere Monitoring Service',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-eumetsat-216x168.png',
      title: 'Eumetsat',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-receipthero-216x168.png',
      title: 'ReceiptHero',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-until-216x168.png',
      title: 'UNTIL',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-aaltouniversity-216x168.png',
      title: 'Aalto University',
      cols: 1,
    },
    {
      img: 'https://ultrahack.org/images/logo-ibm-216x168.png',
      title: 'CGI',
      cols: 1,
    },
  ],
  textContent: {
    whatIsUltrahack: [
      `Ultrahack combines hackathons, an innovation platform and accelerator in a 
      unique manner.Our mission is to build a community where the best talent and 
      leading industry partners could meet and collaborate in building future 
      innovations by leveraging latest technologies, tools and API's. \r\n`,
      `We have collaborated with leading industries, public organizations, and 
      NGOs. Thank you for your support and engagement. Without you, there wouldn't 
      be us.`,
    ],
    howUltrahackHelps: `Ultrahack community has the potential to solve world class 
    challenges. Bring in your technology and expertise and see what we are capable 
    of.`,
    testimonies: [
      {
        source: 'Arto Kulha, Leader, Nordea Startup Accelerator',
        testimony: `Ultrahack really delivered amazing results - we found two great 
        teams and invited those teams under our accelerator program. We really 
        enjoyed working with the Ultrahack team to bring those fresh and innovative 
        ideas to our company.`,
      },
      {
        source:
          'Kristian Luoma, Head of New Business Development, OP Financial Group',
        testimony: `Ultrahack was an amazing opportunity to bring out the best 
        talent around a challenge that was important to us. We gained a lot of 
        interesting new perspectives and made connections that lasted further than 
        the weekend! These are the sort of events that keep us grounded on what's 
        really going on. Well done!`,
      },
      {
        source:
          'Pekka Lahdenne, Project Development Manager, HUS Children’s Hospital',
        testimony: `Taking part in Ultrahack gave us a new perspective on how to 
        develop our processes and the experience has fostered more innovative 
        culture within our organisation. We would definitely recommend Ultrahack 
        for others: it is opposite to more traditional development methods and 
        definitely worth of seeing, experiencing and being part of.`,
      },
      {
        source: 'Teemu Ropponen, Executive Director, Open Knowledge Finland',
        testimony: `The hackathon succeeded in gathering well over 20 teams that 
        used open data – not only in the Smart City / Civic Tech track we hosted 
        with Helsinki, but also in many other tracks – thus building the community 
        who believes that digital openness creates better services and lots of new 
        business. Many of the 20+ teams in the Smart City / Civic Tech got wind 
        under their wings, and have secured new business and partnerships after 
        Ultrahack. Personally, it was the most fun and useful 48 hours of the year!`,
      },
      {
        source: 'Mikael Östman, Customer Innovation Principal (Nordics), SAP',
        testimony: `SAP Sports & Fan Experience challenge was about developing new 
        ways of engaging, identifying and motivating fans for a deeper relationship 
        with their favorite sport and or team. SAP Finland joined the first 
        Ultrahack with our open platform-as-a-service (PaaS) SAP Cloud Platform. 
        Ultrahack gave us perfect opportunity to set fun and exciting challenge to 
        developers to build applications. We were presented several service protos 
        and we could experiment that our platform was capable to meet agile business 
        requirements fast. Ultrahack was also good place to network with industry 
        partners.`,
      },
    ],
  },
});
