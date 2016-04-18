# Actor Battle

This repo is built on a similar logic to the [Battle Zone repo](https://github.com/Stuwert/battlezone). It implements angular to handle state and uses Dragula for the click/drag functionality.  


## Technology

- Angular
- Angular-Dragula
- Browserify/Watchify
- Gulp Sass


## Implementation

In order to install the application, download the repo and install

```
npm install
```

The build runner is less efficient, unfortunately, and requires two open terminals.  In order to live update the SCSS, run

```
gulp default
```

this will automatically open a new browser and will inject SCSS changes into the website without refreshing.

The code uses watchify to pack and use require() statements to maintain clean/modular code.  In order to make edits to the code run...

```
watchify js/main.js -o js/app.js
```

The app.js file gets rather large.  I would recommend not opening it unless you have to.
