import { a as patchEsm, b as bootstrapLazy } from './index-721d8e0e.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["my-component_3",[[4,"neo-tournament-category-list-view",{"data":[16]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[4,"neo-tournament-category-list-item-view",{"data":[16]}]]]], options);
});

export { defineCustomElements };
