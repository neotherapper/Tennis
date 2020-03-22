'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c45331fd.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = "";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return [
            index.h("ion-card", null, index.h("ion-card-header", null, index.h("ion-card-subtitle", null, "Card Subtitle"), index.h("ion-card-title", null, "Card Title")), ",", index.h("ion-card-content", null, this.getText()))
        ];
        // <div>Hello, World! I'm {this.getText()}</div>;
    }
};
MyComponent.style = myComponentCss;

const neoTournamentCategoryListItemViewCss = ":host{display:block}@media (max-width: 992px){.ion-hide-lg-down{display:none !important}}@media (min-width: 992px){.ion-hide-lg-up{display:none !important}}";

const NeoTournamentCategoryListItemView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        console.log(this);
    }
    render() {
        return (index.h(index.Host, null, index.h("ion-card", { class: "pointer ion-hide-lg-down" }, index.h("ion-card-header", null, index.h("ion-card-subtitle", null, this.data.title))), index.h("ion-item", { lines: "inset", detail: true, class: "ion-hide-lg-up" }, index.h("ion-label", null, this.data.title)), index.h("slot", null)));
    }
};
NeoTournamentCategoryListItemView.style = neoTournamentCategoryListItemViewCss;

const neoTournamentCategoryListViewCss = ":host{display:block}";

const NeoTournamentCategoryListView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        if (this.data) {
            return (index.h(index.Host, null, index.h("ion-card", null, index.h("ion-card-content", null, index.h("ion-list", null, this.data.categories.map(categoryData => (index.h("neo-tournament-category-list-item-view", { data: categoryData })))))), index.h("slot", null)));
        }
        else {
            return (index.h("h1", null, "Test"));
        }
    }
};
NeoTournamentCategoryListView.style = neoTournamentCategoryListViewCss;

exports.my_component = MyComponent;
exports.neo_tournament_category_list_item_view = NeoTournamentCategoryListItemView;
exports.neo_tournament_category_list_view = NeoTournamentCategoryListView;
