SilverStripe Bootstrap boilerplate
==================================

_Note: this theme is still in alpha, so some things, e.g. gulp tasks, might not work as expected, but it's a nice scaffold to get started with_

## Requirements

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com)

## Installation

1. [Install SilverStripe](https://docs.silverstripe.org/en/3.4/getting_started/installation/)
2. Download/clone the theme and install under the themes folder.
3. Traverse to the theme and install npm modules `npm install` (this'll take a while)
4. Build the assets, run `npm run build` to build the css and scripts
5. Enable the theme under CMS settings or in the 
   [config.yml](https://docs.silverstripe.org/en/3.1/developer_guides/templates/themes/) file
6. Theme away!

## Getting started

### Workflow

We use [gulp.js](http://gulpjs.com/) to automate the frontend workflow.

The most common task you might run is `gulp watch`, which watches for both scss and js changes, then compile and minify 
them to the dist folders, i.e. `css` and `javascript/dist`.

#### Common tasks

- `gulp watch` - watches for css and js changes and compiles theme
- `gulp build` - builds css and js for production
- `gulp css` - compiles the css with [Sass](http://sass-lang.com/)
- `gulp js` - compiles ES2015 with [Babel](https://babeljs.io/), and minifies with [UglifyJS](https://github.com/mishoo/UglifyJS)
- `gulp browsersync` - use [Browsersync](https://www.browsersync.io/) to watch css and js changes, whilst synchronizing 
  on multiple devices. Very handy for responsive frontend development and cross-browser testing

### Styling

[ss-bootstrap-it](https://github.com/suhongyang/ss-bootstrap-it) scaffolds [Bootstrap 3 sass](https://github.com/twbs/bootstrap-sass) 
with the css architecture [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

Bootstrap's sass partials are categorized as per ITCSS and imported in the `main.scss` manifest.

#### Setting variables

Your first step to styling may be to set up the variables. This can be found under the `scss/settings/bootstrap` folder. 
For your convenience, I've separated Bootstrap's variables partial into smaller bite-sized partials.

#### Importing Bootstrap's components

By default I've only imported bare minimum Bootstrap components to help with keeping the CSS lean.

To add more components, uncomment them in `scss/objects/objects.bootstrap`.

#### Applying your own style

After editing the variables, custom styling should be included under `scss/components` as separate partials,
e.g. `_components.store-finder.scss`, `_components.chatbox.scss` etc.

### JavaScript

Custom scripts for the project should go into the 

The `gulp-babel` plugin is used to allow ES2015.
