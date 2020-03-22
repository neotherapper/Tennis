'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c45331fd.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component_3.cjs",[[4,"neo-tournament-category-list-view",{"data":[16]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"neo-tournament-category-list-item-view",{"data":[16]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
