import { Component, Host, h, Prop } from '@stencil/core';
export class NeoTournamentCategoryListView {
    render() {
        if (this.data) {
            return (h(Host, null,
                h("ion-card", null,
                    h("ion-card-content", null,
                        h("ion-list", null, this.data.categories.map(categoryData => (h("neo-tournament-category-list-item-view", { data: categoryData })))))),
                h("slot", null)));
        }
        else {
            return (h("h1", null, "Test"));
        }
    }
    static get is() { return "neo-tournament-category-list-view"; }
    static get originalStyleUrls() { return {
        "$": ["neo-tournament-category-list-view.css"]
    }; }
    static get styleUrls() { return {
        "$": ["neo-tournament-category-list-view.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "TournamentCategoryList",
                "resolved": "TournamentCategoryList",
                "references": {
                    "TournamentCategoryList": {
                        "location": "import",
                        "path": "./tournament-category-list.model"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
