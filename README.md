SilverStripe Bootstrap boilerplate
==================================

A SilverStripe boilerplate theme with [Bootstrap 3 sass](https://github.com/twbs/bootstrap-sass) and equipped with the
following practices:

- [gulp.js](http://gulpjs.com/) workflows for css, js and watch tasks
- [Browserify](http://browserify.org) for bundling frontend dependencies
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) architecture
- [Airbnb CSS styleguide](https://github.com/airbnb/css) 
- [Atomic CSS](http://acss.io) for generating predictable utility/helper classes
- IE8 HTML5 markup support with [HTML5 Shiv](https://github.com/aFarkas/html5shiv)
  and media query support with [Respond.js](https://github.com/scottjehl/Respond)

## Requirements

- [Node](https://nodejs.org/en/) (`^6.0.0` is needed to run `gulp-svg-sprite`) 
- [NPM](https://www.npmjs.com)
- [scss-lint](https://github.com/causes/scss-lint)

## Installation

1. [Install SilverStripe](https://docs.silverstripe.org/en/3.4/getting_started/installation/)
2. Download/clone this repo and install under the themes folder.
3. Traverse to the theme and install npm modules `npm install` 
   (or use `yarn install` for faster install with [Yarn](https://yarnpkg.com/))
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

##### Build

Run `gulp build` for deployment, which builds all the assets (i.e. css, scripts, and sprites)

##### Styling

Run `gulp css:watch`, compiles css on `scss` changes.
  
Run `gulp sprite` to generate the sprites css and svg with png fallback.

`gulp css:build` builds all styling assets, i.e. generate the sprites first and then compile the css.

`gulp browsersync` uses [Browsersync](https://www.browsersync.io/) to watch css and js changes, whilst synchronizing 
on multiple devices. Very handy for responsive frontend development and cross-browser testing

##### Javascript

`gulp js` bundles your scripts, and checks code quality with linting. `gulp js:build` bundles and minifies the scripts.

`gulp watch` re-bundles your scripts on javascript changes with `watchify`.

See `gulptask.babel.js` for all tasks.

## Styling

[ss-bootstrap-it](https://github.com/suhongyang/ss-bootstrap-it) scaffolds Bootstrap Sass 
with the css architecture ITCSS.

Bootstrap's sass partials are categorized as per ITCSS and imported in the `main.scss` manifest.

### Setting variables

Your first step to styling may be to set up the variables. This can be found under the `scss/settings/bootstrap` folder. 
For your convenience, I've separated Bootstrap's variables partial into smaller bite-sized partials.

### Importing Bootstrap's components

By default I've only imported bare minimum Bootstrap components to help with keeping the CSS lean.

To add more components, uncomment them in `scss/objects/objects.bootstrap`.

### Applying your own style

After editing the variables, custom styling should be included under `scss/components` as separate partials,
e.g. `_components.store-finder.scss`, `_components.chatbox.scss` etc.

### SCSS lint

This theme uses Airbnb's css style guide. Airbnb's scss lint settings are used to help with maintaining this
convention. 

We use [gulp-scss-lint](https://www.npmjs.com/package/gulp-scss-lint) to lint the scss. 
This plugin requires Ruby and [scss-lint](https://github.com/causes/scss-lint).

```
gem install scss_lint
```

### Sprite

We use `gulp-svg-sprites` to generate svg sprites with png fallback.

To add icons to the sprite, simply put the svg icons in the `icons` folder and run `gulp sprite`. The gulp task will 
create the png fallback icons and generate the scss partial.

Please do not edit this partial directly.

Sprites are also generated when `gulp build` or `gulp css:build` is run.

### Utility/helper classes with Atomic CSS

Atomic CSS (or acss) offers a range of predictable and terse class names for generating helper classes.

This is handy when you want to, for example, make margin tweaks, simply do:

```
<h1 class="Mt(30)">I want to give more margin for this heading</h1>
```

This adds a `margin-top` of 30px (without touching any css).

#### Gulp tasks

Run `gulp acss`, Atomizer will look through all the `.ss` templates for Atomic classes and then generate the styles 
in the `_utilities.atoms.scss` partial.

`gulp css:watch` also watches for changes in the `.ss` templates and updates the css.

Refer to [Atomic CSS's reference page](http://acss.io/reference) for a quick way to find the correct class name.

#### Configurations

Edit `gulp/config/acssrc.js` to configure acss, see [Atomizer's API section](https://github.com/acss-io/atomizer#api)
for config options.

## JavaScript

We use [Browserify](http://browserify.org) to bundle dependencies. Start your javascript magic in `javascript/main.js`.

The `babelify` plugin is used to allow ES2015.

### Third-party assets

To support for legacy IE, [HTML5 Shiv](https://github.com/aFarkas/html5shiv) and 
[Respond.js](https://github.com/scottjehl/Respond) are used to support HTML5 markup and media queries.

These scripts are loaded by [IE conditional comments](http://www.quirksmode.org/css/condcom.html) in `Head.js`, and not 
part of gulp's js task.

## Deployment

Run `gulp build` to build the minified css and scripts.

Please note I've intentionally not gitignored the build files (namely `main.css`, `main.js` and `main.min.js`) because 
not all environments are configured to build the files during deployment.

As a workaround, when collaborating with your team, don't commit the build files (which are meaningless for peer review)
and only commit and push them for deployment purposes.

If you can automate this process during your deployment process, then great, feel free to add the build files to 
`.gitignore`. 

## Legacy IE support

We use [html's conditional classes](http://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)
to style legacy IEs. Simply nest your IE styles under `.ie` to target IE8.

jQuery version `^1.12.4` is used for legacy IE support.

If you don't need to support legacy IE simply:
- Remove the IE conditionals from `Head.ss`
- Delete the scripts in the `thirdparty` folder
- Remove the `thirdparty` task from `gulp/tsks/js.js`

## Head.ss and Tail.ss

You'll notice the use of `Head.ss` and `Tail.ss` Include templates. These templates can be helpful when you need finer 
control or flexibility over the load order of certain scripts, that SilverStripe's Requirements class could not offer.

Common examples of these scripts are tracking, web fonts, or any other custom scripts you may need.

These 2 Include templates are also handy to keep the `Page.ss` template cleaner.

## Troubleshooting

Common problems you may encounter.

### IE8 and 9 CSS limitations

A very common problem is IE8 has a limit of 4095 selectors. If this is causing your css to fail on legacy IEs, you can 
try copying and splitting `main.scss` into smaller chunks, e.g. `ie.base.scss` and `ie.components.scss`, where 
`ie.base.scss` `@import`s generic, elements and objects, and the latter imports components and trumps. Please keep in
mind settings and tools must be `@import`ed in both scss files.

You can use the following script to help you calculate the number of css selectors:

```javascript
function countCSSRules() {
    var results = '',
        log = '';
    if (!document.styleSheets) {
        return;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
        countSheet(document.styleSheets[i]);
    }
    function countSheet(sheet) {
        var count = 0;
        if (sheet && sheet.cssRules) {
            for (var j = 0, l = sheet.cssRules.length; j < l; j++) {
                if (!sheet.cssRules[j].selectorText) {
                    if (sheet.cssRules[j].cssRules) {
                        for (var m = 0, n = sheet.cssRules[j].cssRules.length; m < n; m++) {
                            if(sheet.cssRules[j].cssRules[m].selectorText) {
                                count += sheet.cssRules[j].cssRules[m].selectorText.split(',').length;
                            }
                        }
                    }
                }
                else {
                    count += sheet.cssRules[j].selectorText.split(',').length;
                }
            }
 
            log += '\nFile: ' + (sheet.href ? sheet.href : 'inline <style> tag');
            log += '\nRules: ' + sheet.cssRules.length;
            log += '\nSelectors: ' + count;
            log += '\n--------------------------';
            if (count >= 4096) {
                results += '\n********************************\nWARNING:\n There are ' + count + ' CSS rules in the stylesheet ' + sheet.href + ' - IE will ignore the last ' + (count - 4096) + ' rules!\n';
            }
        }
    }
    console.log(log);
    console.log(results);
};
countCSSRules();
```

Read more about [IE's stylesheet limits](https://blogs.msdn.microsoft.com/ieinternals/2011/05/14/stylesheet-limits-in-internet-explorer/).
