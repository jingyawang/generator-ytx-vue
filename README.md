# generator-ytx-vue [![Build Status](https://secure.travis-ci.org/jingyawang/generator-ytx-vue.png?branch=master)](https://travis-ci.org/jingyawang/generator-ytx-vue)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-ytx-vue from npm, run:

```bash
npm install -g generator-ytx-vue
```

Finally, initiate the generator:

```bash
yo ytx-vue
```

For develop mode, run:
```bash
gulp
```

For Release mode, run:
```bash
gulp --release
```


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


### Change Logs

#### version 0.3.0 
- add auto css sprites support
- add 百度统计 and  自适应调整 injection, in order to make the html file more clean
- use the powerful ***browser-sync*** to replace ***gulp-livereload*** and ***connect*** midmare
- remove the  ***wechat-api*** package, which is now not supported by the current WECHAT JS SDK
- replace ***gulp-csso*** with ***gulp-minify-css*** , since the former can not be customised
- turn zepto package from npm to bower, so that it will be loaded more gracefully



## License

MIT
