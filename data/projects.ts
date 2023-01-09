import { socials } from "~/constants";
import type { Project } from "~/types";

export const projects: Project[] = [
  {
    name: "fuel.build",
    description:
      "Explore and join the world's fastest modular execution layer ecosystem",
    href: "/",
    logoURL: "/logos/sparky.svg",
    coverURL: "/covers/sparky.png",
    domains: ["DeFi", "NFT", "Marketplace"],
    socials: [
      {
        type: "twitter",
        link: socials.yami.twitter,
      },
      {
        type: "github",
        link: socials.yami.github,
      },
      {
        type: "website",
        link: "https://fuel.build",
      },
    ],
  },
];
