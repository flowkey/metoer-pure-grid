Package.describe({
  name: 'flowkey:pure-grid',
  version: '0.6.0',
  // Brief, one-line summary of the package.
  summary: 'Just a pure Grid - nothing more, nothing less',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/metoer-pure-grid.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('pure-grid.css', 'client');
});
