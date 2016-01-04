# Denistsoi.github.io

A Visual Repository of my work history, development talks and work-related projects

### Explanation

Was previously using jekyll, but switching between js/ruby abit annoying, especially serving scss files. By using quesadilla, I can have my automated build environment, and just focus on markup and style changes. (rather than waiting for the build process to finish).

Also - by structuring the respository in the current, allows me to utilise github-pages and not `require` jekyll within my development process.

I can also figure out how to move _posts into respective /project/work/talk folder, within my dev process - idk - still thinking about this right now.

### Directory structure

```
denistsoi.github.io
  /_drafts        // temporary place to store markdown for draft posts
  /_scss          // where scss files are stored
  /css            // where css is saved when running npm run push
  /img
  /node_modules
  /projects       // posts related to projects
  /talks          // posts related to talks
  /work-history   // posts related to work-history
  .gitignore
  index.html    
  index.js        // Entry point for running static express server and writing css files 
  package.json
  README.md
```

### Getting started

```
git clone git@github.com:denistsoi/denistsoi.github.io
cd denistsoi.github.io
npm install
npm start
```


### Changing Styles

This project uses `.scss` or `sass` as a means to preprocess CSS files, with the aid of [seedalpha/quesadilla](http://www.github.com/seedalpha/quesadilla).


### Publishing style changes

```
npm run push
```


### Author
Denis Tsoi

### License
MIT