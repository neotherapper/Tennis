import { Component, Host, h, Prop } from '@stencil/core';
export class TennisMatch {
    render() {
        return (h(Host, null,
            h("a", { href: "http://" },
                h("div", { class: "match-link" },
                    h("div", { class: "match-container" },
                        h("table", { class: "livescore over" },
                            h("tbody", null,
                                h("tennis-match-team", { team: this.match.teamA }),
                                h("tennis-match-team", { team: this.match.teamB }))))))));
    }
    static get is() { return "tennis-match"; }
    static get originalStyleUrls() { return {
        "$": ["tennis-match.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tennis-match.css"]
    }; }
    static get properties() { return {
        "match": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "TennisMatchI",
                "resolved": "TennisMatchI",
                "references": {
                    "TennisMatchI": {
                        "location": "import",
                        "path": "./tennis-match.model"
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
