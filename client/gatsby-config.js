module.exports = {
  siteMetadata: {
    title: `Gronic`,
    description: `leading the way in sustainable agriculture with integrated pest management solutions for a greener planet`,
    author: `@ahmedaabouzied`,
  },
  plugins: [
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
        path: "./src/data/",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gronic-Agricultrual-Firm-Website`,
        short_name: `gronic`,
        start_url: `/en`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
          pagesPaths: ["/index/", "/about/", "/solutions/", "/contact/","/attractants/"],
        langKeyDefault: "en",
        useLangKeyLayout: true,
      },
    },
  ],
}
