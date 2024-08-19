import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.utkarshmalik.dev/", // replace this with your deployed domain
  author: "Utkarsh Malik",
  profile: "https://utkarshmalik.dev/",
  desc: "Utkarsh's Blog",
  title: "UM",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/utkarshmalik211",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/utkarshmalik211",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/utkarshmalik211",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:site@utkarshmalik.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
