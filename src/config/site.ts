import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Expanse",
  description:
    "Expanse is a professional-grade, open-source orchestration platform that transforms Docker Compose management into a fluid visual experience.",
  url: "https://expanse.sh", // Placeholder URL
  lang: "en",
  locale: "en_US",
  author: "lordpietre",
  twitter: "@lordpietre",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/lordpietre",
    github: "https://github.com/lordpietre/expanse",
    discord: "https://discord.gg/TpnwRyrJ",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Features", href: "/#features" },
    { text: "Tech Stack", href: "/#tech-stack" },
    { text: "Documentation", href: "/docs" },
    { text: "GitHub", href: "https://github.com/lordpietre/expanse" },
  ],
};
