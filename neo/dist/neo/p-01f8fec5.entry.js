import{r as n,h as t,H as i}from"./p-c93b3909.js";const l=class{constructor(t){n(this,t)}getText(){return(this.first||"")+((n=this.middle)?` ${n}`:"")+((t=this.last)?` ${t}`:"");var n,t}render(){return[t("ion-card",null,t("ion-card-header",null,t("ion-card-subtitle",null,"Card Subtitle"),t("ion-card-title",null,"Card Title")),",",t("ion-card-content",null,this.getText()))]}};l.style="";const o=class{constructor(t){n(this,t)}componentDidLoad(){console.log(this)}render(){return t(i,null,t("ion-card",{class:"pointer ion-hide-lg-down"},t("ion-card-header",null,t("ion-card-subtitle",null,this.data.title))),t("ion-item",{lines:"inset",detail:!0,class:"ion-hide-lg-up"},t("ion-label",null,this.data.title)),t("slot",null))}};o.style=":host{display:block}@media (max-width: 992px){.ion-hide-lg-down{display:none !important}}@media (min-width: 992px){.ion-hide-lg-up{display:none !important}}";const e=class{constructor(t){n(this,t)}render(){return this.data?t(i,null,t("ion-card",null,t("ion-card-content",null,t("ion-list",null,this.data.categories.map(n=>t("neo-tournament-category-list-item-view",{data:n}))))),t("slot",null)):t("h1",null,"Test")}};e.style=":host{display:block}";export{l as my_component,o as neo_tournament_category_list_item_view,e as neo_tournament_category_list_view}