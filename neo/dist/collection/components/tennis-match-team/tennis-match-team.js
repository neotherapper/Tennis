import { Component, Host, h, Prop } from '@stencil/core';
export class TennisMatchTeam {
    constructor() {
        this.numberOfSets = 4;
    }
    render() {
        return (h(Host, { class: "table" },
            h("tr", { class: this.team.winner ? "winner" : "" },
                h("th", null,
                    h("div", { class: "pl-container" },
                        h("div", { class: "avatar" },
                            h("img", { src: this.team.players[0].imageUrl, title: this.team.players[0].shortName, alt: "" })),
                        h("img", { src: "https://www.rolandgarros.com/img/flags-svg/" +
                                this.team.players[0].country +
                                ".svg", alt: "", class: "flag" }),
                        h("p", { class: "player troncate-long-name" },
                            this.team.players[0].firstName.charAt(0) +
                                "." +
                                this.team.players[0].lastName.toLowerCase(),
                            h("span", { class: "num" }, this.team.seed
                                ? `(${this.team.seed})`
                                : this.team.entryStatus
                                    ? `(${this.team.entryStatus})`
                                    : "")))),
                [...Array(this.numberOfSets)].map((_e, i) => (h("td", { class: this.team.sets[i]
                        ? this.team.sets[i].winner
                            ? "set-winner"
                            : ""
                        : "" }, this.team.sets[i] ? this.team.sets[i].score : "-"))))));
    }
    static get is() { return "tennis-match-team"; }
    static get originalStyleUrls() { return {
        "$": ["tennis-match-team.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tennis-match-team.css"]
    }; }
    static get properties() { return {
        "team": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "TennisTeamI",
                "resolved": "TennisTeamI",
                "references": {
                    "TennisTeamI": {
                        "location": "import",
                        "path": "./tennis-match-team.model"
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
