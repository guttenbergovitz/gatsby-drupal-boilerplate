module.exports = {
  siteMetadata: {
    title: "Gatsby Drupal Boilerplate",
    slogan: "Gatsby Starter for Drupal Sourcing",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://boilerplate-drupal.loc/`,
        apiBase: `jsonapi`,
        basicAuth: {
          username: `admin`,
          password: `admin`,
        },
      },
    },
  ],
}
