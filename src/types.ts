export const domains = [
  "All",
  "Bridge",
  "DAO",
  "DeFi",
  "GameFi",
  "Identity",
  "Marketplace",
  "Oracle",
  "Education",
  "NFT",
  "Tooling",
  "Wallet",
] as const;

export type Domain = (typeof domains)[number];

export type Social = {
  link: string;
  type: "discord" | "github" | "medium" | "telegram" | "twitter" | "website";
};

export type Project = {
  name: string;
  description: string;
  href: string;
  logoURL: `/logos/${string}`;
  coverURL?: `/covers/${string}`;
  domains: NonEmptyArray<Domain>;
  socials: NonEmptyArray<Social>;
};

type NonEmptyArray<T> = [T, ...T[]];
