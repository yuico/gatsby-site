import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Blog`,
    siteUrl: ``,
    description: ``,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@api": "src/api",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@utils": "src/utils",
          "@hooks": "src/hooks",
          "@images": "src/images",
          "@types": "src/types",
          "@templates": "src/templates",
          "@posts": "content/posts",
        },
      },
    },
  ],
};

export default config;
