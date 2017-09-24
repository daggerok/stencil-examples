exports.config = {
  bundles: [
    {
      components: [
        'daggerok-app',
        'daggerok-header',
        'daggerok-body',
        'daggerok-footer',
      ],
    },
    { components: [ 'daggerok-header' ] },
    { components: [ 'daggerok-body' ] },
    { components: [ 'daggerok-footer' ] },
  ],
  collections: [
    { name: '@stencil/router' },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
