import type { iconPaths } from "~/components/IconPaths";

/** Icon links to social media */
export const iconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/KyleDevLife",
    icon: "twitter-logo",
  },
  { label: "GitHub", href: "https://github.com/KyTiXo", icon: "github-logo" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kolmstead/",
    icon: "linkedin-logo",
  },
];
