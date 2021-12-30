import theme from '@nuxt/content-theme-docs'

export default theme({
i18n: {
    locales: () => [{
      code: 'pl',
      iso: 'pl-PL',
      file: 'pl-PL.js',
      name: 'Polski'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'pl'
  },
  docs: {
    primaryColor: '#E24F55'
  },
  target: 'static',
  // head: {
  //   link: [
  //     {rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico'}
  //   ],
  // },
})
