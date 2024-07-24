import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSection__structures5 from '../components/__structures/AboutSection__structures5';
import AboutSection__structures13 from '../components/__structures/AboutSection__structures13';
import AboutSection__structures12 from '../components/__structures/AboutSection__structures12';
import AboutSection__structures2 from '../components/__structures/AboutSection__structures2';
import AboutSectionNavigations11 from '../components/navigations/AboutSectionNavigations11';
import AboutSection__structures10 from '../components/__structures/AboutSection__structures10';
import AboutSection__structures7 from '../components/__structures/AboutSection__structures7';
import AboutSection__structures8 from '../components/__structures/AboutSection__structures8';

const meta = {
  title: 'About\u0020Us',
  meta: [
    { property: 'og\u003Aimage', content: 'meta\u002Dtags.png' },
    {
      name: 'description',
      content:
        'At\u0020Arshcon,\u0020we\u0020take\u0020pride\u0020in\u0020curating\u0020a\u0020carefully\u0020selected\u0020collection\u0020of\u0020products\u0020that\u0020combine\u0020functionality,\u0020design,\u0020and\u0020durability.\u0020Our\u0020aim\u0020is\u0020to\u0020provide\u0020our\u0020customers\u0020with\u0020the\u0020best\u0020architectural\u0020solutions\u0020for\u0020their\u0020projects,\u0020whether\u0020it\u0020be\u0020for\u0020a\u0020residential,\u0020commercial,\u0020or\u0020industrial\u0020space.Our\u0020product\u0020range\u0020includes\u0020everything\u0020from\u0020lighting\u0020fixtures,\u0020furniture,\u0020flooring,\u0020wallpaper,\u0020and\u0020more.\u0020Each\u0020product\u0020is\u0020chosen\u0020based\u0020on\u0020its\u0020superior\u0020quality,\u0020unique\u0020design,\u0020and\u0020ability\u0020to\u0020enhance\u0020any\u0020space.',
    },
  ],
  link: [],
  style: [],
  script: [
    { src: 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js' },
    {
      type: 'text/javascript',
      innerHTML:
        'var\u0020Tawk_API\u003DTawk_API\u007C\u007C\u007B\u007D,\u0020Tawk_LoadStart\u003Dnew\u0020Date\u0028\u0029\u003B\n\u0028function\u0028\u0029\u007B\nvar\u0020s1\u003Ddocument.createElement\u0028\u0022script\u0022\u0029,s0\u003Ddocument.getElementsByTagName\u0028\u0022script\u0022\u0029\u005B0\u005D\u003B\ns1.async\u003Dtrue\u003B\ns1.src\u003D\u0027https\u003A//embed.tawk.to/6699434532dca6db2cb1c31f/1i33atikl\u0027\u003B\ns1.charset\u003D\u0027UTF\u002D8\u0027\u003B\ns1.setAttribute\u0028\u0027crossorigin\u0027,\u0027\u002A\u0027\u0029\u003B\ns0.parentNode.insertBefore\u0028s1,s0\u0029\u003B\n\u007D\u0029\u0028\u0029\u003B',
    },
  ],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSection__structures5 />
      <AboutSection__structures13 />
      <AboutSection__structures12 />
      <AboutSection__structures2 />
      <AboutSectionNavigations11 />
      <AboutSection__structures10 />
      <AboutSection__structures7 />
      <AboutSection__structures8 />
    </React.Fragment>
  );
}

