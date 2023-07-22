export default defineAppConfig({
  docus: {
    title: 'Dev Gathering',
    description: 'An Upper Middle Tennessee Software Development Community',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    footer: {
      credits: {
        icon: '',
        text: 'A Shadow Smith idea',
        href: 'https://shadowsmith.com'
      }
    },

    titleTemplate: '%s | Dev Gathering'
  }
})