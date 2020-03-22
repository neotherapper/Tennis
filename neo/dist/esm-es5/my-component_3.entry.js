import { r as registerInstance, h, H as Host } from './index-721d8e0e.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = "";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return [
            h("ion-card", null, h("ion-card-header", null, h("ion-card-subtitle", null, "Card Subtitle"), h("ion-card-title", null, "Card Title")), ",", h("ion-card-content", null, this.getText()))
        ];
        // <div>Hello, World! I'm {this.getText()}</div>;
    }
};
MyComponent.style = myComponentCss;

const neoTournamentCategoryListItemViewCss = ":host{display:block}@media (max-width: 992px){.ion-hide-lg-down{display:none !important}}@media (min-width: 992px){.ion-hide-lg-up{display:none !important}}";

const NeoTournamentCategoryListItemView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        console.log(this);
    }
    render() {
        return (h(Host, null, h("ion-card", { class: "pointer ion-hide-lg-down" }, h("ion-card-header", null, h("ion-card-subtitle", null, this.data.title))), h("ion-item", { lines: "inset", detail: true, class: "ion-hide-lg-up" }, h("ion-label", null, this.data.title)), h("slot", null)));
    }
};
NeoTournamentCategoryListItemView.style = neoTournamentCategoryListItemViewCss;

const neoTournamentCategoryListViewCss = ":host{display:block}";

const NeoTournamentCategoryListView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (this.data) {
            return (h(Host, null, h("ion-card", null, h("ion-card-content", null, h("ion-list", null, this.data.categories.map(categoryData => (h("neo-tournament-category-list-item-view", { data: categoryData })))))), h("slot", null)));
        }
        else {
            return (h("h1", null, "Test"));
        }
    }
};
NeoTournamentCategoryListView.style = neoTournamentCategoryListViewCss;

export { MyComponent as my_component, NeoTournamentCategoryListItemView as neo_tournament_category_list_item_view, NeoTournamentCategoryListView as neo_tournament_category_list_view };
