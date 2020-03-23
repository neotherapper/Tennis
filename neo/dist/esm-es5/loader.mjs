import { a as patchEsm, b as bootstrapLazy } from './index-932aec7a.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["neo-tournament-category-list-item-view_5",[[1,"tennis-matches"],[4,"neo-tournament-category-list-view",{"data":[16]}],[0,"tennis-match",{"match":[16]}],[4,"neo-tournament-category-list-item-view",{"data":[16]}],[0,"tennis-match-team",{"team":[16]}]]]], options);
});

export { defineCustomElements };
