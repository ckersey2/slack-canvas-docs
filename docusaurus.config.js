// module.exports = {
  title: "Slack Canvas Docs",
  tagline: "Sync Markdown and images into Slack Canvases",
  url: "https://ckersey2.github.io",
  baseUrl: "/slack-canvas-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ckersey2",
  projectName: "slack-canvas-docs",
  deploymentBranch: "gh-pages",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};

