var app = 'app';
var src = 'app/src';
var e2e = 'e2e';
var vendor = 'app/vendor';
var build = 'target';
var development = 'target/development';
var coverage = 'target/coverage';
var production = 'target/production';
var developmentAssets = 'target/development/assets';


module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: development
      },
      port: 3000,
      files: [
        development + '/**/*.js',
        developmentAssets + '/images/**'
      ]
    }
  },
  delete: {
    development: ['target/development/**/*', '!target/development/jspm/**'],
    production: production,
    coverage: coverage
  },
  copy: {
    development: {
      assets: app + '/assets/**/*.*',
      js: app + '/**/*.js',
      vendorFiles: ['node_modules/angular2/bundles/angular2-polyfills.min.js'],
      dest: development
    },
    production: {
      vendorFiles: ['node_modules/angular2/bundles/angular2-polyfills.min.js'],
      dest: production
    }
  },
  watch: {
    html: app + '/**/*.html',
    scripts: src + '/**/*.ts',
    sass: app + '/**/*.scss',
    assets: app + '/assets/**/*.*'
  },
  app: app,
  production: production,
  typescript: {
    development: {
      scripts: app + '/src/**/*.ts',
      dest: development + '/src',
      coverage: build + '/coverage/src'
    },
    production: {
      scripts: app + '/src/**/*.ts',
      dest: production + '/src'
    },
    e2e: {
      scripts: e2e + '/**/*.ts',
      dest: build + '/e2e'
    }
  },

  html: {
    development: {
      source: app + '/**/*.html',
      dest: development,
      coverage: build + '/coverage/js'
    },
    production: {
      source: app + '/**/*.html',
      dest: production
    }
  },

  sass: {
    development: {
      main: app + '/scss/app.scss',
      source: src + '/**/*.scss',
      dest: development + '/src'
    },
    production: {
      main: app + '/scss/app.scss',
      source: src + '/**/*.scss',
      dest: production + '/src'
    }
  },

  images: {
    production: {
      source: app + '/assets/**/*.*',
      dest: production + '/assets'
    }
  },

  scripts: {
    production: {
      source: production + '/src/boot.js' ,
      dest: production
    }
  }

};
