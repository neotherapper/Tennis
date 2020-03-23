import { Component, Host, h, Prop } from '@stencil/core';
export class NeoTournamentCategoryListItemView {
    render() {
        return (h(Host, null,
            h("ion-card", { class: "pointer ion-hide-lg-down" },
                h("ion-card-header", null,
                    h("ion-card-subtitle", null, this.data.title))),
            h("ion-item", { lines: "inset", detail: true, class: "ion-hide-lg-up" },
                h("ion-label", null, this.data.title)),
            h("slot", null)));
    }
    static get is() { return "neo-tournament-category-list-item-view"; }
    static get originalStyleUrls() { return {
        "$": ["neo-tournament-category-list-item-view.css"]
    }; }
    static get styleUrls() { return {
        "$": ["neo-tournament-category-list-item-view.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "TournamentCategoryListItemI",
                "resolved": "TournamentCategoryListItemI",
                "references": {
                    "TournamentCategoryListItemI": {
                        "location": "import",
                        "path": "./tournament-category-list-item.model"
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
