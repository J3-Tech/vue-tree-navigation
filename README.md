# vue-tree-navigation [![Version](https://img.shields.io/npm/v/vue-tree-navigation.svg)](https://www.npmjs.com/package/vue-tree-navigation) [![Coverage](https://coveralls.io/repos/github/MisRob/vue-tree-navigation/badge.svg)](https://coveralls.io/github/MisRob/vue-tree-navigation) [![License](https://img.shields.io/npm/l/vue-tree-navigation.svg)](https://www.npmjs.com/package/vue-tree-navigation)

> Vue.js 2 tree navigation with vue-router support

For more information see [documentation/demo](https://vue-tree-navigation.misrob.cz)

## Features

- unlimited number of levels
- optional [vue-router](https://router.vuejs.org/en/) support
- a possibility to define a default open level
- auto-open a level when a corresponding URL visited
- focused on core functionality, only necessary styles included
- elements are provided with meaningful classes to make customizations comfortable (for example `NavigationItem--active`, `NavigationLevel--level-1`, `NavigationLevel--closed`)
- external URLs support

## Example

```html
<template>
  <vue-tree-navigation :items="items" :defaultOpenLevel="1" />
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { name: 'Products', children: [                       // category label
            { name: 'Shoes', route: 'shoes' }                   // /shoes
          ]},
          { name: 'About', route: 'about', children: [          // /about
            { name: 'Contact', route: 'contact', children: [    // /about/contact       
              { name: 'E-mail', element: 'email' },             // /about/contact#email
              { name: 'Phone', element: 'phone' }               // /about/contact#phone
            ]},
          ]},
          { name: 'Github', external: 'https://github.com' },   // https://github.com
        ],
      };
    },
  };
</script>
```

## Demo

You can visit this [codepen](https://codepen.io/MisRob/pen/ZxNGrd) for a simple demo. Please see [documentation/demo](https://vue-tree-navigation.misrob.cz) for more examples including vue-router and styling.

## Installation

### Include with a script tag

```html
<script src="https://unpkg.com/vue-tree-navigation@3.0.0/dist/vue-tree-navigation.js"></script>

<script>
  Vue.use(VueTreeNavigation)
</script>
```

### NPM

```console
$ npm install vue-tree-navigation
```

*main.js*

```javascript
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
```

## Requirements

- [Vue.js](https://vuejs.org/)

## Developers

```console
$ yarn dev

$ yarn build

$ yarn prettier
$ yarn lint

$ yarn unit
$ yarn unit --verbose
```
