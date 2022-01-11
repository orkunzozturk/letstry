module.exports = {
  siteMetadata: {
    htmlLang: 'en',
    contentLang: 'en-us',
    title: 'NexPCB Community Knowledge Base',
    titleTemplate: '%s · NexPCB Community Knowledge Base',
    description: '(Almost) Everything you need to launch Hardware Products',
    siteUrl: 'https://knowledgebase.nexpcb.com',
    siteName: 'NexPCB Community Knowledge Base',
    logoUrl: '/images/logo.svg',
    logoLabel: 'Knowledge Base',
    searchText: 'Search',
    faviconUrl: '/images/favicon.png',
    socialSharingImageUrl: '/images/social-sharing-preview.png',
    twitter: '@nexpcb',
    facebookUrl: 'https://www.facebook.com/nexpcb',
    ctaButtonText: 'Contact Support',
    ctaButtonUrl: 'https://www.nexpcb.com/contact-us',
    linkText: 'See Our Capabilities',
    linkUrl: 'https://www.nexpcb.com/capabilities',
    headline: '(Almost) Everything you need to launch Hardware Products',
    footerText: 'Back to main website',
    footerUrl: 'https://nexpcb.com',
    googleTagManagerId: '',
    googleAnalyticsMeasurementId: 'UA-34430862-1',
    },
    plugins: [
      'gatsby-plugin-typescript',
      {
        resolve: 'gatsby-plugin-mdx',
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: { path: 'src/data' }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: { path: 'src/pages' }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: { path: 'src/images' }
      },
      {
        resolve: 'gatsby-transformer-yaml',
        options: { typeName: 'Category', path: 'src/data/categeories' }
      },
      {
        resolve: 'gatsby-plugin-material-ui',
        options: {
          stylesProvider: { injectFirst: true }
        }
      },
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      {
        resolve: "gatsby-plugin-hubspot",
        options: {
          trackingCode: "3027780",
          respectDNT: false,
          productionOnly: true,
        },
      },
    ]
  };
