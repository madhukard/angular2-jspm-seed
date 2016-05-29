var app = 'app';
var src = 'app/src';
var e2e = 'test/e2e';
var vendor = 'app/vendor';
var shared = '../ui-proto/shared';
var vendorSCSS = '../ui-proto/scss/materialize/materialize.scss';
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
      sharedAssets: shared + '/assets/**/*.*',
      assets: app + '/assets/**/*.*',
      js: app + '/**/*.js',
      vendorFiles: [],
      dest: development
    },
    production: {
      sharedAssets: shared + '/assets/**/*.*',
      assets: app + '/assets/**/*.*',
      vendorFiles: ['node_modules/angular2/bundles/angular2-polyfills.min.js'],
      dest: production
    }
  },
  watch: {
    html: [app + '/**/*.html', shared + '/**/*.html'],
    scripts: [app + '/src/**/*.ts', shared + '/src/**/*.ts'],
    sass: [src + '/**/*.scss', shared + '/src/**/*.scss'],
    assets: [app + '/assets/**/*.*', shared + '/assets/**/*.*']
  },
  app: app,
  production: production,
  shared: shared,
  typescript: {
    development: {
      scripts: [app + '/src/**/*.ts', shared + '/src/**/*.ts'],
      dest: development + '/src',
      coverage: build + '/coverage/src'
    },
    production: {
      scripts: [app + '/src/**/*.ts', shared + '/src/**/*.ts'],
      dest: production + '/src'
    },
    e2e: {
      scripts: e2e + '/**/*.ts',
      dest: build + '/e2e'
    }
  },

  html: {
    development: {
      source: [app + '/**/*.html', shared + '/**/*.html'],
      dest: development,
      coverage: build + '/coverage/js'
    },
    production: {
      source: [app + '/**/*.html', shared + '/**/*.html'],
      dest: production
    }
  },

  sass: {
    development: {
      vendorSCSS: vendorSCSS,
      vendorSCSSDest: development + '/assets',
      source: [src + '/**/*.scss', shared + '/src/**/*.scss'],
      dest: development + '/src'
    },
    production: {
      vendorSCSS: vendorSCSS,
      vendorSCSSDest: production + '/assets',
      source: [src + '/**/*.scss', shared + '/src/**/*.scss'],
      dest: production + '/src'
    }
  },

  scripts: {
    production: {
      source: production + '/src/boot.js' ,
      loginSource: production + '/src/login/loginboot.js' ,
      dest: production
    }
  }

};
