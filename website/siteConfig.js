/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const users = [];

const siteConfig = {
  title: 'CCXT-REST', // Title for your website.
  tagline: 'Unified Crypto API',
  url: 'https://ccxt-rest.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'ccxt-rest',
  organizationName: 'ccxt-rest',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: '/', label: 'Home'},
    {doc: 'quickstart', label: 'Quick Start'},
    {href: '/api.html', label: 'API'},
    {doc: 'exchange_api_status', label: 'Exchange API Status'},
    {doc: 'community', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  users,

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#475b63',
    secondaryColor: '#0000FF',
  },

  copyright: `Copyright © ${new Date().getFullYear()} CCXT-REST`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js', "/js/exchange-summary-dashboard.js"],

  cleanUrl: true,

  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  enableUpdateTime: true,

  repoUrl: 'https://github.com/franz-see/ccxt-rest-website',
  mainProjectRepoUrl: 'https://github.com/franz-see/ccxt-rest',

  numberOfExchanges : 135,
  numberOfMarkets: '28k+',

  gaTrackingId: process.env.GA_TRACKING_ID
};

module.exports = siteConfig;
