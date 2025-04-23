// docusaurus.config.js

module.exports = {
  title: "Slack Canvas Docs",
  tagline: "Sync Markdown and images into Slack Canvases",
  url: "https://ckersey2.github.io",
  baseUrl: "/slack-canvas-docs/",
  trailingSlash: false, // ✅ Optional SEO warning fix

  organizationName: "ckersey2",
  projectName: "slack-canvas-docs",
  deploymentBranch: "gh-pages",
  favicon: "img/favicon.ico",

  // ✅ Put this here, not inside the presets!
  customFields: {
    githubUser: "ckersey2",
  },

  presets: [
  [
    "@docusaurus/preset-classic",
    {
      docs: {
        routeBasePath: "/", // ← makes docs homepage
        sidebarPath: require.resolve("./sidebars.js"),
      },
      theme: {
        customCss: require.resolve("./src/css/custom.css"),
      },
    },
  ],
],
};
