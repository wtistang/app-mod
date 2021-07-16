module.exports = {
  siteMetadata: {
    title: 'DemoHub - App Mod Workshop',
    description: 'DemoHub - App Mod Workshop',
    keywords: 'ibm,cp4i,carbon',
  },
  plugins: ['gatsby-theme-carbon',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://wtistang.github.io/app-mod',
          subDirectory: '/',
        },
      },
    }
  ],
  pathPrefix: "/app-mod/",
};
