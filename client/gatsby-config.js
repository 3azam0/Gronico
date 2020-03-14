module.exports = {
  siteMetadata: {
    title: `Gronic`,
    description: `leading the way in sustainable agriculture with integrated pest management solutions for a greener planet`,
    author: `@ahmedaabouzied`,
    siteUrl: `https://www.gronic.co`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'gronic-deploy'
      },
  },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/gronic-sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.gronic.co',
        sitemap: 'https://www.gronic.co/gronic-sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gronic-Agricultrual-Firm-Website`,
        short_name: `gronic`,
        start_url: `/en`,
        background_color: `#348963`,
        theme_color: `#348963`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        pagesPaths: [
          '/index/',
          '/about/',
          '/solutions/',
          '/contact/',
          '/attractants/',
          '/solutions/lures',
        ],
        langKeyDefault: 'en',
        useLangKeyLayout: true,
      },
    },
  ],
};
