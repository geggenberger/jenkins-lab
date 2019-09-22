/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    // image: '/img/docusaurus.svg',
    infoLink: 'https://www.puzzle.ch',
    pinned: true,
  },
];

const siteConfig = {
  algolia: {
    apiKey: 'faf7e73726dd47878df0ee8e1e0e5fbe',
    indexName: 'jenkins-lab',
  },
  
  title: 'jenkins-lab' /* title for your website */,
  tagline: 'Tutorial Website for Jenkins,Docker and Docusaurus',
  url: 'https://geggenberger.github.io/' /* your website url */,
  baseUrl: '/jenkins-lab/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://your-name.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "jenkins-lab",
  organizationName: "gerald eggenberger",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  //  headerLinks: [],
  headerLinks: [
    //{doc: 'overview', label: 'Docs'},
    //{page: 'help', label: 'Help'},
    {languages: true},
    { href: 'https://geggenberger.github.io/jenkins-lab/', label: 'Github', external: true}, 
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  // headerIcon: 'img/docusaurus.svg',
  headerIcon: '/img/puzzle-small.svg',
  footerIcon: '/img/puzzle-small.svg',
  favicon: '/img/puzzle-small.svg',

  /* colors for website */
  colors: {
    primaryColor: '#4287f5',
    secondaryColor: '#0456d9',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Avenir",
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() +'gerald eggenberger',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.js',
    '/jenkins-lab/js/code-block-buttons.js',
  ],
  stylesheets: ['/css/code-block-buttons.css'],
  usePrism: ['jsx'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: '',
  twitterImage: '',

  repoUrl: 'https://github.com/geggenberger/jenkins-lab', // Enter the link of your repo url.
};

module.exports = siteConfig;
